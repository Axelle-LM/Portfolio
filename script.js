// Récupérer le nom du lien cliqué depuis le localStorage
const clickedLinkName = localStorage.getItem('clickedLinkName');

// Lire le fichier data.json avec fetch
fetch('data.json')
    .then(response => response.json()) // Convertir la réponse en JSON
    .then(jsonData => {
        // Vérifier si clickedLinkName existe et est dans jsonData
        if (clickedLinkName && jsonData[clickedLinkName]) {
            for (i of ["name", "contexte", "presentation", "role", "technologie"]) {
                if (jsonData[clickedLinkName][i] != null) {
                    document.getElementsByClassName(i)[0].innerHTML = jsonData[clickedLinkName][i];
                }
                else {
                    if (i == "role") {
                        document.getElementsByClassName("role-div")[0].remove()
                    } else {
                        document.getElementsByClassName(i)[0].remove()
                    }
                }
            }
            if (jsonData[clickedLinkName].img_background) {
                const backgroundImageUrl = jsonData[clickedLinkName].img_background;
                document.querySelector(".heading").style.backgroundImage = `url(${backgroundImageUrl})`;
            }
        }
        /*
            document.getElementsByClassName('titre-projet')[0].innerHTML = jsonData[clickedLinkName]["name"];
            document.getElementsByClassName('contexte')[0].innerHTML = jsonData[clickedLinkName]["contexte"];
            document.getElementsByClassName('presentation')[0].innerHTML = jsonData[clickedLinkName]["presentation"];
            if (jsonData[clickedLinkName]["role"] != null) { document.getElementsByClassName('role')[0].innerHTML = jsonData[clickedLinkName]["role"] } else { document.getElementsByClassName('rolediv')[0].remove() };
            document.getElementsByClassName('technologie')[0].innerHTML = jsonData[clickedLinkName]["technologie"];
        }
        */
    })
    .catch(error => {
        console.error('Erreur lors du chargement du fichier JSON :', error);
    });
