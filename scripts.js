// Write your JavaScript code here.
// Remember to pay attention to page loading!
let land = null;
let abortMission = null;
let takeOff = null;
let rocket = null;



    function init () {
        land = document.getElementById("landing");
        abortMission = document.getElementById("missionAbort");
        takeOff = document.getElementById("takeoff");
        rocket = document.getElementById("rocket");
        
    

    takeOff.addEventListener("click", function(event) {
        let response = confirm("Confirm that the shuttle is ready for takeoff.");
    
        document.getElementById("flightStatus").innerText = "Shuttle in flight.";

        document.getElementById("shuttleBackground").style.backgroundColor = "blue";

        document.getElementById("spaceShuttleHeight").innerText += 1000;
    });


    land.addEventListener("click", function(event) {
        window.alert("The shuttle is landing. Landing gear engaged.");

        document.getElementById("flightStatus").innerText = "The shuttle has landed.";

        document.getElementById("shuttleBackground").style.backgroundColor = "green";

        document.getElementById("spaceShuttleHeight").innerText = 0;
    });

    abortMission.addEventListener("click", function(event) {
        let response = confirm("Confirm that you want to abort the mission.");

        document.getElementById("flightStatus").innerText = "Mission aborted.";

        document.getElementById("shuttleBackground").style.backgroundColor = "green";

        document.getElementById("spaceShuttleHeight").innerText = 0;
    });

    let rocketVerPos = null;
    let rocketHorPos = null;

    document.getElementById("up").addEventListener("click", function(event) {
        rocketVerPos = rocket.style.marginTop;
        verNum = Number(rocketVerPos.slice(0, rocketVerPos.indexOf('px')));
        rocket.style.marginTop = `${verNum - 10}px`;
        shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML)+10000);
    });

    document.getElementById("down").addEventListener("click", function(event) {
        rocketVerPos = rocket.style.marginTop;
        verNum = Number(rocketVerPos.slice(0, rocketVerPos.indexOf('px')));
        rocket.style.marginTop = `${verNum + 10}px`;
        shuttleHeight = document.getElementById("spaceShuttleHeight");
        shuttleHeight.innerHTML = String(Number(shuttleHeight.innerHTML)-10000);
    });

    document.getElementById("right").addEventListener("click", function(event) {
        rocketHorPos = rocket.style.getPropertyValue('transform');
        verNum = Number(rocketHorPos.slice(rocketHorPos.indexOf(" "), rocketHorPos.indexOf('px', (rocketHorPos.indexOf('px') + 1))));
        horNum = Number(rocketHorPos.slice((rocketHorPos.indexOf("(") + 1), rocketHorPos.indexOf('px')));
        rocket.style.transform = `translate3d(${horNum + 10}px, ${verNum}px, 0px)`;
    });

    document.getElementById("left").addEventListener("click", function(event) {
        rocketHorPos = rocket.style.getPropertyValue('transform');
        verNum = Number(rocketHorPos.slice(rocketHorPos.indexOf(" "), rocketHorPos.indexOf('px', (rocketHorPos.indexOf('px') + 1))));
        horNum = Number(rocketHorPos.slice((rocketHorPos.indexOf("(") + 1), rocketHorPos.indexOf('px')));
        rocket.style.transform = `translate3d(${horNum - 10}px, ${verNum}px, 0px)`;
        
    });

}
window.onload = init;
