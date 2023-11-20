function aperte(){
        var paragrafo = document.createElement("h2");

        var text = document.createTextNode("Eu te amo!");

        paragrafo.appendChild(text);

        document.body.appendChild(paragrafo);
}