var config = require('./config');
var google = require('googleapis');
var urlshortener = google.urlshortener('v1');
var bigquery = google.bigquery('v2');
google.options({auth:config.API_KEY});

var params = { shortUrl: 'http://goo.gl/xKbRu3' };

// get the long url of a shortened url
urlshortener.url.get(params, function (err, response) {
    if (err) {
        console.log('Encountered error', err);
    } else {
        console.log('Long url is', response.longUrl);
    }
});

bigquery.datasets.list({projectId:'theta-window-126601'}, function(err, response){
    console.log(err, response);
})