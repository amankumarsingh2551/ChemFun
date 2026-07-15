/* ==================================
        ChemFun Main JavaScript
================================== */


document.addEventListener("DOMContentLoaded",()=>{


// ================================
// Search Suggestions
// ================================

const suggestionBox =
document.getElementById("elementSuggestions");


if(suggestionBox && typeof elements !== "undefined"){

    elements.forEach(element=>{

        let option=document.createElement("option");
        option.value=element.name;
        suggestionBox.appendChild(option);

    });

}



// ================================
// Navigation
// ================================

const tabs=document.querySelectorAll(".tab");
const pages=document.querySelectorAll(".page");


tabs.forEach(tab=>{

    tab.addEventListener("click",()=>{

        tabs.forEach(t=>t.classList.remove("active"));
        pages.forEach(p=>p.classList.remove("active"));

        tab.classList.add("active");

        let page=document.getElementById(tab.dataset.page);

        if(page){
            page.classList.add("active");
        }

    });

});



// ================================
// Dark Mode
// ================================


const darkButton=
document.getElementById("darkModeBtn");


if(darkButton){

darkButton.addEventListener("click",()=>{

document.body.classList.toggle("dark");


darkButton.innerHTML=
document.body.classList.contains("dark")
?
"☀ Light Mode"
:
"🌙 Dark Mode";


});

}




// ================================
// Element Search
// ================================


const searchButton=
document.getElementById("searchButton");


if(searchButton){

searchButton.addEventListener("click",()=>{


let input=
document.getElementById("searchBox")
.value
.toLowerCase()
.trim();



let element=
elements.find(e=>

e.name.toLowerCase()==input ||

e.symbol.toLowerCase()==input

);



if(element){

showElement(element);

}

else{

alert("Element not found");

}



});


}





// ================================
// Show Element
// ================================


let selectedElement=null;


function showElement(element){


selectedElement=element;



const fields={

"name":element.name,

"symbol":element.symbol,

"atomicNumber":element.atomicNumber,

"mass":element.mass,

"configuration":
element.shells.join(","),

"protons":
element.atomicNumber,

"electrons":
element.atomicNumber,

"neutrons":
Math.round(
element.mass-element.atomicNumber
),

"valency":
element.valency || "Unknown"

};



for(let id in fields){

let box=document.getElementById(id);

if(box){

box.innerHTML=fields[id];

}

}



drawAtom(element.shells);


}




// ================================
// Draw Bohr Atom
// ================================


function drawAtom(shells){


const container=
document.getElementById("shellContainer");


if(!container)return;


container.innerHTML="";



const colors=[
"#00ffff",
"#00ff00",
"#ffff00",
"#ff00ff",
"#ff8800"
];



shells.forEach((count,index)=>{


let size=130+(index*80);


let shell=
document.createElement("div");


shell.className="shell";

shell.style.width=size+"px";
shell.style.height=size+"px";

shell.style.borderColor=
colors[index%colors.length];



for(let i=0;i<count;i++){


let electron=
document.createElement("div");


electron.className="electron";


let angle=
(360/count)*i;


let radius=size/2;



electron.style.left=
radius+
Math.cos(angle*Math.PI/180)*radius
+"px";


electron.style.top=
radius+
Math.sin(angle*Math.PI/180)*radius
+"px";


shell.appendChild(electron);


}



container.appendChild(shell);


});


}
// ================================
// Bohr Radius Calculator
// ================================


const radiusButton=
document.getElementById("radiusButton");


if(radiusButton){

radiusButton.addEventListener("click",()=>{


let n=
Number(
document.getElementById("radiusInput").value
);



if(!n){

alert("Enter energy level");

return;

}



let radius=
0.529*n*n;



document.getElementById("radiusResult")
.innerHTML=
"Radius = "+radius.toFixed(3)+" Å";


});


}




// ================================
// Energy Calculator
// ================================


const energyButton=
document.getElementById("energyButton");


if(energyButton){

energyButton.addEventListener("click",()=>{


let n=
Number(
document.getElementById("energyInput").value
);



if(!n){

alert("Enter energy level");

return;

}



let energy=
-13.6/(n*n);



document.getElementById("energyResult")
.innerHTML=
"Energy = "
+energy.toFixed(3)
+" eV";


});


}




// ================================
// Spectral Calculator
// ================================


const spectralButton=
document.getElementById("spectralButton");


if(spectralButton){

spectralButton.addEventListener("click",()=>{


let n1=
Number(
document.getElementById("n1").value
);


let n2=
Number(
document.getElementById("n2").value
);



if(n2<=n1){

alert(
"Higher level must be larger"
);

return;

}



let wavelength=

1/
(
1.097e7*
(
(1/(n1*n1))
-
(1/(n2*n2))
)
);



wavelength*=1000000000;



let energy=

(6.626e-34*3e8)
/
(wavelength/1000000000);



let frequency=

3e8/
(wavelength/1000000000);



let series="Unknown";



if(n1==1)
series="Lyman Series";

else if(n1==2)
series="Balmer Series";

else if(n1==3)
series="Paschen Series";

else if(n1==4)
series="Brackett Series";

else if(n1==5)
series="Pfund Series";



document.getElementById("spectralResult")
.innerHTML=
"Wavelength: "
+wavelength.toFixed(2)
+" nm";


document.getElementById("photonEnergy")
.innerHTML=
"Photon Energy: "
+energy.toExponential(3)
+" J";


document.getElementById("frequency")
.innerHTML=
"Frequency: "
+frequency.toExponential(3)
+" Hz";


document.getElementById("series")
.innerHTML=
series;


});


}




// ================================
// Periodic Table Generator
// ================================


const grid=
document.getElementById("periodicGrid");


if(grid && typeof periodicTableData!=="undefined"){


periodicTableData.forEach(item=>{


let element=
elements.find(e=>
e.symbol==item.symbol
);



if(element){


let box=
document.createElement("div");


box.className=
"periodicElement "
+
item.category;



box.innerHTML=
`
<strong>
${element.atomicNumber}
</strong>
<br>
${element.symbol}
`;



box.onclick=()=>{

showElement(element);


let bohrTab=
document.querySelector(
'[data-page="bohr"]'
);


if(bohrTab)
bohrTab.click();


};



grid.appendChild(box);


}


});


}





// ================================
// Quiz System
// ================================


const questions=[


{
question:
"Who created the Bohr Atomic Model?",

answers:[
"Niels Bohr",
"Newton",
"Einstein",
"Dalton"
],

correct:0

},


{
question:
"Atomic number of Oxygen?",

answers:[
"6",
"8",
"10",
"16"
],

correct:1

},


{
question:
"First shell maximum electrons?",

answers:[
"2",
"8",
"18",
"32"
],

correct:0

},


{
question:
"Symbol of Gold?",

answers:[
"Ag",
"Au",
"Go",
"Fe"
],

correct:1

}


];



let questionIndex=0;
let score=0;



const questionBox=
document.getElementById("question");


const answerBox=
document.getElementById("answers");


const scoreBox=
document.getElementById("score");


const feedback=
document.getElementById("feedback");



function loadQuestion(){


if(!questionBox)return;


let q=
questions[questionIndex];


questionBox.innerHTML=
q.question;


answerBox.innerHTML="";



q.answers.forEach((answer,index)=>{


let button=
document.createElement("button");


button.className=
"answerButton";


button.innerHTML=
answer;



button.onclick=()=>{


if(index==q.correct){

score++;

feedback.innerHTML=
"✅ Correct";

}

else{

feedback.innerHTML=
"❌ Wrong";

}


scoreBox.innerHTML=
"Score: "+score;


};



answerBox.appendChild(button);


});


}



const nextButton=
document.getElementById("nextQuestion");


if(nextButton){

nextButton.onclick=()=>{


questionIndex++;


if(questionIndex>=questions.length){


alert(
"Quiz Finished! Score: "
+score
);


questionIndex=0;
score=0;


}



feedback.innerHTML="";

loadQuestion();


};


}


loadQuestion();


});