let settingChanged = false;

function ready() {

    let darkModeToggleElement = document.getElementById("darkModeToggle");
    let betterGpaToggleElement = document.getElementById("gpaCalculation");
    let betterMarksToggleElement = document.getElementById("markCalculation");
    let removePopupElement = document.getElementById("removePopup");

    darkModeToggleElement.addEventListener("click", setValueDarkMode);
    betterGpaToggleElement.addEventListener("click", setValueGpaCalculation);
    betterMarksToggleElement.addEventListener("click", setValueMarkCalculation);
    removePopupElement.addEventListener("click", setValueRemovePopup);

    function init(){
        chrome.storage.local.get(['setDarkMode', 'gpaCalculate', 'marksCalculate', 'removePopup'], function(result) {

            if (result['gpaCalculate'] === undefined){
                chrome.storage.local.set({'gpaCalculate': true}, function() {});
                betterGpaToggleElement.checked = true;
            }
            else {
                betterGpaToggleElement.checked = result['gpaCalculate']
            }

            if (result['marksCalculate'] === undefined){
                chrome.storage.local.set({'marksCalculate': true}, function() {});
                betterMarksToggleElement.checked = true;
            }
            else{
                betterMarksToggleElement.checked = result['marksCalculate'];
            }

            if (result['removePopup'] === undefined){
                chrome.storage.local.set({'removePopup': false}, function() {});
                removePopupElement.checked = false;
            }
            else{
                removePopupElement.checked = result['removePopup'];
            }

            if (result['setDarkMode'] === undefined){
                chrome.storage.local.set({'setDarkMode': false}, function() {});
                darkModeToggleElement.checked = false;
            }
            else{ 
                darkModeToggleElement.checked = result['setDarkMode'];
            }
        })}

    init();

    function setValueDarkMode() {
        let darkMode = darkModeToggleElement.checked;
        chrome.storage.local.set({"setDarkMode": darkMode}, function () {
            console.log('setDarkMode is set to ' + darkMode);
        });
        addNotification();
    }

    function setValueGpaCalculation() {
        let gpaCalculate = betterGpaToggleElement.checked;
        chrome.storage.local.set({"gpaCalculate": gpaCalculate}, function () {
            console.log('gpaCalculate is set to ' + gpaCalculate);
        });
        addNotification();
    }

    function setValueMarkCalculation() {
        let marksCalculate = betterMarksToggleElement.checked;
        chrome.storage.local.set({"marksCalculate": marksCalculate}, function () {
            console.log('marksCalculate is set to ' + marksCalculate);
        });
        addNotification();
    }

    function setValueRemovePopup(){
        let removePopup = removePopupElement.checked;
        chrome.storage.local.set({"removePopup": removePopup}, function () {
            console.log('removePopup is set to ' + removePopup);
        });
        addNotification();
    }

}

function addNotification(){
    if (!settingChanged) {
        let text = document.createTextNode("Reload page to apply changes");
        let warningElement = document.createElement("p");
        warningElement.appendChild(text);
        warningElement.style['color'] = "#dc0400";
        warningElement.style['position'] = "center";
        document.getElementById("mainBodyDivision").appendChild(warningElement);
        settingChanged = true;
    }
}

document.addEventListener("DOMContentLoaded", ready);




