let userSettingCustomization = {
    'visualCustomization_enable' : true,
    'visualCustomization_enableTheme' : true,
}

function initCustomization() {
   chrome.storage.sync.get(Object.keys(userSettingCustomization), results => {
        sendConsoleMessage(results)
        for (let option in userSettingCustomization) {
            if (results.hasOwnProperty(option)) {
                userSettingCustomization[option] = results[option]
                sendConsoleMessage(`${option} is ${results[option]}`)
            } else {
                chrome.storage.sync.set({[option]: true}, () => {
                    if (chrome.runtime.lastError) {
                        sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                    }
                    sendConsoleMessage(`${option} is set to ${true}`);
                });
                userSettingCustomization[option] = true;
            }
        }
       startCustomization();
    });
}

function startCustomization() {
    sendConsoleMessage(userSettingCustomization.visualCustomization_enable)
    if (userSettingCustomization.visualCustomization_enable){
        if (userSettingCustomization.visualCustomization_enableTheme && !window.location.href.includes("/Fees/Challan/")) initThemeApplication();
    }
}

function darkMode() {
    let body = document.getElementsByTagName('body');
    for (let i = 0; i < body.length; i++) {
        body[i].style['background-color'] = '#000000';
    }
    let background_image = document.getElementsByTagName('div');
    for (let i = 0; i < background_image.length; i++) {
        background_image[i].style['background-color'] = '#000000';
        background_image[i].style['background'] = '#000000';
        background_image[i].style['color'] = '#FFFFFF';
        if (background_image[i].className === "g-recaptcha")
            background_image[i].style['color'] = '#000000';
    }

    let table_entries = document.getElementsByTagName('td');
    for (let i = 0; i < table_entries.length; i++) {
        table_entries[i].style['background-color'] = '#000000';
        table_entries[i].style['color'] = '#FFFFFF';
    }

    let table_header = document.getElementsByTagName('th');
    for (let i = 0; i < table_header.length; i++) {
        table_header[i].style['background-color'] = '#FFFFFF';
        table_header[i].style['color'] = '#000000';
    }

    if (!(window.location.href.includes("/ResultCard") && window.location.href.includes("cms.comsats.edu.pk"))){
        let table_root = document.getElementsByTagName('tr');
        for (let i = 0; i < table_root.length; i++) {
            table_root[i].style['background-color'] = '#FFFFFF';
            table_root[i].style['color'] = '#000000';
            table_root[i].style['text-color'] = '#000000';
        }
    }

    let loading_screen = document.getElementsByClassName("se-pre-con");
    for (let i = 0; i < loading_screen.length; i++) {
        loading_screen[i].style['background-color'] = '#000000';
        loading_screen[i].style['color'] = '#000000';
        loading_screen[i].style['text-color'] = '#000000';
    }
}

initCustomization();