// Tracker API - this will eventually be configurable
Tracker = {
  collectionName: 'visits',
  visits: new Meteor.Collection(this.collectionName),
  defaultSource: 'ORG'
}

// Insert the created datetime into the doc
Tracker.visits.before.insert(function(userId, doc) {
  console.log(doc);
  return doc.createdAt = new Date();
});