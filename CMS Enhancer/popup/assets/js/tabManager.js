let tabBodies = [
    "settingsCustomization",
    "settingsMarks",
    "settingsResult",
    "settingsBlock",
]

function init() {
    document.getElementById("displayAll").addEventListener("click", () => enableAll())
    document.getElementById("displayCustomization").addEventListener("click", () => enable("settingsCustomization"))
    document.getElementById("displayMarks").addEventListener("click", () => enable("settingsMarks"))
    document.getElementById("displayResult").addEventListener("click", () => enable("settingsResult"))
    document.getElementById("displayBlock").addEventListener("click", () => enable("settingsBlock"))
}

function enable(id) {
    for (let tab of tabBodies){
        document.getElementById(tab).style["display"] = "none";
    }
    document.getElementById(id).style["display"] = "block";
}
function enableAll() {
    for (let tab of tabBodies){
        document.getElementById(tab).style["display"] = "inline-block";
    }
}

init();