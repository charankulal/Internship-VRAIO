let slNo = 1;
let val = 0;
function disableWarning_userName() {
  userNameWarning.innerHTML = "";
}
function disableWarning_regNo() {
  regNoWarning.innerHTML = "";
}
function disableWarning_grade() {
  gradeWarning.innerHTML = "";
}
function addTableRow() {
  var i = 0;

  const userName = document.getElementById("userName").value;
  const regNo = document.getElementById("regNo").value;
  const grade = document.getElementById("grade").value;

  if (userName && regNo && grade) {
    document.getElementById("form").reset();

    const tableElement = document.getElementById("tableData");
    const trElement = document.createElement("tr");
    
    const  tbodyElement=document.getElementById('tbodyEle');
    
    const serialNumEle = document.createElement("td");
    const nameEle = document.createElement("td");
    const regEle = document.createElement("td");
    const gradeEle = document.createElement("td");
    const button = document.getElementById("button");

    serialNumEle.innerHTML = "";
    nameEle.innerHTML = userName;
    regEle.innerHTML = regNo;
    gradeEle.innerHTML = grade;
    trElement.appendChild(serialNumEle);
    trElement.appendChild(nameEle);
    trElement.appendChild(regEle);
    trElement.appendChild(gradeEle);

    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
    tableElement.style.display = "table";
    button.style.display = "block";
    sortTable(1);
  }
  if (!userName || !regNo || !grade) {
    if (!grade) {
      const gradeWarning = document.getElementById("gradeWarning");
      gradeWarning.innerHTML = "The Grade field cannot be blank";
      document.getElementById("grade").focus();
    }
    if (!regNo) {
      const regNoWarning = document.getElementById("regNoWarning");
      regNoWarning.innerHTML = "The Registration number field cannot be blank";
      document.getElementById("regNo").focus();
    }
    if (!userName) {
      const userNameWarning = document.getElementById("userNameWarning");
      userNameWarning.innerHTML = "The Name field cannot be blank";
      document.getElementById("userName").focus();
    }
  }
}
function sortTable(n) {
  let table;
  val++;
  table = document.getElementById("tableData");
  var rows,
    i,
    x,
    y,
    count = 0;
  var switching = true;
  if (val % 2 == 0) {
    var direction = "asc";
  } else {
    var direction = "desc";
  }
  while (switching) {
    switching = false;
    var rows = table.rows;
    for (i = 1; i < rows.length - 1; i++) {
      var Switch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if (direction == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          Switch = true;
          break;
        }
      } else if (direction == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          Switch = true;
          break;
        }
      }
    }
    if (Switch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      count++;
    } else {
      if (count == 0 && direction == "asc") {
        direction = "desc";
        switching = true;
      }
    }
  }
  var rows = table.rows;
  for (i = 1; i < rows.length; i++) {
    x = rows[i].getElementsByTagName("td")[0];
    x.innerHTML = i;
    console.log(x.innerHTML);
  }
}
function deleteData() {
  const parent = document.getElementById("tbodyEle");

  while(parent.firstChild)
  {
      parent.innerHTML="";
  }
 
  
}
