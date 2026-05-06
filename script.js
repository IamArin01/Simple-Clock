const heading = document.getElementById("header");

heading.addEventListener("click", changeheading, {once:true});

function changeheading(){
    heading.classList.add("caught");
    heading.innerText="you caught me";
    heading.addEventListener("mouseout", ()=>{
        heading.classList.remove("caught");
        heading.innerHTML = "Digital Clock <hr>";
    });

}//header thing


//clock thing
//as it should be
function clockie(){
    const now = new Date();

    const timeString = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    });
    document.getElementById("time").textContent= timeString;
}
setInterval(clockie, 1000);






//hover thing
const hover = document.getElementById("time");
const box = document.getElementById("og");
hover.addEventListener("mouseover", changetxt);

function changetxt(){
    box.textContent="The Digital Clock. As it should be.";
    
}
hover.addEventListener("mouseout", ()=>{box.textContent="";});