require("dotenv").config()
const config = require("config")
console.log(config)
console.log('NODE_APP_INSTANCE: ' + config.util.getEnv('NODE_ENV'));
