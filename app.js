var robot1 = {
    id: Math.random(),
    name: "GigaJoke",
    description: "GigaJoke is a robot with an unrivaled sense of humor. Its main mission is to entertain you with endless jokes and anecdotes. Equipped with a built-in laugh generator, it can lift your spirits even in the dullest situations.",
    image: "./images/robot1.png"
};
var robot2 = {
    id: Math.random(),
    name: "AlmostGenius",
    description: "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
    image: "./images/robot2.png"
};
var robot3 = {
    id: Math.random(),
    name: "BlunderMaster",
    description: "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
    image: "./images/robot3.png"
};
var robot4 = {
    id: Math.random(),
    name: "JazzBot",
    description: "AlmostGenius is a robot with an insatiable thirst for knowledge and an encyclopedia in its head. It knows almost everything but sometimes makes small mistakes, which adds a touch of humor. The perfect companion for curious minds ready for fascinating conversations.",
    image: "./images/robot4.png",
    posX: 0,
    posY: 0
};
var robot5 = {
    id: Math.random(),
    name: "ChatChatterbox",
    description: "BlunderMaster is a helper robot with a unique talent for finding funny and absurd solutions to everyday tasks. Its clumsy attempts to assist often lead to hilarious mishaps, turning routine into comedy.",
    image: "./images/robot5.png",
    posX: 0,
    posY: 0
};
var robots = [robot1, robot2, robot3, robot4, robot5];
var myMap = document.querySelector(".robotsAria");
var level = 1;
var speed = level * 2.5;
var timer = document.querySelector("#timer");
var time = 59;
function addRobotPosition(robot) {
    robot.posX = Math.random() * 100;
    robot.posY = Math.random() * 100;
}
robots.map(function (robot) { return changeDirection(robot); });
function addRobot(arr, element) {
    try {
        var html_1 = "";
        arr.forEach(function (robot) {
            addRobotPosition(robot);
            html_1 += "<div class=\"robot\" id=\"" + robot.id + "\" style=\"background-image:url(" + robot.image + "); top: " + robot.posY + "%; left: " + robot.posX + "%\" data-title=\"" + robot.description + "\" title = \"" + robot.name + "\">\n            </div>";
        });
        var robotDiv = document.createElement("div");
        robotDiv.innerHTML = html_1;
        element.appendChild(robotDiv);
    }
    catch (error) {
        console.error(error);
        return undefined;
    }
}
addRobot(robots, myMap);
var divScore = document.querySelector("#score");
var score = parseInt(divScore.innerHTML);
console.log(score);
function handleBodyClick(event) {
    try {
        console.log("Body clicked", event.x, event.y);
        var boom_1 = document.querySelector("#boom");
        var divLevel = document.querySelector("#level");
        if (!boom_1)
            throw new Error("Boom not found");
        if (boom_1 && event.target.classList.contains("robot")) {
            boom_1.style.left = event.x + "px";
            boom_1.style.top = event.y + "px";
            boom_1.style.display = "block";
            setTimeout(function () {
                boom_1.style.display = "none";
            }, 1000);
            score += level * 50;
            console.log(score);
            divScore.innerHTML =
                score < 100 ? "00" + score : score < 1000 ? "0" + score : String(score);
            if (score == 1000) {
                level += 1;
                divLevel.innerHTML = "Level " + level;
            }
            if (score == 2000) {
                level += 1;
                divLevel.innerHTML = "Level " + level;
            }
            if (score == 3050) {
                level += 1;
                divLevel.innerHTML = "Level " + level;
            }
            if (score == 4050) {
                level += 1;
                divLevel.innerHTML = "Level " + level;
            }
            var divWin = document.querySelector("#win");
            if (score >= 5000) {
                divWin.style.display = "block";
            }
        }
        console.dir(event.target);
        if (event.target.classList.contains("robot")) {
            var robotHTML_1 = event.target;
            var robot = robots.find(function (robot) { return robotHTML_1.id == robot.id; });
            console.log(robotHTML_1.id, robots[0].id);
            changeDirection(robot);
            console.log(robot.dx, robot.dy);
            robotHTML_1.style.top = Math.random() * 100 + "%";
            robotHTML_1.style.left = Math.random() * 100 + "%";
        }
    }
    catch (error) {
        console.error(error);
    }
}
function getRandomArbitrary(arr) {
    return Math.random() * (arr[0] - arr[1]) + arr[1];
}
function changeDirection(robot) {
    robot.dx = getRandomArbitrary([-speed, speed]);
    var y = Math.pow((Math.pow(speed, 2) - Math.pow(robot.dx, 2)), 0.5);
    if (Math.random() < 0.5) {
        robot.dy = y;
    }
    else {
        robot.dy = -y;
    }
}
function startTimer() {
    var divGameOver = document.querySelector("#gameOver");
    if (time <= 0) {
        divGameOver.style.display = "block";
    }
    timer.innerHTML = time >= 10 ? "0:" + time : time > 0 ? "0:0" + time : "0:00";
    time -= 1;
    if (score >= 5000) {
        time = 0;
    }
}
var HTMLRobotsArr = document.querySelectorAll(".robot");
function startGame() {
    setInterval(startTimer, 1000);
    setInterval(robotGait, 100);
    function robotGait() {
        try {
            for (var i = 0; i < robots.length; i++) {
                var robot = robots[i];
                var robotHTML = HTMLRobotsArr[i];
                if (parseInt(robotHTML.style["top"]) > 100 ||
                    parseInt(robotHTML.style["left"]) < 0 ||
                    parseInt(robotHTML.style["top"]) < 0 ||
                    parseInt(robotHTML.style["left"]) > 100) {
                    changeDirection(robot);
                }
                robotHTML.style.top = parseInt(robotHTML.style["top"]) + robot.dy + "%";
                robotHTML.style.left = parseInt(robotHTML.style["left"]) + robot.dx + "%";
            }
        }
        catch (error) {
            console.error(error);
            return undefined;
        }
    }
}
var dialog = document.querySelector("dialog");
window.onload = function () {
    dialog.showModal();
};
var showModal = document.querySelector("#openDialog");
showModal.onclick = function () {
    dialog.showModal();
};
var closeModal = document.querySelector("#closeDialog");
closeModal.onclick = function () {
    dialog.close();
    startGame();
};
