var swipe = Swipe($("#content"));

$('button').click(function() {
  // call interface
  swipe.scrollTo($('#content').width() * 2, 5000)
});