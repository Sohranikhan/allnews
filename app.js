let main = document.querySelector(".main");
 
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