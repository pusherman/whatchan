# whatchan

I don't watch enough TV to remember what the channels are.  I made this to help me quickly find what I'm looking for.

## Contributing

If your area/provider isn't supported, help me out by creating a csv file in the format of channel,network and submit a pull request (see an example in [cli/wilmington-channels.csv](https://github.com/pusherman/whatchan/blob/master/cli/wilmington-channels.csv)).

## Currently Supported Markets

* [http://wilmington.whatchan.com/](http://wilmington.whatchan.com/)  - Wilmington, NC - Time Warner Cable 

## Installing

Requirements:  [node](http://nodejs.org/), [redis](http://redis.io/)

Init the database with:
    
    $node cli/import-channels.js <subdomain> <csv-import-file.csv>

Start the app:

    $node app.js