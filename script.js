let score = 0;
let currentUser = "";

const activities = [
{n:"Hot Seat",c:["Komunikasi"]},
{n:"Gallery Walk",c:["Kolaboratif"]},
{n:"Peta i-Think",c:["KBAT"]},
{n:"Lyrical Lessons",c:["Kreativiti"]},
{n:"Line Ups",c:["Pergerakan"]},
{n:"Showdown",c:["Refleksi"]}
];

// LOGIN
function login(){
  let name = document.getElementById("user").value;

  if(name === ""){
    alert("Sila masukkan nama");
    return;
  }

  currentUser = name;

  document.getElementById("loginBox").style.display="none";
  document.getElementById("app").style.display="block";

  document.getElementById("name").innerText = name;

  render();
}

// RENDER CARDS
function render(){
  let list = document.getElementById("list");
  list.innerHTML="";

  activities.forEach(a=>{
    let div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<h3>${a.n}</h3><p>${a.c.join(", ")}</p>`;
    div.onclick=()=>openModal(a);
    list.appendChild(div);
  });
}

// MODAL
function openModal(a){
  document.getElementById("modal").style.display="block";

  document.getElementById("detail").innerHTML=`
    <h2>${a.n}</h2>

    <p><b>📌 Cara:</b> Guru → Murid → Aktiviti → Perbincangan</p>

    <p><b>⏱ Masa:</b> 10–30 minit</p>

    <button class="quiz" onclick="quiz('${a.n}')">
      🎮 Jawab Kuiz +10 Skor
    </button>
  `;
}

function closeModal(){
  document.getElementById("modal").style.display="none";
}

// QUIZ + SCORE SYSTEM
function quiz(name){
  let ans = prompt("Apa tujuan aktiviti " + name + "?");

  if(ans){
    score += 10;
    document.getElementById("score").innerText = score;
    alert("Betul! +10 skor 🎉");
  }else{
    alert("Cuba lagi!");
  }

  saveScore();
}

// SAVE SCORE (LOCAL STORAGE)
function saveScore(){
  localStorage.setItem(currentUser, score);
}

// LOAD SCORE
window.onload = function(){
  let saved = localStorage.getItem(currentUser);
  if(saved){
    score = parseInt(saved);
    document.getElementById("score").innerText = score;
  }
}
