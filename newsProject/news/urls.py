from django.urls import path
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    path('news/', views.check_news),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))), 
    path('feeling/', views.check_feeling),
]