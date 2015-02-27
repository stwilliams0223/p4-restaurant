$('a#over').click(function() {
  $('html, body').clearQueue().animate({
 scrollTop:0
  }, 1000);
  return false;
});

$('a#agenda').click(function() {
  $('html, body').clearQueue().animate({
 scrollTop:$('.agenda').offset().top
  }, 1000);
  return false;
});

$('a#menu').click(function() {
  $('html, body').clearQueue().animate({
 scrollTop:$('.menu').offset().top
  }, 1000);
  return false;
});

$('a#map').click(function() {
  $('html, body').clearQueue().animate({
 scrollTop:$('.map').offset().top
  }, 1000);
  return false;
});


$('a#contact').click(function() {
  $('html, body').clearQueue().animate({
 scrollTop:$('.contact').offset().top
  }, 1000);
  return false;
});

$('a#book').click(function() {
  $('html, body').clearQueue().animate({
 scrollTop:$('.book').offset().top
  }, 1000);
  return false;
});




