/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/
//var moment = require('moment');
var locations = require('./locations.json')
var training = require('./training.json')
var training_full = require('./training-full.json')
var vacancies = require('./vacancies.json')
var employers = require('./employers.json')
var vacancies_new = require('./vacancies-new.json')
var providers = require('./providers.json')
var providers_full = require('./providers_full.json')
var profanities = require('./profanities.json')

module.exports = {

  // Insert values here
  "providerName": "APEX TRAINING LIMITED",
}
