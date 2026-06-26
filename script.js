
let score = 0;
let user = "";

const activities = [
"Hot Seat","Rally Robin","Round Robin","Talking Chips","Timed Pair Share",
"Think-Pair-Share","Team Interview","Three-Step Interview","Value Lines","Team Stand-N-Share",
"Gallery Walk","Role Play","Round Table","Simultaneous Round Table","Mix-N-Match",
"Formations","Showdown","Mix-Freeze-Group","Team Project","Traveling File",
"Roam The Room","Three Stray One Stay","Team Statement","Sages Share",
"Peta i-Think","Inside-Outside Circle","Same-Different","Trade-A-Problem","Find the Fib",
"Windows Pane","Paraphrase","Find-Someone-Who","Two Box Induction","Who Am I",
"Lyrical Lessons","Mendeklamasikan Sajak","Team Word-Web","Kinesthetic Symbols",
"Gallery Tour","The Yarn Yarn","Fan-N-Pick",
"Line Ups","Stir-The-Class","Match-Mine","Rotating Review",
"Team Interview","Talking Chips"
];

let filtered = [...activities];

// LOGIN
function login(){
  user = document.getElementById("name").value;
  if(!user) return alert("Sila isi nama");

  document.getElementById("login").style.display="none";
  document.getElementById("app").style.display="block";

  loadScore();
  render();
  leaderboard();
}

// RENDER ACTIVITIES
function render(){
  let list=document.getElementById("list");
  list.innerHTML="";

  filtered.forEach(a=>{
    let div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<h3>${a}</h3><p>Klik untuk info + kuiz</p>`;

    div.onclick=()=>quiz(a);

    list.appendChild(div);
  });
}

// SEARCH
function search(){
  let val=document.getElementById("search").value.toLowerCase();
  filtered = activities.filter(a=>a.toLowerCase().includes(val));
  render();
}

// QUIZ + SCORE (AI SIMULATION)
function quiz(name){
  let ans = prompt("Apa tujuan aktiviti " + name + "?");

  if(ans){
    score += 10;
    document.getElementById("score").innerText = score;
    alert("Betul! +10 skor 🎉");

    saveScore();
    leaderboard();
  }
}

// SAVE LOCAL
function saveScore(){
  localStorage.setItem(user, score);
}

// LOAD
function loadScore(){
  let saved = localStorage.getItem(user);
  if(saved){
    score = parseInt(saved);
    document.getElementById("score").innerText = score;
  }
}

// LEADERBOARD (SIMULATED MULTI USER)
function leaderboard(){
  let board = document.getElementById("board");

  let data = [
    {name:user,score:score},
    {name:"Aiman",score:80},
    {name:"Siti",score:70},
    {name:"Daniel",score:60}
  ];

  board.innerHTML = "";

  data.sort((a,b)=>b.score-a.score);

  data.forEach(d=>{
    let div=document.createElement("div");
    div.className="rank";
    div.innerHTML=`🏅 ${d.name} - ${d.score}`;
    board.appendChild(div);
  });
}
