const listItems = [
    "items_1",
    "items_2",
    "items_3",
    "items_4",
    "items_5",
    "items_6",
    "items_7",
    "items_8",
    "items_9",
    "items_10",
    "items_11",
    "items_12",
    "items_13"
];

console.log(listItems)

const listElement = document.getElementById("list");
const pageElement = document.getElementById("page_number")

let currenPage = 1;
let row = 5;

function Display(items , wrapper , rows_pre_page , page ){

    wrapper.innerHTML = "";
    page--

     let starts= rows_pre_page * page ; 
     let ends = starts+rows_pre_page ; 
     let paginationItems = items.slice(starts , ends);

    //  
     for( let i = 0 ; i < paginationItems.length ; i++){
            
        let item = paginationItems[i];
        console.log(paginationItems[i])
        let item_element = document.createElement("div");
        item_element.classList.add('item');
        item_element.innerHTML = item ;

        wrapper.appendChild(item_element)
        

    }
}

Display(listItems ,listElement , row ,currenPage );

 function setUpPagination(items , wrapper , rows_pre_page){

    //  wrapper.innerHTML = "";

     let page_count = Math.ceil(items.length / rows_pre_page);
     for( let i = 1 ; i< page_count + 1 ; i++){

       let btn = paginationButtom( i ,items);
       
       wrapper.appendChild(btn)
     }
 }

 function paginationButtom( page ,items ){
    let button = document.createElement("button")
    button.innerText = page

    if(currenPage == page ) button.classList.add("active")

    button.addEventListener("click" , ()=>{
        
        currenPage = page
        Display(items , listElement , row ,currenPage)

        let currnt_button = document.querySelector(".page_number button.active")
        currnt_button.classList.remove("active")

        button.classList.add("active")
    })

    return button ;
 }
Display(listItems ,listElement , row ,currenPage );

setUpPagination(listItems , pageElement ,row)
