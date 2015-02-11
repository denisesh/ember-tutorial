var App = Ember.Application.create();

App.Router.map(function() {
  this.route('favorites');
  this.route('about');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['three', 'important', 'things'];
  }
});