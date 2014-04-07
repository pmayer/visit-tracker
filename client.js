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

  if (!amplify.store('visit')) {

    var qs, tracking;

    // Parse query string
    qs = querystring();

    // If the url has an SID add the tracking variables
    if (qs.sid) {
      tracking = {
        sid: qs.sid,
        cmp: qs.cmp  ? qs.cmp : null,
        s1: qs.s1 ? qs.s1 : null,
        s2: qs.s2 ? qs.s2 : null,
        s3: qs.s3 ? qs.s3 : null,
        s4: qs.s4 ? qs.s4 : null,
        s5: qs.s5 ? qs.s5 : null
      };
    } else {
      tracking = {
        sid: Tracker.options.defaultSource
      };
    }
    Meteor.call('logVisit', tracking, function(err, res) {
      //console.log(res);
      amplify.store('visit', res);
    });

  } else {

    Meteor.call('logReturnVisit', amplify.store('initialVisit')._id, function(err, res) {
      //console.log(res);
    });

  }
});
