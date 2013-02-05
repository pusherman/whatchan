
/*
 * GET home page.
 */

exports.index = function(req, res) {
  if ( req.subdomains[0] === undefined ) {
    res.render('index', { title: 'whatchan' });

  } else if(app.locals.availableMarkets.indexOf(req.subdomains[0]) === -1) {
    res.render('no-data-available', { title: 'whatchan' })

  } else {
    res.render('search', { title: 'whatchan - ' + req.subdomains[0] })
  }
};