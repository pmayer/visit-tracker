// Tracker API - this will eventually be configurable
Tracker = {
  options: {
    collectionName: 'visits',
    defaultSource: 'ORG'
  },
  visits: new Meteor.Collection('visits')
}

// Insert the created datetime into the doc
Tracker.visits.before.insert(function(userId, doc) {
  return doc.createdAt = new Date();
});