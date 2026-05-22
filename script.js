// 💖 YES BUTTON
document.getElementById("yes").onclick = function(){
  document.getElementById("intro").style.display="none";
  document.getElementById("main").style.display="block";
}

// 😏 NO BUTTON RUN AWAY
let no = document.getElementById("no");

no.addEventListener("mouseover", function(){
  no.style.top = Math.random()*window.innerHeight+"px";
  no.style.left = Math.random()*window.innerWidth+"px";
});

// ⏳ LIVE TIMER (days, hours, minutes, seconds)
function updateTimer(){
  let start = new Date("2025-08-23 00:00:00").getTime();
  let now = new Date().getTime();
  let diff = now - start;

  let days = Math.floor(diff/(1000*60*60*24));
  let hours = Math.floor((diff/(1000*60*60))%24);
  let minutes = Math.floor((diff/(1000*60))%60);
  let seconds = Math.floor((diff/1000)%60);

  document.getElementById("timer").innerHTML =
  `❤️ ${days}d ${hours}h ${minutes}m ${seconds}s ❤️<br>
   💞 We are getting closer every second 💞`;
}

setInterval(updateTimer,1000);

// 💖 FLOATING HEARTS + KISSES
setInterval(()=>{
  let el=document.createElement("div");
  el.innerHTML=Math.random()>0.5?"💖":"💋";
  el.style.position="fixed";
  el.style.left=Math.random()*100+"vw";
  el.style.top="100vh";
  el.style.fontSize="22px";
  el.style.animation="fall 5s linear";
  document.body.appendChild(el);

  setTimeout(()=>el.remove(),5000);
},400);

// 🌹 FALLING ROSES (NETFLIX ROMANTIC EFFECT)
setInterval(()=>{
  let rose=document.createElement("div");
  rose.classList.add("rose");
  rose.innerHTML="🌹";

  rose.style.left=Math.random()*window.innerWidth+"px";
  rose.style.animationDuration=(3+Math.random()*3)+"s";
  rose.style.fontSize=(15+Math.random()*20)+"px";

  document.body.appendChild(rose);

  setTimeout(()=>rose.remove(),6000);
},300);