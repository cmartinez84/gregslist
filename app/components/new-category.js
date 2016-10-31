import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    post(){
      var params = {
        name: this.get("newCategoryName")
      };
      if(params['name']){
        this.sendAction("post", params);
        this.set('newCategoryName', "");
      }
    }
  }
});
