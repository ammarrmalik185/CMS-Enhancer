let values_html = document.getElementsByClassName("col-md-4 column page_title_container")[0];
let margin = "5";

let theoryMarksDisplay = document.createElement("h5");
theoryMarksDisplay.appendChild(document.createTextNode("Theory Marks : " + (Math.round(finalMarks.theory[0] * roundFigure) / roundFigure).toString() + " / " + (Math.round(finalMarks.theory[1] * roundFigure) / roundFigure).toString()));
theoryMarksDisplay.style["margin"] = margin
values_html.append(theoryMarksDisplay)

let labMarksDisplay = document.createElement("h5");
labMarksDisplay.appendChild(document.createTextNode("Lab Marks : " + (Math.round(finalMarks.lab[0] * roundFigure) / roundFigure).toString() + " / " + (Math.round(finalMarks.lab[1] * roundFigure) / roundFigure).toString()));
labMarksDisplay.style["margin"] = margin
values_html.append(labMarksDisplay);

let totalMarksDisplay = document.createElement("h5");
totalMarksDisplay.appendChild(document.createTextNode("Total Marks : " + (Math.round(finalMarks.all[0] * roundFigure) / roundFigure) + " / " + (Math.round(finalMarks.all[1] * roundFigure) / roundFigure).toString()));
totalMarksDisplay.style["margin"] = margin
values_html.append(totalMarksDisplay);
