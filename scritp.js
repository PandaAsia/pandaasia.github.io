// Esto es Para el menu
((d) => {
  const $BTNmenu = d.querySelector(".btn-movil");
  $PanelMenu = d.querySelector(".menu");

  $BTNmenu.addEventListener("click", (e) => {
    MostrarMenu();
  });

  function MostrarMenu() {
    $PanelMenu.classList.toggle("is-active");
    $BTNmenu.classList.toggle("is-active");
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(".menu a")) {
      MostrarMenu();
    }
  });
})(document);

// Este efctos de color en el panel de habilidades

var $PanelHabilidade = document.querySelector(".habilidades");
var $PanelTitulo = document.querySelector(".section-color");
function changeColor(color) {
  $PanelHabilidade.style.backgroundColor = color;
  $PanelTitulo.style.backgroundColor = color;
}

function resetColor() {
  $PanelHabilidade.style.backgroundColor = "#fb2d2d";
  $PanelTitulo.style.backgroundColor = "#fb2d2d";
}

// Este para el background de navbar
((d) => {
  const $PanelMenuCointeiner = document.querySelector(".container");
  document.addEventListener("scroll", (e) => {
    let scroll = scrollY;
    if (scroll > 100) {
      $PanelMenuCointeiner.style.backgroundColor = "#b00000";
    } else {
      console.log(scroll);
      $PanelMenuCointeiner.style.backgroundColor = "transparent";
    }
  });
})(document);

// Este ayuda para crear un nuevo mensaje al correo

((d) => {
  const $from = d.querySelector(".contacto-formulario"),
    $loadare = d.querySelector(".contact-form-loader"),
    $response = d.querySelector(".contact-form-response");

  $from.addEventListener("submit", (e) => {
    e.preventDefault();
    $loadare.classList.remove("none");
    fetch("https://formsubmit.co/ajax/jerrygarciatanta@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $from.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "ocurrio un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status} : ${message}`;
      })
      .finally(() => {
        $loadare.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
