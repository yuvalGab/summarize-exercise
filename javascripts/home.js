(function($) {
  const $item = $(".item");
  const $moreInfoIcon = $item.find(".fa.fa-info-circle");
  const $moreInfoBox = $item.find(".more-info");

  $moreInfoIcon.on("mouseover", e => {
    $(e.target)
      .siblings(".more-info")
      .fadeIn(700);
  });

  $("body").on("mouseover", () => {
    $moreInfoBox.fadeOut(500);
  });

  $(".item").on("mouseover", e => {
    e.stopPropagation();
  });
})(jQuery);
