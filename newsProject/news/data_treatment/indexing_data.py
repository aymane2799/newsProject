import elasticsearch


def add_data_to_elastic(title, body, fake):
    INDEX_NAME = 'newslist'

    ELASTIC_HOST = 'http://localhost:9200'

    client = elasticsearch.Elasticsearch(hosts=[ELASTIC_HOST])

    data = {
        'title': title,
        'body' : body,
        'fake' : fake,
    }

    client.index(index= INDEX_NAME, body= data)