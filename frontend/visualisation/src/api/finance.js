var axios = require("axios");

export function getNews(searchSymbol) {
    console.log("Called");
    var quotes = {};
    axios.post("http://localhost:8080/finance/get_quotes", {
        search_symbol: searchSymbol
    }).then(function(response) {
        console.log("Data obtained");
        quotes = response.data;
        console.log(quotes);
    }).catch(function(error) {
        console.log("error");
        console.log(error);
    });
    return quotes;
};

