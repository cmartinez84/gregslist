import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['date:desc'],
  sortedListings: Ember.computed.sort('category.listings', "sortBy"),
  actions: {
    sortListingChange(){
    let selectedIndex = this.$('#sortListings').val();
      console.log(selectedIndex);
      this.set('sortBy', [selectedIndex]);
    }
  }
});
