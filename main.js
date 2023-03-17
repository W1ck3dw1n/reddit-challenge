
//view's scripts


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

function cardView (){
  const postSection = document.getElementById("post-container");
   postSection.style.visibility = buttonDisplay ? "hidden" : "visible";
    buttonDisplay =! buttonDisplay;
   // printInfoOfRickAndMorty();
  }
  
mybutton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 560 || document.documentElement.scrollTop > 560) {  //cantidad de pixeles para que aparezca
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0; 
}





//component's scripts

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





//API related scripts

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
    "https://rickandmortyapi.com/api/episode");
      console.log(information); //view content of Api's Array
  
  const post = document.getElementById("post-container");
   
  information.results.forEach((item, index) => {

  const divPost = document.createElement("div");  //div completo
  divPost.className = "post";  
  const divVotes = document.createElement("div");
  divVotes.className = "votes";
  const divPostInfoContainer = document.createElement("div"); //div que contiene todas las filas del post
  divPostInfoContainer.className = "post-info-container";
  const divOrigin = document.createElement("div");  //primer div
  divOrigin.className = "origin";
  const globeButton = document.createElement("i");
  globeButton.className = "fa fa-globe";
  const subreddit = document.createElement("a");
  subreddit.className = "subreddit";
  const Date = document.createElement("p");
  Date.className = "source";
  const joinButton = document.createElement("button");
  joinButton.id = "join";
  const divTitle = document.createElement("div");   //segundo div
  divTitle.className = "title";
  const postTitle = document.createElement("p");
  postTitle.className = "postTitle";
  const divHyperLink = document.createElement("button");
  divHyperLink.className = "tag";
  const divThumbnail = document.createElement("div"); //tercer div
  divThumbnail.className = "thumbnail";
  const divActions = document.createElement("div"); //cuarto div
  divActions.className = "actions";
  const commentButton  = document.createElement("button");
  commentButton.className = "actions button";
  const commentIcon = document.createElement("i");
  commentIcon.className = "fa fa-comment-o";
  const shareButton  = document.createElement("button");
  shareButton.className = "actions button";
  const shareIcon = document.createElement("i");
  shareIcon.className = "fa fa-share";
  const saveButton  = document.createElement("button");
  saveButton.className = "actions button";
  const saveIcon = document.createElement("i");
  saveIcon.className = "fa fa-bookmark-o";
  const moreButton  = document.createElement("button");
  moreButton.className = "actions button";
  const moreIcon = document.createElement("i");
  moreIcon.className = "fa fa-ellipsis-h";
  // FIn de creacion de elementos
  
  // Insertar elementos dentro del elemento padre (post)
  post.appendChild(divPost);
  divPost.appendChild(divVotes);
  divPost.appendChild(divPostInfoContainer);
  divPostInfoContainer.appendChild(divOrigin);
  divOrigin.appendChild(globeButton);
  divOrigin.appendChild(subreddit);
  divOrigin.appendChild(Date);
  divOrigin.appendChild(joinButton);
  divPostInfoContainer.appendChild(divTitle);
  divTitle.appendChild(postTitle);
  divTitle.appendChild(divHyperLink);
  divPostInfoContainer.appendChild(divThumbnail);
  divPostInfoContainer.appendChild(divActions);
  divActions.appendChild(commentButton);
  commentButton.appendChild(commentIcon);
  divActions.appendChild(shareButton);
  shareButton.appendChild(shareIcon);
  divActions.appendChild(saveButton);
  saveButton.appendChild(saveIcon);
  divActions.appendChild(moreButton);
  moreButton.appendChild(moreIcon);
  
  
  // Insertando texto dentro de los elementos
  //Origin.innerHTML = ``; 
  subreddit.innerHTML = `${item.name}`; // string interpolation
  Date.innerHTML = `Publicado: ${item.air_date}`; // string interpolation
  joinButton.innerHTML = `Unirse`;
  postTitle.innerHTML = `${item.created}`;
  //postTitle.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis id dolorum doloribus tempora aspernatur esse nisi, ducimus sint.`;
  divHyperLink.innerHTML = `${item.episode}`;
  divHyperLink.target = "_blank"; //abre una pestaña nueva
  divThumbnail.style.backgroundImage = `url("https://picsum.photos/800/800/?random=${index}")`;
  //commentButton.innerText = `Comentarios:`;
});
};



const changeBackground = () => {
  const randomImage = document.getElementsByClassName("news")
   for(let i = 0; i <= randomImage.length-1; i++){
     randomImage[i].style.backgroundImage = `url("https://picsum.photos/200/300/?random=${i}")`
     randomImage[i].style.filter = "brightness(0.75)"
   }

  const notification = document.getElementsByClassName(
    "language-notification"
  )[0];
}





const featured = document.getElementById("featured");
const country = document.getElementById("country");
const newest = document.getElementById("newest");
const mostVoted = document.getElementById("mostVoted");
const onRise = document.getElementById("onRise");
const viewSelector = document.getElementById("viewSelector");

featured.addEventListener('click', toggleButtonStyles);
country.addEventListener('click', toggleButtonStyles);
newest.addEventListener('click', toggleButtonStyles);
mostVoted.addEventListener('click', toggleButtonStyles);
onRise.addEventListener('click', toggleButtonStyles);
viewSelector.addEventListener('click', toggleButtonStyles);

/*la funcion debe hacer esto en este orden:
1 - alterar el estado de las cosas dependiendo del boton que se haya presionado

Pero ahora entiendo que no tendria que ser funcion, si no constante, porque esto no se puede reutilizar
para algo mas
*/
function toggleButtonStyles() {
  this.classList.toggle('active');
  console.log('oira');
    if (featured.classList.contains('active')){
      country.classList.add('active');
      newest.classList.remove('active');
      mostVoted.classList.remove('active');
      onRise.classList.remove('active');
      viewSelector.classList.remove('active');
  } else if (newest.classList.contains('active')){
    console.log('oira2');
    featured.classList.remove('active');
    country.classList.add('active');
    mostVoted.classList.remove('active');
    onRise.classList.remove('active');
    viewSelector.classList.remove('active');
  }
}


//isHiddenNotification();
printInfoOfRickAndMorty();
changeBackground();
