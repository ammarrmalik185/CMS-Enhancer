let userSettingMarks = {
    'markSummary_enable' : true,

    'markSummary_download_marks_button_text' : true,

    'markSummary_marks_total' : true,
    'markSummary_marks_theory' : false,
    'markSummary_marks_lab' : false,

    'markSummary_marks_total_average' : false,
    'markSummary_marks_theory_average' : false,
    'markSummary_marks_lab_average' : false,
    'markSummary_marks_theory_weighted_average' : false,
    'markSummary_marks_lab_weighted_average' : false,

    'markSummary_marks_internal_total' : false,
    'markSummary_marks_internal_theory' : false,
    'markSummary_marks_internal_lab' : false,

    'markSummary_marks_internal_total_average' : true,
    'markSummary_marks_internal_theory_average' : false,
    'markSummary_marks_internal_lab_average' : false,
    'markSummary_marks_internal_theory_weighted_average' : false,
    'markSummary_marks_internal_lab_weighted_average' : false,

    'markSummary_tableData_accounted' : true,
    'markSummary_tableData_intermediate' : true,
    'markSummary_tableData_absolute' : true,
    'markSummary_removeDuplicateEntries' : true,
}

function initMarks() {
    chrome.storage.sync.get(Object.keys(userSettingMarks), results => {
        sendConsoleMessage(results)
        for (let option in userSettingMarks) {
            if (results.hasOwnProperty(option)) {
                userSettingMarks[option] = results[option]
                sendConsoleMessage(`${option} is ${results[option]}`)
            } else {
                chrome.storage.sync.set({[option]: userSettingMarks[option]}, () => {
                    if (chrome.runtime.lastError) {
                        sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                    }
                    sendConsoleMessage(`${option} is set to ${userSettingMarks[option]}`);
                });
            }
        }
        startMarks();
    });
}

function startMarks() {
    if (userSettingMarks.markSummary_enable) {
        startMarkCalculation()
        if (userSettingMarks.markSummary_removeDuplicateEntries) removeDuplicateRows();
        if (userSettingMarks.markSummary_download_marks_button_text) showDownloadMarksTxtButton();

        // Debug
        sendConsoleMessage(markWeights);
        sendConsoleMessage(gainedMarksRaw);
        sendConsoleMessage(gainedMarks);
        sendConsoleMessage(finalMarks);
        sendConsoleMessage(tables);

    }
}

initMarks();
