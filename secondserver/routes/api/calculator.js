const express = require('express');
const router = express.Router();
const config = require('config');
const request = require('request');
const { check, validationResult } = require("express-validator");
const { nested_encoder } = require('../../utils/nested_encoder');

// @route  GET api/calculator
// @desc   Get current rates
// @access Public
router.get('/', async (req, res) => {   
    try {
        const params = {
            "partnerId": config.get("partnerId"),
            queries: {
                refinance: false,
                stateAbbreviation: "MI",
                program: "Fixed15Year",
                // loanType: "VA",
                // loanToValueBucket: "VeryHigh",
                // loanAmountBucket: "SuperConforming",
                creditScoreBucket: "High",
                // This member overrides the "stateAbbreviation", "loanAmountBucket", 
                // and "loanToValueBucket" members.
                propertyBucket: {
                  propertyValue: 245000,
                  loanAmount: 200000
                //   location: {
                //     zipCode: "48195"
                //   }
                }
              }
        }
        const encoded_string = nested_encoder(params);
        const options = {
            uri: `https://mortgageapi.zillow.com/getCurrentRates?${encoded_string}`,
            method: "GET"
        };

        request(options, (error, response, body) => {
            console.log(options);
            // console.log('OPTIONS: ' + typeof(options.params));
            // console.log('OPTIONS: ' + typeof(options.params.partnerId));
            // console.log('RESPONSE: ' + response);
            console.log('BODY: ' + body);
            if (error) console.log(error);

            if (response.statusCode !== 200) {
                console.log(response.statusCode);
                console.log(response.statusMessage);
                return res.status(response.statusCode).json({ msg: response.statusMessage });
            }
            console.log(response.toJSON());
            res.json(JSON.parse(body));
        } )
        
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;