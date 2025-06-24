//DIFFERENZIA ESPERIENZA PER I GIOCATORI
function login() {
    localStorage.clear();
    const username = document.getElementById('username').value.trim();
    if (username) {
      localStorage.setItem('utente', username);
      alert(username);
      window.location.href = 'inizio.html';
      alert(username);
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

    