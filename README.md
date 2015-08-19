Visit Tracker
===================

Log visits for internal analytics and conversion attribution. Visualization is completely up to you. For a hosted solution that includes visualization, see [tail:core](https://atmospherejs.com/tail/core).

![demo](http://cl.ly/image/2e24321B2O2U/Screenshot%202014-04-06%2015.41.31.png)

### Installation
```bash
meteor add bigdata:visit-tracker
```
*This takes awhile to download the geoip-lite database*

___

### Usage Notes
* Currently, it's storing visits in a collection called visits. It could be modified to use with ElasticSearch or other DB's. To access the collection inside of your app use `VisitTracker.visits.find()`.
* Automatic Spider / Bot Filtering.
* When logging events such as an order, sign up, or whatever you consider a conversion also store the visit ID for later data mining / segmenting. To access the current visit on the client use `Session.get('currentVisit')`.
* Currently, it is setup with the first click attribution philisophy in mind where it logs the visitors initial visit and then stores the datetimes of return visits in the initial visit's returnVisits array .. This could be made configurable going forward if someone needs last click attribution, an expiration date on first click, or wants to record all visits.
* Great for use with internal split testing or if you want to segment features to certain cohorts based on location, browser, device, or traffice source
* Can be configured to attribute visits without an SID to a certain source such as Organic

___

### Todo
* If the current visitor is logged in also record the user id or update the visit when they login / signup

___

### Trackable Datapoints
*Create an issue if you have ideas for more*
* IP Address
* Referer
* User Agent
  * Raw
  * Browser
  * OS
  * Device
* Geo IP
  * City
  * Region (State)
  * Geo Coords
  * Country
* Traffic Source (for marketing)
  * SID (Source ID) : A unique ID that identifies the traffic source (can be the id of a record in a TrafficSource collection or for example we use slugs: GOOGD = Google Display
  * CMP : Marketing Campaign
  * S1 - S5 (Custom Variables) : Could be used to identify a certain ad or other info to relate a visit back to its source
* Return Visits - An array of datetimes of return visits
* Accept Language

___

### Example Tracking Link
`http://yoursite.com/?sid=googd&cmp=2341234&s1=ad4342&s2=dopetracker`


### Example Visit Record
```
{
createdAt: Sat Apr 05 2014 03:42:12 GMT-0700 (PDT),
referer: 'https://www.google.com/search?q=visit+tracker&oq=visit+tracker&aqs=chrome..69i57j69i61l3j0l2.3647j0j8&sourceid=chrome&espv=210&es_sm=119&ie=UTF-8',
ipAddress: '76.167.148.250',
userAgent: {
 raw: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36',
 os: {
  family: 'Mac OS X',
  major: '10',
  minor: '9',
  patch: '0',
  patchMinor: null
 },
 device: {
  family: 'Other'
 },
 browser: {
  family: 'Chrome',
  major: 33,
  minor: 0,
  patch: 1750
 }
},
trafficSource: {
 sid: 'googd'
 cmp: '2341234'
 s1: 'ad4342'
 s2: 'dopetracker'
},
geo: {
 range: [ 1286050560, 1286051327 ],
 country: 'US',
 region: 'CA',
 city: 'La Jolla',
 ll: [ 32.8667, -117.2481 ]
},
acceptLanguage: 'en-US,en;q=0.8',
returnVisits: [
  Sat Apr 05 2014 04:22:05 GMT-0700 (PDT),
  Sat Apr 05 2014 05:45:00 GMT-0700 (PDT)
]
}

```
___

### Node Packages Used
* [ua-parser](https://github.com/tobie/ua-parser)
* [node-geoip](https://github.com/bluesmoon/node-geoip)
