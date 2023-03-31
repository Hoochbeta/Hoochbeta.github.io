function doGet(e) {
  var x = HtmlService.createTemplateFromFile("sheets");
  var y = x.evaluate();
  var z = y.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return z;
}

function getSheetData()  { 
  var a= SpreadsheetApp.getActiveSpreadsheet();
  var b = a.getSheetByName('Sheet1'); 
  var c = b.getDataRange();
  return c.getValues();  
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

function Search() {//Search
  let input = document.getElementById('myInput').value
  input=input.toLowerCase();
  let x = document.getElementsByTagName('article');
  for (i = 0; i < x.length; i++) {
  if(!x[i].innerHTML.toLowerCase().includes(input)){
          x[i].style.display="none";}           
      }
  }