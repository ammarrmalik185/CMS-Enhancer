let checkBoxes = {
    'visualCustomization_enable': true,
    'visualCustomization_enableTheme': true,

    'markSummary_enable': true,
    'markSummary_download_marks_button_text' : true,

    'markSummary_marks_total': true,
    'markSummary_marks_theory': true,
    'markSummary_marks_lab': true,

    'markSummary_marks_total_average' : false,
    'markSummary_marks_theory_average' : false,
    'markSummary_marks_lab_average' : false,
    'markSummary_marks_theory_weighted_average' : false,
    'markSummary_marks_lab_weighted_average' : false,

    'markSummary_marks_internal_total' : false,
    'markSummary_marks_internal_theory' : false,
    'markSummary_marks_internal_lab' : false,

    'markSummary_marks_internal_total_average' : false,
    'markSummary_marks_internal_theory_average' : false,
    'markSummary_marks_internal_lab_average' : false,
    'markSummary_marks_internal_theory_weighted_average' : false,
    'markSummary_marks_internal_lab_weighted_average' : false,

    'markSummary_tableData_accounted': true,
    'markSummary_tableData_intermediate': true,
    'markSummary_tableData_absolute': true,
    'markSummary_removeDuplicateEntries': true,

    'resultCard_enable': true,
    'resultCard_showGPA': true,

    'blocking_enable': true,
    'blocking_blockPopups': true,
}

function run() {
    chrome.storage.sync.get(checkBoxes, results => {
        sendConsoleMessage(results)
        for (let currentCheckBox of Object.keys(checkBoxes)) {
            if (results.hasOwnProperty(currentCheckBox)) {
                document.getElementById(currentCheckBox).checked = results[currentCheckBox]
                sendConsoleMessage(`${currentCheckBox} is ${results[currentCheckBox]}`)
            } else {
                chrome.storage.sync.set({[currentCheckBox]: checkBoxes[currentCheckBox]}, () => {
                    if (chrome.runtime.lastError) {
                        sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                    }
                    sendConsoleMessage(`${currentCheckBox} is set to ${checkBoxes[currentCheckBox]}`);
                });
                document.getElementById(currentCheckBox).checked = checkBoxes[currentCheckBox];
            }
        }
    });



    for (let currentCheckBox of Object.keys(checkBoxes)){
        let element = document.getElementById(currentCheckBox);
        document.getElementById(currentCheckBox).addEventListener("click", () => {
            chrome.storage.sync.set({[currentCheckBox]: element.checked}, () => {
                if (chrome.runtime.lastError) {
                    sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                }
                sendConsoleMessage(`${currentCheckBox} is set to ${element.checked}`);
            });
        })
    }
}

run();
