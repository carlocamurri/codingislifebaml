const googleTrends = require("google-trends-api");
const router = require("express").Router();

START_DATE = new Date(2016, 1, 1);

INDEXABLE_TYPES = [
    "currency",
    "company",
    "commodities"
];

GENERIC_TYPES = [
    "topic"
];

var getSearchOptions = (searchKeyword) => {
    // Possibly add granular time search for topics popular for that day 
    return {
        keyword: searchKeyword,
        startTime: START_DATE,
    };
};

var getTitleAndTypes = function(obj) {
    titleAndTypes = {
        titleAndTypes: []
    };
    console.log(obj.default);
    obj.default.rankedList.forEach((list) => {
        list.rankedKeyword.forEach((keyword) => {
            titleAndTypes.titleAndTypes.push({
                title: keyword.topic.title,
                type: keyword.topic.type
            });
        });
    });
    return titleAndTypes;
};

router.post("/titles_and_topics", function(req, res) {
    if (typeof req.body == 'undefined') {
        throw Error("new_node Request is null");
    } else {
        googleTrends.relatedTopics(getSearchOptions(req.body.keyword)).then((values) => {
            values = JSON.parse(values);
            titleAndTypes = getTitleAndTypes(values);
            res.send(titleAndTypes);
        }).catch((err) => {
            console.log(err);
        });
    }
});

module.exports = router;