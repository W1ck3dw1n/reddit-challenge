const hideNotification = () => {
  // llamar a elemento 'language-notification' del Dom
  const notification = document.getElementsByClassName(
    "language-notification"
  )[0];
  // ocultar notificacion
  notification.style.display = "none";
  localStorage.setItem("hideNotification", true);
};

const isHiddenNotification = () => {
  const isHidden = localStorage.getItem("hideNotification");
  if (isHidden) {
    // llamar a elemento 'language-notification' del Dom
    const notification = document.getElementsByClassName(
      "language-notification"
    )[0];
    // ocultar notificacion
    notification.style.display = "none";
  }
};

const onClickLogin = () => {
  // llamar al elemento modal
  const modal = document.getElementById("modal");
  // llamar al elemento main
  const main = document.getElementsByTagName("main")[0];
  // dando estilos a elementos
  main.style.opacity = "0.5";
  modal.style.display = "block";
};

// TODO -> cerrar modal al dar click en el tache :v
// TODO -> abrir modal al dar click en registrarse

isHiddenNotification();
