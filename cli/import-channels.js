if (process.argv.length !== 4) {
  console.log('need maor arguments.  import_channel.js <city> <lineup.csv>');
  process.exit(1);
}

var csv = require('csv'),
    fs = require('fs'),
    reds = require('reds'),
    redis = require('redis');

var search = reds.createSearch('search:' + process.argv[2]);

csv()
  .from.stream(fs.createReadStream(__dirname+'/' + process.argv[3]))
  .on('record', function(data,index) {
    search.index(data[1], data[0]);
    reds.client.set(process.argv[2] + ':channel:' + data[0], data[1]);
    console.log('setting: ' + process.argv[2] + ':channel:' + data[0]);
  })
  .on('end', function(count) {
    console.log(count + ' channels indexed.');

    console.log('starting search for abc');
    search.query('abc').end(function(err, ids){
      console.log(ids);
      console.log(err);
      reds.client.get(process.argv[2] + ':channel:' + ids[0], function(err, reply) {
        console.log(reply.toString());
      });

    });
    
  });