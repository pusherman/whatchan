define([
  'jquery', 
  'backbone', 
  'underscore',
  'models/channel'], 

function($, Backbone, _, Channel) {

  var ChannelSearch = Backbone.Collection.extend({
    model: Channel,

    initialize : function(models, options){
      this.query = options.query;
    },

    url: function(){
      return "/search/" + this.query;
    }
  });

  return ChannelSearch;
});