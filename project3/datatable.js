function loadData(){
  //ajax call
      //success parseData()
}

function parseData(){
  // for loop for each item in the data file
      // each time:
      // htmlTable += "<tr><td>" + $(this).attr("name") + "</td>"
      // htmlTable += "<td" + javaScriptData + </td>
      // htmlTable += "<tr>"

    $('#people').innerHTML(htmlTable);
    $('#example').DataTable();
}
$(document).ready(function() {
  $('#datatable').DataTable();
} );
