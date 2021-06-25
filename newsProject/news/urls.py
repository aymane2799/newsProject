from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('/', views.check_news),
    # url pour l'interface graphique de GraphQL
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))), 
    path('feeling', views.check_feeling),
]