require.config({ 
    'paths': { 
    "underscore": "libs/underscore", 
    "backbone": "libs/backbone"
  },
  'shim': 
  {
    backbone: {
      'deps': ['jquery', 'underscore'],
      'exports': 'Backbone'
    },
    underscore: {
      'exports': '_'
    }
  }  
}); 

require([
  'underscore',
  'backbone',
  'app'
  ], 
  function(_, Backbone, app){
    app.init();
});