
  document.querySelectorAll('.layer').forEach(layer => {
    layer.addEventListener('click', () => {
      layer.classList.toggle('checked'); // toggle check on click
    });
  });
   function searchSubmit(event){
    event.preventDefault();
    let word=document.querySelector("#input").value.trim();
      let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
      fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
       throw new Error("the word is not found🥶");
        }
        return response.json();
      })
      .then((data)=>{
        let meaning=data[0].meanings[0].definitions[0].definition;
       document.querySelector(".def-output").innerHTML = `<p><strong>Definition:</strong> ${meaning}</p>`;
    
          let example=data[0].meanings[0].definitions[0].example;
          if(example){
        document.querySelector(".examp-output").innerHTML=`<p><strong>Definition:</strong> ${example}</p>`;
          }
        else{
          document.querySelector(".examp-output").innerHTML="There is no avialiable example."
        }
      })
     .catch((error) =>{
        document.querySelector(".def-output").innerHTML = `<p>${error.message}</p>`;
      document.querySelector(".example-output").innerHTML = "";
    
     });
      
        
    }
      let searchForm=document.querySelector("#search");
  searchForm.addEventListener("click",searchSubmit);

