let bird = document.getElementById("bird");
let box = document.getElementById("birdbox");
/* Make a Bird Move Inside The bar */
let pixls = 0;
let togle = true;
let Bird_Anmiation = setInterval(()=> 
  {
    /* the Togle Use Is To Know When Change Diraction */
    if ( togle == true)
    {
      pixls = pixls + 2 ;
      /* To Make The Bird Movement Related to Box width aka To Be Usable For any Device. */
      if (pixls >= box.clientWidth-80)
      {togle = false ;
      bird.style.cssText = 'transform: rotatey(0deg);  ';}
    }

    if ( togle == false) {
      pixls = pixls-2;
      if (pixls <= 0)
     { togle = true ;
      bird.style.cssText = 'transform: rotatey(180deg);  ';}
    }
    /* move the bird BY pixls */
    move(pixls);
  }, 20);
/* evry 20 ms the bird move 2 px */
function move(pixls) 
  {
  bird.style.left = pixls  + 'px';
  }
/* Here We End Bird Movements */ 
let Sections = document.querySelector("#sections_box");
let select = document.querySelectorAll(".button");
let TheBar = document.querySelector("#selector");
// To Show and Hide Sections Slide Box 
Sections.addEventListener("mouseover" ,  () =>
{
  for (let i = 2 ; i <= 5 ; i++)
  {
    select[i].style.display = "block";
  }
});
Sections.addEventListener("mouseleave" , () =>
{
  for (let i = 2 ; i <= 5 ; i++)
  {
    select[i].style.display = "none"; 
  }
});
// To Let Home Buuton Lead To Top of The Page
let home = document.querySelector("#home");
home.addEventListener("click",() => 
  {
    scroll(0,0)
  })
// To Show The Bar While Going Up And Hide While Going Down
let yindx = window.scrollY;
document.addEventListener("scroll",()=>
{
  if (yindx >50)
  {
      if (yindx >= window.scrollY)
    {
      TheBar.classList.remove("hidden")
    }
    else if (yindx < window.scrollY)
    { 
      TheBar.classList.add("hidden")
    }
    }
    yindx = window.scrollY;
  })
// To Collabse The Sections
// I Put tog To Detrmine When It Open And When Not
let tog = false ;
let selections = document.querySelectorAll(".section");
let Buttons = document.querySelectorAll(".button");
let counter = 0;
for (let selected of selections)
{
  selected.addEventListener("click",() =>
  {
    if (tog == false)
    {
      selected.nextElementSibling.style.display = "none";
      tog = true ;
      selected.style.cssText = 'box-shadow: 2px 2px 5px rgb(0, 0, 0.2);';
    }
    else if (tog == true)
    {
      selected.nextElementSibling.style.display = "block";
      tog = false ;
      selected.style.cssText ='box-shadow: 2px 2px -5px rgb(0, 0, 0.2);';
    }
  });
  // OtherWise Making A new For Loop For Nothing I Used The Same For Loop For Collapsing 
  // To Make Evry Section Button To Head To It's Section (maping) 
  Buttons[counter+2].addEventListener("click",()=>
  {
    let posY = selected.offsetTop-35 ;
    scroll(0,posY)
  })
  counter += 1;
}
// Please Comment Me How Could It Be Better Even if This Project Accepted Thanks For You Time 







  
