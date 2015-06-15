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
    $(".input").on('submit', page.addPost)
  },

  addOnePostToDOM: function (input) {
    page.loadTemplate("postList", input, $('.newlyAdded'));
  },

  loadPosts() {

    $.ajax({
      url: page.url,
      method: 'GET',
      success:function(data)
        console.log(data)
        page.addOnePostToDOM(data);
      },
      error:function(err){

      }
    });
  },
  createPost: function (newPost) {

    $.ajax({
      url: page.url,
      method: 'POST',
      data: newPost,
      success: function (data) {

        page.addOnePostToDOM(data);
        console.log("success!!: ", data);
      },
      error: function (err) {
        console.log("error ", err);
      }
    });

}
