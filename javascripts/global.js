(function($) {
  $bottomNav = $(".bottom-nav");
  $menuOption = $bottomNav.find(".option");
  $optionModal = $menuOption.find(".option-modal");

  $menuOption.on("mouseover", e => {
    $(e.target)
      .siblings(".option-modal")
      .fadeIn(700);
  });

  $("body").on("mouseover", () => {
    $optionModal.fadeOut(500);
  });

  $bottomNav.on("mouseover", e => {
    e.stopPropagation();
  });
})(jQuery);
