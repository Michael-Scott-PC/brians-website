// const express = require("express");
// const path = require("path");
// const router = express.Router();
// const app = express();

// Init Middleware
// app.use(express.json({ extended: false }));
process.env.NODE_CONFIG_DIR = __dirname + '/config'
const config = require('config');


console.log('NODE_CONFIG_DIR: ' + config.util.getEnv('NODE_CONFIG_DIR'));
console.log('NODE_CONFIG: ' + config.util.getEnv('NODE_CONFIG'));
const partnerId = config.get('partnerId');
console.log(partnerId);

// const request = require('request');

// const options = {
//     url: 'https://mortgageapi.zillow.com/getCurrentRates',
//     method: "GET",
//     params: {
//         'partnerId': 'RD-MPYCQMZ',
//         'queries': {
//         'propertyBucket': {
//             'location': {
//             'zipCode': '48195'
//             }
//         }
//         }
//     }
// };

// request(options, (error, response, body) => {
//     if (error) console.log(error);

//     if (response.statusCode !== 200) {
//         return res.status(404).json({ msg: "No zillow info found." });
//       }

//       const res = json(JSON.parse(body));
//       console.log(res);
// });
