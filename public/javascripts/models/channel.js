define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
  var Channel = Backbone.Model.extend({
    defaults: {
      name: '',
      hd: 0,
      sd: 0
    },

    initialize: function() {
      console.log('init model');
    },

    lookUp: function(query) {
      //@todo do a reds search on query
      this.set({ 
        name: 'CNN',
        hd: 0,
        sd: 0,
      });
      
    },
  });

  return Channel;
});