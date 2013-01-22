define([
  'jquery', 
  'backbone', 
  'underscore'], 

function($, Backbone, _) {
  var Channel = Backbone.Model.extend({
    defaults: {
      name: null,
      hd: 0,
      sd: 0
    }
  });

  return Channel;
});