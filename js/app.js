/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let button1 = document.createElement("button");
button1.innerHTML= "section 1";
let nav1 = document.getElementById("nav1");


let link1 = document.createElement("a");

link1.setAttribute("href","#section1");
link1.appendChild(button1);
nav1.appendChild(link1);
//2
let button2 = document.createElement("button");
button2.innerHTML= "section 2";
let nav2 = document.getElementById("nav2");

let link2 = document.createElement("a");

link2.setAttribute("href","#section2");
link2.appendChild(button2);
nav2.appendChild(link2);

//3
let button3 = document.createElement("button");
button3.innerHTML= "section 3";
let nav3 = document.getElementById("nav3");


let link3 = document.createElement("a");

link3.setAttribute("href","#section3");
link3.appendChild(button3);
nav3.appendChild(link3);

//4
let button4 = document.createElement("button");
button4.innerHTML= "section4";
let nav4 = document.getElementById("nav4");
button4.classList.add("buttons");
let link4 = document.createElement("a");

link4.setAttribute("href","#section4");
link4.appendChild(button4);
nav4.appendChild(link4);


//5
let button5 = document.createElement("button");
button5.innerHTML= "section5";
let nav5 = document.getElementById("nav5");
button5.classList.add("buttons");
let link5 = document.createElement("a");

link5.setAttribute("href","#section5");
link5.appendChild(button5);
nav5.appendChild(link5);


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


const scrolled = document.getElementById("section1").getBoundingClientRect();


document.addEventListener("scroll",function(){

   
    
    if(window.scrollY <= scrolled.bottom ){
button1.classList.add("hov");

 
}else{
    button1.classList.remove("hov");
}
})


const scrolled2 = document.getElementById("section2").getBoundingClientRect();


document.addEventListener("scroll",function(){

   
    
    if(window.scrollY <= scrolled2.bottom && window.scrollY >= scrolled.bottom   ){
button2.classList.add("hov");

 
}else{
    button2.classList.remove("hov");
}
})
const scrolled3 = document.getElementById("section3").getBoundingClientRect();


document.addEventListener("scroll",function(){

   
    
    if(window.scrollY <= scrolled3.bottom && window.scrollY >= scrolled2.bottom  ){
button3.classList.add("hov");

 
}else{
    button3.classList.remove("hov");
}
})
const scrolled4 = document.getElementById("section4").getBoundingClientRect();


document.addEventListener("scroll",function(){

   
    
    if(window.scrollY <= scrolled4.bottom && window.scrollY >= scrolled3.bottom ){
button4.classList.add("hov");

 
}else{
    button4.classList.remove("hov");
}
})
const scrolled5 = document.getElementById("section5").getBoundingClientRect();


document.addEventListener("scroll",function(){

   
    
    if(window.scrollY <= scrolled5.bottom  && window.scrollY >= scrolled4.bottom ){
button5.classList.add("hov");

 
}else{
    button5.classList.remove("hov");
}
})

//document.querySelectorAll("li").classList.add("hov");

/*
let addActiveClass = function (id){

    console.log(id);
    let selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("your-active-class");
}
let removeAllActivelasses = function(){
    document.querySelectorAll("nav ul li a" ).forEach(()=>{
        .classList.remove("your-active-class");
    }
        
    )
}

let sectionhover = document.queryselectorall(".sectionh");

onscroll = function(){
let scrollposition = this.document.documentElement.scrollTop;
sectionhover.forEach( section => {
if(scrollposition>= section.offsettop && scrollposition <section.offsettop + section.offsetheight) {
    addActiveClass(sectionhover);
}   
});
}
*/
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active