function calc(){
    var A = Number(document.getElementById("a").value);
    var B = Number(document.getElementById("b").value);
    var C = Number(document.getElementById("c").value);
    var Hvilken = document.getElementById("Hvilken").value;
    var Sum = A+B
    var slut = document.getElementById("Slut");
    console.log(A);
    console.log(B);
    console.log(Sum);


    if (Hvilken == "Cos(a)") {
        console.log("Cos(a)")
        var cos = (B**2+C**2-A**2)/(2*B*C);
        var cosS = Math.round(100*radToVinkel(Math.acos(cos)))/100
        if (isNaN(cosS)) {slut.value = "Ikke et Validt Tal"} 
        else {slut.value = cosS.toString().replace(".",",")}

    } else if (Hvilken == "Cos(b)") {
        console.log("Cos(b)")
        var cos = (A**2+C**2-A**2)/(2*A*C);
        var cosS = Math.round(100*radToVinkel(Math.acos(cos)))/100
        if (isNaN(cosS)) {slut.value = "Ikke et Validt Tal"} 
        else {slut.value = cosS.toString().replace(".",",")}

    } else if (Hvilken == "Cos(c)") {
        console.log("Cos(c)")
        var cos = (A**2+B**2-C**2)/(2*A*B);
        var cosS = Math.round(100*radToVinkel(Math.acos(cos)))/100
        if (isNaN(cosS)) {slut.value = "Ikke et Validt Tal"} 
        else {slut.value = cosS.toString().replace(".",",")}
    }
}


function radToVinkel(radians) {
    var pi = Math.PI;
    return radians * (180/pi)
}

function vinkelToRad(Vinkel) {
    var pi = Math.PI;
    return Vinkel * (pi/180)
}

function LabelChange() {
    var selectSide = document.getElementById("Side");
    var value = selectSide.options[selectSide.selectedIndex].innerText; 
    var sideNavn = document.getElementById("SideNavn");

    var UkendtSideSelector = document.getElementById("UkendtSideSelector");

    var UkendtVinkelSide = UkendtSideSelector.options[UkendtSideSelector.selectedIndex].innerText;



    var UkendtSideA = document.getElementById("UkendtVinkelSideA");
    var UkendtSideNavnA = document.getElementById("UkendtSideNavnA")

    var UkendtSideB = document.getElementById("UkendtVinkelSideB");
    var UkendtSideNavnB = document.getElementById("UkendtSideNavnB")






    if (value == "Hyp  ->  Hos") {
        sideNavn.innerText = "hypotenusen"
    } else if (value == "Hyp  ->  Mod") {
        sideNavn.innerText = "hypotenusen"

    } else if (value == "Hos  ->  Hyp") {
        sideNavn.innerText = "Hosliggende"

    } else if (value == "Mod  ->  Hyp") {
        sideNavn.innerText = "Modst??ende"

    } else if (value == "Hos  ->  Mod") {
        sideNavn.innerText = "Hosliggende"

    } else if (value == "Mod  ->  Hos") {
        sideNavn.innerText = "Modst??ende"
    }


    if (UkendtVinkelSide == "ACos" ||UkendtVinkelSide ==  "BCos") {
        UkendtSideNavnA.innerText = "Hosliggende"
        UkendtSideNavnB.innerText = "hypotenusen"
    } else if (UkendtVinkelSide == "ASin"|| UkendtVinkelSide == "BSin") {
        UkendtSideNavnA.innerText = "Modst??ende"
        UkendtSideNavnB.innerText = "hypotenusen"
    } else if (UkendtVinkelSide == "ATan"|| UkendtVinkelSide == "BTan") {
        UkendtSideNavnA.innerText = "Modst??ende"
        UkendtSideNavnB.innerText = "Hosliggende"
    }




    var OmregnSelect = document.getElementById("OmregnSelect");
    var OmregnSelectSelector = OmregnSelect.options[OmregnSelect.selectedIndex].value;

    var OmregnLabel = document.getElementById("OmregnNavn");




    if (OmregnSelectSelector == "VC" || OmregnSelectSelector ==  "VS"|| OmregnSelectSelector == "VT") {
        OmregnLabel.innerText = "Vinkel";
    } else if (OmregnSelectSelector == "CV") {
        OmregnLabel.innerText = "Cosinus";
    } else if (OmregnSelectSelector == "SV") {
        OmregnLabel.innerText = "Sinus";
    } else if (OmregnSelectSelector == "TV") {
        OmregnLabel.innerText = "Tangens";
    }




} 


function CalcKendtVinkel() {
    var select = document.getElementById("Side");
    var value = select.options[select.selectedIndex].innerText;

    var SideL??ngde = Number(document.getElementById("SideL??ngde").value);
    console.log(SideL??ngde);
    var Vinkel = Number(document.getElementById("Vinkel").value);

    var SlutKendtVinkelBox = document.getElementById("SlutKendtVinkel");



    if (value == "Hyp  ->  Hos") {
        var SlutKendtVinkel = Math.round(100*SideL??ngde*Math.cos(vinkelToRad(Vinkel)))/100


        if (isNaN(SlutKendtVinkel)) {SlutKendtVinkelBox.value = "Ikke et Validt Tal"} 
        else {SlutKendtVinkelBox.value = SlutKendtVinkel.toString().replace(".",",")}
        

    } else if (value == "Hyp  ->  Mod") {
        var SlutKendtVinkel = Math.round(100*SideL??ngde*Math.sin(vinkelToRad(Vinkel)))/100

        if (isNaN(SlutKendtVinkel)) {SlutKendtVinkelBox.value = "Ikke et Validt Tal"} 
        else {SlutKendtVinkelBox.value = SlutKendtVinkel.toString().replace(".",",")}

    } else if (value == "Hos  ->  Hyp") {
        var SlutKendtVinkel = Math.round(100*SideL??ngde/Math.cos(vinkelToRad(Vinkel)))/100


        if (isNaN(SlutKendtVinkel)) {SlutKendtVinkelBox.value = "Ikke et Validt Tal"} 
        else {SlutKendtVinkelBox.value = SlutKendtVinkel.toString().replace(".",",")}

    } else if (value == "Mod  ->  Hyp") {
        var SlutKendtVinkel = Math.round(100*SideL??ngde/Math.sin(vinkelToRad(Vinkel)))/100

        if (isNaN(SlutKendtVinkel)) {SlutKendtVinkelBox.value = "Ikke et Validt Tal"} 
        else {SlutKendtVinkelBox.value = SlutKendtVinkel.toString().replace(".",",")}

    } else if (value == "Hos  ->  Mod") {
        var SlutKendtVinkel = Math.round(100*SideL??ngde*Math.tan(vinkelToRad(Vinkel)))/100

        if (isNaN(SlutKendtVinkel)) {SlutKendtVinkelBox.value = "Ikke et Validt Tal"} 
        else {SlutKendtVinkelBox.value = SlutKendtVinkel.toString().replace(".",",")}

    } else if (value == "Mod  ->  Hos") {
        var SlutKendtVinkel = Math.round(100*SideL??ngde/Math.tan(vinkelToRad(Vinkel)))/100

        if (isNaN(SlutKendtVinkel)) {SlutKendtVinkelBox.value = "Ikke et Validt Tal"} 
        else {SlutKendtVinkelBox.value = SlutKendtVinkel.toString().replace(".",",")}

    }
}

function calcUkendtVinkel() {
    var UkendtSideA = Number(document.getElementById("UkendtSideA").value);
    var UkendtSideB = Number(document.getElementById("UkendtSideB").value);

    var SlutUkendtVinkel = document.getElementById("SlutUkendtVinkel");

    var UkendtSideSelector = document.getElementById("UkendtSideSelector");
    var UkendtVinkelSide = UkendtSideSelector.options[UkendtSideSelector.selectedIndex].innerText;

    if (UkendtVinkelSide == "ACos" ||UkendtVinkelSide ==  "BCos") {
        var Cos = Math.round(100*radToVinkel(Math.acos(UkendtSideB/UkendtSideA)))/100
        if (isNaN(Cos)) {SlutUkendtVinkel.value = "Ikke et Validt Tal"} 
        else {SlutUkendtVinkel.value = Cos.toString().replace(".",",")}

    } else if (UkendtVinkelSide == "ASin"|| UkendtVinkelSide == "BSin") {
        var Sin = Math.round(100*radToVinkel(Math.asin(UkendtSideB/UkendtSideA)))/100
        if (isNaN(Sin)) {SlutUkendtVinkel.value = "Ikke et Validt Tal"} 
        else {SlutUkendtVinkel.value = Sin.toString().replace(".",",")}

    } else if (UkendtVinkelSide == "ATan"|| UkendtVinkelSide == "BTan") {
        var Tan = Math.round(100*radToVinkel(Math.atan(UkendtSideB/UkendtSideA)))/100
        if (isNaN(Tan)) {SlutUkendtVinkel.value = "Ikke et Validt Tal"} 
        else {SlutUkendtVinkel.value = Tan.toString().replace(".",",")}
        
    }

}

function calcOmregn() {

    var OmregnSelect = document.getElementById("OmregnSelect");
    var OmregnSelectSelector = OmregnSelect.options[OmregnSelect.selectedIndex].value;

    var OmregnTal = Number(document.getElementById("OmregnTal").value.replace(",","."));


    var slutOmregn = document.getElementById("SlutOmregn");






    if (OmregnSelectSelector == "VC") {
        MellemSlut = (Math.round(Math.cos(vinkelToRad(OmregnTal))*1000)/1000).toString().replace(".",",");
        if(180>OmregnTal>0){slutOmregn.value=MellemSlut} else {slutOmregn.value="Ikke Validt Tal"}

    } else if (OmregnSelectSelector == "VS") {
        MellemSlut = (Math.round(Math.sin(vinkelToRad(OmregnTal))*1000)/1000).toString().replace(".",",");
        if(180>OmregnTal>0){slutOmregn.value=MellemSlut} else {slutOmregn.value="Ikke Validt Tal"}

    } else if (OmregnSelectSelector == "VT") {
        MellemSlut = (Math.round(Math.tan(vinkelToRad(OmregnTal))*1000)/1000).toString().replace(".",",");
        if(180>OmregnTal>0){slutOmregn.value=MellemSlut} else {slutOmregn.value="Ikke Validt Tal"}

    } else if (OmregnSelectSelector == "CV") {
        MellemSlut = (Math.round(radToVinkel(Math.acos(OmregnTal))*1000)/1000).toString().replace(".",",");
        if(180>OmregnTal>0){slutOmregn.value=MellemSlut} else {slutOmregn.value="Ikke Validt Tal"}
        
    } else if (OmregnSelectSelector == "SV") {
        MellemSlut = (Math.round(radToVinkel(Math.asin(OmregnTal))*1000)/1000).toString().replace(".",",");
        if(180>OmregnTal>0){slutOmregn.value=MellemSlut} else {slutOmregn.value="Ikke Validt Tal"}



    } else if (OmregnSelectSelector == "TV") {
        MellemSlut = (Math.round(radToVinkel(Math.atan(OmregnTal))*1000)/1000).toString().replace(".",",");
        if(180>OmregnTal>0){slutOmregn.value=MellemSlut} else {slutOmregn.value="Ikke Validt Tal"}
        
    } 
}


function ShowMenu() {
    var menu = document.getElementById("Menu");

    menu.style.display="block"
}

function HideMenu() {
    var menu = document.getElementById("Menu");

    menu.style.display="none"
}




function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
  }

  function DarkMode() {
    var html = document.getElementById("html");
    var checkBox = document.getElementById("DarkMode");
    var h1 = document.querySelectorAll("h1");
    var label = document.querySelectorAll(".InputLabel");
    var InfoKnapper = document.querySelectorAll(".InfoKnapper");
    var Paragraphs = document.querySelectorAll("p");
    var InfoBaggrund = document.querySelectorAll(".InfoBaggrund");

    if (checkBox.checked) {
          html.style.backgroundColor = "#2b2c2e"
          h1.forEach(e => {e.style.color = "white"});
          label.forEach(e => {e.style.color = "white"});
          InfoKnapper.forEach(e => {e.style.color = "white"});
          Paragraphs.forEach(e => {e.style.color = "white"});
          InfoBaggrund.forEach(e => {e.style.backgroundColor = "#46474a"});

      } else {
          html.style.backgroundColor = "White"
          h1.forEach(e => {e.style.color = "black"});
          label.forEach(e => {e.style.color = "black"});
          InfoKnapper.forEach(e => {e.style.color = "black"});
          Paragraphs.forEach(e => {e.style.color = "black"});
          InfoBaggrund.forEach(e => {e.style.backgroundColor = "#e0e0e0"});
      }
  }

  function ComicMode() {
    var checkBox = document.getElementById("ComicMode");
    var h1 = document.querySelectorAll("h1");
    var label = document.querySelectorAll("label");
    var Paragraphs = document.querySelectorAll("p");

    if (checkBox.checked) {
          h1.forEach(e => {e.style.fontFamily =  "Comic Sans MS"});
          label.forEach(e => {e.style.fontFamily = "Comic Sans MS"})
          Paragraphs.forEach(e => {e.style.fontFamily = "Comic Sans MS"})
      } else {
          h1.forEach(e => {e.style.fontFamily =  ""});
          label.forEach(e => {e.style.fontFamily = ""});
          Paragraphs.forEach(e => {e.style.fontFamily = ""});
      }
  }


  function DarkLabelClick() {
    var checkBox = document.getElementById("DarkMode");
    if (checkBox.checked) {
        checkBox.checked = false
        DarkMode()
    } else {
        checkBox.checked = true 
        DarkMode()}
  };


  function ComicLabelClick() {
    var checkBox = document.getElementById("ComicMode");
    if (checkBox.checked) {
        checkBox.checked = false
        ComicMode()
    } else {
        checkBox.checked = true 
        ComicMode()}
  };







  function parse(str) {
    return Function(`'use strict'; return (${str})`)()
  }

  function ClearCalc() {
    var input = document.getElementById("Item1");
    input.value = ""
    input.focus();
  }

  function Calc() {
    var input = document.getElementById("Item1");
    input.focus();
    console.log(input.value)
    console.log( parse(input.value) );
    console.log(parse(input.value.toString().replace(",",".")));
    
    //input.value = parse(input)
    //console.log(parse(input));
    input.value = parse(input.value.toString().replace(",","."))
  }

  function addANumber(number) {
      var input = document.getElementById("Item1");
      input.value = input.value + number
      input.focus();
  }

  function DelANumber() {
    var input = document.getElementById("Item1");
    input.value = input.value.slice(0,-1);
  }



  








