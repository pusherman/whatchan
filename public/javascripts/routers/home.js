define([
  'jquery', 
  'backbone', 
  'underscore', 
  'views/search'], 
function($, Backbone, _, mainView){
  
  var Router = Backbone.Router.extend({

    initialize: function() {
      this.mainView = new mainView({router: this});
//      console.log(this.mainView);
      Backbone.history.start({pushState: true});
    },

    routes: {
      '': 'home',
      ':query': 'test'
    },

    'home': function() {
      console.log('rendering main view');
      this.mainView.render();
    },

    test: function(query, page) {
      this.mainView.render();
      this.mainView.findChannel(query);
    },
    
    search: function(query, page) {
      console.log(query);
    },

  });

  return Router;
});