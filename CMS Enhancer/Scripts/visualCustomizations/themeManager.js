let userThemeData = {
    selectedThemeType:"default",
    selectedThemeId:"cuiTheme",
    customThemeData:{
        Themes:{}
    }
};

let componentMapping = {
    background: [
        {alias: "background image/color login page", selector:".row2", applyTo : "background", applyType:"css"},
        {alias: "background image/color main page", selector:".container", applyTo : "background", applyType:"css"}
    ],
    backgroundMain: [
        {alias: "main background", selector:"body", applyTo : "background", applyType:"css"}
    ],
    noticeboardBackground: [
        {alias: "notice board background", selector:".notice_board", applyTo : "background", applyType:"css"}
    ],


    baseColor:[
        {alias: "login area background", selector:".tab_area", applyTo : "background", applyType:"css"},
        {alias: "notification area border",selector:".notice_board", applyTo : "border-color", applyType: "css"},
        {alias: "latest news background",selector:".card", applyTo: "background-color", applyType: "css"},
        {alias: "events date background", selector:".events .single_event .date_time", applyTo : "background", applyType:"css"},
        {alias: "recaptcha background", selector:".rc-anchor-light", applyTo : "background", applyType:"css"},
        {alias: "home page icon selection", selector:".rounded_menu_boxes ul li a", applyTo : "background-color", applyType:"css"},
        {alias: "main table", selector:".main_body .content_area", applyTo : "background-color", applyType:"css"},
        {alias: "result table", selector:"tr", applyTo : "background-color", applyType:"css"},
        {alias: "result table course title", selector:"td", applyTo : "background-color", applyType:"css"},
        {alias: "attendance legend", selector:".legend", applyTo : "background-color", applyType:"css"},
        {alias: "result table background", selector:".single_result_container .table_container", applyTo : "background-color", applyType:"css"},
        {alias: "loader background", selector:".se-pre-con", applyTo : "background-color", applyType:"css"},
        {alias: "registration courses table header", selector:"#RegisteredCourses", applyTo : "background-color", applyType:"css"},
        {alias: "quiz table fix", selector:"#AttemptedQuizViewTable > tbody > tr:nth-child(3) > td:nth-child(3) > p > span > span", applyTo : "background-color", applyType:"css"},
    ],

    altBaseColor: [
        {alias: "login text input background", selector:".form1 input", applyTo : "background", applyType:"css"},
        {alias: "table rows alt", selector:".table-striped > tbody > tr:nth-child(odd) > td, .table-striped > tbody > tr:nth-child(odd) > th", applyTo : "background-color", applyType:"css"},
        {alias: "table rows alt", selector:"tr:hover", applyTo : "background-color", applyType:"css"},
        {alias: "table rows alt", selector:".nav-tabs > li > a", applyTo : "background-color", applyType:"css"},
        {alias: "lecture contents background", selector:".single_lectures", applyTo : "background-color", applyType:"css"},
    ],
    primaryColor: [
        {alias: "news area", selector:".latest_news h5", applyTo : "color", applyType:"css"},
        {alias: "login method selection background active", selector:".nav-tabs .nav-item .active", applyTo : "background", applyType:"css"},
        {alias: "login button background", selector:".form1 .rememberme button", applyTo : "background-color", applyType:"css"},
        {alias: "latest news button background", selector:".latest_news a", applyTo : "background-color", applyType:"css"},
        {alias: "footer background", selector:".footer_menu", applyTo : "background-color", applyType:"css"},
        {alias: "main table header", selector:".quiz_listing table th", applyTo : "background-color", applyType:"css"},
        {alias: "course navigation buttons internal selected", selector:".nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus", applyTo : "background-color", applyType:"css"},
        {alias: "mdb table header", selector:".mdb_table table th", applyTo : "background-color", applyType:"css"},
        {alias: "lecture contents header", selector:".single_lectures h3", applyTo : "background-color", applyType:"css"},
        {alias: "quiz answers table header", selector:".allowance_table table th", applyTo : "background-color", applyType:"css"},
    ],
    secondaryColor: [
        {alias: "login method selection background ", selector:".nav-tabs .nav-link", applyTo:"background", applyType:"css"},
        {alias: "events date font color", selector:".events .single_event .date_time", applyTo : "color", applyType:"css"},
        {alias: "registered courses background", selector:"#RegisteredCourses > div", applyTo : "background", applyType:"css"},
        {alias: "home page icon selection selected", selector:".rounded_menu_boxes ul li a.selected", applyTo : "background-color", applyType:"css"},
        {alias: "top bar", selector:".top_row", applyTo : "background-color", applyType:"css"},
        {alias: "result header", selector:"body > div > div > div > div:nth-child(7)", applyTo : "background-color", applyType:"css"},
        {alias: "course navigation buttons selected", selector:".circuled_menu_boxes ul li.selected", applyTo : "background-color", applyType:"css"},
        {alias: "course navigation buttons hover", selector:".circuled_menu_boxes ul li:hover", applyTo : "background-color", applyType:"css"},
        // {alias: "fee table header", selector:".table-responsive .quiz_listing > div", applyTo : "background-color", applyType:"css"},
        {alias: "fee table header", selector:".quiz_listing > div", applyTo : "background-color", applyType:"css", condition:!window.location.href.includes("/Profile")},
        {alias: "lecture contents number", selector:".single_lectures .nos_lects", applyTo : "background-color", applyType:"css"},
        {alias: "lecture contents footer", selector:".single_lectures h5", applyTo : "background-color", applyType:"css"},
        {alias: "course notifications headers", selector:".tab_inner_box .tab_inner_title_box", applyTo : "background-color", applyType:"css"},
        {alias: "courses to register header", selector:"#AvailableCourses > div", applyTo : "background-color", applyType:"css"},

    ],
    fontColor:[
        {alias: "login area text", selector:".tab_area", applyTo : "color", applyType:"css"},
        {alias: "login area input text", selector:".form1 input", applyTo : "color", applyType:"css"},
        {alias: "recaptcha text", selector:".rc-anchor-light", applyTo : "color", applyType:"css"},
        {alias: "home page icon selection text", selector:".rounded_menu_boxes ul li a", applyTo : "color", applyType:"css"},
        {alias: "table row text", selector:".table > thead > tr > th, .table > tbody > tr > th, .table > tfoot > tr > th, .table > thead > tr > td, .table > tbody > tr > td, .table > tfoot > tr > td", applyTo : "color", applyType:"css"},
        {alias: "font color for result card headers", selector:".tbl_one", applyTo : "color", applyType:"css"},
        {alias: "result table font color", selector:"tr", applyTo : "color", applyType:"css"},
        {alias: "all font", selector:"body", applyTo : "color", applyType:"css"},
        {alias: "hr border", selector:"hr", applyTo : "border-color", applyType:"css"},
        {alias: "attendance legend text", selector:".legend", applyTo : "color", applyType:"css"},
        {alias: "course notifications text", selector:".tab_inner_box .tab_inner_effective_from", applyTo : "color", applyType:"css"},
    ],
    altFontColor: [
        {alias: "events main header", selector:".events h1", applyTo : "color", applyType:"css"},
        {alias: "events header", selector:".latest_news h1", applyTo : "color", applyType:"css"},
        {alias: "events text", selector:".events .single_event .event_text p", applyTo : "color", applyType:"css"},
        {alias: "noticeboard text", selector:".notice_board ul", applyTo : "color", applyType:"css"},
        {alias: "buttons text", selector:".btn-primary", applyTo : "color", applyType:"css"},
        {alias: "login method selection text color", selector:".nav-tabs .nav-link", applyTo : "color", applyType:"css"},
        {alias: "login method selection text color active", selector:".nav-tabs .nav-item .active", applyTo : "color", applyType:"css"},
        {alias: "events date font color", selector:"#RegisteredCourses > div", applyTo : "color", applyType:"css"},
        {alias: "table headers", selector:".quiz_listing table th", applyTo : "color", applyType:"css"},
        {alias: "top row text", selector:".label", applyTo : "color", applyType:"css"},
        {alias: "top row text", selector:".progress-bar", applyTo : "color", applyType:"css"},
        {alias: "result header text", selector:"body > div > div > div > div:nth-child(7)", applyTo : "color", applyType:"css"},
        {alias: "course navigation buttons internal text", selector:".nav-tabs > li > a", applyTo : "color", applyType:"css"},
        {alias: "course navigation buttons text", selector:".circuled_menu_boxes ul li", applyTo : "color", applyType:"css"},
        {alias: "course navigation course data", selector:"body > div > header > div.row.clearfix.page_title_row > div > div.col-md-4.column.page_title_container > *", applyTo : "color", applyType:"css"},
        {alias: "fee chalan text", selector:".main_body", applyTo : "color", applyType:"css"},
        {alias: "course notifications header text", selector:".tab_inner_box .tab_inner_title_box", applyTo : "color", applyType:"css"},

    ],
    linkFontColor: [
        {alias: "all links", selector:"a", applyTo : "color", applyType:"css"},

    ],
    highlightFontColor: [
        {alias: "events text", selector:".notice_board ul li b", applyTo : "color", applyType:"css"},
    ],


    positiveBarColor: [
        {alias: "attendance positive progress", selector:".progress-bar", applyTo : "background-color", applyType:"css"},
        {alias: "attendance positive legend lab", selector:"#Lab > div.col-md-12.col-sm-12.inner_pie_container > section > div.legendDiv > ul > li:nth-child(1)", applyTo : "border-color", applyType:"css"},
        {alias: "attendance positive legend class", selector:"#Class > div.col-md-12.col-sm-12.inner_pie_container > section > div.legendDiv > ul > li:nth-child(1)", applyTo : "border-color", applyType:"css"},
        {alias: "attendance positive chart class", selector:".slice span", applyTo : "background-color", applyType:"css"},
    ],
    negativeBarColor: [
        {alias: "Parent Console link", selector:"#LogoLoginTypeLink > a", applyTo : "color", applyType:"css"},
        {alias: "attendance negative progress", selector:".progress", applyTo : "background-color", applyType:"css"},
        {alias: "attendance negative legend lab", selector:"#Lab > div.col-md-12.col-sm-12.inner_pie_container > section > div.legendDiv > ul > li:nth-child(2)", applyTo : "border-color", applyType:"css"},
        {alias: "attendance negative legend class", selector:"#Class > div.col-md-12.col-sm-12.inner_pie_container > section > div.legendDiv > ul > li:nth-child(2)", applyTo : "border-color", applyType:"css"},
        {alias: "attendance positive chart class", selector:"#Lab > div.col-md-12.col-sm-12.inner_pie_container > section > div.pieDiv.pieDivLab > div > div.slice.s1-0-pieIDLab-pie > span", applyTo : "background-color", applyType:"css"},
        {alias: "attendance positive chart class", selector:"#Class > div.col-md-12.col-sm-12.inner_pie_container > section > div.pieDiv.pieDivClass > div > div.slice.s1-0-pieIDClass-pie > span", applyTo : "background-color", applyType:"css"},
    ],
}

let settingsMapping = {
    backgroundSize:[
        {alias: "background image size login page", selector:".row2", applyTo : "background-size", applyType:"css"},
        {alias: "background image size main page", selector:".container", applyTo : "background-size", applyType:"css"}
    ],
    backgroundRepeat : [
        {alias: "background image repeat login page", selector:".row2", applyTo : "background-repeat", applyType:"css"},
        {alias: "background image repeat main page", selector:".container", applyTo : "background-repeat", applyType:"css"}
    ],
    backgroundPosition : [
        {alias: "background image position login page", selector:".row2", applyTo : "background-position", applyType:"css"},
        {alias: "background image position main page", selector:".container", applyTo : "background-position", applyType:"css"}
    ],


    mainBackgroundSize: [
        {alias: "main background size", selector:"body", applyTo : "background-size", applyType:"css"},
    ],
    mainBackgroundRepeat : [
        {alias: "main background repeat", selector:"body", applyTo : "background-repeat", applyType:"css"},
    ],
    mainBackgroundPosition : [
        {alias: "main background position", selector:"body", applyTo : "background-position", applyType:"css"},
    ],


    noticeboardBackgroundSize: [
        {alias: "notice board background size", selector:".notice_board", applyTo : "background-size", applyType:"css"}
    ],
    noticeboardBackgroundRepeat : [
        {alias: "notice board background repeat", selector:".notice_board", applyTo : "background-repeat", applyType:"css"}
    ],
    noticeboardBackgroundPosition : [
        {alias: "notice board background position", selector:".notice_board", applyTo : "background-position", applyType:"css"}
    ]
}

function applyRules(themeData) {
    let styleSheetIndex = document.styleSheets.length - 1;
    for (let variable in componentMapping){
        for (let component in componentMapping[variable]){
            if (!componentMapping[variable].hasOwnProperty(component)) continue;
            let applyItem = componentMapping[variable][component];
            if (applyItem.hasOwnProperty("condition") && !applyItem.condition) continue;
            if (applyItem.applyType === "css") {
                document.styleSheets.item(styleSheetIndex).addRule(applyItem.selector, `${applyItem.applyTo}:${themeData[variable]} !important`)
            }
            else if (applyItem.applyType === "js"){
                try {
                    document.querySelector(applyItem.selector).style.setProperty(applyItem.applyTo, themeData[variable], "important");
                }catch (exception){
                    sendConsoleMessage(applyItem.alias + " - " + exception)
                }
            }
        }
    }
}

function applySettings(themeSettingsData){
    let styleSheetIndex = document.styleSheets.length - 1;
    sendConsoleMessage("applying there settings")
    for (let variable in settingsMapping){
        for (let setting in settingsMapping[variable]){
            if (!settingsMapping[variable].hasOwnProperty(setting)) continue;
            let applyItem = settingsMapping[variable][setting];
            if (applyItem.applyType === "css") {
                document.styleSheets.item(styleSheetIndex).addRule(applyItem.selector, `${applyItem.applyTo}:${themeSettingsData[variable]} !important`)
            }
            else if (applyItem.applyType === "js"){
                try {
                    document.querySelector(applyItem.selector).style.setProperty(applyItem.applyTo, themeSettingsData[variable], "important");
                }catch (exception){
                    sendConsoleMessage(applyItem.alias + " - " + exception)
                }
            }
        }
    }
}

function initThemeApplication() {
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
        startThemeApplication();
    });
}

function startThemeApplication() {
    if (userThemeData.selectedThemeType === "default"){
        if (!defaultThemes.hasOwnProperty(userThemeData.selectedThemeId)) {sendConsoleMessage(userThemeData.selectedThemeId + " theme does not exist"); return;}
        applyRules(defaultThemes[userThemeData.selectedThemeId].themeData)
        applySettings(defaultThemes[userThemeData.selectedThemeId].themeSettingsData)
    }else if(userThemeData.selectedThemeType === "custom"){
        if (!userThemeData.customThemeData.Themes.hasOwnProperty(userThemeData.selectedThemeId)) {sendConsoleMessage(userThemeData.selectedThemeId + " theme does not exist"); return;}
        applyRules(userThemeData.customThemeData.Themes[userThemeData.selectedThemeId].themeData)
        applySettings(userThemeData.customThemeData.Themes[userThemeData.selectedThemeId].themeSettingsData)
    }
}