import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr("string"),
  date: DS.attr("string"),
  image: DS.attr(),
  content: DS.attr(),
  author: DS.attr("string"),
  category: DS.belongsTo("category", {async: true})
});
