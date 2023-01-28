let main = document.querySelector(".main");
 let getdat1 = async()=>{ 

    let data = await fetch('https://nodeapigithubio-production.up.railway.app/')
   let response = await data.json()
   
   resimgall1(response)
   }
   const resimgall1=(response)=>{
       response.forEach(element => {
           
       let card = document.createElement("div");
       card.classList.add('card')
       card.innerHTML=`
       <img src="${element.src}" alt="">
       <div class="flex">
       <h1>${element.parag}</h1>
       <h3 class="para">${element.head}</h3>
      
   
   </div>
      `
       main.appendChild(card);
   });
   }
       
   
   getdat1()
let getdat = async()=>{ 

 let data = await fetch('https://worldnews-production.up.railway.app/')
let response = await data.json()

resimgall(response)
}
const resimgall=(response)=>{
    response.forEach(element => {
        
    let card = document.createElement("div");
    card.classList.add('card')
    card.innerHTML=`
    <img src="${element.imgurl}" alt="">
    <div class="flex">
    <h1>${element.hed}</h1>
    <h3 class="para">${element.p}</h3>
   

</div>
   `
    main.appendChild(card);
});
}
    

getdat()
