define(["jquery","backbone","underscore"],function(e,t,n){var r=t.Model.extend({defaults:{name:null,hd:0,sd:0},initialize:function(){console.log("init model")},lookUp:function(e){e==="cnn"?this.set({name:"CNN",hd:1123,sd:123}):e==="abc"?this.set({name:"ABC",hd:0,sd:7}):this.set({name:"",hd:0,sd:0})}});return r})