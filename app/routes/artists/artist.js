import Ember from 'ember';

export default Ember.Route.extend({
beforeModel: function(){
  document.title="Artist";
},
  model:function(id){

      
      
  var url = 'http://itp-api.herokuapp.com/api/artists/'+ id.id +'/songs';

  var promise= $.getJSON(url);
  return promise;

},
afterModel:function(model){
console.log(model);

}
});
