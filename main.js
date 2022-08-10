const hideNotification = () => {      //Siempre trabajando en otra branch
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


const printInfoOfRickAndMorty = async () => {
  const information = await getDataFromApi(
    "https://rickandmortyapi.com/api/episode"
      );
      console.log(information);

  const post = document.getElementById("post-container");
    
  information.results.forEach((item, index) => {
  const divPost = document.createElement("div");
  divPost.className = "post";  
  const divVotes = document.createElement("div");
  divVotes.className = "votes";
  const divPostInfoContainer = document.createElement("div");
  divPostInfoContainer.className = "post-info-container";
  const divOrigin = document.createElement("div");  //primer div
  divOrigin.className = "origin";
  const globeButton = document.createElement("i");
  globeButton.className = "fa fa-globe";
  const Source = document.createElement("p");
  Source.className = "source";
  const joinButton = document.createElement("button");
  joinButton.id = "join";
  const divTitle = document.createElement("div");   //segundo div
  divTitle.className = "title";
  const divHyperLink = document.createElement("a");
  divHyperLink.className = "hyperlink";
  const subredditButton = document.createElement("button");
  subredditButton.className = "subreddit";
  const divThumbnail = document.createElement("div");
  divThumbnail.className = "thumbnail";
  const divActions = document.createElement("div"); //tercer div
  divActions.className = "actions";
  const commentButton  = document.createElement("button");
  commentButton.id = "join";
  // FIn de creacion de elementos
  
  // Insertar elementos dentro del elemento padre (post)
  post.appendChild(divPost);
  divPost.appendChild(divVotes);
  divPost.appendChild(divPostInfoContainer);
  divPostInfoContainer.appendChild(divOrigin);
  divOrigin.appendChild(globeButton);
  divOrigin.appendChild(Source);
  divOrigin.appendChild(joinButton);
  divPostInfoContainer.appendChild(divTitle);
  divPostInfoContainer.appendChild(divHyperLink);
  divHyperLink.appendChild(subredditButton);
  divPostInfoContainer.appendChild(divThumbnail);
  divPostInfoContainer.appendChild(divActions);
  
  // Insertando texto dentro de los elementos
  Source.innerHTML = ``; 
  Source.innerHTML = `${item.episode}`; // string interpolation
  joinButton.innerHTML = `Unirse`;
  divTitle.innerHTML = `${item.name}`;
  divThumbnail.style.backgroundImage = `url("https://picsum.photos/800/800/?random=${index}")`;
  subredditButton.innerHTML = `Ver lista de episodios Rick & Morty`;
  divHyperLink.target = "_blank";
  divHyperLink.href = `${item.url}`;
  divActions.innerHTML = `${item.created}`;
});
};


const changeBackground = () => {
  const randomImage = document.getElementsByClassName("news")
   for(let i = 0; i <= randomImage.length-1; i++){
     randomImage[i].style.backgroundImage = `url("https://picsum.photos/200/300/?random=${i}")`
     randomImage[i].style.filter = "brightness(0.75)"
     console.log(i)
   }

  const notification = document.getElementsByClassName(
    "language-notification"
  )[0];
}


const onClickFilter = (event) =>{
  console.log(event)
}

//isHiddenNotification();
//printInfoOfMrRobot();
printInfoOfRickAndMorty();
changeBackground();
