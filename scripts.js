function init() {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";
    rocket.style.left = "325px";
    rocket.style.bottom = "0px";

    takeoff.addEventListener('click', function()    {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";
            //bonus mission
            move = parseInt(rocket.style.bottom) + 10 + "px";
            rocket.style.bottom = move;
        }
    });

    landing.addEventListener('click', function()    {
        let result = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (result) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
            //bonus mission
            rocket.style.bottom = "0px";
            rocket.style.left = "325px";
        }
    });

    missionAbort.addEventListener('click', function()   {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
            //bonus mission
            rocket.style.bottom = "0px";
            rocket.style.left = "325px";
        }
    });

    up.addEventListener('click', function() {
        move = parseInt(rocket.style.bottom) + 10 + "px";
        rocket.style.bottom = move;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
    });

    down.addEventListener('click', function()   {
        move = parseInt(rocket.style.bottom) - 10 + "px";
        rocket.style.bottom = move;
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
    });

    right.addEventListener('click', function()  {
        move = parseInt(rocket.style.left) + 10 + "px";
        rocket.style.left = move;
    });

    left.addEventListener('click', function()   {
        move = parseInt(rocket.style.left) - 10 + "px";
        rocket.style.left = move;
    });
}

window.addEventListener('load', init);
