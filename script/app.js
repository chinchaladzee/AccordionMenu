$(document).ready(function () {
  $(".card_hader").click(function () {
    $(".card .card_body").slideUp();
    $(this).next(".card_body").addClass("card-active").slideDown();
    $("span").removeClass("fa fa-plus").addClass("fa fa-minus");
    $(this).children("span").removeClass("fa fa-minus").addClass("fa fa-plus");
  });
});
