define([
    'jquery', 
    'backbone',
    'underscore', 
    'text!templates/channel.html'], 

function($, Backbone, _, template) {
  var SearchResult = Backbone.View.extend({
    model: undefined,

    // load our template
    initialize: function() {
      this.template = _.template(template);
    },

    // render
    render: function() {
      return this.template({channel: this.model.toJSON()});
    },

  });

  return new SearchResult();
});