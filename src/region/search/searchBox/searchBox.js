app.region.searchBox = Nervespine.Region({
  selector : '.searchBoxRegion',
  template : app.template.searchBox,

  events : {
    'click button': 'search'
  },

  search : function() {
    Nervespine.go('/product/search/'+ this.$el.find('input').val());
  }
});