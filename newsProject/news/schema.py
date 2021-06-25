import graphene
from graphene_django import DjangoObjectType, DjangoListField
from .models import News

class NewsType(DjangoObjectType):
    class Meta :
        model = News
        # fields = "__all__"


class Query(graphene.ObjectType):
    all_news = graphene.List(NewsType)
    news = graphene.Field(NewsType, news_id=graphene.Int())

    def resolve_all_news(self, info, **kwargs):
        return News.objects.all()

    def resolve_news(self, info, news_id):
        return News.objects.get(id=news_id)


# La class NewsInput définit les entrés similaires à notre modèle News
class NewsInput(graphene.InputObjectType):
    id = graphene.ID()
    title = graphene.String()
    body = graphene.String()
    fake = graphene.Boolean()


# La classe CreateNews sera utilisée pour créer et enregistrer une nouvelle news entrée dans notre BDD
# Chaque mutation aura ses propres agruments news_data issu de la classe interne Arguments
class CreateNews(graphene.Mutation):
    class Arguments:
        news_data = NewsInput(required = True)
    
    news = graphene.Field(NewsType)

    # Dans cette fonction on créé une nouvelle instance de News et on la sauvegarde en utilisant la fonction save()
    @staticmethod
    def mutate(root, info, news_data = None):
        news_instance = News(
            title = news_data.title,
            body = news_data.body,
            fake = news_data.fake
        )

        news_instance.save()
        return CreateNews(news = news_instance)


# La classe UpdateNews sera utilisée pour mettre à jour des enregistrements existants dans la BDD
class UpdateNews(graphene.Mutation):
    class Arguments:
        news_data = NewsInput(required = True)

    news = graphene.Field(NewsType)

    @staticmethod
    def mutate(root, info, news_data):
        news_instance = News.objects.get(id = news_data.id)

        if news_instance:
            news_instance.title = news_data.title
            news_instance.body = news_data.body
            news_instance.fake = news_data.fake
            news_instance.save()

            return UpdateNews(news = news_instance)
        
        return UpdateNews(news = None)



class DeleteNews(graphene.Mutation):
    class Arguments:
        id = graphene.ID()
    
    news = graphene.Field(NewsType)

    @staticmethod
    def mutate(root, info, id):
        news_instace = News.objects.get(id = id)
        news_instace.delete()

        return None

class Mutation(graphene.ObjectType):
    create_news = CreateNews.Field()
    update_news = UpdateNews.Field()
    delete_news = DeleteNews.Field()


# schema est le schema que suit GraphQL pour notre modele
schema = graphene.Schema(query=Query, mutation=Mutation)