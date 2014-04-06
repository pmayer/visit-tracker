parser = Npm.require('ua-parser');
geoip = Npm.require('geoip-lite');

Meteor.methods({

  trackVisit: function(tracking) {
    var h, r, visit, ip, geo;

    // Get the headers from the method request
    h = headers.get(this);

    // Parse the user agent from the headers
    r = parser.parse(h['user-agent']);

    // Get the IP address from the headers
    ip = headers.methodClientIP(this);

    // Geo IP look up for the IP Address
    geo = geoip.lookup(ip);

    // Build the visit record object
    visit = {
      referer: h.referer,
      ipAddress: ip,
      userAgent:  {
        raw: r.string,
        browser: r.userAgent,
        device: r.device,
        os: r.os
      },
      tracking: tracking,
      geo: geo
    };

    // Insert the visit record
    Tracker.visits.insert(visit);

    return visit
  }

});