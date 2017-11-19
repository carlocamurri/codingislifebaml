var axios = require("axios");

export function getNews(searchTopic) {
    console.log("Called");
    var news = {};
    axios.post("http://localhost:8080/news/get_news", {
        topic: searchTopic
    }).then(function(response) {
        console.log("Data obtained");
        news = response.data;
        console.log(news);
    }).catch(function(error) {
        console.log("error");
        console.log(error);
    });
    return news;
};

