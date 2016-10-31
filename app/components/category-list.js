import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['name:desc'],
  sortedCategories: Ember.computed.sort('categories', "sortBy"),
  actions: {
    sortedCategoriesChange(){
    let selectedIndex = this.$('#sortCategories').val();
      console.log(selectedIndex);
      this.set('sortBy', [selectedIndex]);
    }
  }
});
