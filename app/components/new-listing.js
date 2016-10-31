import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    post(category){
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
        author: this.get('author'),
        date: moment().format("LLLL"),
        category: category
      };
      this.sendAction("post", params);
    }
  }
});
