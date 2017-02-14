$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".otherClickable").click(function() {
    $("#bucketChronicles").fadeToggle();
    $("#bucketChronicles").removeClass();
  });
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("night-mode");
  });
  $("button#day").click(function() {
    $("body").removeClass();
    $("body").addClass("day-mode");
  });
  $(".highlight").click(function() {
    $("#bucketChronicles").toggleClass("paragraphStylez");
  });
});
