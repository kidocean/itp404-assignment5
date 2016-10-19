import Ember from 'ember';

export default Ember.Route.extend({
beforeModel: function(){
  document.title="Artists";
},
  model:function(work){

  var url = 'http://itp-api.herokuapp.com/api/artists';

  var promise= $.getJSON(url);
  return promise;
},
afterModel:function(model){
console.log(model.artists);
}
});
