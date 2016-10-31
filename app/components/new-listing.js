import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    post(){
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        content: this.get('content'),
        author: this.get('author'),
        date: moment().format("LLLL"),
        category: this.get('category')
      };
      if(params['title'] && params['content'] && params['author']){
        this.sendAction("post", params);
        this.set("title", "");
        this.set("image", "");
        this.set("content",  "");
        this.set("author", "");
      }
    }
  }
});
