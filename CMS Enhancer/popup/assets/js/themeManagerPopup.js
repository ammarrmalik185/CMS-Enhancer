document.getElementById("advancedSettingsButton").addEventListener("click", () => {
    chrome.tabs.create({ url: chrome.runtime.getURL("../Webpages/themeManager.html") });
});

let userThemeData = {
    selectedThemeType:"default",
    selectedThemeId:"cuiTheme",
    customThemeData:{
        Themes:{}
    }
};

function getThemeListUi(completeThemeData, themeId, themeType){
    completeThemeData = completeThemeData || defaultThemes.cuiTheme;
    let li = document.createElement("li");
    li.className = "list-group-item";

    li.innerHTML =
        `<div>
            <div>
                <div class="container themeOptionContainer">
                    <div class="row themeSelectionRow">
                        <div class="col" style="height: 27.6px;">
                            <p class="text-left text-white optionText">${completeThemeData.displayName}</p>
                        </div>
                         <div class="col-3 text-right radioButtonThemeChange"><input id="${themeType}_${themeId}" type="radio" class="optionCheckbox" name="selectedTheme" value="${themeId}"></div>
                    </div>
                    <div class="row themeSelectionRow">
                        <div class="col" style="text-align: center;">
                            <div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.background}; background-size: cover" title="background"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.backgroundMain}" title="backgroundMain"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.noticeboardBackground}" title="noticeboardBackground"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.baseColor}" title="baseColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.altBaseColor}" title="altBaseColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.primaryColor}" title="primaryColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.secondaryColor}" title="secondaryColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.fontColor}" title="fontColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.altFontColor}" title="altFontColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.linkFontColor}" title="linkFontColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.highlightFontColor}" title="highlightFontColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.positiveBarColor}" title="positiveBarColor"></div>
                                <div class="colorViewer" style="background: ${completeThemeData.themeData.negativeBarColor}" title="negativeBarColor"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr class="optionSplitterhr optionSplitterhrTheme">
            </div>
            <div class="optionSplitSpace"></div>
        </div>`

    li.getElementsByClassName("radioButtonThemeChange")[0].addEventListener("click", () => onThemeSelect(themeId, themeType));
    return li;
}

function onThemeSelect(themeId, themeType) {
    sendConsoleMessage("selectedTheme : " + themeId + " - " + themeType)
    userThemeData.selectedThemeType = themeType;
    userThemeData.selectedThemeId = themeId;
    setUserThemeData();
}

function addDefaultThemes() {
    let ul = document.getElementById("defaultThemesContainer")
    for (let theme in defaultThemes){
        sendConsoleMessage(theme)
        ul.append(getThemeListUi(defaultThemes[theme], theme, "default"))
    }
}

function addCustomThemes() {
    let ul = document.getElementById("customThemesContainer")
    for (let theme in userThemeData.customThemeData.Themes){
        sendConsoleMessage(theme)
        ul.append(getThemeListUi(userThemeData.customThemeData.Themes[theme], theme, "custom"))
    }
}

function setSelected() {
    document.getElementById(userThemeData.selectedThemeType + "_" + userThemeData.selectedThemeId).checked = true;
}

function initPopupThemeListInflation() {
    let option = "visualCustomization_userThemeData"
    chrome.storage.sync.get(option, results => {
        sendConsoleMessage(results)

        if (results.hasOwnProperty(option)) {
            userThemeData = results[option]
            sendConsoleMessage(`${option} is ${results[option]}`)
        } else {
            chrome.storage.sync.set({[option]: defaultUserThemeData}, () => {
                if (chrome.runtime.lastError) {
                    sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                }
                sendConsoleMessage(`${option} is set to ${defaultUserThemeData}`);
            });
            userThemeData = defaultUserThemeData;
        }
        startPopupThemeListInflation();
    });
}

function setUserThemeData() {
    let option = "visualCustomization_userThemeData"
    chrome.storage.sync.set({[option]: userThemeData}, () => {
        if (chrome.runtime.lastError) {
            sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
        }
        sendConsoleMessage(`${option} is set to`);
        sendConsoleMessage(userThemeData);
    });
}

function startPopupThemeListInflation() {
    addCustomThemes()
    addDefaultThemes()
    setSelected()
}

initPopupThemeListInflation();