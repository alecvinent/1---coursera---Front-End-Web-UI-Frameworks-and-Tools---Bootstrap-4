$(document).ready(function () {
  // login
  $("#login").click(function () {
    $("#loginModal").modal("show");
  });
  // reservation
  $("#open-reservation").click(function () {
    $("#reservationModal").modal("show");
  });

  // carousel settings
  $("#carousel-main").carousel({
    interval: 2000,
  });

  $("#carousel-btn").click(function () {
    var $current_icon = $(this).children("span");
    if ($current_icon.hasClass("fa-pause")) {
      $("#carousel-main").carousel("pause");
      $current_icon.removeClass("fa-pause").addClass("fa-play");
    } else {
      $current_icon.removeClass("fa-play").addClass("fa-pause");
      $("#carousel-main").carousel("cycle");
    }
  });

  $("#carousel-main").on("slide.bs.carousel", function () {
    // do something…
  });
});
