define([
  'jquery', 
  'backbone', 
  'underscore'], 

function($, Backbone, _) {
  var Channel = Backbone.Model.extend({
    defaults: {
      number: 0,
      network: null
    }
  });

  return Channel;
});