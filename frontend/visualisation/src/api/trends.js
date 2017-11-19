var axios = require("axios");

export function getTitlesAndTopics(searchKeyword) {
    console.log("Called");
    var titlesAndTopics = {};
    axios.post("http://localhost:8080/trends/titles_and_topics", {
        keyword: searchKeyword
    }).then(function(response) {
        console.log("Data obtained");
        titlesAndTopics = response.data;
        console.log(titlesAndTopics);
    }).catch(function(error) {
        console.log("error");
        console.log(error);
    });
    return titlesAndTopics;
};

