import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return Ember.RSVP.hash({
      categories: this.store.findAll('category'),
      listings: this.store.findAll('listing')
    });
  },
  actions: {
    post(params){
      var newCategory = this.store.createRecord("category", params);
      newCategory.save();
      this.transitionTo('index');
    },
  }
});
