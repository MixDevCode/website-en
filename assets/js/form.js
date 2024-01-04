let form = document.getElementById("contactForm");

async function handleSubmit(event) {
  event.preventDefault();
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        Swal.fire({
          title: "Excelente!",
          text: "Mensaje enviado con éxito! En pronto estaré comunicándome contigo al email que has proporcionado",
          icon: "success",
        });
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            Swal.fire({
              title: "Oops... Algo salió mal...",
              text: data["errors"].map((error) => error["message"]).join(", "),
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Oops... Algo salió mal...",
              text: "Por favor intenta nuevamente",
              icon: "error",
            });
          }
        });
      }
    })
    .catch((error) => {
      Swal.fire({
        title: "Oops... Algo salió mal...",
        text: "Por favor intenta nuevamente",
        icon: "error",
      });
    });
}
form.addEventListener("submit", handleSubmit);
