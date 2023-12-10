// import { config } from './dotenv';
// config();
// console.log(process.env.SHEET_ID);
const sheetId = '1_TqXw7VT6zhW4kBOSIOJf51Zm4KnlykC60VSvaG2BM8';
const sheetTitle = 'Total Hours';

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + sheetId + '/gviz/tq?sheet=' + sheetTitle);
console.log(FULL_URL);
fetch(FULL_URL)
.then(res => res.text())
.then(rep => {
    let data = JSON.parse(rep.substring(47).slice(0,-2));
    console.log(data);

    const Table = document.getElementById('myTable');
    const columns = data.table.cols.length;
    const rows = data.table.rows.length;

    const TableRow = document.createElement('tr');
    Table.append(TableRow);
    for(j=0;j<columns;j++){
        const TableHeader = document.createElement('th');
        TableRow.append(TableHeader);
        try {
            TableHeader.innerHTML = data.table.cols[j].label;
        }
        catch(error){
            TableHeader.innerHTML = "";
        }
    }

    for(i=0;i<rows;i++){
    const TableRow = document.createElement('tr');
    Table.append(TableRow);
        for(k=0;k<columns;k++){
            const Cell = document.createElement('td');
            TableRow.append(Cell);
            try{
                if(data.table.rows[i].c[k].f===undefined){
                    Cell.innerHTML = data.table.rows[i].c[k].v;
                }
                else{
                    Cell.innerHTML = data.table.rows[i].c[k].f;
                }
            }
            catch(error){
                Cell.innerHTML = "";
            }
        }
    }
})

var input = document.getElementById("myInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    Search();
  }
});
    function Search() {//Search
      var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  if(filter == ""){
    table.style.visibility = "hidden";
  }
  else{
  table.style.display = "inline-table";
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
}