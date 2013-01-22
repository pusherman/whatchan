if (process.argv.length !== 4) {
  console.log('need maor arguments.  import_channel.js <city> <lineup.csv>');
  process.exit(1);
}

var csv = require('csv'),
    fs = require('fs'),
    reds = require('reds'),
    redis = require('redis');

reds.client = redis.createClient(10000, "localhost"); 
reds.client.auth("3ca6ef43-4132-4f05-aab7-e72f6342b61a", function() {

  var search = reds.createSearch(process.argv[2]);

  csv()
    .from.stream(fs.createReadStream(__dirname+'/' + process.argv[3]))
    .on('record', function(data,index) {
      search.index(data[1], data[0]);

    })
    .on('end', function(count) {
      console.log(count + ' channels indexed.');

      console.log('starting search');
      search.query('abc').end(function(err, ids){
        console.log(ids);
      });
      
    });

});