const arrow=document.querySelectorAll(".arrsl")
const movielist=document.querySelectorAll(".movie-list")

// slider
arrow.forEach((arrow,i)=>{
    const lenNum=(movielist[i].querySelectorAll("img").length)-4
    let clickCounter=0
    arrow.addEventListener("click",()=>{
        clickCounter++
        const MoviesVisible= Math.floor(window.innerWidth/320)
        if(clickCounter<=(lenNum+4-MoviesVisible)){
            movielist[i].style.transform=`translateX(${movielist[i].computedStyleMap().get("transform")[0].x.value-320}px)`
        }
        else{
            movielist[i].style.transform=`translateX(0)`
            clickCounter=0
        }
    })
    // console.log(movielist[i].computedStyleMap().get("transform")[0].x.value)
    // console.log(movielist[i].querySelectorAll("img").length)

    // but this has problem, when screen is smaller, we dont need the "4" as 4 is number of movies already visible, therefore we need smaller number
    // which is console.log(Math.floor(window.innerWidth/320))
})

// light mode

function customizeScrollbar() {
    var style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 15px;
      }
  
      ::-webkit-scrollbar-thumb {
        background-image: linear-gradient(180deg,  rgb(139, 14, 223), rgb(93, 93, 249));
        border-radius: 20px;
      }
  
      ::-webkit-scrollbar-track {
        background-color: rgb(228,228,228);
      }
    `;
    document.head.appendChild(style);
  }
// Call the function to customize the scrollbar

function dontcustomizeScrollbar() {
    var style = document.createElement('style');
    style.innerHTML = `
      ::-webkit-scrollbar {
        width: 15px;
      }
  
      ::-webkit-scrollbar-thumb {
        background-image: linear-gradient(180deg,  rgb(205, 205, 100), rgb(169, 101, 38));
        border-radius: 20px;
      }
  
      ::-webkit-scrollbar-track {
        background-color: rgb(10, 0, 0);
      }
    `;
    document.head.appendChild(style);
}

const ball= document.querySelector(".toggle-ball")
const items=  document.querySelectorAll(".copyright, .foot, .para ,.handles, .name, .fa-brands, .toggle-ball, .navbar-container, .sidebar, .container, .list-item-tit, .list-item-des, .featured-content1, .featured-content2, .feature-des, .logo, .left-menu-icon, .movie-list-title, .feature-but, .Toggle, .item-button, .arrsl, .fa-solid.fa-sun")
var count=0;
ball.addEventListener("click",()=>{
    items.forEach(items=>{
        items.classList.toggle("light")
    })
    count++;
    if(count%2!=0){
        customizeScrollbar();
    }
    else{
        dontcustomizeScrollbar();
    }
})

// socials
const insta= document.querySelector(".fa-instagram")
const twitter= document.querySelector(".fa-twitter")
const facebook= document.querySelector(".fa-facebook")
const linkedin= document.querySelector(".fa-linkedin")
const snapchat= document.querySelector(".fa-snapchat")
insta.addEventListener("click",()=>{
    window.location.href='https://www.instagram.com/ausaf_hasib/?igsh=ZGNjOWZkYTE3MQ%3D%3D';
})
twitter.addEventListener("click",()=>{
    window.location.href='https://twitter.com/ausafhasib?lang=en';
})
facebook.addEventListener("click",()=>{
    window.location.href='https://www.facebook.com/p/Syed-Ausaf-Hasib-100084482803149/';
})
linkedin.addEventListener("click",()=>{
    window.location.href='https://www.linkedin.com/in/ausaf-hasib-8b1581270/?originalSubdomain=in';
})
snapchat.addEventListener("click",()=>{
    window.location.href='https://www.snapchat.com/add/memiswak?share_id=1nHUp1CpCOw&locale=en-GB';
})

// Navbar scroll and sidebar
const home=document.querySelector(".home");
const homei=document.querySelector(".fa-house-chimney");
const inco=document.querySelector(".fa-user-secret");
const movies=document.querySelector(".movies");
const series=document.querySelector(".series");
const popular=document.querySelector(".popular");
const trends=document.querySelector(".trends");
const about=document.querySelector(".about");
home.addEventListener("click",()=>{
    window.scrollTo(0, 0)
    window.location.href="MyMovies.html"
})
homei.addEventListener("click",()=>{
    window.scrollTo(0, 0)
})
movies.addEventListener("click",()=>{
    window.scrollTo(0,250)
})
series.addEventListener("click",()=>{
    window.scrollTo(0,525)
})
popular.addEventListener("click",()=>{
    window.scrollTo(0,1190)
})
trends.addEventListener("click",()=>{
    window.scrollTo(0,1460)
})
about.addEventListener("click",()=>{
    window.scrollTo(0,5000)
})
inco.addEventListener("click",()=>{
    window.location.href="https://search.brave.com/?mtm_date=20231224"
})

// interstellar
const stellarbut=document.querySelector(".feature-but")
stellarbut.addEventListener("click",()=>(
    window.location.href="Interstellar.html"
))