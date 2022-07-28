function calculateMarks_Assignments(){
    gainedMarks.assignments = {};
    let assignmentMarks = {}
    for (let marks in gainedMarksRaw){
        if (marks.startsWith("Assign"))
            assignmentMarks[marks] = gainedMarksRaw[marks]
    }
    let assignmentCount = Object.keys(assignmentMarks).length;
    console.log(assignmentMarks)
    gainedMarks.assignments.accountedMarks = [0, 0]
    gainedMarks.assignments.intermediateMarks = [0, markWeights["Assignments"].weight_sub_total]
    gainedMarks.assignments.totalMarks = [0, markWeights["Assignments"].weight_grand_total]

    if (assignmentCount !== 0) {
        let total = 0;
        for (let mark in assignmentMarks) {
            total += (assignmentMarks[mark][0] / assignmentMarks[mark][1]) * 10
        }
        let average = total / assignmentCount;
        let intermediateAverage = average * markWeights["Assignments"].weight_sub_total / 10;
        let totalAverage = average * markWeights["Assignments"].weight_grand_total / 10;


        if (assignmentCount >= 4) {
            gainedMarks.assignments.accountedMarks = [totalAverage, markWeights["Assignments"].weight_sub_total];
            gainedMarks.assignments.intermediateMarks[0] = intermediateAverage;
            gainedMarks.assignments.totalMarks[0] = totalAverage;
        } else {
            gainedMarks.assignments.accountedMarks = [totalAverage * assignmentCount / 4, markWeights["Assignments"].weight_single_marks * assignmentCount];
            gainedMarks.assignments.intermediateMarks[0] = intermediateAverage;
            gainedMarks.assignments.totalMarks[0] = totalAverage;
        }
    }
}

function calculateMarks_LabAssignments(){
    gainedMarks.labAssignments = {};
    let labAssignmentMarks = {}
    for (let marks in gainedMarksRaw){
        if (marks.startsWith("LabAssign"))
            labAssignmentMarks[marks] = gainedMarksRaw[marks]
    }
    let assignmentCount = Object.keys(labAssignmentMarks).length;
    console.log(labAssignmentMarks)
    gainedMarks.labAssignments.accountedMarks = [0, 0]
    gainedMarks.labAssignments.intermediateMarks = [0, markWeights["Lab Assignments"].weight_sub_total]
    gainedMarks.labAssignments.totalMarks = [0, markWeights["Lab Assignments"].weight_grand_total]

    if (assignmentCount !== 0) {
        let total = 0;
        for (let mark in labAssignmentMarks) {
            total += (labAssignmentMarks[mark][0] / labAssignmentMarks[mark][1]) * 10
        }
        let average = total / assignmentCount;
        let intermediateAverage = average * markWeights["Lab Assignments"].weight_sub_total / 10;
        let totalAverage = average * markWeights["Lab Assignments"].weight_grand_total / 10;


        if (assignmentCount >= 4) {
            gainedMarks.labAssignments.accountedMarks = [totalAverage, markWeights["Lab Assignments"].weight_sub_total];
            gainedMarks.labAssignments.intermediateMarks[0] = intermediateAverage;
            gainedMarks.labAssignments.totalMarks[0] = totalAverage;
        } else {
            gainedMarks.labAssignments.accountedMarks = [totalAverage * assignmentCount / 4, markWeights["Lab Assignments"].weight_single_marks * assignmentCount];
            gainedMarks.labAssignments.intermediateMarks[0] = intermediateAverage;
            gainedMarks.labAssignments.totalMarks[0] = totalAverage;
        }
    }
}

function calculateMarks_Quizzes(){
    gainedMarks.quizzes = {};
    let quizMarks = {}
    for (let marks in gainedMarksRaw){
        if (marks.startsWith("Quiz"))
            quizMarks[marks] = gainedMarksRaw[marks]
    }
    let quizCount = Object.keys(quizMarks).length;
    console.log(quizMarks)
    gainedMarks.quizzes.accountedMarks = [0, 0]
    gainedMarks.quizzes.intermediateMarks = [0, markWeights["Quizzes"].weight_sub_total]
    gainedMarks.quizzes.totalMarks = [0, markWeights["Quizzes"].weight_grand_total]

    if (quizCount !== 0) {
        let total = 0;
        for (let mark in quizMarks) {
            total += (quizMarks[mark][0] / quizMarks[mark][1]) * 10
        }
        let average = total / quizCount;
        let intermediateAverage = average * markWeights["Quizzes"].weight_sub_total / 10;
        let totalAverage = average * markWeights["Quizzes"].weight_grand_total / 10;


        if (quizCount >= 4) {
            gainedMarks.quizzes.accountedMarks = [totalAverage, markWeights["Quizzes"].weight_sub_total];
            gainedMarks.quizzes.intermediateMarks[0] = intermediateAverage;
            gainedMarks.quizzes.totalMarks[0] = totalAverage;
        } else {
            gainedMarks.quizzes.accountedMarks = [totalAverage * quizCount / 4, markWeights["Quizzes"].weight_single_marks * quizCount];
            gainedMarks.quizzes.intermediateMarks[0] = intermediateAverage;
            gainedMarks.quizzes.totalMarks[0] = totalAverage;
        }
    }
}

function calculateMarks_Sessional(){
    gainedMarks.sessional1 = {}

    gainedMarks.sessional1.accountedMarks = [0, 0];
    gainedMarks.sessional1.intermediateMarks = [0, markWeights["Sessional 1"].weight_sub_total];
    gainedMarks.sessional1.totalMarks = [0, markWeights["Sessional 1"].weight_grand_total];

    if (gainedMarksRaw.hasOwnProperty("Sessional1")) {
        let sessional1Marks = gainedMarksRaw.sessional1[0] * 10 / gainedMarksRaw.sessional1[1]
        let sessional1IntermediateAverage = sessional1Marks * markWeights["Sessional 1"].weight_sub_total / 10
        let sessional1TotalAverage = sessional1Marks * markWeights["Sessional 1"].weight_grand_total / 10
        gainedMarks.sessional1.accountedMarks = [sessional1TotalAverage, markWeights["Sessional 1"].weight_grand_total];
        gainedMarks.sessional1.intermediateMarks[0] = sessional1IntermediateAverage;
        gainedMarks.sessional1.totalMarks[0] = sessional1TotalAverage;
    }
}

function calculateMarks_Sessional2(){
    gainedMarks.sessional2 = {}

    gainedMarks.sessional2.accountedMarks = [0, 0];
    gainedMarks.sessional2.intermediateMarks = [0, markWeights["Sessional 2"].weight_sub_total];
    gainedMarks.sessional2.totalMarks = [0, markWeights["Sessional 2"].weight_grand_total];

    if (gainedMarksRaw.hasOwnProperty("Sessional2")) {
        let sessional1Marks = gainedMarksRaw.sessional2[0] * 10 / gainedMarksRaw.sessional2[1]
        let sessional1IntermediateAverage = sessional1Marks * markWeights["Sessional 2"].weight_sub_total / 10
        let sessional1TotalAverage = sessional1Marks * markWeights["Sessional 2"].weight_grand_total / 10
        gainedMarks.sessional2.accountedMarks = [sessional1TotalAverage, markWeights["Sessional 2"].weight_grand_total];
        gainedMarks.sessional2.intermediateMarks[0] = sessional1IntermediateAverage;
        gainedMarks.sessional2.totalMarks[0] = sessional1TotalAverage;
    }
}

function calculateMarks_LabSessional(){
    gainedMarks.labSessional1 = {}

    gainedMarks.labSessional1.accountedMarks = [0, 0];
    gainedMarks.labSessional1.intermediateMarks = [0, markWeights["Lab Sessional 1"].weight_sub_total];
    gainedMarks.labSessional1.totalMarks = [0, markWeights["Lab Sessional 1"].weight_grand_total];

    if (gainedMarksRaw.hasOwnProperty("Sessional1")) {
        let sessional1Marks = gainedMarksRaw.sessional1[0] * 10 / gainedMarksRaw.sessional1[1]
        let sessional1IntermediateAverage = sessional1Marks * markWeights["Lab Sessional 1"].weight_sub_total / 10
        let sessional1TotalAverage = sessional1Marks * markWeights["Lab Sessional 1"].weight_grand_total / 10
        gainedMarks.sessional1.accountedMarks = [sessional1TotalAverage, markWeights["Lab Sessional 1"].weight_grand_total];
        gainedMarks.sessional1.intermediateMarks[0] = sessional1IntermediateAverage;
        gainedMarks.sessional1.totalMarks[0] = sessional1TotalAverage;
    }
}

function calculateMarks_LabSessional2(){
    gainedMarks.sessional1 = {}

    gainedMarks.sessional1.accountedMarks = [0, 0];
    gainedMarks.sessional1.intermediateMarks = [0, markWeights["Sessional 1"].weight_sub_total];
    gainedMarks.sessional1.totalMarks = [0, markWeights["Sessional 1"].weight_grand_total];

    if (gainedMarksRaw.hasOwnProperty("Sessional1")) {
        let sessional1Marks = gainedMarksRaw.sessional1[0] * 10 / gainedMarksRaw.sessional1[1]
        let sessional1IntermediateAverage = sessional1Marks * markWeights["Sessional 1"].weight_sub_total / 10
        let sessional1TotalAverage = sessional1Marks * markWeights["Sessional 1"].weight_grand_total / 10
        gainedMarks.sessional1.accountedMarks = [sessional1TotalAverage, markWeights["Sessional 1"].weight_grand_total];
        gainedMarks.sessional1.intermediateMarks[0] = sessional1IntermediateAverage;
        gainedMarks.sessional1.totalMarks[0] = sessional1TotalAverage;
    }
}

function calculateMarks_Final(){
    gainedMarks.sessional1 = {}

    gainedMarks.sessional1.accountedMarks = [0, 0];
    gainedMarks.sessional1.intermediateMarks = [0, markWeights["Sessional 1"].weight_sub_total];
    gainedMarks.sessional1.totalMarks = [0, markWeights["Sessional 1"].weight_grand_total];

    if (gainedMarksRaw.hasOwnProperty("Sessional1")) {
        let sessional1Marks = gainedMarksRaw.sessional1[0] * 10 / gainedMarksRaw.sessional1[1]
        let sessional1IntermediateAverage = sessional1Marks * markWeights["Sessional 1"].weight_sub_total / 10
        let sessional1TotalAverage = sessional1Marks * markWeights["Sessional 1"].weight_grand_total / 10
        gainedMarks.sessional1.accountedMarks = [sessional1TotalAverage, markWeights["Sessional 1"].weight_grand_total];
        gainedMarks.sessional1.intermediateMarks[0] = sessional1IntermediateAverage;
        gainedMarks.sessional1.totalMarks[0] = sessional1TotalAverage;
    }
}

function calculateMarks_LabFinal(){
    gainedMarks.sessional1 = {}

    gainedMarks.sessional1.accountedMarks = [0, 0];
    gainedMarks.sessional1.intermediateMarks = [0, markWeights["Sessional 1"].weight_sub_total];
    gainedMarks.sessional1.totalMarks = [0, markWeights["Sessional 1"].weight_grand_total];

    if (gainedMarksRaw.hasOwnProperty("Sessional1")) {
        let sessional1Marks = gainedMarksRaw.sessional1[0] * 10 / gainedMarksRaw.sessional1[1]
        let sessional1IntermediateAverage = sessional1Marks * markWeights["Sessional 1"].weight_sub_total / 10
        let sessional1TotalAverage = sessional1Marks * markWeights["Sessional 1"].weight_grand_total / 10
        gainedMarks.sessional1.accountedMarks = [sessional1TotalAverage, markWeights["Sessional 1"].weight_grand_total];
        gainedMarks.sessional1.intermediateMarks[0] = sessional1IntermediateAverage;
        gainedMarks.sessional1.totalMarks[0] = sessional1TotalAverage;
    }
}
