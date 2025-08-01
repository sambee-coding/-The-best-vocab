
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
        document.querySelector(".examp-output").innerHTML=`<p><strong>Example:</strong> ${example}</p>`;
          }
        else{
      document.querySelector(".examp-output").innerHTML = "";

        }
          // ✅ Extract part of speech
        let partOfSpeech = data[0].meanings[0].partOfSpeech;
        if (partOfSpeech) {
          document.querySelector(".speech-output").innerHTML =
            `<p><strong>Part of Speech:</strong> ${partOfSpeech}</p>`;
        } else {
          document.querySelector(".speech-output").innerHTML = "";
        }
       let synonyms = data[0].meanings[0].definitions[0].synonyms;
if (synonyms && synonyms.length > 0) {
  document.querySelector(".synonym-output").innerHTML =
    `<p><strong>Synonyms:</strong> ${synonyms.join(", ")}</p>`;
} else {
  document.querySelector(".synonym-output").innerHTML =
    `<p>Oops! No synonyms provided.</p>`;
}
      })
    
     .catch((error) =>{
        document.querySelector(".def-output").innerHTML = `<p>${error.message}</p>`;
      document.querySelector(".example-output").innerHTML = "";
    
     });
      
        
    }
      let searchForm=document.querySelector("#search");
  searchForm.addEventListener("submit",searchSubmit);
function getBackupAudio(word) {
 
  let backupAudioUrl = `https://api.dictionaryapi.dev/media/pronunciations/en/${word}-us.mp3`;

  document.querySelector(".Audio-pronunciation").innerHTML = `
    <p><strong>Backup Audio:</strong></p>
    <audio controls src="${backupAudioUrl}"></audio>
  `;
}