define([
    'jquery', 
    'backbone',
    'underscore', 
    'collections/channelSearch',
    'text!templates/main.html'], 

function($, Backbone, _, Search, template) {
  var SearchForm = Backbone.View.extend({
    el: '#container',
    channels: 'wtf',

    events: {
      "keypress #channel": "doSearch"
    },

    initialize: function() {
      this.template = _.template( template );
      console.log(this.channels);
    },


    showResults: function(channels) {
      console.log('omg apparently we have results');    
      console.log(channels);
      
      console.log(channels.at(1).get('name'));

/*
      var that = this;
      
      require(['text!templates/channel.html'], function(template) {
        channelView = _.template( template, { channel: that.channel.toJSON() } );
        $('#searchResults').remove();
        $(that.el).append(channelView);
      });
*/
    },

    render: function() {
      $(this.el).append( this.template );
    },

    doSearch: function(e) {
      if (e.keyCode != 13) return;
      //this.channel.lookUp($('#channel').val());

      channels = new Search([], {query:'test'});
      channels.on("reset", this.showResults, this);
      channels.fetch();

/*
      c.done(function () {
        console.log(channels);
      });
*/


/*
console.log('about to do search');
      var search = new Search({
        field_1: 'omgtest',
      });

      // You can listen to the "search:ready" event
      //search.on( "search:ready", this.renderResults, this )

      // this is when a POST request is sent to the server
      // to the URL `/search` with all the search information packaged
      search.save(null, {
        success:function(model,response){
          console.log('model');
          console.log(model);
          console.log('response');
          console.log(response);
        },
        error:function(model,response){
          console.log(response);
        }
      });

*/
 
    }
  });

  return new SearchForm();
});