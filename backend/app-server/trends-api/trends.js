const googleTrends = require("google-trends-api");
const router = require("express").Router();

var START_DATE = new Date(2016, 1, 1);

var INDEXABLE_TYPES = [
    "Currency",
    "company",
    "Company",
    "Commodities"
];

var GENERIC_TYPES = [
    "Topic"
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
        var total_list = INDEXABLE_TYPES.concat(GENERIC_TYPES);
        console.log(total_list);
        var filteredList = list.rankedKeyword.filter((element) => {
            console.log(element);
            var isSubstring = true;
            var newList = total_list.forEach((item) => {
                if (element.topic.type.indexOf(item) !== -1) {
                    
                } else {
                    console.log(element.topic.type, item);
                    isSubstring = false;
                }
            });
            return isSubstring;
        });
        list.rankedKeyword.forEach((keyword) => {
            titleAndTypes.titleAndTypes.push({
                label: keyword.topic.title,
                searchable: true 
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