define([
    'jquery', 
    'backbone',
    'underscore', 
    'models/channel',
    'text!templates/main.html',], 

function($, Backbone, _, channel, template) {
  var View = Backbone.View.extend({
    el: '#container',

    initialize: function() {
      this.channel = new channel();
      this.channel.bind('change', _.bind(this.showResults, this));

      this.template = _.template( template );
    },

    showResults: function(channel) {
      var that = this;
      require(['text!templates/channel.html'], function(template) {
        channelView = _.template( template, { channel: that.channel.toJSON() } );
        $('#searchResults').remove();
        $(that.el).append(channelView);
      });
    },

    events: {
      "keypress #channel": "doSearch",
    },

    render: function() {
      $(this.el).append( this.template );
    },

    doSearch: function(e) {
      if (e.keyCode != 13) return;
      this.channel.lookUp($('#channel').val());
    }
  });

  return new View();
});