function init() {
    const takeoff = document.getElementById("takeoff");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");
    const landing = document.getElementById("landing");
    const missionAbort = document.getElementById("missionAbort");


    takeoff.addEventListener('click', function()    {
        let result = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight."
            shuttleBackground.style.backgroundColor = "blue";
            spaceShuttleHeight.innerHTML = "10000";

        }
    });

    landing.addEventListener('click', function()    {
        let result = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (result) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    });

    missionAbort.addEventListener('click', function()   {
        let result = window.confirm("Confirm that you want to abort the mission.");
        if (result) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            spaceShuttleHeight.innerHTML = "0";
        }
    });
}

window.addEventListener('load', init);


// 1. When the "Take off" button is clicked, the following should happen:
//      A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//      The flight status should change to "Shuttle in flight." flightstatus is id!!!!
//      The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//      The shuttle height should increase by 10,000 miles.

// 2. When the "Land" button is clicked, the following should happen:
//      A window alert should let the user know "The shuttle is landing. Landing gear engaged."
//      The flight status should change to "The shuttle has landed."
//      The background color of the shuttle flight screen should change from blue to green.
//      The shuttle height should go down to 0.

// 3. When the "Abort Mission" button is clicked, the following should happen:
//       window confirm should let the user know "Confirm that you want to abort the mission." If the user wants to abort the mission, then add parts b-d.
//      The flight status should change to "Mission aborted."
//      The background color of the shuttle flight screen should change from blue to green.
//      The shuttle height should go to 0.

// 4. When the "Up", "Down", "Right", and "Left" buttons are clicked, the following should happen:
//      he rocket image should move 10 px in the direction of the button that was clicked.
//      If the "Up" or "Down" buttons were clicked, then the shuttle height should increase or decrease by 10,000 miles.
