define(['jquery', 'backbone', 'underscore'], function($, Backbone, _) {
  var Channel = Backbone.Model.extend({
    defaults: {
      name: null,
      hd: 0,
      sd: 0
    },

    initialize: function() {
      console.log('init model');
    },

    lookUp: function(query) {
      //@todo do a reds search on query
      if ( query === 'cnn' ) {
        this.set({ 
          name: 'CNN',
          hd: 1123,
          sd: 123,
        });

      } else if (query === 'abc') {
        this.set({ 
          name: 'ABC',
          hd: 0,
          sd: 7,
        });
        
      } else {
        this.set({ 
          name: '',
          hd: 0,
          sd: 0,
        });
      }
      
    },
  });

  return Channel;
});