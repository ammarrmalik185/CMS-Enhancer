let userSettingBlock = {
    'blocking_enable' : true,
    'blocking_blockPopups' : true,
}

function initBlock() {
    chrome.storage.sync.get(Object.keys(userSettingBlock), results => {
        sendConsoleMessage(results)
        for (let option in userSettingBlock) {
            if (results.hasOwnProperty(option)) {
                userSettingBlock[option] = results[option]
                sendConsoleMessage(`${option} is ${results[option]}`)
            } else {
                chrome.storage.sync.set({[option]: true}, () => {
                    if (chrome.runtime.lastError) {
                        sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                    }
                    sendConsoleMessage(`${option} is set to ${true}`);
                });
                userSettingBlock[option] = true;
            }
        }
        startBlock();
    });
}

function startBlock() {
    if (userSettingBlock.blocking_enable){
    if (window.location.href.includes("/ResultCard")) {
        let popup = document.getElementById("myModal");
        if (popup !== null)
            chrome.storage.local.set({'lastResultPopup': popup.textContent}, function() {});
        else
            chrome.storage.local.set({'lastResultPopup': "placeholder"}, function() {});
    }
    if (window.location.href.includes("/Courses")) {
        let popup = document.getElementById("myModal");
        if (popup !== null)
            chrome.storage.local.set({'lastPopup': popup.textContent}, function() {});
        else
            chrome.storage.local.set({'lastPopup': "placeholder"}, function() {});
    }


    if (userSettingBlock.blocking_blockPopups) removePopups();

    }
}

function removePopups() {
    if (window.location.href.includes("/Courses")) {
        let popup = document.getElementById("myModal");
        if (popup !== null) {
            chrome.storage.local.get(['lastPopup'], function (result) {
                if (result['lastPopup'] === undefined) {
                    chrome.storage.local.set({'lastPopup': popup.textContent}, function () {
                    });
                } else if (result['lastPopup'] === popup.textContent) {
                    popup.style["display"] = "none";
                } else {
                    chrome.storage.local.set({'lastPopup': popup.textContent}, function () {
                    });
                }

            });
        }

    }
    if (window.location.href.includes("/ResultCard")) {
        let popup = document.getElementById("myModal");
        if (popup !== null) {
            chrome.storage.local.get(['lastResultPopup'], function (result) {
                if (result['lastResultPopup'] === undefined) {
                    chrome.storage.local.set({'lastResultPopup': popup.textContent}, function () {
                    });
                } else if (result['lastResultPopup'] === popup.textContent) {
                    popup.style["display"] = "none";
                } else {
                    chrome.storage.local.set({'lastResultPopup': popup.textContent}, function () {});
                }

            });
        }

    }
}

initBlock();