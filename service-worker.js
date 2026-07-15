// =============================
// ChemFun Offline System
// =============================


const cacheName =
"chemfun-v1";


const files=[

"index.html",

"style.css",

"script.js",

"elements.js",

"manifest.json"

];



self.addEventListener(
"install",
event=>{


event.waitUntil(

caches.open(cacheName)
.then(cache=>{

return cache.addAll(files);

})

);


});




self.addEventListener(
"fetch",
event=>{


event.respondWith(

caches.match(event.request)

.then(response=>{


return response ||
fetch(event.request);


})

);


});