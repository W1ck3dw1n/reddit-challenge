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

const onClickLogin = async () => {
  // llamar al elemento modal
  const modal = document.getElementById("modal");
  // llamar al elemento main
  const main = document.getElementsByTagName("main")[0];
  // dando estilos a elementos
  main.style.opacity = "0.5";
  modal.style.display = "block";
};

const closeModal = () => {
  //llamar al elemento modal
  const modal = document.getElementById("modal");
  // llamar al elemento body
  const main = document.getElementsByTagName("main")[0];
  //ocultar modal
  modal.style.display = "none";
  main.style.opacity = "1"; //creo que tiene que ver con el scope v:
};

const getDataFromApi = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

// TODO estudiar el then y catch :v
const getMrRobotSeasons2 = () => {
  const result = fetch("https://mr-robot-express-api.herokuapp.com/seasons")
    .then((response) => {
      response.json().then((result) => {
        console.log(result);
      });
    })
    .catch((error) => console.log(error));

  return result;
};

const printInfoOfMrRobot = async () => {
  const information = await getDataFromApi(
    "https://mr-robot-express-api.herokuapp.com"
  );
  const post = document.getElementsByClassName("post-info-container")[0];

  // Creando elementos y dandoles clases
  const divOrigin = document.createElement("div");
  divOrigin.className = "origin";
  const divTitle = document.createElement("div");
  divTitle.className = "title";
  const divHyperLink = document.createElement("a");
  divHyperLink.className = "hyperlink";
  const subredditButton = document.createElement("button");
  subredditButton.className = "subreddit";
  const divThumbnail = document.createElement("div");
  divThumbnail.className = "thumbnail";
  const divActions = document.createElement("div");
  divActions.className = "actions";
  // FIn de creacion de elementos
  // Insertar elementos dentro del elemento padre (post)
  post.appendChild(divOrigin);
  post.appendChild(divTitle);
  post.appendChild(divHyperLink);
  divHyperLink.appendChild(subredditButton);
  post.appendChild(divThumbnail);
  post.appendChild(divActions);

  // Insertando texto dentro de los elementos
  divOrigin.innerHTML = `${information[0].name}`; // string interpolation
  divTitle.innerHTML = `${information[0].description}`;
  divThumbnail.style.backgroundImage = `url(${information[0].logo})`;
  subredditButton.innerHTML = `Ver lista de episodios`;
  divHyperLink.target = "_blank";
  divHyperLink.href = `${information[0].episodes.listSource}`;
};

// TODO -> Sacar información de otra API y pintarl en el segundo post.

isHiddenNotification();
printInfoOfMrRobot();
