let complete_marks_data = {
    "Quizzes":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Assignments":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Lab Sessional 1":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Sessional 1":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Sessional 2":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Lab Sessional 2":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Lab Assignments":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "Final":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
    "FinalLab":{
        "total_marks_accounted":0,
        "weight_single_marks":0,
        "weight_grand_total":0,
        "weight_sub_total":0,
        "obtained_marks_accounted":0,
    },
};

let gainedMarks = {
    Assignments: {},
    Quizzes: {},
    Sessional: {},
    LabSessional: {},
};

let roundFigure = 100;

function calculateInternalMarks() {

    if (window.location.href.includes("MarksSummary")){

        let tableContainers = document.getElementsByClassName("table-responsive quiz_listing")[0];
        if (tableContainers === undefined)
            return;
        let credit_element = document.getElementsByClassName("col-md-4 column page_title_container")[0].getElementsByTagName("h5")[0];
        let credit = parseInt(credit_element.textContent.charAt(credit_element.textContent.length - 1));
        let tableHeadings = tableContainers.getElementsByTagName("div");
        let hasLab;
        for (let i = 0; i < tableHeadings.length; i++) {
            if (tableHeadings[i].textContent === "Lab Sessional 1"
                || tableHeadings[i].textContent === "Lab Assignments"
                || tableHeadings[i].textContent === "Lab Sessional 2"
            ) {
                hasLab = true;
                break;
            }
        }
        calculate_weights(hasLab, credit);

        let markType;
        // Loops through Tables
        for (let i = 0; i < tableContainers.childNodes.length; i += 1){
            if (tableContainers.childNodes[i].tagName === "DIV"){
                markType = tableContainers.childNodes[i].textContent;
            }
            if (tableContainers.childNodes[i].className === "table table-striped table-bordered table-hover"){
                if (markType === "Final")
                    continue;
                let tableRows = tableContainers.childNodes[i].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
                let marksInstance = complete_marks_data[markType];

                // let marksSubtotalWeight = marksInstance["weight_sub_total"];
                let marksGrandWeight = marksInstance["weight_grand_total"];

                let count = 0;
                let totalMarks = 0;

                // Loops through Table Rows
                for (let j = 0; j < tableRows.length; j++){
                    let markTitle = tableRows[j].getElementsByTagName("td")[0].textContent
                    if (hasLab && markTitle.toLowerCase().includes("lab") && !markType.toLowerCase().includes("lab"))
                        continue;
                    console.log(markType)
                    let singleMarksObtained = parseFloat(tableRows[j].getElementsByTagName("td")[1].textContent);
                    let singleTotalMarks = parseFloat(tableRows[j].getElementsByTagName("td")[2].textContent);
                    marksInstance["total_marks_accounted"] += marksInstance["weight_single_marks"];
                    marksInstance["obtained_marks_accounted"] +=
                        (singleMarksObtained / singleTotalMarks * marksInstance["weight_single_marks"]);

                    totalMarks += singleMarksObtained / singleTotalMarks * 10;
                    count += 1;
                }

                // let marksSubtotalObtained = ((totalMarks / count) / 10) * marksSubtotalWeight;
                let marksGrandTotalObtained = ((totalMarks / count) / 10) * marksGrandWeight;

                // addRow(
                //     tableContainers.childNodes[i].getElementsByTagName("tbody")[0],
                //     "Average (in only Lab/Theory)",
                //     marksSubtotalObtained.toString(),
                //     marksSubtotalWeight.toString(),
                //     ""
                //     );

                addRow(
                    tableContainers.childNodes[i].getElementsByTagName("tbody")[0],
                    "Absolute Marks (average)",
                    (Math.round(marksGrandTotalObtained * roundFigure)/roundFigure).toString(),
                    (Math.round(marksGrandWeight * roundFigure)/roundFigure).toString(),
                    ""
                );
                addRow(
                    tableContainers.childNodes[i].getElementsByTagName("tbody")[0],
                    "Absolute Marks (marked)",
                    (Math.round(marksInstance["obtained_marks_accounted"] * roundFigure)/roundFigure).toString(),
                    (Math.round(marksInstance["total_marks_accounted"] * roundFigure)/roundFigure).toString(),
                    ""
                );

            }
        }
        showInternalMarks();
    }
}

function showInternalMarks() {

    let grandTotal = 0;
    let grandObtained = 0;
    for (let part in complete_marks_data){
        grandTotal += complete_marks_data[part]["total_marks_accounted"];
        grandObtained += complete_marks_data[part]["obtained_marks_accounted"];
    }
    grandTotal = Math.round(grandTotal * roundFigure)/roundFigure
    grandObtained = Math.round(grandObtained * roundFigure)/roundFigure
    let values_html = document.getElementsByClassName("col-md-4 column page_title_container")[0];
    let h5_html = document.createElement("h5");
    h5_html.appendChild(document.createTextNode("Internal Marks : " + grandObtained.toString() + " / " + grandTotal.toString()));
    values_html.appendChild(h5_html);

}

function calculate_weights(hasLab, credit){
    if (!hasLab){
        complete_marks_data["Quizzes"].weight_grand_total = 15;
        complete_marks_data["Quizzes"].weight_sub_total = 15;
        complete_marks_data["Quizzes"].weight_single_marks = 15/4;

        complete_marks_data["Assignments"].weight_grand_total = 10;
        complete_marks_data["Assignments"].weight_sub_total = 10;
        complete_marks_data["Assignments"].weight_single_marks = 10/4;

        complete_marks_data["Lab Assignments"].weight_grand_total = 0;
        complete_marks_data["Lab Assignments"].weight_sub_total = 0;
        complete_marks_data["Lab Assignments"].weight_single_marks = 0;

        complete_marks_data["Sessional 1"].weight_grand_total = 10;
        complete_marks_data["Sessional 1"].weight_sub_total = 10;
        complete_marks_data["Sessional 1"].weight_single_marks = 10;

        complete_marks_data["Sessional 2"].weight_grand_total = 15;
        complete_marks_data["Sessional 2"].weight_sub_total = 15;
        complete_marks_data["Sessional 2"].weight_single_marks = 15;

        complete_marks_data["Lab Sessional 1"].weight_grand_total = 0;
        complete_marks_data["Lab Sessional 1"].weight_sub_total = 0;
        complete_marks_data["Lab Sessional 1"].weight_single_marks = 0;

        complete_marks_data["Lab Sessional 2"].weight_grand_total = 0;
        complete_marks_data["Lab Sessional 2"].weight_sub_total = 0;
        complete_marks_data["Lab Sessional 2"].weight_single_marks = 0;

        complete_marks_data["Final"].weight_grand_total = 50;
        complete_marks_data["Final"].weight_sub_total = 50;
        complete_marks_data["Final"].weight_single_marks = 50;

        complete_marks_data["FinalLab"].weight_grand_total = 0;
        complete_marks_data["FinalLab"].weight_sub_total = 0;
        complete_marks_data["FinalLab"].weight_single_marks = 0;

    } else{
        complete_marks_data["Quizzes"].weight_grand_total = 15 * ((credit-1) / credit);
        complete_marks_data["Quizzes"].weight_sub_total = 15;
        complete_marks_data["Quizzes"].weight_single_marks = (15 * ((credit-1) / credit))/4;

        complete_marks_data["Assignments"].weight_grand_total = 10 * ((credit-1) / credit);
        complete_marks_data["Assignments"].weight_sub_total = 10;
        complete_marks_data["Assignments"].weight_single_marks = (10 * ((credit-1) / credit))/4;

        complete_marks_data["Lab Assignments"].weight_grand_total = 25 * (1 / credit);
        complete_marks_data["Lab Assignments"].weight_sub_total = 25;
        complete_marks_data["Lab Assignments"].weight_single_marks = (25 * (1 / credit))/4;

        complete_marks_data["Sessional 1"].weight_grand_total = 10 * ((credit-1) / credit);
        complete_marks_data["Sessional 1"].weight_sub_total = 10;
        complete_marks_data["Sessional 1"].weight_single_marks = 10 * ((credit-1) / credit);

        complete_marks_data["Sessional 2"].weight_grand_total = 15 * ((credit-1) / credit);
        complete_marks_data["Sessional 2"].weight_sub_total = 15;
        complete_marks_data["Sessional 2"].weight_single_marks = 15 * ((credit-1) / credit);

        complete_marks_data["Lab Sessional 1"].weight_grand_total = 10 * (1 / credit);
        complete_marks_data["Lab Sessional 1"].weight_sub_total = 10;
        complete_marks_data["Lab Sessional 1"].weight_single_marks = 10 * (1 / credit);

        complete_marks_data["Lab Sessional 2"].weight_grand_total = 15 * (1 / credit);
        complete_marks_data["Lab Sessional 2"].weight_sub_total = 15;
        complete_marks_data["Lab Sessional 2"].weight_single_marks = 15 * (1 / credit);

        complete_marks_data["Final"].weight_grand_total = 50 * ((credit-1) / credit);
        complete_marks_data["Final"].weight_sub_total = 50;
        complete_marks_data["Final"].weight_single_marks = 50 * ((credit-1) / credit);

        complete_marks_data["FinalLab"].weight_grand_total = 50 * (1 / credit);
        complete_marks_data["FinalLab"].weight_sub_total = 50;
        complete_marks_data["FinalLab"].weight_single_marks = 50 * (1 / credit);

    }
}

function init() {

    chrome.storage.local.get(['marksCalculate'], function(result) {
        if (result['marksCalculate'] === undefined){
            chrome.storage.local.set({'marksCalculate': true}, function() {});
            calculateInternalMarks();
        }
        else{
            if (result['marksCalculate']){
                calculateInternalMarks();
            }
        }

    });
}
