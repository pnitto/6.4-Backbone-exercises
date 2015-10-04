
var BlogView = Backbone.View.extend({
  tagName: 'li',
  template: JST['e/e-item'],
  events: {
    //'click .title' : 'detailview',
    'click .edit-btn': 'edit',
    'click .update-btn': 'update',
    'click .delete-btn': 'delete'
  },
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  edit: function(){
    $('.delete-btn').hide();
    $('.edit-btn').hide();
    $('.update-btn').show();
    $('.cancel-btn').show();

    var title = this.$('.title').html();
    var body = this.$('.body').html();
    this.$('.title').html('<input type="text" class="title-update" value="' + title + '">');
    this.$('.body').html('<input type="text" class="body-update" value="' + body + '">');
  },
  delete: function(){
    this.model.destroy();
  },
  update: function(){
    this.model.set('title', $('.title-update').val());
    this.model.set('body', $('.body-update').val());
    //this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  detailview: function(){
    $('div').html('');
    var itemView = new BlogView({model: this.model});
    $('#container').append(itemView.render().el);
    return this;
  }
});

module.exports = BlogView;
