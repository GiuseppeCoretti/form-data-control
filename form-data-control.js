function createOptionDay() {
    var value = 1;
    while (value < 32) {
        var select = document.getElementById("cmbGiorno");
        var option = document.createElement("option");
        var valueAttr = document.createAttribute("value");
        valueAttr.value = value;
        option.setAttributeNode(valueAttr);
        option.innerHTML = value;
        select.appendChild(option);
        value = value + 1;
    }
}

function createOptionMonth() {
    var value = 0;
    var mesi = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];
    while (value < 12) {
        var select = document.getElementById("cmbMese");
        var option = document.createElement("option");
        var valueAttr = document.createAttribute("value");
        valueAttr.value = value;
        option.setAttributeNode(valueAttr);
        option.innerHTML = mesi[value];
        select.appendChild(option);
        value = value + 1;
    }
}

function createOptionYear() {
    var annoAttuale = new Date().getFullYear();
    var value = annoAttuale;
    var anno = 50;
    while (anno > 0) {
        var select = document.getElementById("cmbAnno");
        var option = document.createElement("option");
        var valueAttr = document.createAttribute("value");
        valueAttr.value = value;
        option.setAttributeNode(valueAttr);
        option.innerHTML = value;
        select.appendChild(option);
        value = value - 1;
        anno = anno - 1;
    }
}

function disable() {
    var mese = parseInt(document.getElementById("cmbMese").value);
    var anno = parseInt(document.getElementById("cmbAnno").value);
    var thirty = new Array(3, 5, 8, 10);
    var giorno = document.getElementsByTagName("option");
    if (thirty.indexOf(mese) != -1) {
        var giorno31 = giorno[30];
        var disattr = document.createAttribute("disabled");
        disattr.value = "disabled";
        giorno31.setAttributeNode(disattr);
        console.log(giorno31);
    }
    else if (mese == 1){
        if (anno % 4 == 0) {
            for (i=29; i<31; i++){
                var giornoDis = giorno[i];
                var disattr2 = document.createAttribute("disabled");
                disattr2.value = "disabled";
                giornoDis.setAttributeNode(disattr2);
            }
        }
        else {
            for (i=28; i<31; i++){
                var giornoDis = giorno[i];
                var disattr3 = document.createAttribute("disabled");
                disattr3.value = "disabled";
                giornoDis.setAttributeNode(disattr3);;
            }
        }
    }
    else {
        for (i = 28; i < 31; i++){
                var giornoDis = giorno[i];
                giornoDis.removeAttribute("disabled");
        }
    }
}

function control(string) {
    var myregexp = /^[a-zA-Z\u0020àèìòù]+$/;
    if (string.charAt(0) != " " && string.charAt(string.length - 1) != " " && myregexp.test(string) == true) {
        return true;
    }
    else {
        return false;
    }
}

function anagaf() {
    var txtNome = document.getElementById("txtNome").value;
    var txtCognome = document.getElementById("txtCognome").value;
    if (txtNome == "" && txtCognome == "" ) {
        alert("Non hai digitato nulla");
    }
    else if(txtNome == ""){
        alert("Non hai digitato il Nome");
    }
    else if(txtCognome == ""){
        alert("Non hai digitato il Cognome");
    }
    else if (control(txtNome) == false) {
        alert("Hai digitato caratteri non consentiti nel nome.")
    }
    else if (control(txtCognome) == false) {
        alert("Hai digitato caratteri non consentiti nel cognome.")
    }
    else {
        alert("Ciao " + txtNome + " " + txtCognome);
    }
}

function eta() {
    var Giorno = document.getElementById("cmbGiorno").value;
    var Mese = document.getElementById("cmbMese").value;
    var Anno = document.getElementById("cmbAnno").value;
    var data = new Date(Anno, Mese, Giorno);
    var dataAttuale = new Date();
    var diffDays = dataAttuale.getTime() - data.getTime();
    var timeDif = (diffDays / (1000 * 3600 * 24 * 365));
    if (timeDif > 18.0) {
        alert("Sei maggiorenne.");
    }
    else {
        alert("Non sei maggiorenne!");
    }
}
