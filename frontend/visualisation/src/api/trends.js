var axios = require("axios");

export function getTitlesAndTopics(searchKeyword, storeHere) {
    axios.post("http://localhost:8080/trends/titles_and_topics", {
        keyword: searchKeyword
    }).then(function(response) {
        console.log("Called");
        console.log("Data obtained");
        console.log(response.data);
    }).catch(function(error) {
        console.log("error");
        console.log(error);
    });
};

