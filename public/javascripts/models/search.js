define([
  'jquery', 
  'backbone', 
  'underscore',
  'collections/results'], 

function($, Backbone, _, Results) {
  var Search = Backbone.Model.extend({
    url: "/search",

    initialize: function(){
console.log('search init');
console.log(this.get("results"));
      this.results = new Results( this.get( "results" ) );
console.log('results: ');
console.log(this.results);
      
      this.trigger("search:ready", this);
    }
  });

  return Search;
});