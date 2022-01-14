const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// require('./routes/1/routes.js')(router);
// require('./routes/2/routes.js')(router);
// require('./routes/3/routes.js')(router);
// require('./routes/4/routes.js')(router);
require('./routes/5/routes.js')(router);

module.exports = router
