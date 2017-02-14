$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".otherClickable").click(function() {
    $("#bucketChronicles").fadeToggle();
  });
});
