// import {photosGallery} from 'photosGallery.js';
//import photosGallery, { photosGallery as _photosGallery } from "photosGallery.js";
//console.log(_photosGallery);
const imgElementWrapper = document.querySelector("#imgWrapper");
const btnRight = document.querySelector("#btnRight");
const btnLeft = document.querySelector("#btnLeft");
const imgFromSlide = document.querySelector("#imgFromSlide");
const imgElement = document.querySelector("#imgWrapper");
const gridImageGallery = document.querySelector(".grid-ImageGallery");
let position = -1;
const imgNmbrInSlide = 5;
let bkgndTogler = 1;  
 
gridImageGallery.style.display = "none";

displayImagesInSlider();

setInterval(function(){ 
  if(bkgndTogler>=2){
    bkgndTogler=1;
  }else{
    bkgndTogler++;
  }
  document.body.id = "b" + bkgndTogler;
 }, 2000);

function displayImagesInSlider(){
    for(let i = 0; i < imgNmbrInSlide; i++){
        position++;    
        const img1 = document.createElement('img');
        img1.src = "images/"+photosGallery[position].src;
        img1.alt = photosGallery[position].alt;
        img1.name = position;
        img1.id = "img-element";
        imgElementWrapper.appendChild(img1);
    }
    position++;
}   

btnRight.addEventListener('click', e => {
  if(position >= photosGallery.length){
    alert("You reached the end of the slide!!!");
    return false;
  }
  else{
    imgElementWrapper.removeChild(imgElementWrapper.firstElementChild);  
    const myImg = document.createElement('img');
    myImg.src = "images/"+photosGallery[position].src;
    myImg.alt = photosGallery[position].alt;
    myImg.name = position;
    myImg.id = "img-element";
    imgElementWrapper.appendChild(myImg);
    position++;
  }
});

btnLeft.addEventListener('click', e => {
  if(position <= imgNmbrInSlide){
    alert("You reached the begining of the slide!!!");
    return false;
  }
  else{
    imgElementWrapper.removeChild(imgElementWrapper.lastElementChild);  
    const myImg = document.createElement('img');
    position--;
    myImg.src = "images/"+photosGallery[position-imgNmbrInSlide].src;
    myImg.alt = photosGallery[position-imgNmbrInSlide].alt;
    myImg.name = position-imgNmbrInSlide;
    myImg.id = "img-element";
    imgElementWrapper.insertBefore(myImg, imgElementWrapper.childNodes[0] );
  }
});

imgElementWrapper.addEventListener('mouseover', e => {
  if(e.target.nodeName == "IMG"){
    gridImageGallery.style.display = "grid";
    if (imgFromSlide.firstChild) imgFromSlide.removeChild(imgFromSlide.firstChild);
    
    /* Display the clicked picture */
    const myImg = document.createElement('img');
    myImg.src = "images/"+photosGallery[e.target.name].src;
    myImg.alt = photosGallery[e.target.name].alt;
    imgFromSlide.appendChild(myImg);
  
    /* Diplay the details of the person */
    document.getElementById("full-name").innerText = photosGallery[e.target.name].firstName +
                                                     " " + photosGallery[e.target.name].lastName;
    document.getElementById("joinedOn").innerText = photosGallery[e.target.name].joinedOn;
    document.getElementById("title").innerText = photosGallery[e.target.name].title;                                                 
    document.getElementById("nationality").innerText = photosGallery[e.target.name].nationality;                                                 
    document.getElementById("skills").innerText = photosGallery[e.target.name].skills.join(" ");                                                 
    document.getElementById("whySofterDeveloper").innerText = photosGallery[e.target.name].whySofterDeveloper;                                                 
    document.getElementById("longTermVision").innerText = photosGallery[e.target.name].longTermVision;                                                 
    document.getElementById("motivatesMe").innerText = photosGallery[e.target.name].motivatesMe;                                                 
    document.getElementById("favoriteQuote").innerText = photosGallery[e.target.name].favoriteQuote;     
  }
                                             
                                              
});