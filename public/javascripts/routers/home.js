define([
  'jquery', 
  'backbone', 
  'underscore', 
  'views/view'], 
function($, Backbone, _, mainView){
  
  var Router = Backbone.Router.extend({

    initialize: function() {
      this.mainView = mainView;
      Backbone.history.start();
    },

    routes: {
      '': 'home',
      'test': 'test',
      '/search/:query': "search",  // #search/kiwis
    },

    'home': function() {
      this.mainView.render();
    },
    
    'test': function() {
      alert('test');
    },
    
    'search': function(query) {
      alert('searching for: ' + query);
    },
  });

  return Router;
});