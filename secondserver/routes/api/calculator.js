const express = require('express');
const router = express.Router();
const config = require('config');
const request = require('request');
const { check, validationResult } = require('express-validator');
const { nested_encoder } = require('../../utils/nested_encoder');

// @route  GET api/calculator
// @desc   Get current rates
// @access Public
router.get('/', async (req, res) => {
  // TODO put in form data checks on the backend w/ express validator
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };

  const circulur_rep = JSON.stringify(req.query, getCircularReplacer());
  console.log(circulur_rep);
  try {
    const paramss = {
      partnerId: config.get('partnerId'),
      queries: {
        stateAbbreviation: `${req.query.stateAbbr}`,
        // program: "Fixed15Year",
        // creditScoreBucket: "High",
        // This member overrides the "stateAbbreviation", "loanAmountBucket",
        // and "loanToValueBucket" members.
        propertyBucket: {
          propertyValue: req.query.propertyValue,
          loanAmount: req.query.loanAmount
          //   location: {
          //     zipCode: "48195"
          //   }
        }
      }
    };
    const encoded_string = nested_encoder(paramss);
    const options = {
      uri: `https://mortgageapi.zillow.com/getCurrentRates?${encoded_string}`,
      method: 'GET'
    };

    request(options, (error, response, body) => {
      console.log(options);
      // console.log('OPTIONS: ' + typeof(options.params));
      // console.log('OPTIONS: ' + typeof(options.params.partnerId));
      // console.log('RESPONSE: ' + response);
      //   console.log('BODY: ' + body);
      if (error) console.log(error);

      if (response.statusCode !== 200) {
        console.log(response.statusCode);
        console.log(response.statusMessage);
        return res
          .status(response.statusCode)
          .json({ msg: response.statusMessage });
      }
      console.log('RESPONSE TO JSON: ' + response.toJSON());
      res.json(JSON.parse(body));
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
