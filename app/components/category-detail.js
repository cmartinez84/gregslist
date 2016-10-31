import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['date:desc'],
  page: 1,
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
  pages: Ember.computed("sortedListings", function(){
    var times= Math.ceil((this.get("sortedListings")).length/5);
    var output = [];
    for(var i=1; i<=times; i++){
      output.push(i);
      console.log(i);
    }
    return output;
  }),
  actions: {
    sortListingChange(){
    let selectedIndex = this.$('#sortListings').val();
      console.log(selectedIndex);
      this.set('sortBy', [selectedIndex]);
    },
    getPage(page){
      this.set("page", page);
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
      this.set("pageListings", output);
    }
    }


});
