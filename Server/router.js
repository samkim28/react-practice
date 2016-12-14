const express = require('express');
const request = require('request');
const router = express.Router();


router.get('/truckdata', (req, res) => {

    const url = 'https://data.sfgov.org/resource/6a9r-agq8.json';
    console.log('req query ftype: ', req.query.facilityType);
    const qs = {
        FacilityType: req.query.FacilityType
    }

    request.get({url, qs}, (error, response, body) => {
        body = JSON.parse(body);
        if (error) {
            res.status(400).send(error);
        } else {
            res.status(200).json(body)
        }
    });
});


module.exports = router;
