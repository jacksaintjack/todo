$(document).ready(function () {
  page.init();
});

var page = {

  url:"http://tiy-fee-rest.herokuapp.com/collections/jacksaintjack",
  init:function() {
    page.initStyling();
    page.initEvents();
  },
  initStyling: function () {
    page.loadPosts();
  },
  initEvents:function() {
    $(.input).on('submit', page.addItem)
  },

  addOnePostToDOM: function (post) {
    page.loadTemplate("post", post, $('.blog > .content'));
  },
}
