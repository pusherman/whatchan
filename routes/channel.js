exports.search = function(req, res){

console.log('searching for ' + req.params.channel);

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

      // send the results off to the client
      res.send(results.sort(function(a,b) { 
        if (a.number > b.number)  
          return -1;

        if (a.number < b.number)
          return 1;

        return 0;
      }));
    });
  });
};