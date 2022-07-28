// let blob = new Blob(["array of,", " parts of,\n", "text file,"], {type: "text/plain"});
//
// let button = document.createElement("button");
// let text = document.createTextNode("Click me");
//
// button.append(text);
//
// document.getElementsByTagName("body")[0].append(button)
//
// button.addEventListener("click", () => {
//    saveAs(blob, "example.csv")
// });

let path = chrome.extension.getURL("relaventCss.css");
console.log(path);
let css = document.createElement('link');
css.rel = "stylesheet";
css.type = "text/css";
css.href = path;
document.head.append(css);

// document.styleSheets[document.styleSheets.length - 1].insertRule(".footer_menu {" +
//     "    background: none repeat scroll 0 0 #000000;" +
//     "}")

