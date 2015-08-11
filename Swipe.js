/////////
//swipe page //
/////////

/**
 * [Swipe description]
 * @param {[type]} container [page container node]
 * @param {[type]} options   [parameters]
 */
function Swipe(container) {
  //Swipe Object
  var swipe = {};

  var container = $("#content");
  var element = container.find(":first");
  var slides = element.find("li");
  var width = container.width();
  var height = container.height();

  element.css({
    width: (slides.length * width) + 'px',
    height: height + 'px'
  });

  $.each(slides, function (index) {
    var slide = slides.eq(index); //获取到每一个li元素
    slide.css({
      width: width + 'px',
      height: height + 'px'
    })
  });

  // monitor implement and movement
  swipe.scrollTo = function(x, speed) {
    //执行动画移动
    element.css({
      'transition-timing-function' : 'linear',
      'transition-duration'        : speed + 'ms',
      'transform'                  : 'translate3d(-' + x + 'px,0px,0px)'
    });
    return this;
  };

  return swipe;
}
