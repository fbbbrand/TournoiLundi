function calculer(input) {
    // Trouver la cellule dans la même ligne où afficher le résultat
    var celluleResultat = input.parentElement.nextElementSibling;

    // Récupérer la valeur du champ Gain
    var gain = parseFloat(input.value);

    // Limiter à 2 décimales
    gain = parseFloat(gain.toFixed(2));

    // Calculer le résultat
    var resultat = gain / 0.2;

    // Mettre à jour la cellule avec le résultat limité à 2 décimales
    celluleResultat.textContent = resultat.toFixed(2);

    // Appliquer les styles en fonction de la valeur
    if (resultat < 40) {
        celluleResultat.style.backgroundColor = "#F04422";
    } else if (resultat >= 40 && resultat <= 80) {
        celluleResultat.style.backgroundColor = "#E2961A";
    } else {
        celluleResultat.style.backgroundColor = "#23B640";
    }

    // Appliquer le style du texte
    celluleResultat.style.color = "white";
    celluleResultat.style.fontWeight = "bold";
}


function ajouterPseudo(input) {
    const pseudo = input.value.trim();
    if (pseudo !== '') {
        const datalist = document.getElementById('pseudos');
        const options = datalist.getElementsByTagName('option');
        let existeDeja = false;

        for (let i = 0; i < options.length; i++) {
            if (options[i].value === pseudo) {
                existeDeja = true;
                break;
            }
        }

        if (!existeDeja) {
            const nouvelleOption = document.createElement('option');
            nouvelleOption.value = pseudo;
            datalist.appendChild(nouvelleOption);

            // Stockez la liste mise à jour dans le localStorage
            localStorage.setItem('listePseudos', datalist.innerHTML);
        }
    }
}

function ajouterSlot(input) {
    const slot = input.value.trim();
    if (slot !== '') {
        const datalist = document.getElementById('slots');
        const options = datalist.getElementsByTagName('option');
        let existeDeja = false;

        for (let i = 0; i < options.length; i++) {
            if (options[i].value === slot) {
                existeDeja = true;
                break;
            }
        }

        if (!existeDeja) {
            const nouvelleOption = document.createElement('option');
            nouvelleOption.value = slot;
            datalist.appendChild(nouvelleOption);

            // Stockez la liste mise à jour dans le localStorage
            localStorage.setItem('listeSlots', datalist.innerHTML);
        }
    }
}

function trierTableau() {
    var table = document.getElementById("monTableau");
    var rows = table.rows;

    var rowsArray = Array.from(rows).slice(1);

    rowsArray.sort(function(rowA, rowB) {
        var cellA = parseFloat(rowA.cells[3].textContent);
        var cellB = parseFloat(rowB.cells[3].textContent);
        return cellB - cellA;
    });

    for (var i = 0; i < rowsArray.length; i++) {
        table.appendChild(rowsArray[i]);
    }
}

function remplirTableau() {
    var table = document.getElementById("monTableau");
    var rows = table.rows;

    for (var i = 0; i < 8; i++) {
        var pseudo = rows[i+1].cells[0].querySelector("input").value;
        var casePseudo = document.getElementById('pseudoGagnant' + (i + 1));
        
        if (casePseudo) {
            casePseudo.textContent = pseudo;
        }
    }
}

// Ajoutez ces lignes dans votre code pour définir les événements pour chaque bouton
document.querySelector('.btn').addEventListener('click', trierTableau);
document.querySelector('.btn2').addEventListener('click', remplirTableau);



function afficherArbre() {
    // Cacher le tableau 1
    var tableau1 = document.querySelector('.tableau1');
    tableau1.style.display = 'none';

    // Cacher les boutons btn et btn2
    var btn = document.querySelector('.btn');
    var btn2 = document.querySelector('.btn2');
    var btn3 = document.querySelector('.btn3');
    btn.style.display = 'none';
    btn2.style.display = 'none';
    btn3.style.display = 'none';
   

    // Afficher la div .bracket
    var bracket = document.querySelector('.bracket');
    bracket.style.display = 'block';
    var demi = document.querySelector('.demi');
    demi.style.display = 'block';
    var final = document.querySelector('.final');
    final.style.display = 'block';
}

document.querySelector('.btn3').addEventListener('click', afficherArbre);

function determinerGagnant() {
    var multi1 = parseFloat(document.getElementById("multi1").querySelector(".gain").value);
    var multi2 = parseFloat(document.getElementById("multi2").querySelector(".gain").value);

    var gagnant = (multi1 > multi2) ? "gagnant1" : "gagnant2";
    var pseudoGagnant = document.getElementById("pseudoGagnant9");

    var pseudo = document.getElementById(gagnant).querySelector("span").textContent;
    pseudoGagnant.textContent = pseudo;
}

document.getElementById("multi2").addEventListener("input", determinerGagnant);

function determinerGagnant1() {
    var multi3 = parseFloat(document.getElementById("multi3").querySelector(".gain").value);
    var multi4 = parseFloat(document.getElementById("multi4").querySelector(".gain").value);

    var gagnant1 = (multi3 > multi4) ? "gagnant3" : "gagnant4";
    var pseudoGagnant1 = document.getElementById("pseudoGagnant10");

    var pseudo1 = document.getElementById(gagnant1).querySelector("span").textContent;
    pseudoGagnant1.textContent = pseudo1;
}

document.getElementById("multi4").addEventListener("input", determinerGagnant1);

function determinerGagnant2() {
    var multi5 = parseFloat(document.getElementById("multi5").querySelector(".gain").value);
    var multi6 = parseFloat(document.getElementById("multi6").querySelector(".gain").value);

    var gagnant2 = (multi5 > multi6) ? "gagnant5" : "gagnant6";
    var pseudoGagnant2 = document.getElementById("pseudoGagnant11");

    var pseudo2 = document.getElementById(gagnant2).querySelector("span").textContent;
    pseudoGagnant2.textContent = pseudo2;
}

document.getElementById("multi6").addEventListener("input", determinerGagnant2);

function determinerGagnant3() {
    var multi7 = parseFloat(document.getElementById("multi7").querySelector(".gain").value);
    var multi8 = parseFloat(document.getElementById("multi8").querySelector(".gain").value);

    var gagnant3 = (multi7 > multi8) ? "gagnant7" : "gagnant8";
    var pseudoGagnant3 = document.getElementById("pseudoGagnant12");

    var pseudo3 = document.getElementById(gagnant3).querySelector("span").textContent;
    pseudoGagnant3.textContent = pseudo3;
}

document.getElementById("multi8").addEventListener("input", determinerGagnant3);



function determinerGagnant4() {
    var multi9 = parseFloat(document.getElementById("multi9").querySelector(".gain").value);
    var multi10 = parseFloat(document.getElementById("multi10").querySelector(".gain").value);

    var gagnant4 = (multi9 > multi10) ? "gagnant9" : "gagnant10";
    var pseudoGagnant4 = document.getElementById("pseudoGagnant13");

    var pseudo4 = document.getElementById(gagnant4).querySelector("span").textContent;
    pseudoGagnant4.textContent = pseudo4;
}

document.getElementById("multi10").addEventListener("input", determinerGagnant4);

function determinerGagnant5() {
    var multi11 = parseFloat(document.getElementById("multi11").querySelector(".gain").value);
    var multi12 = parseFloat(document.getElementById("multi12").querySelector(".gain").value);

    var gagnant5 = (multi11 > multi12) ? "gagnant11" : "gagnant12";
    var pseudoGagnant5 = document.getElementById("pseudoGagnant14");

    var pseudo5 = document.getElementById(gagnant5).querySelector("span").textContent;
    pseudoGagnant5.textContent = pseudo5;
}

document.getElementById("multi12").addEventListener("input", determinerGagnant5);



