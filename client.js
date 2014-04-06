var querystring;

querystring = function() {
  var k, pair, qs, v, _i, _len, _ref, _ref1;
  qs = {};
  _ref = window.location.search.replace("?", "").split("&");
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    pair = _ref[_i];
    _ref1 = pair.split("="), k = _ref1[0], v = _ref1[1];
    qs[k] = v;
  }
  return qs;
};

Meteor.startup(function() {
  var qs, tracking;

  // Parse query string
  qs = querystring();

  // If the url has an SID add the tracking variables
  if (qs != null ? qs.sid : void 0) {
    tracking = {
      sid: qs.sid,
      cmp: (qs != null ? qs.cmp : void 0) ? qs.cmp : null,
      s1: (qs != null ? qs.s1 : void 0) ? qs.s1 : null,
      s2: (qs != null ? qs.s2 : void 0) ? qs.s2 : null,
      s3: (qs != null ? qs.s3 : void 0) ? qs.s3 : null,
      s4: (qs != null ? qs.s4 : void 0) ? qs.s4 : null,
      s5: (qs != null ? qs.s5 : void 0) ? qs.s5 : null
    };
  } else {
    tracking = {
      sid: Tracker.defaultSource
    };
  }
  return Meteor.call('trackVisit', tracking, function(err, res) {
    return console.log(res);
  });
});
