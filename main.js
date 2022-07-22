const hideNotification = () => {      //ahista mi rama v:
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
  
  // llamar al elemento topnav
  const nav = document.getElementsByTagName("nav")[0];

  nav.style.opacity = "0.5";
  main.style.opacity = "0.5";
  modal.style.display = "block";
};

const closeModal = () => {
  //llamar al elemento modal
  const modal = document.getElementById("modal");
  // llamar al elemento main
  const main = document.getElementsByTagName("main")[0];
  
  const nav = document.getElementsByTagName("nav")[0];
  
  modal.style.display = "none";
  main.style.opacity = "1"; 
  nav.style.opacity = "1"; 
  
};

// TODO estudiar el then y catch :v segunda opcion, luego fue try y catch
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

const getDataFromApi = async (api) => {     //funcion recurrente
  try {
      const response = await fetch(api);
      const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
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
  divHyperLink.target = "_blank"; //este abre una pestaña nueva
  divHyperLink.href = `${information[0].episodes.listSource}`;
};

const printInfoOfRickAndMorty = async () => {
  const information = await getDataFromApi(
    "https://rickandmortyapi.com/api/episode"
      );
    const found = information.results.find((item)=>{ 
        return item.id === 5})
  
  const post = document.getElementsByClassName("post-info-container")[1];

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
  divOrigin.innerHTML = `${found.name}`; // string interpolation
  divTitle.innerHTML = `${found.episode}`;
  divThumbnail.style.backgroundImage = `url(https://as01.epimg.net/epik/imagenes/2019/01/03/portada/1546504221_002420_1546506356_noticia_normal_recorte1.jpg)`;
  subredditButton.innerHTML = `Ver lista de episodios Rick & Morty`;
  divHyperLink.target = "_blank";
  divHyperLink.href = `${found.url}`;
};

const changeBackground = () => {
  const randomImage = document.getElementsByClassName("news")
   for(let i = 0; i <= randomImage.length-1; i++){
     randomImage[i].style.backgroundImage = `url("https://picsum.photos/200/300/?random=${i}")`
     console.log(i)
   }

  const notification = document.getElementsByClassName(
    "language-notification"
  )[0];
}

const onClickFilter = (event) =>{
  console.log(event)

}

// TODO -> Sacar información de otra API y pintarlo en el segundo post.

//isHiddenNotification();
printInfoOfMrRobot();
printInfoOfRickAndMorty();
changeBackground();
