import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    post(params){
      var newListing = this.store.createRecord("listing", params);
      var category = params.category;
      category.get("listings").addObject(newListing);
      newListing.save().then(function(){
        return category.save();
      });
      this.transitionTo('category');
    },
    selectRefresh() {
      this.refresh();
    }
  }

});
