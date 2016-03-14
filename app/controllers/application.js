import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    open: function () {
      $('#menu-button').toggleClass("open");
    }
  }
});