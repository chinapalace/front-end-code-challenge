var express = require('express'),
  router = express.Router(),
  _ = require('lodash'),
  url = require('url'),
  randomSeed = require('random-seed'),
  partners = require('../partners.json')

function cloneRequiredJson(obj) {
  return JSON.parse(JSON.stringify(obj))
}

function getBodies(partner, req) {
  var querystring = url.parse(req.url, true).query
  var bodies = cloneRequiredJson(require('../bodies/' + partner.id + '.json'))
  return bodies;
}

// Get partners
router.get('/', function (req, res) {
  res.json(_.toArray(partners))
})

// Get a partner by id
router.get('/:id', function (req, res, next) {
  var partner = partners[req.params.id]
  if (!partner) return next()
  res.json(partner)
})

// Get a partner's bodies
router.get('/:id/bodies', function (req, res, next) {
  var partner = partners[req.params.id]
  var bodies
  if (!partner) return next()
  res.json(getBodies(partner, req))
})

// Get a specific body
router.get('/:id/bodies/:gender_id', function (req, res, next) {
  var partner = partners[req.params.id]
  var bodies
  if (!partner) return next()
  bodies = getBodies(partner, req)
  res.json(_.find(bodies, { gender: req.params.gender_id }))
})

module.exports = router
