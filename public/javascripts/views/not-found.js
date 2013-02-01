define([
    'jquery', 
    'backbone',
    'underscore', 
    'text!templates/not-found.html'], 

function($, Backbone, _, template) {
  var NotFound = Backbone.View.extend({

    // load our template
    initialize: function() {
      this.template = _.template(template);
    },

    // render
    render: function() {
      return this.template();
    }

  });

  return new NotFound();
});