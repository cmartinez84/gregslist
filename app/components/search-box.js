import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filteredListings: [],
    search(){
      var term = this.get('searchTerm').toLowerCase();
      var allListings = this.get('listings');
      var output = [];


      // console.log(array);
      allListings.forEach(function(listing){
        if(listing.get("content").toLowerCase().indexOf(term) >= 0){
          output.push(listing);
        }
      });
        this.set('filteredListings', output);
    }
  }
});
