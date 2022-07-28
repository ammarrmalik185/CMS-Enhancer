let sendConsoleMessages = false

function sendConsoleMessage(message) {
    if (!sendConsoleMessages) return
    let trace = new Error().stack.split("at")[3];
    try{
        let traceSplit = trace.split("/")
        trace = traceSplit[traceSplit.length-1]
        trace = trace.replace(")\n", "")
        trace = trace.replaceAll(" ", "");
        console.log("\n" + trace + ": ")
    }catch (e){
        console.log(trace)
    }

    console.log(message)
}

function sendSnackbarMessage(message) {
    let x = document.getElementById("snackbar");

    if (x) {
        x.textContent = message;
        x.className = "show";
        setTimeout(function () {
            x.className = x.className.replace("show", "");
        }, 3000);
    }
}
