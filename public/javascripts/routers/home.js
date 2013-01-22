define([
  'jquery', 
  'backbone', 
  'underscore', 
  'views/search'], 
function($, Backbone, _, mainView){
  var Router = Backbone.Router.extend({

    initialize: function() {
      this.mainView = new mainView({router: this});
      Backbone.history.start({pushState: true});
    },

    routes: {
      '': 'home',
      ':query': 'find'
    },

    home: function() {
      this.mainView.render();
    },

    find: function(query) {
      this.mainView.render();
      this.mainView.findChannel(query);
    }

  });

  return Router;
});