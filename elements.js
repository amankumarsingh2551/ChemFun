/*
=================================
 ChemFun Element Database
=================================
*/


const elements = [

{
    name:"Hydrogen",
    symbol:"H",
    atomicNumber:1,
    mass:1.008,
    shells:[1]
},


{
    name:"Helium",
    symbol:"He",
    atomicNumber:2,
    mass:4.0026,
    shells:[2]
},


{
    name:"Lithium",
    symbol:"Li",
    atomicNumber:3,
    mass:6.94,
    shells:[2,1]
},


{
    name:"Carbon",
    symbol:"C",
    atomicNumber:6,
    mass:12.011,
    shells:[2,4]
},


{
    name:"Nitrogen",
    symbol:"N",
    atomicNumber:7,
    mass:14.007,
    shells:[2,5]
},


{
name:"Oxygen",
symbol:"O",
atomicNumber:8,
mass:15.999,
shells:[2,6],
valency:2

},


{
    name:"Fluorine",
    symbol:"F",
    atomicNumber:9,
    mass:18.998,
    shells:[2,7]
},


{
    name:"Neon",
    symbol:"Ne",
    atomicNumber:10,
    mass:20.180,
    shells:[2,8]
},


{
    name:"Sodium",
    symbol:"Na",
    atomicNumber:11,
    mass:22.990,
    shells:[2,8,1]
},


{
    name:"Magnesium",
    symbol:"Mg",
    atomicNumber:12,
    mass:24.305,
    shells:[2,8,2]
},


{
    name:"Aluminium",
    symbol:"Al",
    atomicNumber:13,
    mass:26.982,
    shells:[2,8,3]
},


{
    name:"Silicon",
    symbol:"Si",
    atomicNumber:14,
    mass:28.085,
    shells:[2,8,4]
},


{
    name:"Chlorine",
    symbol:"Cl",
    atomicNumber:17,
    mass:35.45,
    shells:[2,8,7]
},


{
    name:"Argon",
    symbol:"Ar",
    atomicNumber:18,
    mass:39.948,
    shells:[2,8,8]
},


{
    name:"Calcium",
    symbol:"Ca",
    atomicNumber:20,
    mass:40.078,
    shells:[2,8,8,2]
},


{
    name:"Iron",
    symbol:"Fe",
    atomicNumber:26,
    mass:55.845,
    shells:[2,8,14,2]
},


{
    name:"Copper",
    symbol:"Cu",
    atomicNumber:29,
    mass:63.546,
    shells:[2,8,18,1]
},


{
    name:"Silver",
    symbol:"Ag",
    atomicNumber:47,
    mass:107.868,
    shells:[2,8,18,18,1]
},


{
    name:"Gold",
    symbol:"Au",
    atomicNumber:79,
    mass:196.967,
    shells:[2,8,18,32,18,1]
}

];

// ===============================
// Periodic Table Display Data
// ===============================

const periodicElements = [

"H","He",
"Li","Be",
"B","C","N","O","F","Ne",
"Na","Mg",
"Al","Si","P","S","Cl","Ar",
"K","Ca",
"Fe","Cu","Ag","Au"

];
// =================================
// Periodic Table Layout
// =================================


const periodicTableData = [

{
symbol:"H",
category:"nonmetal"
},

{
symbol:"He",
category:"noble"
},

{
symbol:"Li",
category:"metal"
},

{
symbol:"Be",
category:"metal"
},

{
symbol:"C",
category:"nonmetal"
},

{
symbol:"N",
category:"nonmetal"
},

{
symbol:"O",
category:"nonmetal"
},

{
symbol:"F",
category:"nonmetal"
},

{
symbol:"Ne",
category:"noble"
},

{
symbol:"Na",
category:"metal"
},

{
symbol:"Mg",
category:"metal"
},

{
symbol:"Al",
category:"metal"
},

{
symbol:"Si",
category:"nonmetal"
},

{
symbol:"Cl",
category:"nonmetal"
},

{
symbol:"Ar",
category:"noble"
},

{
symbol:"Ca",
category:"metal"
},

{
symbol:"Fe",
category:"transition"
},

{
symbol:"Cu",
category:"transition"
},

{
symbol:"Ag",
category:"transition"
},

{
symbol:"Au",
category:"transition"
}

];
const chemistryFacts=[


"Hydrogen is the most abundant element in the universe.",


"Carbon is the basis of all known life.",


"Gold is one of the least reactive metals.",


"Oxygen supports combustion and respiration.",


"Neon produces a bright orange-red glow in lamps.",


"Iron is important for making steel."


];
