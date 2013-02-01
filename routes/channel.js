exports.search = function(req, res){

  app.locals.searchClient.query(req.params.channel).end(function(err, ids) {

    // build the multi get query
    searchFor = ids.map(function(channel) { 
      return ["get", "wilmington:channel:" + channel] 
    });

    // lookup each channel name for each of the found keys
    app.locals.dbClient.multi(searchFor).exec(function (err, replies) {
      for(i=0,results=[];i<replies.length;++i) {
        results.push({number: parseInt(ids[i]), network: replies[i]});
      }

      // sort the results based on if the query matches
      // the network name then by desc order in channel number
      var re = new RegExp(".*(" + req.params.channel + ").*","i");

      res.send(results.sort(function(x,y){
        var t = re.test(x.network), u = re.test(y.network);
        if (t && u && x.number < y.number) { return 1; }
        else if (!t && !u && x.number < y.number) { return 1; }
        else if (t && !u) { return -1; }
        else if (!t && u) { return 1; }
      }));
    });
  });
};