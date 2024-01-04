$(document).ready(function () {
  baguetteBox.run(".card");

  let terminal = $("#terminal__body");
  let text = $("#terminal__prompt--text-3");
  terminal.on("click", function () {
    text.focus();
  });
  document
    .getElementById("terminal__prompt--text-3")
    .addEventListener("paste", function (e) {
      let clipboardData, pastedData;

      clipboardData = e.clipboardData || window.clipboardData;
      pastedData = clipboardData.getData("Text");

      e.preventDefault();
      document.execCommand("insertHTML", false, pastedData);
    });

  text.on("keyup", function (e) {
    if (text.text().length == 0) {
      text.html("&#8203;");
    }
  });

  text.bind("keypress", function (e) {
    if (e.keyCode == 13) {
      return false;
    }
  });
});

function discordToClipboard() {
  navigator.clipboard.writeText("mix.dev");
  Swal.fire({
    icon: "success",
    title: "Copiado",
    text: "Se copió el usuario de Discord en el portapapeles",
  });
}
