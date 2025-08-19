// 
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
// 

// routes file template below:

//module.exports = function(router) {
// routes go here...

//} 
// 
// / end module.exports

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// 1. routes archive
require('./routes/routes-archive')(router);

// 2. routes february2025
require('./routes/february2025')(router);

// 3. routes better information for tracing
require('./routes/better-information')(router);

// routes template
require('./routes/routes-template')(router);
