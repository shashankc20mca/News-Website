let url;




 function funtest(){
  console.log("entered");
let input=document.querySelector(".line1 .search input");
  let msg=input.value;
  url=`https://newsapi.org/v2/everything?q=${msg}&from=2024-08-21&sortBy=publishedAt&apiKey=202af0b2c503431b99b5407ade363bb5`;
  fetch_news(1);
  url=null;
 }




function tesla(){
   url="https://newsapi.org/v2/everything?q=tesla&from=2024-08-21&sortBy=publishedAt&apiKey=202af0b2c503431b99b5407ade363bb5";
  fetch_news(1);
 
}

function news(){
   url="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=202af0b2c503431b99b5407ade363bb5";
  fetch_news();
}
function business(){
  url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=202af0b2c503431b99b5407ade363bb5";
 fetch_news();
}
function health(){
  url="https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=202af0b2c503431b99b5407ade363bb5";
 fetch_news();
}
function sports(){
  url="https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=202af0b2c503431b99b5407ade363bb5";
 fetch_news();
}

function fetch_news(){
  let r=document.querySelector(".cards");
r.innerHTML="";
 
fetch(url).then((r)=>(r.json())).then((ob)=>{
  console.log(ob);console.log(ob.articles[8].author);
  for(let i=0;i<(ob.articles).length;i++){
    if( ob.articles[i].title!=null&&ob.articles[i].description!=null&&ob.articles[i].urlToImage!=null){
    let cd=document.createElement("div");
    cd.classList.add("card_1");
  
    let ti=document.createElement("div");
    ti.classList.add("title");
   
    let des=document.createElement("div");
    des.classList.add("description");
    let lnk=document.createElement("a");
    
    let im=document.createElement("div");
    im.classList.add("imag");
    
    let img=document.createElement("img");
   
      ti.innerText=ob.articles[i].title.slice(0,45);
      des.innerText=ob.articles[i].description.slice(0,145);
      img.setAttribute("src",ob.articles[i].urlToImage);
      lnk.innerText="Read more";
      lnk.setAttribute("href",ob.articles[i].url);
      lnk.setAttribute("target","_blank");

      ///used to display the default image when u get error loading the content
      img.setAttribute("onerror",'this.src="ne.png";');
 
    // ob.articles[i].title!=null?ti.innerText=ob.articles[i].title.slice(0,45):null;
    // ob.articles[i].description!=null? des.innerText=ob.articles[i].description.slice(0,145):null;
    // ob.articles[i].urlToImage!=null?img.setAttribute("src",ob.articles[i].urlToImage):null;
    r.appendChild(cd);
    cd.appendChild(ti);
    des.appendChild(lnk);
    cd.appendChild(des);
    
    cd.appendChild(im);
    im.appendChild(img);
  }

}

}).catch((err)=>(console.log(err)));

}


{/* <div class="cards">
<div class="card_1">
<div class="title">Cat!</div>
<div class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cumque nisi a quae maxime quisquam vitae, sit, sint natus asperiores culpa dolores neque illo, explicabo voluptatibus? Obcaecati reiciendis atque vero.</div>
<div class="imag"><img src="ne.png"></div>
</div>
</div> */}