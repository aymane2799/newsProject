from rest_framework import viewsets
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from rest_framework.utils import json
from .models import News
from .serializers import NewsSerializer 
from django.http import HttpResponse
from .data_treatment.training import TrainingModels
from .data_treatment.analysentiment import analysentiment


def predict(news):
    pass

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer


@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser])
def check_news(request):
    try:
        if request.method == 'POST':
            news_data = json.loads(request.body)
            article= news_data['content']

        result = TrainingModels.predict('article')
        
        if result == 1:
            return HttpResponse("fake")

        if result == 0:
            return HttpResponse("real")

    except Exception as ex:
        print(ex)
        return HttpResponse('nothing')


@api_view(['GET', 'POST', 'DELETE'])
@parser_classes([JSONParser])
def check_sentiment(request):
    try:
        if request.method == 'POST':
            news_data = json.loads(request.body)
            article= news_data['content']

        result = analysentiment(article)
        print('------------- Sentiment  ---> '+str(result))
        
        if result < 0:
            return HttpResponse("-")

        if result >= 0:
            return HttpResponse("+")

    except Exception as ex:
        print(ex)
        return HttpResponse('nothing')