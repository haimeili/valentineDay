var swipe = Swipe($("#content"));
var getValue = function(className) {
  var $elem = $('' + className + '');
  return {
    height: $elem.height(),
    top: $elem.position().top
  };
};

var pathY = function() {
  var data = getValue('.a_background_middle');
  return data.top + data.height / 2;
}();
var $boy = $("#boy");
var boyHeight = $boy.height();
$boy.css({
  top: pathY - boyHeight + 25
});


$("button").click(function() {
  // left的变化
  $boy.transition({
    'left': $("#content").width() + 'px',
  }, 10000, 'linear', function() {});

});