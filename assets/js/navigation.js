$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPosition = $(this).scrollTop();

    $('a.nav-link[href^="#"]').each(function () {
      var target = $(this.hash);
      if (target.length) {
        // Ajuste para tener en cuenta la altura de la barra de navegación
        var targetPosition = target.offset().top - 10;

        if (
          targetPosition <= scrollPosition + 50 &&
          targetPosition + target.outerHeight() > scrollPosition
        ) {
          $('a.nav-link[href^="#"]').removeClass("active");
          $(this).addClass("active");
        }
      }
    });
  });

  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    const targetId = $(this).attr("href").substring(1);
    const targetElement = $("#" + targetId);

    if (targetElement.length) {
      const navHeight = 56;

      $("html, body").animate(
        {
          scrollTop: targetElement.offset().top - navHeight,
        },
        0
      );
    }
  });
});

function moveToProjects() {
  const navHeight = 56;
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top - navHeight,
    },
    0
  );
}
