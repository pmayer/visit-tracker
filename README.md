meteor-visit-tracker
===================

Meteor Visit Tracker - Log web app visits for homebrew analytics and conversion attribution

Track:
  * IP Address
  * Referer
  * User Agent Raw
  * User Agent Parsed
    * Browser
    * OS
    * Device
  * Geo IP
    * City
    * Region (State)
    * Geo Coords
    * Country
  * Traffic Source ( Requires additional configuration )
    * SID (Source ID) : Could be a unique ID that points to TrafficSources collection record for Google Display
    * SubID (Source Sub ID) : A subset up the source like a certain campaign
    * S1 - S5 (Custom Variables) : Could be used to identify a certain ad or other info to relale a visit back to something
    
Example Link if you want to track traffic source:
`http://yoursite.com/?sid=Lim3FKnpWLHbFxXGB&subid=newyorkny&s1=ad4342`

Node Packages Used:
* (ua-parser)[https://github.com/tobie/ua-parser]
* (node-geoip)[https://github.com/bluesmoon/node-geoip]
