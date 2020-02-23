let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
      addToysToDiv(); 
      const submit = document.getElementsByClassName("submit"); 
      submit[0].addEventListener("click", e => { 
          e.preventDefault();  
          postToy() }
          );

  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });
});
 

function addToysToDiv(){ 

fetchToys()

} 

function fetchToys(){ 
  fetch('http://localhost:3000/toys').then( function(response){ 
    console.log(response)  
  return response.json() 

  }) 
  .then( json => {  
  const toyBox = document.getElementById("toy-collection"); 
    for (key of json ){  
      
      divEl = document.createElement("div");
      divEl.setAttribute("class", "card"); 
      divEl.setAttribute("id", key["id"]);
      hEl = document.createElement("h2");
      hEl.innerHTML = key["name"] 
      imgEl = document.createElement("img");
      imgEl.setAttribute("src", key["image"]); 
      imgEl.setAttribute("class", "toy-avatar"); 
      pEl = document.createElement("p");
      pEl.innerHTML = key["likes"];  
      buttonEl = document.createElement("button"); 
      buttonEl.innerHTML = "like"; 
      buttonEl.setAttribute("class", "like-btn");
      buttonEl.addEventListener("click", updatePatch);
      divEl.appendChild(pEl) 
      divEl.appendChild(buttonEl)
      divEl.appendChild(hEl) 
      divEl.appendChild(imgEl)
      toyBox.appendChild(divEl)
    }

  })
} 

function updatePatch(e){ 
     

   e.target.parentElement.innerText 
    let newLike = ++ e.target.parentElement.innerText[0]; 
    let iD =  e.target.parentElement.id
    const url = `http://localhost:3000/toys/${iD}`
    const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "likes": newLike 
})
        }; 
        
        fetch(url, configObj).then(res => res.json()) 
        .then( json => {  
          const card = document.getElementById(json["id"])   
          let likest = card.childNodes[0] 
          likest.innerHTML = json["likes"]
         }) ;
        
        
        
        
} 

function postToy(){  
  
  formData = new FormData
  
  
  debugger

}