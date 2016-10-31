import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    filteredListings: [],
    search(){
      var term = this.get('searchTerm').toLowerCase();
      var allListings = this.get('listings');
      var output = [];

      var array =allListings.toArray();
      // console.log(array);
      array.forEach(function(listing){
        if(listing.title.indexOf(term) >= 0){
          output.push(listing.title);
        }
      });
      console.log(output);
        this.set('filteredListings', output);
    }
  }
});
