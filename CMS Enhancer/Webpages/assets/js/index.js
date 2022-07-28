let userThemeData = defaultThemes.cuiTheme;

function getDefaultThemeListUI(completeThemeData, themeId, themeType) {

    completeThemeData = completeThemeData || defaultThemes.cuiTheme;
    sendConsoleMessage("making theme ui")
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
        <div class="themeSelectionContainer"><input type="radio" id="${themeType}_${themeId}" class="radioButton radioButtonThemeChange" name="selectTheme"><span>${completeThemeData.displayName}</span></div>
        <div class="themeOptionsContainer">
            <i class="fa fa-eye themeOption themeViewButton"></i>
        </div>
        <div class="colorViewerContainer">
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
    `
    li.getElementsByClassName("radioButtonThemeChange")[0].addEventListener("click", () => onThemeSelect(themeId, themeType));
    li.getElementsByClassName("themeViewButton")[0].addEventListener("click", () => onThemeView(themeId, themeType));

    return li;
}

function getCustomThemeListUI(completeThemeData, themeId, themeType) {
    completeThemeData = completeThemeData || defaultThemes.cuiTheme;
    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
        <div class="themeSelectionContainer"><input type="radio" id="${themeType}_${themeId}" class="radioButton radioButtonThemeChange" value="darkTheme" name="selectTheme"><span>${completeThemeData.displayName}</span></div>
        <div class="themeOptionsContainer">
            <i class="fa fa-eye themeOption themeViewButton"></i>
            <i class="fa fa-share themeOption themeShareButton"></i>
            <i class="fa fa-edit themeOption themeEditButton"></i>
            <i class="fa fa-trash themeOption themeDeleteButton"></i>
        </div>
        <div class="colorViewerContainer">
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
        `
    li.getElementsByClassName("radioButtonThemeChange")[0].addEventListener("click", () => onThemeSelect(themeId, themeType));
    li.getElementsByClassName("themeViewButton")[0].addEventListener("click", () => onThemeView(themeId, themeType));
    li.getElementsByClassName("themeShareButton")[0].addEventListener("click", () => onThemeShare(themeId, themeType));
    li.getElementsByClassName("themeEditButton")[0].addEventListener("click", () => onThemeEdit(themeId, themeType));
    li.getElementsByClassName("themeDeleteButton")[0].addEventListener("click", () => onThemeDelete(themeId, themeType));

    return li;
}

function onThemeSelect(themeId, themeType) {
    sendConsoleMessage("selectedTheme : " + themeId + " - " + themeType)
    userThemeData.selectedThemeType = themeType;
    userThemeData.selectedThemeId = themeId;
    setUserThemeData();
}

function onThemeView(themeId, themeType) {
    sendConsoleMessage("view")
}

function onThemeShare(themeId, themeType) {
    themeShareInitialized(JSON.stringify(userThemeData.customThemeData.Themes[themeId], null, '\t'))
}

function themeShareInitialized(themeJson) {
    let dialog = document.getElementById("exportThemeDialog");
    dialog.style["display"] = "block";

    function closeDialog(event) {
        dialog.style["display"] = "none";
    }

    let closeButton = document.getElementById("exportThemeDialogClose");
    let themeDataViewer = document.getElementById("exportThemeJsonViewerParagraph");

    themeDataViewer.textContent = themeJson;

    closeButton.replaceWith(closeButton.cloneNode(true))

    closeButton = document.getElementById("exportThemeDialogClose");
    closeButton.addEventListener("click", closeDialog);
}

function onThemeEdit(themeId, themeType) {
    themeEditInitialize(themeId, userThemeData.customThemeData.Themes[themeId]);
}

function onCreateNewThemeButtonPressed(event) {
    function getNewThemeId() {
        let id = 0;
        while (true){
            if (!userThemeData.customThemeData.Themes.hasOwnProperty(id)){
                return id;
            }
            id += 1;
        }
    }
    themeEditInitialize(getNewThemeId(), defaultThemes.cuiTheme)
}

function themeEditInitialize(themeId, completeThemeData) {

    completeThemeData = completeThemeData || defaultThemes.cuiTheme;

    let elements = {
        Dialog: document.getElementById("customizeThemeDialog"),

        DisplayName : document.getElementById("customTheme_Name_Input"),

        BackgroundType_Image : document.getElementById("customTheme_Background_Type_Image"),
        BackgroundURL : document.getElementById("customTheme_Background_URL"),
        BackgroundFillType : document.getElementById("customTheme_Background_FillType"),
        BackgroundType_Color : document.getElementById("customTheme_Background_Type_Color"),
        BackgroundColor : document.getElementById("customTheme_Background_ColorInput"),

        MainBackgroundType_Image : document.getElementById("customTheme_MainBackground_Type_Image"),
        MainBackgroundURL : document.getElementById("customTheme_MainBackground_URL"),
        MainBackgroundFillType : document.getElementById("customTheme_MainBackground_FillType"),
        MainBackgroundType_Color : document.getElementById("customTheme_MainBackground_Type_Color"),
        MainBackgroundColor : document.getElementById("customTheme_MainBackground_ColorInput"),

        NoticeboardBackgroundType_Image : document.getElementById("customTheme_NoticeboardBackground_Type_Image"),
        NoticeboardBackgroundURL : document.getElementById("customTheme_NoticeboardBackground_URL"),
        NoticeboardBackgroundFillType : document.getElementById("customTheme_NoticeboardBackground_FillType"),
        NoticeboardBackgroundType_Color : document.getElementById("customTheme_NoticeboardBackground_Type_Color"),
        NoticeboardBackgroundColor : document.getElementById("customTheme_NoticeboardBackground_ColorInput"),

        BaseColor : document.getElementById("customTheme_Color_base"),
        AltBaseColor : document.getElementById("customTheme_Color_altBase"),
        PrimaryColor : document.getElementById("customTheme_Color_primary"),
        SecondaryColor : document.getElementById("customTheme_Color_secondary"),
        FontColor : document.getElementById("customTheme_Color_font"),

        AltFontColor : document.getElementById("customTheme_Color_altFont"),
        LinkFontColor : document.getElementById("customTheme_Color_linkFont"),
        HighlightFontColor : document.getElementById("customTheme_Color_highlightFont"),
        PositiveColor : document.getElementById("customTheme_Color_positive"),
        NegativeColor : document.getElementById("customTheme_Color_negative"),



    }

    function setSelectedThemeOptions() {
        elements.DisplayName.value = completeThemeData.displayName;

        if (completeThemeData.themeData.background.includes("url(")){
            elements.BackgroundType_Image.checked = true;
            let backgroundUrl = completeThemeData.themeData.background;
            backgroundUrl = backgroundUrl.substring(4, backgroundUrl.length - 1);
            elements.BackgroundURL.value = backgroundUrl;
        }else if (completeThemeData.themeData.background.includes("#")){
            elements.BackgroundType_Color.checked = true;
            elements.BackgroundColor.value = completeThemeData.themeData.background;
        }
        elements.BackgroundFillType.value = mapBackgroundSettingsSet(
            completeThemeData.themeSettingsData.backgroundSize,
            completeThemeData.themeSettingsData.backgroundRepeat,
            completeThemeData.themeSettingsData.backgroundPosition
        );

        if (completeThemeData.themeData.backgroundMain.includes("url(")){
            elements.MainBackgroundType_Image.checked = true;
            let backgroundUrl = completeThemeData.themeData.backgroundMain;
            backgroundUrl = backgroundUrl.substring(4, backgroundUrl.length - 1);
            elements.MainBackgroundURL.value = backgroundUrl;
        }else if (completeThemeData.themeData.backgroundMain.includes("#")){
            elements.MainBackgroundType_Color.checked = true;
            elements.MainBackgroundColor.value = completeThemeData.themeData.backgroundMain;
        }
        elements.MainBackgroundFillType.value = mapBackgroundSettingsSet(
            completeThemeData.themeSettingsData.mainBackgroundSize,
            completeThemeData.themeSettingsData.mainBackgroundRepeat,
            completeThemeData.themeSettingsData.mainBackgroundPosition
        );

        if (completeThemeData.themeData.noticeboardBackground.includes("url(")){
            elements.NoticeboardBackgroundType_Image.checked = true;
            let backgroundUrl = completeThemeData.themeData.noticeboardBackground;
            backgroundUrl = backgroundUrl.substring(4, backgroundUrl.length - 1);
            elements.NoticeboardBackgroundURL.value = backgroundUrl;
        }else if (completeThemeData.themeData.noticeboardBackground.includes("#") || completeThemeData.themeData.noticeboardBackground.includes("rgba(")){
            elements.NoticeboardBackgroundType_Color.checked = true;
            elements.NoticeboardBackgroundColor.value = completeThemeData.themeData.noticeboardBackground;
        }
        elements.NoticeboardBackgroundFillType.value = mapBackgroundSettingsSet(
            completeThemeData.themeSettingsData.noticeboardBackgroundSize,
            completeThemeData.themeSettingsData.noticeboardBackgroundRepeat,
            completeThemeData.themeSettingsData.noticeboardBackgroundPosition
        );


        elements.BaseColor.value = completeThemeData.themeData.baseColor;
        elements.AltBaseColor.value = completeThemeData.themeData.altBaseColor;
        elements.PrimaryColor.value = completeThemeData.themeData.primaryColor;
        elements.SecondaryColor.value = completeThemeData.themeData.secondaryColor;
        elements.FontColor.value = completeThemeData.themeData.fontColor;
        elements.AltFontColor.value = completeThemeData.themeData.altFontColor;
        elements.LinkFontColor.value = completeThemeData.themeData.linkFontColor;
        elements.HighlightFontColor.value = completeThemeData.themeData.highlightFontColor;
        elements.PositiveColor.value = completeThemeData.themeData.positiveBarColor;
        elements.NegativeColor.value = completeThemeData.themeData.negativeBarColor;
    }

    function getSelectedThemeOptions() {
        completeThemeData.displayName = elements.DisplayName.value;

        if (elements.BackgroundType_Image.checked){
            completeThemeData.themeData.background = `url(${elements.BackgroundURL.value})`;
        }else if (elements.BackgroundType_Color.checked){
            completeThemeData.themeData.background = `${elements.BackgroundColor.value}`;
        }
        let settings = mapBackgroundSettingsGet(elements.BackgroundFillType.value);
        completeThemeData.themeSettingsData.backgroundSize = settings.backgroundSize;
        completeThemeData.themeSettingsData.backgroundRepeat = settings.backgroundRepeat;
        completeThemeData.themeSettingsData.backgroundPosition = settings.backgroundPosition;

        if (elements.MainBackgroundType_Image.checked){
            completeThemeData.themeData.backgroundMain = `url(${elements.MainBackgroundURL.value})`;
        }else if (elements.MainBackgroundType_Color.checked){
            completeThemeData.themeData.backgroundMain = `${elements.MainBackgroundColor.value}`;
        }
        settings = mapBackgroundSettingsGet(elements.MainBackgroundFillType.value);
        completeThemeData.themeSettingsData.mainBackgroundSize = settings.backgroundSize;
        completeThemeData.themeSettingsData.mainBackgroundRepeat = settings.backgroundRepeat;
        completeThemeData.themeSettingsData.mainBackgroundPosition = settings.backgroundPosition;


        if (elements.NoticeboardBackgroundType_Image.checked){
            completeThemeData.themeData.noticeboardBackground = `url(${elements.NoticeboardBackgroundURL.value})`;
        }else if (elements.NoticeboardBackgroundType_Color.checked){
            completeThemeData.themeData.noticeboardBackground = `${elements.NoticeboardBackgroundColor.value}`;
        }
        settings = mapBackgroundSettingsGet(elements.NoticeboardBackgroundFillType.value);
        completeThemeData.themeSettingsData.noticeboardBackgroundSize = settings.backgroundSize;
        completeThemeData.themeSettingsData.noticeboardBackgroundRepeat = settings.backgroundRepeat;
        completeThemeData.themeSettingsData.noticeboardBackgroundPosition = settings.backgroundPosition;


        completeThemeData.themeData.baseColor = elements.BaseColor.value;
        completeThemeData.themeData.altBaseColor = elements.AltBaseColor.value;
        completeThemeData.themeData.primaryColor = elements.PrimaryColor.value;
        completeThemeData.themeData.secondaryColor = elements.SecondaryColor.value;
        completeThemeData.themeData.fontColor = elements.FontColor.value;
        completeThemeData.themeData.altFontColor = elements.AltFontColor.value;
        completeThemeData.themeData.linkFontColor = elements.LinkFontColor.value;
        completeThemeData.themeData.highlightFontColor = elements.HighlightFontColor.value;
        completeThemeData.themeData.positiveBarColor = elements.PositiveColor.value;
        completeThemeData.themeData.negativeBarColor = elements.NegativeColor.value;

        sendConsoleMessage(completeThemeData)
    }

    function mapBackgroundSettingsSet(size, repeat, position) {
        if (size === "auto" && repeat === "no-repeat" && position === "center") return "center";
        if (size === "auto" && repeat === "repeat" && position === "unset") return "tile";
        if (size === "contain" && repeat === "no-repeat" && position === "center") return "fit";
        if (size === "cover" && repeat === "no-repeat" && position === "center") return "fill";
        if (size === "100% 100%" && repeat === "no-repeat" && position === "center") return "stretch";
        return "tile"
    }

    function mapBackgroundSettingsGet(option) {
        let backgroundSettings = {}
        switch (option) {
            case "center":
                backgroundSettings.backgroundSize = "auto";
                backgroundSettings.backgroundRepeat = "no-repeat";
                backgroundSettings.backgroundPosition = "center";
                break;
            case "tile":
                backgroundSettings.backgroundSize = "auto";
                backgroundSettings.backgroundRepeat = "repeat";
                backgroundSettings.backgroundPosition = "unset";
                break;
            case "fit":
                backgroundSettings.backgroundSize = "contain";
                backgroundSettings.backgroundRepeat = "no-repeat";
                backgroundSettings.backgroundPosition = "center";
                break;
            case "fill":
                backgroundSettings.backgroundSize = "cover";
                backgroundSettings.backgroundRepeat = "no-repeat";
                backgroundSettings.backgroundPosition = "center";
                break;
            case "stretch":
                backgroundSettings.backgroundSize = "100% 100%";
                backgroundSettings.backgroundRepeat = "no-repeat";
                backgroundSettings.backgroundPosition = "center";
                break;
            default:
                backgroundSettings.backgroundSize = "initial";
                backgroundSettings.backgroundRepeat = "initial";
                backgroundSettings.backgroundPosition = "initial";
                break;
        }
        return backgroundSettings;
    }

    function submit() {
        getSelectedThemeOptions();
        userThemeData.customThemeData.Themes[themeId] = completeThemeData;
        setUserThemeData();
        sendSnackbarMessage("Theme Saved")
    }

    function importTheme() {
        let dialog = document.getElementById("getInputDialog");
        let prompt = document.getElementById("addDataDialogPrompt")
        let input = document.getElementById("addDataDialogInput")
        let cancelButton = document.getElementById("getInputDialog_ButtonCancel");
        let doneButton = document.getElementById("getInputDialog_ButtonDone")

        prompt.textContent = "Enter JSON string here, \nNote: this will overwrite the existing theme settings"

        cancelButton.replaceWith(cancelButton.cloneNode(true))
        doneButton.replaceWith(doneButton.cloneNode(true))

        cancelButton = document.getElementById("getInputDialog_ButtonCancel");
        doneButton = document.getElementById("getInputDialog_ButtonDone")

        cancelButton.addEventListener("click", ()=>{
            dialog.style["display"] = "none";
        })
        doneButton.addEventListener("click", ()=>{
            try {
                completeThemeData = JSON.parse(input.value);
                dialog.style["display"] = "none";
                setSelectedThemeOptions();
                sendSnackbarMessage("Theme Imported")
            }catch (e){
                sendConsoleMessage("error occurred: " + e.message);
            }
        })

        dialog.style["display"] = "block";

    }

    function exportTheme() {
        getSelectedThemeOptions()
        themeShareInitialized(JSON.stringify(completeThemeData, null, '\t'));
    }

    function closeDialog() {
        elements.Dialog.style["display"] = "none"
    }

    let SubmitButton = document.getElementById("customTheme_Button_Submit");
    let ImportButton = document.getElementById("customTheme_Button_ImportJson");
    let ExportButton = document.getElementById("customTheme_Button_ExportJson");
    let CancelButton = document.getElementById("customTheme_Button_Cancel");

    SubmitButton.replaceWith(SubmitButton.cloneNode(true))
    ImportButton.replaceWith(ImportButton.cloneNode(true))
    ExportButton.replaceWith(ExportButton.cloneNode(true))
    CancelButton.replaceWith(CancelButton.cloneNode(true))

    SubmitButton = document.getElementById("customTheme_Button_Submit");
    ImportButton = document.getElementById("customTheme_Button_ImportJson");
    ExportButton = document.getElementById("customTheme_Button_ExportJson");
    CancelButton = document.getElementById("customTheme_Button_Cancel");

    SubmitButton.addEventListener("click", submit)
    ImportButton.addEventListener("click", importTheme)
    ExportButton.addEventListener("click", exportTheme)
    CancelButton.addEventListener("click", closeDialog)

    setSelectedThemeOptions();

    elements.Dialog.style["display"] = "block"

}

function onThemeDelete(themeId, themeType) {
    let dialog = document.getElementById("confirmationDialog");
    dialog.style["display"] = "block";

    function deleteTheme(event){
        if (userThemeData.selectedThemeType === themeType && userThemeData.selectedThemeId === themeId){
            userThemeData.selectedThemeType = "default";
            userThemeData.selectedThemeId = "cuiTheme";
        }
        delete userThemeData.customThemeData.Themes[themeId];
        setUserThemeData().then(() => {
            window.location.reload()
        });
        sendConsoleMessage("delete");
        sendSnackbarMessage("Theme Deleted")
    }
    function closeDialog(event) {
        dialog.style["display"] = "none";
    }

    let yesButton = document.getElementById("confirmationDialogButtonYes");
    let noButton = document.getElementById("confirmationDialogButtonNo");
    let message = document.getElementById("confirmationDialogMessage");

    message.textContent = `Are you sure you want to delete this theme? :\n${userThemeData.customThemeData.Themes[themeId].displayName}`;

    yesButton.replaceWith(yesButton.cloneNode(true))
    noButton.replaceWith(noButton.cloneNode(true))

    yesButton = document.getElementById("confirmationDialogButtonYes");
    noButton = document.getElementById("confirmationDialogButtonNo");
    yesButton.addEventListener("click", deleteTheme);
    noButton.addEventListener("click", closeDialog);
}

function setInitialArguments() {
    document.getElementById(userThemeData.selectedThemeType + "_" + userThemeData.selectedThemeId).checked = true;
    document.getElementById("addNewThemeButton").addEventListener("click", onCreateNewThemeButtonPressed)
}

function setUserThemeData() {
    let option = "visualCustomization_userThemeData"
    return new Promise(((resolve, reject) => {chrome.storage.sync.set({[option]: userThemeData}, () => {
        if (chrome.runtime.lastError) {
            sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
        }
        sendConsoleMessage(`${option} is set to`);
        sendConsoleMessage(userThemeData);
        resolve();
    })}));
}

function addDefaultThemes() {
    let ul = document.getElementById("defaultThemesContainer")
    for (let theme in defaultThemes){
        sendConsoleMessage(theme)
        ul.append(getDefaultThemeListUI(defaultThemes[theme], theme, "default"))
    }
}

function addCustomThemes() {
    let ul = document.getElementById("customThemesContainer")
    for (let theme in userThemeData.customThemeData.Themes){
        sendConsoleMessage(theme)
        ul.append(getCustomThemeListUI(userThemeData.customThemeData.Themes[theme], theme, "custom"))
    }
}

function initInflation() {
    let option = "visualCustomization_userThemeData"
    chrome.storage.sync.get(option, results => {
        sendConsoleMessage(results)

        if (results.hasOwnProperty(option)) {
            userThemeData = results[option]
            sendConsoleMessage(`${option} is`)
            sendConsoleMessage(results[option])
        } else {
            chrome.storage.sync.set({[option]: defaultUserThemeData}, () => {
                if (chrome.runtime.lastError) {
                    sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                }
                sendConsoleMessage(`${option} is set to `);
                sendConsoleMessage(defaultUserThemeData)
            });
            userThemeData = defaultUserThemeData;
        }
        startInflation();
    });
}

function startInflation() {
    addCustomThemes()
    addDefaultThemes()
    setInitialArguments()
}

initInflation();