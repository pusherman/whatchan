define([
    'jquery', 
    'backbone',
    'underscore', 
    'collections/channelSearch',
    'text!templates/main.html'], 

function($, Backbone, _, ChannelSearch, template) {
  var SearchForm = Backbone.View.extend({
    el: '#container',
    channels: [],

    events: {
      "keypress #channel": "doSearch"
    },

    initialize: function() {
      this.template = _.template(template);
    },

    // render a specific search result
    /**
     * @todo should this just be a "results" view
     *       rather than a view for a specific result?
     */
    renderSearchResult: function(channel) {
      var that = this;
      console.log(this);
      require(['views/result'], function (resultView) {
        resultView.model = channel;
        that.$('#search-results').append(resultView.render());
      });
    },

    renderSearchResults: function(channels) {
      channels.each(this.renderSearchResult);
    },

    // render this view (the search form)
    render: function() {
      $(this.el).append(this.template);
    },

    doSearch: function(e) {
      if (e.keyCode != 13) return;

      channels = new ChannelSearch([], {query: $('#channel').val()});
      channels.on("reset", this.renderSearchResults, this).fetch();
    }

  });

  return new SearchForm();
});