//DEBUG
// Aggiungi questo codice in fondo al tuo file codice.js

// Funzione per creare il pannello di debug
function createDebugPanel() {
    const debugPanel = document.createElement('div');
    debugPanel.id = 'debug-panel';
    debugPanel.style.position = 'fixed';
    debugPanel.style.bottom = '0';
    debugPanel.style.right = '0';
    debugPanel.style.backgroundColor = 'rgba(188, 155, 255, 0.8)';
    debugPanel.style.color = 'white';
    debugPanel.style.padding = '10px';
    debugPanel.style.zIndex = '10000';
    debugPanel.style.maxHeight = '200px';
    debugPanel.style.overflow = 'auto';
    debugPanel.style.fontFamily = 'monospace';
    debugPanel.style.fontSize = '12px';
    
    const title = document.createElement('h3');
    title.textContent = 'DEBUG PANEL (D per nascondere)';
    title.style.marginTop = '0';
    debugPanel.appendChild(title);
    
    const content = document.createElement('div');
    content.id = 'debug-content';
    debugPanel.appendChild(content);
    
    document.body.appendChild(debugPanel);
    return debugPanel;
}

// Funzione per aggiornare i valori nel pannello
function updateDebugPanel() {
    const debugContent = document.getElementById('debug-content');
    if (!debugContent) return;
    
    debugContent.innerHTML = '';
    
    const username = localStorage.getItem('utente');
    if (!username) {
        debugContent.innerHTML = '<p>Nessun utente loggato</p>';
        return;
    }
    
    const userVars = {};
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith(`${username}_`) || key === 'utente' || key === 'fuga') {
            userVars[key] = localStorage.getItem(key);
        }
    }
    
    const table = document.createElement('table');
    table.style.width = '100%';
    table.style.borderCollapse = 'collapse';
    
    for (const [key, value] of Object.entries(userVars)) {
        const row = document.createElement('tr');
        
        const keyCell = document.createElement('td');
        keyCell.textContent = key;
        keyCell.style.border = '1px solid #555';
        keyCell.style.padding = '4px';
        
        const valueCell = document.createElement('td');
        valueCell.textContent = value;
        valueCell.style.border = '1px solid #555';
        valueCell.style.padding = '4px';
        valueCell.style.color = value !== '0' ? '#7fff00' : '#ff5555';
        
        row.appendChild(keyCell);
        row.appendChild(valueCell);
        table.appendChild(row);
    }
    
    debugContent.appendChild(table);
}

// Toggle pannello con tasto D
function setupDebugToggle() {
    let debugVisible = true;
    const debugPanel = document.getElementById('debug-panel');
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'd' || e.key === 'D') {
            debugVisible = !debugVisible;
            debugPanel.style.display = debugVisible ? 'block' : 'none';
            if (debugVisible) updateDebugPanel();
        }
    });
}

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    createDebugPanel();
    updateDebugPanel();
    setupDebugToggle();
    
    // Aggiorna ogni 2 secondi
    setInterval(updateDebugPanel, 2000);
});


//DIFFERENZIA ESPERIENZA PER I GIOCATORI
function login() {
    localStorage.clear();
    const username = document.getElementById('username').value.trim();
    if (username) {
      localStorage.setItem('utente', username);
      window.location.href = 'inizio.html';
    } else {
      alert('Inserisci un nome utente!');
    }
}
  
  // Funzione per salvare dati utente
function salvaVariabile(chiave, valore) {
    const utente = localStorage.getItem('utente');
    if (utente) {
      localStorage.setItem(utente + '_' + chiave, valore);
    }
}
  
  // Funzione per recuperare dati utente
function recuperaVariabile(chiave) {
    const utente = localStorage.getItem('utente');
    if (utente) {
      return localStorage.getItem(utente + '_' + chiave);
    }
    return null;
}


//VARIABILI
    //Questa sezione è essenziale, in quanto fa in modo che ogni volta che si ricarica la pagina tutte le variabili vengono ripescate dal local storage e rimesse nei rispettivi var, così da poter essere usate nelle funzioni

// C1

    var c1v1 = recuperaVariabile('c1v1');
    if (c1v1 == null) {
        c1v1 = 0;
        salvaVariabile('c1v1', 0);
    }

    var c1v2 = recuperaVariabile('c1v2');
    if (c1v2 == null) {
        c1v2 = 0;
        salvaVariabile('c1v2', 0);
    }

    var c1v3 = recuperaVariabile('c1v3');
    if (c1v3 == null) {
        c1v3 = 0;
        salvaVariabile('c1v3', 0);
    }

    var c1v4 = recuperaVariabile('c1v4');
    if (c1v4 == null) {
        c1v4 = 0;
        salvaVariabile('c1v4', 0);
    }
    var c1v5 = recuperaVariabile('c1v5');
    if (c1v5 == null) {
        c1v5 = 0;
        salvaVariabile('c1v5', 0);
    }
    var c1v6 = recuperaVariabile('c1v6');
    if (c1v6 == null) {
        c1v6 = 0;
        salvaVariabile('c1v6', 0);
    }
    var c1v7 = recuperaVariabile('c1v7');
    if (c1v7 == null) {
        c1v7 = 0;
        salvaVariabile('c1v7', 0);
    }

    var c1v8 = recuperaVariabile('c1v8');
    if (c1v8 == null) {
        c1v8 = 0;
        salvaVariabile('c1v8', 0);
    }
    var c1v9 = recuperaVariabile('c1v9');
    if (c1v9 == null) {
        c1v9 = 0;
        salvaVariabile('c1v9', 0);
    }
    var c1v10 = recuperaVariabile('c1v10');
    if (c1v10 == null) {
        c1v10 = 0;
        salvaVariabile('c1v10', 0);
    }
    var c1v11 = recuperaVariabile('c1v11');
    if (c1v11 == null) {
        c1v11 = 0;
        salvaVariabile('c1v11', 0);
    }
    var c1v12 = recuperaVariabile('c1v12');
    if (c1v12 == null) {
        c1v12 = 0;
        salvaVariabile('c1v12', 0);
    }
    var c1v13 = recuperaVariabile('c1v13');
    if (c1v13 == null) {
        c1v13 = 0;
        salvaVariabile('c1v13', 0);
    }
    var c1v14 = recuperaVariabile('c1v14');
    if (c1v14 == null) {
        c1v14 = 0;
        salvaVariabile('c1v14', 0);
    }

    var relazione_gatto = recuperaVariabile('relGatto');
    if (relazione_gatto == null) {
        relazione_gatto = 0;
        salvaVariabile('relGatto', 0);
    }


//C2
   
        
   

    var c2v1 = recuperaVariabile('c2v1');
if (c2v1 == null) {
    c2v1 = 0;
    salvaVariabile('c2v1', 0);
}

var c2v2 = recuperaVariabile('c2v2');
if (c2v2 == null) {
    c2v2 = 0;
    salvaVariabile('c2v2', 0);
}

var c2v3 = recuperaVariabile('c2v3');
if (c2v3 == null) {
    c2v3 = 0;
    salvaVariabile('c2v3', 0);
}

var c2v4 = recuperaVariabile('c2v4');
if (c2v4 == null) {
    c2v4 = 0;
    salvaVariabile('c2v4', 0);
}

var c2v5 = recuperaVariabile('c2v5');
if (c2v5 == null) {
    c2v5 = 0;
    salvaVariabile('c2v5', 0);
}

var c2v6 = recuperaVariabile('c2v6');
if (c2v6 == null) {
    c2v6 = 0;
    salvaVariabile('c2v6', 0);
}

var c2v7 = recuperaVariabile('c2v7');
if (c2v7 == null) {
    c2v7 = 0;
    salvaVariabile('c2v7', 0);
}

var c2v8 = recuperaVariabile('c2v8');
if (c2v8 == null) {
    c2v8 = 0;
    salvaVariabile('c2v8', 0);
}

var c2v9 = recuperaVariabile('c2v9');
if (c2v9 == null) {
    c2v9 = 0;
    salvaVariabile('c2v9', 0);
}

var c2v10 = recuperaVariabile('c2v10');
if (c2v10 == null) {
    c2v10 = 0;
    salvaVariabile('c2v10', 0);
}

var c2v11 = recuperaVariabile('c2v11');
if (c2v11 == null) {
    c2v11 = 0;
    salvaVariabile('c2v11', 0);
}

var c2v12 = recuperaVariabile('c2v12');
if (c2v12 == null) {
    c2v12 = 0;
    salvaVariabile('c2v12', 0);
}

var c2v13 = recuperaVariabile('c2v13');
if (c2v13 == null) {
    c2v13 = 0;
    salvaVariabile('c2v13', 0);
}

var c2v14 = recuperaVariabile('c2v14');
if (c2v14 == null) {
    c2v14 = 0;
    salvaVariabile('c2v14', 0);
}

var c2v15 = recuperaVariabile('c2v15');
if (c2v15 == null) {
    c2v15 = 0;
    salvaVariabile('c2v15', 0);
}

var c2v16 = recuperaVariabile('c2v16');
if (c2v16 == null) {
    c2v16 = 0;
    salvaVariabile('c2v16', 0);
}

var c2v17 = recuperaVariabile('c2v17');
if (c2v17 == null) {
    c2v17 = 0;
    salvaVariabile('c2v17', 0);
}

var c2v18 = recuperaVariabile('c2v18');
if (c2v18 == null) {
    c2v18 = 0;
    salvaVariabile('c2v18', 0);
}

var c2v19 = recuperaVariabile('c2v19');
if (c2v19 == null) {
    c2v19 = 0;
    salvaVariabile('c2v19', 0);
}

var c2v20 = recuperaVariabile('c2v20');
if (c2v20 == null) {
    c2v20 = 0;
    salvaVariabile('c2v20', 0);
}

var c2v21 = recuperaVariabile('c2v21');
if (c2v21 == null) {
    c2v21 = 0;
    salvaVariabile('c2v21', 0);
}

var c2v22 = recuperaVariabile('c2v22');
if (c2v22 == null) {
    c2v22 = 0;
    salvaVariabile('c2v22', 0);
}

var c2v23 = recuperaVariabile('c2v23');
if (c2v23 == null) {
    c2v23 = 0;
    salvaVariabile('c2v23', 0);
}

var c2v24 = recuperaVariabile('c2v24');
if (c2v24 == null) {
    c2v24 = 0;
    salvaVariabile('c2v24', 0);
}

var c2v25 = recuperaVariabile('c2v25');
if (c2v25 == null) {
    c2v25 = 0;
    salvaVariabile('c2v25', 0);
}

var c2v26 = recuperaVariabile('c2v26');
if (c2v26 == null) {
    c2v26 = 0;
    salvaVariabile('c2v26', 0);
}

var c2v27 = recuperaVariabile('c2v27');
if (c2v27 == null) {
    c2v27 = 0;
    salvaVariabile('c2v27', 0);
}

var c2v28 = recuperaVariabile('c2v28');
if (c2v28 == null) {
    c2v28 = 0;
    salvaVariabile('c2v28', 0);
}

var c2v29 = recuperaVariabile('c2v29');
if (c2v29 == null) {
    c2v29 = 0;
    salvaVariabile('c2v29', 0);
}

var c2v30 = recuperaVariabile('c2v30');
if (c2v30 == null) {
    c2v30 = 0;
    salvaVariabile('c2v30', 0);
}

var c2v31 = recuperaVariabile('c2v31');
if (c2v31 == null) {
    c2v31 = 0;
    salvaVariabile('c2v31', 0);
}

var c2v32 = recuperaVariabile('c2v32');
if (c2v32 == null) {
    c2v32 = 0;
    salvaVariabile('c2v32', 0);
}

var c2v33 = recuperaVariabile('c2v33');
if (c2v33 == null) {
    c2v33 = 0;
    salvaVariabile('c2v33', 0);
}

var c2v34 = recuperaVariabile('c2v34');
if (c2v34 == null) {
    c2v34 = 0;
    salvaVariabile('c2v34', 0);
}

var c2v35 = recuperaVariabile('c2v35');
if (c2v35 == null) {
    c2v35 = 0;
    salvaVariabile('c2v35', 0);
}

var c2v36 = recuperaVariabile('c2v36');
if (c2v36 == null) {
    c2v36 = 0;
    salvaVariabile('c2v36', 0);
}

var c2v37 = recuperaVariabile('c2v37');
if (c2v37 == null) {
    c2v37 = 0;
    salvaVariabile('c2v37', 0);
}

var c2v38 = recuperaVariabile('c2v38');
if (c2v38 == null) {
    c2v38 = 0;
    salvaVariabile('c2v38', 0);
}

var c2v39 = recuperaVariabile('c2v39');
if (c2v39 == null) {
    c2v39 = 0;
    salvaVariabile('c2v39', 0);
}

var c2v40 = recuperaVariabile('c2v40');
if (c2v40 == null) {
    c2v40 = 0;
    salvaVariabile('c2v40', 0);
}

var c2v41 = recuperaVariabile('c2v41');
if (c2v41 == null) {
    c2v41 = 0;
    salvaVariabile('c2v41', 0);
}

var c2v42 = recuperaVariabile('c2v42');
if (c2v42 == null) {
    c2v42 = 0;
    salvaVariabile('c2v42', 0);
}

var c2v43 = recuperaVariabile('c2v43');
if (c2v43 == null) {
    c2v43 = 0;
    salvaVariabile('c2v43', 0);
}

var c2v44 = recuperaVariabile('c2v44');
if (c2v44 == null) {
    c2v44 = 0;
    salvaVariabile('c2v44', 0);
}

var c2v45 = recuperaVariabile('c2v45');
if (c2v45 == null) {
    c2v45 = 0;
    salvaVariabile('c2v45', 0);
}

var c2v46 = recuperaVariabile('c2v46');
if (c2v46 == null) {
    c2v46 = 0;
    salvaVariabile('c2v46', 0);
}

var c2v47 = recuperaVariabile('c2v47');
if (c2v47 == null) {
    c2v47 = 0;
    salvaVariabile('c2v47', 0);
}

var c2v48 = recuperaVariabile('c2v48');
if (c2v48 == null) {
    c2v48 = 0;
    salvaVariabile('c2v48', 0);
}

var c2v49 = recuperaVariabile('c2v49');
if (c2v49 == null) {
    c2v49 = 0;
    salvaVariabile('c2v49', 0);
}

var c2v50 = recuperaVariabile('c2v50');
if (c2v50 == null) {
    c2v50 = 0;
    salvaVariabile('c2v50', 0);
}

var c2v51 = recuperaVariabile('c2v51');
if (c2v51 == null) {
    c2v51 = 0;
    salvaVariabile('c2v51', 0);
}

var c2v52 = recuperaVariabile('c2v52');
if (c2v52 == null) {
    c2v52 = 0;
    salvaVariabile('c2v52', 0);
}

var c2v53 = recuperaVariabile('c2v53');
if (c2v53 == null) {
    c2v53 = 0;
    salvaVariabile('c2v53', 0);
}

var c2v54 = recuperaVariabile('c2v54');
if (c2v54 == null) {
    c2v54 = 0;
    salvaVariabile('c2v54', 0);
}

var c2v55 = recuperaVariabile('c2v55');
if (c2v55 == null) {
    c2v55 = 0;
    salvaVariabile('c2v55', 0);
}

var c2v56 = recuperaVariabile('c2v56');
if (c2v56 == null) {
    c2v56 = 0;
    salvaVariabile('c2v56', 0);
}

var c2v57 = recuperaVariabile('c2v57');
if (c2v57 == null) {
    c2v57 = 0;
    salvaVariabile('c2v57', 0);
}

var c2v58 = recuperaVariabile('c2v58');
if (c2v58 == null) {
    c2v58 = 0;
    salvaVariabile('c2v58', 0);
}

var c2v59 = recuperaVariabile('c2v59');
if (c2v59 == null) {
    c2v59 = 0;
    salvaVariabile('c2v59', 0);
}

var c2v60 = recuperaVariabile('c2v60');
if (c2v60 == null) {
    c2v60 = 0;
    salvaVariabile('c2v60', 0);
}

var c2v61 = recuperaVariabile('c2v61');
if (c2v61 == null) {
    c2v61 = 0;
    salvaVariabile('c2v61', 0);
}

var c2v62 = recuperaVariabile('c2v62');
if (c2v62 == null) {
    c2v62 = 0;
    salvaVariabile('c2v62', 0);
}

var c2v63 = recuperaVariabile('c2v63');
if (c2v63 == null) {
    c2v63 = 0;
    salvaVariabile('c2v63', 0);
}

var c2v64 = recuperaVariabile('c2v64');
if (c2v64 == null) {
    c2v64 = 0;
    salvaVariabile('c2v64', 0);
}

var c2v65 = recuperaVariabile('c2v65');
if (c2v65 == null) {
    c2v65 = 0;
    salvaVariabile('c2v65', 0);
}

var c2v66 = recuperaVariabile('c2v66');
if (c2v66 == null) {
    c2v66 = 0;
    salvaVariabile('c2v66', 0);
}

var c2v67 = recuperaVariabile('c2v67');
if (c2v67 == null) {
    c2v67 = 0;
    salvaVariabile('c2v67', 0);
}

var c2v68 = recuperaVariabile('c2v68');
if (c2v68 == null) {
    c2v68 = 0;
    salvaVariabile('c2v68', 0);
}

var c2v69 = recuperaVariabile('c2v69');
if (c2v69 == null) {
    c2v69 = 0;
    salvaVariabile('c2v69', 0);
}

var c2v70 = recuperaVariabile('c2v70');
if (c2v70 == null) {
    c2v70 = 0;
    salvaVariabile('c2v70', 0);
}

var c2v71 = recuperaVariabile('c2v71');
if (c2v71 == null) {
    c2v71 = 0;
    salvaVariabile('c2v71', 0);
}

var c2v72 = recuperaVariabile('c2v72');
if (c2v72 == null) {
    c2v72 = 0;
    salvaVariabile('c2v72', 0);
}

var c2v73 = recuperaVariabile('c2v73');
if (c2v73 == null) {
    c2v73 = 0;
    salvaVariabile('c2v73', 0);
}

var c2v74 = recuperaVariabile('c2v74');
if (c2v74 == null) {
    c2v74 = 0;
    salvaVariabile('c2v74', 0);
}

var c2v75 = recuperaVariabile('c2v75');
if (c2v75 == null) {
    c2v75 = 0;
    salvaVariabile('c2v75', 0);
}

var c2v76 = recuperaVariabile('c2v76');
if (c2v76 == null) {
    c2v76 = 0;
    salvaVariabile('c2v76', 0);
}

var c2v77 = recuperaVariabile('c2v77');
if (c2v77 == null) {
    c2v77 = 0;
    salvaVariabile('c2v77', 0);
}

var c2v78 = recuperaVariabile('c2v78');
if (c2v78 == null) {
    c2v78 = 0;
    salvaVariabile('c2v78', 0);
}

var c2v79 = recuperaVariabile('c2v79');
if (c2v79 == null) {
    c2v79 = 0;
    salvaVariabile('c2v79', 0);
}





var bagno = recuperaVariabile('bagno');
if (bagno == null) {
    bagno = 0;
    salvaVariabile('bagno', 0);
}
var fuga = recuperaVariabile('fuga');
if (fuga == null) {
    fuga = 0;
    salvaVariabile('fuga', 0);
}
var esplorato = recuperaVariabile('esplorato');
if (esplorato == null) {
    esplorato = 0;
    salvaVariabile('esplorato', 0);
}
var visto_donna = recuperaVariabile('vistoDonna');
if (visto_donna == null) {
    visto_donna = 0;
    salvaVariabile('vistoDonna', 0);
}

var capanno = recuperaVariabile('capanno');
if (capanno == null) {
    capanno = 0;
    salvaVariabile('capanno', 0);
}

var scarpe = recuperaVariabile('scarpe');
if (scarpe == null) {
    scarpe = 0;
    salvaVariabile('scarpe', 0);
}
var ricreazione = recuperaVariabile('ricreazione');
if (ricreazione == null) {
    ricreazione = 0;
    salvaVariabile('ricreazione', 0);
}
var chiave = recuperaVariabile('chiave');
if (chiave == null) {
    chiave = 0;
    salvaVariabile('chiave', 0);
}
var bar = recuperaVariabile('bar');
if (bar == null) {
    bar = 0;
    salvaVariabile('bar', 0);
}
var mensa = recuperaVariabile('mensa');
if (mensa == null) {
    mensa = 0;
    salvaVariabile('mensa', 0);
}
var cucina = recuperaVariabile('cucina');
if (cucina == null) {
    cucina = 0;
    salvaVariabile('cucina', 0);
}
var camera1 = recuperaVariabile('camera1');
if (camera1 == null) {
    camera1 = 0;
    salvaVariabile('camera1', 0);
}
var camera2 = recuperaVariabile('camera2');
if (camera2 == null) {
    camera2 = 0;
    salvaVariabile('camera2', 0);
}
var camera3 = recuperaVariabile('camera3');
if (camera3 == null) {
    camera3 = 0;
    salvaVariabile('camera3', 0);
}
var ParlaMadre = recuperaVariabile('ParlaMadre');
if (ParlaMadre == null) {
    ParlaMadre = 0;
    salvaVariabile('ParlaMadre', 0);
}
var altarino = recuperaVariabile('altarino');
if (altarino == null) {
    altarino = 0;
    salvaVariabile('altarino', 0);
}
var RelMadre = recuperaVariabile('RelMadre');
if (RelMadre == null) {
    RelMadre = 0;
    salvaVariabile('RelMadre', 0);
}
var fondo = recuperaVariabile('fondo');
if (fondo == null) {
    fondo = 0;
    salvaVariabile('fondo', 0);
}
var biblioteca = recuperaVariabile('biblioteca');
if (biblioteca == null) {
    biblioteca = 0;
    salvaVariabile('biblioteca', 0);
}




//FUNZIONI
function PulisciVariabili() {
    var nome_utente = localStorage.getItem('utente');
    localStorage.clear();
    localStorage.setItem('utente', nome_utente);
}

function TornaHome() {
    PulisciVariabili();
    window.location.href='inizio.html';
}
//C0

    function play() {
        if (localStorage.getItem('utente')==null){
            alert("C'è stato un errore. Verrai reindirizzato alla pagina di login.")
            window.location.href='index.html';
        }
        PulisciVariabili();
        window.location.href='c1-1.html';
    }

    function C2() {
        if (localStorage.getItem('utente')==null){
            alert("C'è stato un errore. Verrai reindirizzato alla pagina di login.")
            window.location.href='index.html';
        }
        PulisciVariabili();
        window.location.href='c2-1.html';
    }

    function Ringraziamento() {
        const username = localStorage.getItem('utente');
        document.getElementById("nomeGiocatore").innerHTML = "Grazie "+username+"!";
    }

// C1
    function accarezzi_gatto() {
        salvaVariabile('relGatto', 1);
        relazione_gatto = recuperaVariabile('relGatto');
        window.location.href='c1-8.html';
    }

    function risposta_c1v2() {
        salvaVariabile('c1v2', 1);
        c1v2 = recuperaVariabile('c1v2');
        window.location.href='c1-7.html'
    }

    function risposta_c1v3() {
        salvaVariabile('c1v3', 1);
        c1v3 = recuperaVariabile('c1v3');
        window.location.href='c1-7.html'
    }

    function risposta_c1v4() {
        salvaVariabile('c1v4', 1);
        c1v4 = recuperaVariabile('c1v4');
        window.location.href='c1-10.html'
    }
    function risposta_c1v5() {
        salvaVariabile('c1v5', 1);
        c1v5 = recuperaVariabile('c1v5');
        window.location.href='c1-10.html'
    }
    function risposta_c1v6() {
        salvaVariabile('c1v6', 1);
        c1v6 = recuperaVariabile('c1v6');
        window.location.href='c1-10.html'
    }
    function risposta_c1v7() {
        salvaVariabile('c1v7', 1);
        c1v7 = recuperaVariabile('c1v7');
        window.location.href='c1-10.html'
    }
    function risposta_c1v8() {
        salvaVariabile('c1v8', 1);
        c1v8 = recuperaVariabile('c1v8');
        window.location.href='c1-11.html'
    }
    function risposta_c1v9() {
        salvaVariabile('c1v9', 1);
        c1v9 = recuperaVariabile('c1v9');
        window.location.href='c1-11.html'
    }
    function risposta_c1v13() {
        salvaVariabile('c1v13', 1);
        c1v13 = recuperaVariabile('c1v13');
        window.location.href='c1-12.html'
    }
    function risposta_c1v14() {
        salvaVariabile('c1v14', 1);
        c1v14 = recuperaVariabile('c1v14');
        window.location.href='c1-12.html'
    }
    function risposta_c1v10() {
        salvaVariabile('c1v10', 1);
        c1v10 = recuperaVariabile('c1v10');
        window.location.href='c1-19.html'
    }
    function risposta_c1v11() {
        salvaVariabile('c1v11', 1);
        c1v11 = recuperaVariabile('c1v11');
        window.location.href='c1-19.html'
    }
    function risposta_c1v12() {
        salvaVariabile('c1v12', 1);
        c1v12 = recuperaVariabile('c1v12');
        window.location.href='c1-19.html'
    }
    function GameOver1() {
        PulisciVariabili();
        window.location.href='c1-13.html'
    }

//C2
    function risposta_c2v2() {
        salvaVariabile('c2v2', 1);
        c2v2 = recuperaVariabile('c2v2');
        salvaVariabile('capanno', 1);
        capanno = recuperaVariabile('capanno');
        window.location.href='c2-11.html'
    }
    function risposta_c2v4() {
        salvaVariabile('c2v4', 1);
        c2v4 = recuperaVariabile('c2v4');
        window.location.href='c2-7.html'
    }
    function trigger_bagno() {
        salvaVariabile('bagno', 1);
        bagno = recuperaVariabile('bagno');
        window.location.href='c2-13.html'
    }
    function risposta_c2v6() {
        salvaVariabile('c2v6', 1);
        c2v6 = recuperaVariabile('c2v6');
        window.location.href='c2-17.html'
    }
    function risposta_c2v7() {
        salvaVariabile('c2v7', 1);
        c2v7 = recuperaVariabile('c2v7');
        window.location.href='c2-17.html'
    }
    function risposta_c2v5() {
        salvaVariabile('c2v5', 1);
        c2v5 = recuperaVariabile('c2v5');
        window.location.href='c2-17.html'
    }
    function risposta_c2v8() {
        salvaVariabile('c2v8', 1);
        c2v8 = recuperaVariabile('c2v8');
        window.location.href='c2-17.html'
    }
    function risposta_c2v13() {
        salvaVariabile('c2v13', 1);
        c2v13 = recuperaVariabile('c2v13');
        window.location.href='c2-27.html'
    }
    function risposta_c2v14() {
        salvaVariabile('c2v14', 1);
        c2v14 = recuperaVariabile('c2v14');
        window.location.href='c2-27.html'
    }
    function trigger_fuga() {
        fuga = recuperaVariabile('fuga');
        nuova_fuga = Number(fuga)+1;
        salvaVariabile('fuga', nuova_fuga);
        fuga = recuperaVariabile('fuga');
    }

    function risposta_c2v1() {
        trigger_fuga();
        window.location.href='c2-6.html'
    }
    function risposta_c2p6() {
        trigger_fuga();
        window.location.href='c2-10.html'
    }
    function risposta_c2p14() {
        if(ParlaMadre>0){
            if(esplorato>0){
                if(RelMadre>0){
                   window.location.href='c2-71.html' 
                } else {
                    window.location.href='c2-25.html'
                }
            } else {
                salvaVariabile('esplorato',1);
                window.location.href='c2-32.html'
            }
        } else {
            window.location.href='c2-4.html'
        }
        
    }
    function GameOver2_21() {
        window.location.href='c2-20.html'
    }
    function GameOver2_14() {
        salvaVariabile('fuga',1);
        if(ParlaMadre>0){
            window.location.href='c2-67.html'
        } else {
            window.location.href='c2-4.html'
        }
        
    }
    function risposta_c2v11() {
        salvaVariabile('c2v11', 1);
        c2v11 = recuperaVariabile('c2v11');
        window.location.href='c2-27.html'
    }
    function risposta_c2v12() {
        salvaVariabile('c2v12', 1);
        c2v12 = recuperaVariabile('c2v12');
        window.location.href='c2-27.html'
    }
    function risposta_c2v18() {
        salvaVariabile('c2v18', 1);
        c2v18 = recuperaVariabile('c2v18');
        window.location.href='c2-30.html'
    }

    function risposta_c2v15() {
        salvaVariabile('c2v15', 1);
        c2v15 = recuperaVariabile('c2v15');
        window.location.href='c2-30.html'
    }
    function risposta_c2v16() {
        salvaVariabile('c2v16', 1);
        c2v16 = recuperaVariabile('c2v16');
        window.location.href='c2-30.html'
    }
    function risposta_c2v17() {
        salvaVariabile('c2v17', 1);
        c2v17 = recuperaVariabile('c2v17');
        window.location.href='c2-30.html'
    }
    function risposta_c2v10() {
        salvaVariabile('c2v10', 1);
        c2v10 = recuperaVariabile('c2v10');
        if(fuga>0){
            window.location.href='c2-25.html'
        } else {
            window.location.href='c2-26.html'
        }
    }
    function risposta_c2v9() {
        salvaVariabile('c2v9', 1);
        c2v9 = recuperaVariabile('c2v9');
        if(fuga>0){
            window.location.href='c2-25.html'
        } else {
            window.location.href='c2-26.html'
        }
    }
    function risposta_c2v9_5() {
        if(fuga>0){
            window.location.href='c2-25.html'
        } else {
            window.location.href='c2-26.html'
        }
    }
    function risposta_c2v77() {
        salvaVariabile('c2v77', 1);
        c2v77 = recuperaVariabile('c2v77');
        window.location.href='c2-14.html'
    }
    function risposta_c2v78() {
        salvaVariabile('c2v78', 1);
        c2v78 = recuperaVariabile('c2v78');
        window.location.href='c2-14.html'
    }
    function risposta_c2v79() {
        salvaVariabile('c2v79', 1);
        c2v79 = recuperaVariabile('c2v79');
        window.location.href='c2-14.html'
    }
    function trigger_esplorato() {
        salvaVariabile('esplorato', 1);
        esplorato = recuperaVariabile('esplorato');
        window.location.href='c2-32.html'
    }
    function risposta_c2p31() {
        salvaVariabile('ParlaMadre', 1);
        ParlaMadre = recuperaVariabile('ParlaMadre');
        if(visto_donna>0){
            if(altarino>0){
                window.location.href='c2-56.html'
            } else {
                window.location.href='c2-57.html'
            }
        } else {
            if(altarino>0){
                window.location.href='c2-46.html'
            } else {
                window.location.href='c2-47.html'
            }
        }
    }

    function risposta_c2v15() {
        salvaVariabile('c2v19', 1);
        c2v19 = recuperaVariabile('c2v19');
        salvaVariabile('scarpe', 1);
        scarpe = recuperaVariabile('scarpe');
        window.location.href='c2-33.html'
    }
    function risposta_c2p33() {
        salvaVariabile('ricreazione', 1);
        ricreazione = recuperaVariabile('ricreazione');
        window.location.href='c2-34.html'
    }
    function risposta_c2p34() {
        salvaVariabile('c2v20', 1);
        c2v20 = recuperaVariabile('c2v20');
        salvaVariabile('chiave', 1);
        chiave = recuperaVariabile('chiave');
        salvaVariabile('bar', 1);
        bar = recuperaVariabile('bar');
        window.location.href='c2-35.html'
    }
    function risposta_c2p35() {
        salvaVariabile('mensa', 1);
        mensa = recuperaVariabile('mensa');
        window.location.href='c2-36.html'
    }
    function risposta_c2v21() {
        salvaVariabile('c2v21', 1);
        c2v21 = recuperaVariabile('c2v21');
        window.location.href='c2-37.html'
    }
    function risposta_c2v22() {
        salvaVariabile('c2v22', 1);
        c2v22 = recuperaVariabile('c2v22');
        salvaVariabile('cucina', 1);
        cucina = recuperaVariabile('cucina');
        window.location.href='c2-37.html'
    }
    function risposta_c2vc1() {
        salvaVariabile('camera1', 1);
        camera1 = recuperaVariabile('camera1');
        window.location.href='c2-38.html'
    }
    function risposta_c2vc2() {
        salvaVariabile('camera2', 1);
        camera2 = recuperaVariabile('camera2');
        window.location.href='c2-39.html'
    }
    function risposta_c2vc3() {
        salvaVariabile('camera3', 1);
        camera3 = recuperaVariabile('camera3');
        window.location.href='c2-40.html'
    }
    function risposta_c2v23() {
        salvaVariabile('c2v23', 1);
        c2v23 = recuperaVariabile('c2v23');
        salvaVariabile('altarino', 1);
        altarino = recuperaVariabile('altarino');
        window.location.href='c2-43.html'
    }
    function risposta_c2v24() {
        salvaVariabile('c2v23', 1);
        c2v23 = recuperaVariabile('c2v23');
        if(RelMadre<=0) {
            salvaVariabile('RelMadre', 1);
            RelMadre = recuperaVariabile('RelMadre');
        }
        window.location.href='c2-43.html'
    }

    function risposta_c2p43() {
        if(ParlaMadre>0) {
            salvaVariabile('c2v28', 1);
            c2v28 = recuperaVariabile('c2v28');
            if(RelMadre>0){
                window.location.href='c2-71.html'
            } else {
                salvaVariabile('c2v25', 1);
                c2v25 = recuperaVariabile('c2v25');
                window.location.href='c2-73.html'
            }
        } else {
            if(visto_donna>0){
                salvaVariabile('c2v259', 1);
                c2v29 = recuperaVariabile('c2v29');
                if(altarino>0){
                    window.location.href='c2-56.html'
                } else {
                    window.location.href='c2-57.html'
                }
            } else {
                salvaVariabile('c2v30', 1);
                c2v30 = recuperaVariabile('c2v30');
                if(altarino>0){
                    window.location.href='c2-46.html'
                } else {
                    window.location.href='c2-47.html'
                }
            }
        }
    }

    function trigger_fondo() {
        salvaVariabile('fondo', 1);
        fondo = recuperaVariabile('fondo');
        window.location.href='c2-44.html'
    }
    function trigger_biblioteca() {
        salvaVariabile('biblioteca', 1);
        biblioteca = recuperaVariabile('biblioteca');
        window.location.href='c2-45.html'
    }
    function risposta_c2p46() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
    
        window.location.href='c2-50.html'
    }
    function risposta_c2p56() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
    
        window.location.href='c2-50.html'
    }
    function risposta_c2p58_p() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
    
        window.location.href='c2-51.html'
    }
    function risposta_c2p48_p() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
    
        window.location.href='c2-51.html'
    }
    function risposta_c2p48_n() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
    
        window.location.href='c2-54.html'
    }
    function risposta_c2p58_n() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
    
        window.location.href='c2-54.html'
    }
    function risposta_c2p49() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
        window.location.href='c2-55.html'
    }
    function risposta_c2p59() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
        window.location.href='c2-55.html'
    }
    function risposta_c2v35() {
        salvaVariabile('c2v35', 1);
        c2v35 = recuperaVariabile('c2v35');
        window.location.href='c2-66.html'
    }
    function risposta_c2v45() {
        salvaVariabile('c2v45', 1);
        c2v45 = recuperaVariabile('c2v45');
        window.location.href='c2-66.html'
    }
    function risposta_c2v36() {
        salvaVariabile('c2v36', 1);
        c2v36 = recuperaVariabile('c2v36');
        window.location.href='c2-66.html'
    }
    function risposta_c2v46() {
        salvaVariabile('c2v46', 1);
        c2v46 = recuperaVariabile('c2v46');
        window.location.href='c2-66.html'
    }
    function risposta_c2v38() {
        salvaVariabile('c2v38', 1);
        c2v38 = recuperaVariabile('c2v38');
        window.location.href='c2-66.html'
    }
    function risposta_c2v48() {
        salvaVariabile('c2v48', 1);
        c2v48 = recuperaVariabile('c2v48');
        window.location.href='c2-66.html'
    }
    function risposta_c2v43() {
        salvaVariabile('c2v43', 1);
        c2v43 = recuperaVariabile('c2v43');
        window.location.href='c2-66.html'
    }
    function risposta_c2v53() {
        salvaVariabile('c2v53', 1);
        c2v53 = recuperaVariabile('c2v53');
        window.location.href='c2-66.html'
    }
    function risposta_c2v58() {
        salvaVariabile('c2v58', 1);
        c2v58 = recuperaVariabile('c2v58');
        window.location.href='c2-67.html'
    }
    function risposta_c2v64() {
        salvaVariabile('c2v64', 1);
        c2v64 = recuperaVariabile('c2v64');
        window.location.href='c2-67.html'
    }
    function risposta_c2v59() {
        salvaVariabile('c2v59', 1);
        c2v59 = recuperaVariabile('c2v59');
        window.location.href='c2-67.html'
    }
    function risposta_c2v65() {
        salvaVariabile('c2v65', 1);
        c2v65 = recuperaVariabile('c2v65');
        window.location.href='c2-67.html'
    }
    function risposta_c2v60() {
        salvaVariabile('c2v60', 1);
        c2v60 = recuperaVariabile('c2v60');
        window.location.href='c2-67.html'
    }
    function risposta_c2v66() {
        salvaVariabile('c2v66', 1);
        c2v66 = recuperaVariabile('c2v66');
        window.location.href='c2-67.html'
    }
    function risposta_c2v37() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v37', 1);
        c2v37 = recuperaVariabile('c2v37');
        window.location.href='c2-66.html'
    }
    function risposta_c2v47() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v47', 1);
        c2v47 = recuperaVariabile('c2v47');
        window.location.href='c2-66.html'
    }
    function risposta_c2v55() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v55', 1);
        c2v55 = recuperaVariabile('c2v55');
        window.location.href='c2-67.html'
    }
    function risposta_c2v61() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v61', 1);
        c2v61 = recuperaVariabile('c2v61');
        window.location.href='c2-67.html'
    }
    function risposta_c2v41() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v41', 1);
        c2v41 = recuperaVariabile('c2v41');
        window.location.href='c2-66.html'
    }
    function risposta_c2v51() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v51', 1);
        c2v51 = recuperaVariabile('c2v51');
        window.location.href='c2-66.html'
    }
    function risposta_c2v44() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v44', 1);
        c2v44 = recuperaVariabile('c2v44');
        window.location.href='c2-66.html'
    }
    function risposta_c2v54() {
        salvaVariabile('RelMadre', 1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v54', 1);
        c2v54 = recuperaVariabile('c2v54');
        window.location.href='c2-66.html'
    }
    function risposta_c2v57() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v57', 1);
        c2v57 = recuperaVariabile('c2v57');
        window.location.href='c2-66.html'
    }
    function risposta_c2v63() {
        salvaVariabile('RelMadre', -1);
        RelMadre = recuperaVariabile('RelMadre');
        salvaVariabile('c2v63', 1);
        c2v63 = recuperaVariabile('c2v63');
        window.location.href='c2-66.html'
    }
    function risposta_c2p67(){
        if(esplorato>0){
            if(RelMadre>0){
                window.location.href='c2-71.html'
            } else {
                salvaVariabile('c2v25', 1);
                c2v25 = recuperaVariabile('c2v25');
                window.location.href='c2-73.html'
            }
            } else {
                salvaVariabile('esplorato',1);
                window.location.href='c2-32.html'
            }
    }
    function risposta_c2v26() {
        salvaVariabile('c2v26', 1);
        c2v26 = recuperaVariabile('c2v26');
        window.location.href='c2-73.html'
        salvaVariabile('c2v28', 0);
    }
    function risposta_c2p71() {;
        window.location.href='c2-72.html'
        salvaVariabile('c2v28', 0);
    }
    function risposta_c2v27() {
        salvaVariabile('c2v27', 1);
        c2v27 = recuperaVariabile('c2v27');
        window.location.href='c2-73.html'
    }


//TESTI

    // Per mostrare il div
    //document.getElementById("mioDiv").style.display = "block";

    // Per nascondere il div
    //document.getElementById("mioDiv").style.display = "none";

//C1
    function C1P7() {
        if(c1v1>0){
        document.getElementById("p1").style.display = "block";  
        document.getElementById("p2").style.display = "none";  
        document.getElementById("p3").style.display = "block";  
        } else if(c1v3>0){
        document.getElementById("p1").style.display = "none";  
        document.getElementById("p2").style.display = "none";  
        document.getElementById("p3").style.display = "block";  
        } else if(c1v2>0){
        document.getElementById("p1").style.display = "none";  
        document.getElementById("p2").style.display = "block";  
        document.getElementById("p3").style.display = "none";  
        } else {
            alert("Qualcosa è andato storto. Manca il primo pezzo di questa pagina");
        document.getElementById("p1").style.display = "none";  
        document.getElementById("p2").style.display = "none";  
        document.getElementById("p3").style.display = "none";  
        }
        
    }

    function C1P10() {
        if(c1v4>0){
        document.getElementById("p4").style.display = "block";  
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "none";  
        document.getElementById("p7").style.display = "none";  
        } else if(c1v5>0){
        document.getElementById("p4").style.display = "none";  
        document.getElementById("p5").style.display = "block";  
        document.getElementById("p6").style.display = "none";  
        document.getElementById("p7").style.display = "none"; 
        } else if(c1v6>0){
        document.getElementById("p4").style.display = "none";  
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "block";  
        document.getElementById("p7").style.display = "none";   
        } else if(c1v7>0){
        document.getElementById("p4").style.display = "none";  
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "none";  
        document.getElementById("p7").style.display = "block";   
        } else {
            alert("Qualcosa è andato storto. Manca il primo pezzo di questa pagina");
        document.getElementById("p4").style.display = "none";  
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "none";  
        document.getElementById("p7").style.display = "none";  
        }
        
    }

    function C1P11() {
        if(c1v8>0){
        document.getElementById("p8").style.display = "block";  
        document.getElementById("p9").style.display = "none";"block";  
        } else if(c1v9>0){
        document.getElementById("p8").style.display = "none";  
        document.getElementById("p9").style.display = "block"; 
        } else {
            alert("Qualcosa è andato storto. Manca il primo pezzo di questa pagina");
        document.getElementById("p8").style.display = "none";  
        document.getElementById("p9").style.display = "none";  
        }
        
    }

    function C1P12() {
        if(c1v13>0){
        document.getElementById("p13").style.display = "block";  
        document.getElementById("p14").style.display = "none";"block";  
        } else if(c1v14>0){
        document.getElementById("p13").style.display = "none";  
        document.getElementById("p14").style.display = "block"; 
        } else {
            alert("Qualcosa è andato storto. Manca il primo pezzo di questa pagina");
        document.getElementById("p13").style.display = "none";  
        document.getElementById("p14").style.display = "none";  
        }
        
    }

    function C1P19() {
        if(c1v10>0){
        document.getElementById("p10").style.display = "block";  
        document.getElementById("p11").style.display = "none";  
        document.getElementById("p12").style.display = "none";    
        } else if(c1v11>0){
        document.getElementById("p10").style.display = "none";  
        document.getElementById("p11").style.display = "block";  
        document.getElementById("p12").style.display = "none";   
        } else if(c1v12>0){
        document.getElementById("p10").style.display = "none";  
        document.getElementById("p11").style.display = "none";  
        document.getElementById("p12").style.display = "block";  
       } else {
        document.getElementById("p10").style.display = "none";  
        document.getElementById("p11").style.display = "none";  
        document.getElementById("p12").style.display = "none";  
        }
        RelazioneGatto();
    }

    function RelazioneGatto() {
        if(relazione_gatto>0) {
            document.getElementById("GattoPos").style.display = "block";  
            document.getElementById("GattoNeg").style.display = "none";
        } else {
            document.getElementById("GattoPos").style.display = "none";  
            document.getElementById("GattoNeg").style.display = "block";
        }
    }

    

    //C2
    function C2P3() {
        if(visto_donna>0){
            document.getElementById("p73").style.display = "none";
            document.getElementById("p74").style.display = "block";
        } else {
            document.getElementById("p73").style.display = "block";
            document.getElementById("p74").style.display = "none";
        }
    }

    function C2P8() {
        if(fuga>0){
            document.getElementById("p75").style.display = "none";
            document.getElementById("p76").style.display = "block";
        } else {
            document.getElementById("p75").style.display = "block";
            document.getElementById("p76").style.display = "none";
        }
    }
    
    function C2P7() {
        if(c2v4>0){
            document.getElementById("p4").style.display = "block";
        }
    }

    function C2P11() {
        if(c2v2>0){
            document.getElementById("p2").style.display = "block";
        }
    }
    
    function C2P17() {
        if(c2v5>0){
        document.getElementById("p5").style.display = "block";  
        document.getElementById("p6").style.display = "block";  
        document.getElementById("p7").style.display = "none"; 
        document.getElementById("p8").style.display = "none";  
        } else if(c2v6>0){ 
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "block";  
        document.getElementById("p7").style.display = "none";   
        document.getElementById("p8").style.display = "none"; 
        } else if(c2v7>0){
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "block";  
        document.getElementById("p7").style.display = "block";   
        document.getElementById("p8").style.display = "none";  
        } else if(c2v8>0){
        document.getElementById("p5").style.display = "none";  
        document.getElementById("p6").style.display = "none";  
        document.getElementById("p7").style.display = "none";  
        document.getElementById("p8").style.display = "block";  
        }  
        
    }

    function C2P30() {
        if(c2v15>0){
        document.getElementById("p15").style.display = "block";  
        document.getElementById("p16").style.display = "none";  
        document.getElementById("p17").style.display = "block";  
        document.getElementById("p18").style.display = "none";  
        } else if(c2v16>0){
        document.getElementById("p15").style.display = "none";  
        document.getElementById("p16").style.display = "block";  
        document.getElementById("p17").style.display = "block";  
        document.getElementById("p18").style.display = "none"; 
        } else if(c2v17>0){
        document.getElementById("p15").style.display = "none";  
        document.getElementById("p16").style.display = "none";  
        document.getElementById("p17").style.display = "block";  
        document.getElementById("p18").style.display = "none";    
        } else if(c2v18>0){
        document.getElementById("p15").style.display = "none";  
        document.getElementById("p16").style.display = "none";  
        document.getElementById("p17").style.display = "none";  
        document.getElementById("p18").style.display = "block";    
        } else {
        document.getElementById("p15").style.display = "none";  
        document.getElementById("p16").style.display = "none";  
        document.getElementById("p17").style.display = "none";  
        document.getElementById("p18").style.display = "none";  
        }

        if(visto_donna>0) {
            document.getElementById("p80").style.display = "none";  
            document.getElementById("p81").style.display = "block"; 
        } else {
            document.getElementById("p80").style.display = "block";  
            document.getElementById("p81").style.display = "none";
        }
        
    }

    function C2P26() {
        if(c2v9>0){
        document.getElementById("p9").style.display = "block";  
        document.getElementById("p10").style.display = "none";"block";  
        } else if(c2v10>0){
        document.getElementById("p9").style.display = "none";  
        document.getElementById("p10").style.display = "block"; 
        } else {
            alert("Qualcosa è andato storto. Manca il primo pezzo di questa pagina");
        document.getElementById("p10").style.display = "none";  
        document.getElementById("p9").style.display = "none";  
        }
    }

    
    function C2P14() {
        if(c2v77>0){
        document.getElementById("p77").style.display = "block";  
        document.getElementById("p78").style.display = "none";  
        document.getElementById("p79").style.display = "none";    
        } else if(c2v78>0){
        document.getElementById("p77").style.display = "none";  
        document.getElementById("p78").style.display = "block";  
        document.getElementById("p79").style.display = "none";   
        } else if(c2v79>0){
        document.getElementById("p77").style.display = "none";  
        document.getElementById("p78").style.display = "none";  
        document.getElementById("p79").style.display = "block";  
       } else {
        document.getElementById("p77").style.display = "none";  
        document.getElementById("p78").style.display = "none";  
        document.getElementById("p79").style.display = "none";  
        }

        if(fuga>5) {
            document.getElementById("p82").style.display = "none";  
            document.getElementById("p83").style.display = "block"; 
        } else {
            document.getElementById("p82").style.display = "block";  
            document.getElementById("p83").style.display = "none";
        }
    }

    function C2P27() {
    if(c2v11 > 0) {
        document.getElementById("p11").style.display = "block";
        document.getElementById("p12").style.display = "none";
        document.getElementById("p3").style.display = "block";
        document.getElementById("p13").style.display = "none";
        document.getElementById("p14").style.display = "none";
    } else if(c2v12 > 0) {
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "block";
        document.getElementById("p3").style.display = "block";
        document.getElementById("p13").style.display = "none";
        document.getElementById("p14").style.display = "none";
    } else if(c2v13 > 0) {
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p13").style.display = "block";
        document.getElementById("p14").style.display = "none";
    } else if(c2v14 > 0) {
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p13").style.display = "none";
        document.getElementById("p14").style.display = "block";
    } else {
        // Nessuna variabile attiva: nascondi tutto
        document.getElementById("p11").style.display = "none";
        document.getElementById("p12").style.display = "none";
        document.getElementById("p3").style.display = "none";
        document.getElementById("p13").style.display = "none";
        document.getElementById("p14").style.display = "none";
    }
    }

    function C2P33() {
        if(c2v19>0){
            document.getElementById("p19").style.display = "block";
        }
    }

    function C2P35() {
        if(c2v20>0){
            document.getElementById("p20").style.display = "block";
        }
    }

    function C2P37() {
        if(c2v21>0){
            document.getElementById("p21").style.display = "block";
        } else if(c2v22>0){
            document.getElementById("p21").style.display = "block";
            document.getElementById("p22").style.display = "block";
        } 
    }

    function C2P38() {
        if(camera2>0) {
            if(camera3>0) {
                document.getElementById("pP").style.display = "block";
            } else {
                document.getElementById("pP3").style.display = "block";
            }
        } else {
            if(camera3>0) {
                document.getElementById("pP2").style.display = "block";
            } else {
                document.getElementById("pP23").style.display = "block";
            }
        }
    }
    function C2P39() {
        if(camera1>0) {
            if(camera3>0) {
                document.getElementById("pP").style.display = "block";
            } else {
                document.getElementById("pP3").style.display = "block";
            }
        } else {
            if(camera3>0) {
                document.getElementById("pP1").style.display = "block";
            } else {
                document.getElementById("pP13").style.display = "block";
            }
        }
    }
    function C2P40() {
        if(camera1>0) {
            if(camera2>0) {
                document.getElementById("pP").style.display = "block";
            } else {
                document.getElementById("pP2").style.display = "block";
            }
        } else {
            if(camera2>0) {
                document.getElementById("pP1").style.display = "block";
            } else {
                document.getElementById("pP12").style.display = "block";
            }
        }
    }
    function C2P41() {
        if(ParlaMadre>0) {
            document.getElementById("p41").style.display = "block";
        } else {
            document.getElementById("p42").style.display = "block";
        }
    }

    function C2P43() {
        if(c2v23>0){
            document.getElementById("p23").style.display = "block";
        }
    }

    function C2P44() {
        if(biblioteca>0) {
            document.getElementById("pT").style.display = "block"
        } else {
            document.getElementById("pBT").style.display = "block"
        }
    }
    function C2P45() {
        if(fondo>0) {
            document.getElementById("pT").style.display = "block"
        } else {
            document.getElementById("pFT").style.display = "block"
        }
    }
    function C2P66() {
        if(c2v35>0) {
            document.getElementById("p35").style.display = "block"
            document.getElementById("p39").style.display = "block"
        } else if(c2v36>0) {
            document.getElementById("p36").style.display = "block"
            document.getElementById("p39").style.display = "block"
        } else if(c2v37>0) {
            document.getElementById("p37").style.display = "block"
            document.getElementById("p39").style.display = "block"
        } else if(c2v41>0) {
            document.getElementById("p41").style.display = "block"
            document.getElementById("p40").style.display = "block"
        } else if(c2v43>0) {
            document.getElementById("p43").style.display = "block"
            document.getElementById("p42").style.display = "block"
            document.getElementById("p40").style.display = "block"
        } else if(c2v44>0) {
            document.getElementById("p44").style.display = "block"
            document.getElementById("p42").style.display = "block"
            document.getElementById("p40").style.display = "block"
        } else if(c2v38>0) {
            document.getElementById("p38").style.display = "block"
        }
    }
    function C2P67() {
        if(c2v57>0) {
            document.getElementById("p57").style.display = "block"
            document.getElementById("p56").style.display = "block"
        } else if(c2v58>0) {
            document.getElementById("p58").style.display = "block"
            document.getElementById("p56").style.display = "block"
        } else if(c2v59>0) {
            document.getElementById("p59").style.display = "block"
            document.getElementById("p56").style.display = "block"
        } else if(c2v60>0) {
            document.getElementById("p60").style.display = "block"
            document.getElementById("p56").style.display = "block"
        } else if(c2v55>0) {
            document.getElementById("p55").style.display = "block"
        }
    }
    function C2P56() {
        if(c2v29>0) {
            document.getElementById("p29").style.display = "block"
        }
    }
    function C2P46() {
        if(c2v30>0) {
            document.getElementById("p30").style.display = "block"
        }
    }
    function C2P71() {
        if(c2v28>0) {
            document.getElementById("p28").style.display = "block"
        }
    }
    function C2P73() {
        if(c2v28>0) {
            document.getElementById("p28").style.display = "block"
            document.getElementById("p25").style.display = "block"
            document.getElementById("p27").style.display = "block"
        } else if(c2v25>0) {
            document.getElementById("p25").style.display = "block"
            document.getElementById("p27").style.display = "block"
        } else if(c2v27>0) {
            document.getElementById("p27").style.display = "block"
        } else if(c2v26>0) {
            document.getElementById("p26").style.display = "block"
        }
    }