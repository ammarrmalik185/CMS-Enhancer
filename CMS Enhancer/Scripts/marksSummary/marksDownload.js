let tableContents = {}
let metaData = {}

function showDownloadMarksTxtButton() {
    getMetaDataComplete();
    getAllTableContents();

    let linkContainer = document.createElement("div")
    let link = document.createElement("a");
    link.textContent = "Save as text file";
    link.download = getFileName();
    linkContainer.style.cssText = "padding: 10px; text-align:center";

    let text = getText()
    link.href = `data:text/txt,${text}\n`

    let tablesContainer = document.getElementsByClassName("table-responsive quiz_listing")[0];

    linkContainer.appendChild(link)
    tablesContainer.insertBefore(linkContainer, tablesContainer.firstChild)
}

function getFileName(){
    return metaData.courseCode + " - " + metaData.courseName + ".txt"
}

function getText(){
    return getMetaDataText() + getMarksText();
}

function getMetaDataText(){
    let returnText = ""
    returnText += "Course Name: " + metaData.courseName + "\n"
    returnText += "Course Code: " + metaData.courseCode + "\n"
    returnText += "Teacher Name: " + metaData.teacherName + "\n"
    returnText += "Credit Hours: " + metaData.credit + "\n"
    returnText += "Has Lab?: " + metaData.hasLab + "\n"
    returnText += "\n"
    return returnText;
}

function getMetaDataComplete(){
    let metaContainer = document.getElementsByClassName("col-md-4 column page_title_container")[0]
    metaData.credit = credit;
    metaData.hasLab = hasLab;
    metaData.courseName = metaContainer.getElementsByTagName("h3")[0].textContent
    metaData.teacherName = metaContainer.getElementsByClassName("teachername")[0].textContent.replace("Teacher : ", "")
    metaData.courseCode = metaContainer.getElementsByTagName("h5")[0].textContent
        .replace("Course Code : ", "")
        .split(" ")[0]
}

function getMarksText(){
    let returnText = "Marks: \n\n";
    for (let content in tableContents){
        returnText += content + ":\n"
        for (let singleMark of tableContents[content]){
            returnText += singleMark.markTitle + ": " + singleMark.obtained + " out of " + singleMark.total + "\n";
        }
        returnText += "\n"
    }
    return returnText
}

function getAllTableContents() {
    let tableContainers = document.getElementsByClassName("table-responsive quiz_listing")[0];
    if (!tableContainers) return;
    let markType;
    // Loops through Tables
    for (let i = 0; i < tableContainers.childNodes.length; i += 1){
        if (tableContainers.childNodes[i].tagName === "DIV"){
            markType = tableContainers.childNodes[i].textContent;
        }
        if (tableContainers.childNodes[i].className === "table table-striped table-bordered table-hover"){
            let tableRows = tableContainers.childNodes[i].getElementsByTagName("tbody")[0].getElementsByTagName("tr");
            // Loops through Table Rows
            for (let j = 0; j < tableRows.length; j++){
                let markTitle = tableRows[j].getElementsByTagName("td")[0].textContent
                let singleMarksObtained = parseFloat(tableRows[j].getElementsByTagName("td")[1].textContent);
                let singleTotalMarks = parseFloat(tableRows[j].getElementsByTagName("td")[2].textContent);
                let date = "";
                if (tableRows[j].getElementsByTagName("td")[3])
                    date = tableRows[j].getElementsByTagName("td")[3].textContent;
                if (tableContents[markType]) {
                    tableContents[markType].push({markTitle, obtained: singleMarksObtained, total: singleTotalMarks, date});
                }
                else {
                    tableContents[markType] = [{markTitle, obtained: singleMarksObtained, total: singleTotalMarks, date}];
                }
            }
        }
    }
}
