Package.describe({
  summary: "Log visits for internal analytics and conversion attribution (GeoIP, UserAgent, Traffic Source)"
});

Npm.depends({
  "ua-parser": "0.3.3",
  "geoip-lite": "1.1.3"
});

Package.on_use(function (api, where) {
  api.use(['amplify'], 'client');
  api.use(['headers'], 'server');
  api.use(['collection-hooks'], ["client", "server"]);

  api.export('Tracker');

  api.add_files('visit-tracker.js', ['server', 'client']);
  api.add_files('server.js', ['server']);
  api.add_files('client.js', ['client']);
});