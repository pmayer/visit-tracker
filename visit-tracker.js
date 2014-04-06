// Tracker API - this will eventually be configurable
Tracker = {
  collectionName: 'visits',
  visits: new Meteor.Collection('visits'),
  defaultSource: 'ORG'
}

// Insert the created datetime into the doc
Tracker.visits.before.insert(function(userId, doc) {
  return doc.createdAt = new Date();
});