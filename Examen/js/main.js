

document.getElementById("enviar").onclick = function(){

    let search = document.getElementById("Text-input").value;

fetch('https://api.dictionaryapi.dev/api/v2/entries/en/'+search+'/')
    .then(response => response.json())
    .then(data => { 

        console.log(data.search);

        let table = document.getElementById("body-table")
        let tdw = document.getElementById("td-w")
        let tdD = document.getElementById("td-D")
        var definition = "";
        var example = "";
        let tdE = document.getElementById("td-E")
        let datas = data.map((element) => {
            tdw.innerHTML += element.search
            for(let i = 0; i < element.meanings.length; i++){
                for(let j = 0; j < element.meanings[i].definitions.length; j++){
                    tdD.innerHTML += (j+1)+") "+ element.meanings[i].definitions[j].definition
                    definition = definition + element.meanings[i].definitions[j].definition
                    if(element.meanings[i].definitions[j].example != undefined){
                        tdE.innerHTML += "Definición"+(j+1) +") " + element.meanings[i].definition
                    }
                }
            }
            document.getElementById(tdD).setAttribute(definition);
        }
        

    
    
       );  
    });
}

