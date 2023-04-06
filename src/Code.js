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
  return c.getDisplayValues();  
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

