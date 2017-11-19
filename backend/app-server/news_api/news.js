var AylienNewsApi = require('aylien-news-api');
var router = require("express").Router();

var apiInstance = new AylienNewsApi.DefaultApi();

// Configure API key authorization: app_id
var app_id = apiInstance.apiClient.authentications['app_id'];
app_id.apiKey = "84ce6f41";

// Configure API key authorization: app_key
var app_key = apiInstance.apiClient.authentications['app_key'];
app_key.apiKey = "340b704b6052fde117fd052e97252850";

var opts = function(topic){
  return{
  'title': topic,
  'sortBy': 'social_shares_count.facebook',
  'language': ['en'],
  'notLanguage': ['es', 'it'],
  'publishedAtStart': 'NOW-7DAYS',
  'publishedAtEnd': 'NOW', 
  };
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ');
    console.log('========================================');
    //console.log(JSON.stringify(data.stories[0], null, 4));
    var articles = {
      result: [],
      sentiment: 0
    };
    var noStories = data.stories.length;
    for (var i = 0; i < noStories; i++){
      articles.result.push({title: data.stories[i].title, link: data.stories[i].links.permalink});
      articles.sentiment += parseFloat(data.stories[i].sentiment.title.score) + parseFloat(data.stories[i].sentiment.body.score);
      console.log(data.stories[i].title + " / " + data.stories[i].links.permalink + "/" + data.stories[i].sentiment.title.score + "/" + data.stories[i].sentiment.body.score) ;
    }
    console.log("//**********************************************************************//*");
    articles.sentiment /= (noStories * 2);
    console.log(JSON.stringify(articles, null, 4));
  }
};

router.post("/get_news", function(req, res) {
    if (typeof req.body == 'undefined') {
        throw Error("new_node Request is null");
    } else {
        apiInstance.listStories(opts(req.body.topic), function(error, data, response) {
            if (error) {
              console.error(error);
            } else {
              console.log('API called successfully. Returned data: ');
              console.log('========================================');
              //console.log(JSON.stringify(data.stories[0], null, 4));
              var articles = {
                result: [],
                sentiment: 0
              };
              var noStories = data.stories.length;
              for (var i = 0; i < noStories; i++){
                articles.result.push({title: data.stories[i].title, link: data.stories[i].links.permalink});
                articles.sentiment += parseFloat(data.stories[i].sentiment.title.score) + parseFloat(data.stories[i].sentiment.body.score);
                console.log(data.stories[i].title + " / " + data.stories[i].links.permalink + "/" + data.stories[i].sentiment.title.score + "/" + data.stories[i].sentiment.body.score) ;
              }
              console.log("//**********************************************************************//*");
              articles.sentiment /= (noStories * 2);
              console.log(JSON.stringify(articles, null, 4));
              res.send(articles);
            }
        });
    }
});

module.exports = router;