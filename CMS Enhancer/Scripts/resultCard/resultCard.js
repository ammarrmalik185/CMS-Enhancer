let userSettingResult = {
    'resultCard_enable' : true,
    'resultCard_showGPA' : true,
}

function initResult() {
    chrome.storage.sync.get(Object.keys(userSettingResult), results => {
        sendConsoleMessage(results)
        for (let option in userSettingResult) {
            if (results.hasOwnProperty(option)) {
                userSettingResult[option] = results[option]
                sendConsoleMessage(`${option} is ${results[option]}`)
            } else {
                chrome.storage.sync.set({[option]: true}, () => {
                    if (chrome.runtime.lastError) {
                        sendConsoleMessage("Error retrieving index: " + chrome.runtime.lastError);
                    }
                    sendConsoleMessage(`${option} is set to ${true}`);
                });
                userSettingResult[option] = true;
            }
        }
        startResult();
    });
}

function startResult(){
    if (userSettingResult.resultCard_enable){
        if (userSettingResult.resultCard_showGPA) calculateGpa()
    }
}

function calculateGpa(){

    if (window.location.href.includes("/ResultCard") && window.location.href.includes("cms.comsats.edu.pk")){
        let tables = document.getElementsByClassName("single_result_container");
        for (let i = 0; i < tables.length; i++){

            let total_gpa = 0;
            let total_credit = 0;
            let total_gpa_into_credit = 0;
            let marks = tables[i].getElementsByClassName("WhiteFormTextResult");
            for (let j = 1; j < marks.length; j++){
                let values = marks[j].getElementsByTagName("td");
                let gpa = parseFloat(values[5].textContent);
                let credit = parseFloat(values[2].textContent);
                if (gpa.toString() !== "NaN") {
                    total_gpa += gpa;
                    total_credit += credit;
                    total_gpa_into_credit += (gpa * credit);
                }
            }
            let gpa_this_semester = Math.round(total_gpa_into_credit/total_credit * 100) / 100;

            let sub_tables = tables[i].getElementsByClassName("table_container");
            let summary_table_body = sub_tables[2].getElementsByTagName("tbody")[0];
            let heading = document.createElement("b");
            let heading_text = document.createTextNode(" GPA : ");
            let value_text = document.createTextNode(gpa_this_semester.toString());
            heading.appendChild(heading_text);
            let td_element = document.createElement("td");
            let tr_element = document.createElement("tr");
            td_element.appendChild(heading);
            td_element.appendChild(value_text);
            tr_element.appendChild(td_element);
            summary_table_body.insertBefore(tr_element, summary_table_body.firstChild);
        }
    }
}

initResult();