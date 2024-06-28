
   var currentLocation = location.href;
   var menuItem = document.querySelectorAll("a");
   var menuLenght = menuItem.length;

   for ( var i = 0 ; i < menuLenght ; i++){
     if( menuItem[i].href === currentLocation ){
       menuItem[i].className = "actives"
     }
   }
// var link = document.querySelectorAll(".nav-link_1");
// var link_navBar = Array.from(link)

// link_navBar.forEach( (ele)=>{
//   ele.addEventListener( 'click' , ()=>{
//     link_navBar.forEach((el)=>{
//       el.classList.remove("active")
//     })
//     ele.classList.add("active")
//   })
// })

// index page

$('.main-slide .owl-carousel').owlCarousel({
    items:5,
    loop:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
    
})

$(document).ready(function(){

  
  $(".owl-carousel img").mouseenter(function(){
    $(this).next("h5").css("color", "blue")
  })
  $(".owl-carousel img").mouseleave(function(){
    $(this).next("h5").css("color", "black")
  }) 
})

// index page


// page 2

var listElement = document.getElementById("list");
var pageElement = document.getElementById("page_number")
var currenPage = 1 ;
var row = 4;



card_page2 = document.querySelectorAll(".category .list .card")
listItems = Array.from(card_page2)

function Display(items , wrapper , rows_pre_page , page ){

  items.forEach(element => {
    element.style.display = "none"
  });
  
  page--;
          
  var  starts = rows_pre_page * page ; 
  var ends = starts+rows_pre_page ; 
  var paginationItems = items.slice(starts , ends);
  
for( var i = 0 ; i < paginationItems.length ; i++){

  var item = paginationItems[i];
  paginationItems[i].style.display = "block"
}
}


Display(listItems ,listElement , row ,currenPage );

// call function
function setUpPagination(items , wrapper , rows_pre_page){


var page_count = Math.ceil(items.length / rows_pre_page);
for( var i = 1 ; i< page_count + 1 ; i++){
 var btn = paginationButtom( i ,items);
 wrapper.appendChild(btn)
 
}
}



function paginationButtom( page ,items ){
 
var button = document.createElement("button")
button.innerText = page

if(currenPage == page ) button.classList.add("active")


button.addEventListener("click" , ()=>{
         currenPage = page
  Display(items , listElement , row ,currenPage)

  var currnt_button = document.querySelector(".page_number button.active")
  currnt_button.classList.remove("active")
  button.classList.add("active")
})
return button ;
}


// call function
Display(listItems ,listElement , row ,currenPage );
setUpPagination(listItems , pageElement ,row)

// page 2



// page 3

// var minus = document.querySelector(".minus"),
//         plus = document.querySelector(".plus"),
//         num = document.querySelector(".num");

//         var number = 1;

//         plus.addEventListener("click" , () =>{
//             number++ ;
            
//             num.innerText = number
//        });

//        minus.addEventListener("click" , () =>{
//             number-- ;

//             number = (number < 0 ) ? number = '0' : number

//             num.innerText = number


//        });
        

$('.information .info-img .owl-carousel').owlCarousel({
    items:4,
    loop:true,
    nav:true,
    margin:20,
    autoplay:true,
    autoplayTimeout:2000,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})
$('.slide-parts .owl-carousel').owlCarousel({
    items:5,
    loop:true,
    nav:true,
    margin:20,
     autoplay:true,
     autoplayTimeout:2000,
        responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})






var img_page3 = document.querySelectorAll(".information .img-click");
  var changeImg = document.querySelector(".information .change-img");
  var scrimage = changeImg.getAttribute('src')  
  var exsit = document.querySelector(".information .main-img .exsit");
  var imgs_page3 = Array.from(img_page3);
$(document).ready(function(){

  
  

    imgs_page3.forEach((el)=>{
    el.addEventListener('click' , ()=>{
        imgs_page3.forEach((ele)=>{
        ele.style.filter ="none"
      })
          changeImg.setAttribute('src',el.getAttribute('src'))
          el.style.filter =" grayscale()"
          exsit.style.display = "block"
    })
   
 })
})


exsit.addEventListener("click" ,()=>{
 changeImg.setAttribute('src' , scrimage)
 exsit.style.display = "none"

 imgs_page3.forEach((el)=>{
  el.style.filter="none"
 })
    })
   
// page 3


