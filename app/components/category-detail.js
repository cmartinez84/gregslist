import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['date:desc'],
  page: 3,
  sortedListings: Ember.computed.sort('category.listings', "sortBy"),
  pageListings: Ember.computed("sortedListings",function(){
    var output = [];
    var offset = (this.get('page')-1) * 5;
    var i = 0;
    while (i < 5) {
      if (this.get('sortedListings')[offset]){
        output.push(this.get('sortedListings')[offset]);
      }
      i++;
      offset++;
    }
    return output;
  }),
  actions: {
    sortListingChange(){
    let selectedIndex = this.$('#sortListings').val();
      console.log(selectedIndex);
      this.set('sortBy', [selectedIndex]);
    }
  }
});
