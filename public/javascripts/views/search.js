define([
    'jquery', 
    'backbone',
    'underscore', 
    'collections/channelSearch',
    'text!templates/main.html'], 

function($, Backbone, _, channelSearch, template) {
  var searchForm = Backbone.View.extend({
    el: '#container',
    channels: [],

    events: {
      "keypress #channel": "doSearch"
    },

    initialize: function(opts) {
      this.template = _.template(template);
      this.router = opts.router;
    },

    // render a specific search result
    renderSearchResult: function(channel) {
      var that = this;

      require(['views/result'], function (resultView) {
        resultView.model = channel;
        that.$('#search-results').append(resultView.render());
      });
    },

    // render each result found from the entire collection
    renderSearchResults: function(channels) {
      channels.each(this.renderSearchResult);
    },

    // render this view (the search form)
    render: function() {
      $(this.el).append(this.template);
    },

    // perform the search and populate the collection with the results
    findChannel: function(searchQuery) {
      $('#channel').val(searchQuery);
      channels = new channelSearch([], {query: searchQuery});
      channels.on("reset", this.renderSearchResults, this).fetch();      
    },

    // handle the enter keypress from the search box
    doSearch: function(e) {
      if (e.keyCode != 13) return;

      this.findChannel($('#channel').val());
      this.router.navigate($('#channel').val());
    },

  });

  return searchForm;
});