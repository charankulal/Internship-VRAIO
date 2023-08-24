let val = 0;
var pivot = [];
key=0;
const table = document.getElementById("tableData");
const username = document.getElementById("username");
const reg = document.getElementById("reg");
const grade = document.getElementById("grade");
const submit = document.getElementById("submit");
const reset_btn = document.getElementById("reset_btn");
const tableBody = document.getElementById("tableBody");
const header = document.getElementById("tableHeader");
let tableData = [];

let i = 0;

const submitAction = () => {
  if (validate()) {
    let data = {
      key: i,
      name: username.value,
      reg: reg.value,
      grade: grade.value,
    };
    tableData.push(data);
    clearForm();
    sortTable(1);
    displayTable();
    table.style.display = "table";
    header.style.display = "block";
  }
};
const displayTable = () => {
  tableBody.innerHTML = "";
  let sl = "";
  tableData.forEach((element) => {
    console.log(element);
    x = document.createElement("TR");
    x.setAttribute("id", `row${element.key}`);
    x.innerHTML = `<tr><td>${sl}</td><td>${element.name}</td><td>${element.reg}</td><td>${element.grade}</td><td colspan="2"><div class="row g-2 "><div class="col-6 justify-content-center"><button class="btn w-100 btn-success" id="edit" onclick="editData(${element.key})">Edit</button></div><div class="col-6"><button onclick="deleteData(${element.key})" class="btn w-100 btn-danger" id="delete">Delete</button></div> </div></td></tr>`;
    tableBody.appendChild(x);
    i++;
  });
  sortTable(1);
};

const deleteData = (key) => {
  tableData.splice(
    tableData.findIndex((object) => {
      return object.key === key;
    }),
    1
  );
  displayTable();
};

const editData = (key) => {
  
  let row = document.getElementById(`row${key}`);
  for (i = 1; i < row.cells.length - 1; i++) {
    x = document.createElement("input");
    x.setAttribute("type", "text");
    x.setAttribute("class", "w-100");
    x.setAttribute("id", `row${key}input${i}`);
    x.innerHTML=row.cells[i].innerHTML;
    x.setAttribute("oninput", "inputChange()");
    x.setAttribute("value", row.cells[i].innerHTML);
    pivot[i]=row.cells[i].innerHTML
    // var element = document.getElementById(`row${key}input${i}`);
    // element.remove();
    row.cells[i].innerHTML = "";
    row.cells[i].appendChild(x);
  }

  
  var edit = document.getElementById("edit");
  edit.style.display = "none";
  var deleteBtn = document.getElementById("delete");
  deleteBtn.style.display = "none";
  var m = document.createElement("BUTTON");
  m.setAttribute("class", "btn  btn-primary mx-2");
  m.setAttribute("id", "updateButton");
  m.setAttribute("onclick", `updateData(${key})`);
  m.textContent = "Update";
  m.style.display = "none";

  var n = document.createElement("BUTTON");
  n.setAttribute("class", "btn  btn-danger mx-2");
  n.setAttribute("id", "cancelButton");
  n.setAttribute("onclick", `cancelUpdatation(${key})`);
  n.textContent = "Cancel";

  row.cells[i].appendChild(m);

  row.cells[i].appendChild(n);
  row.cells[i].style.display = "block";
};

function cancelUpdatation(key) {

  let row = document.getElementById(`row${key}`);
  for (i = 1; i < row.cells.length - 1; i++) {
    x = document.createElement("td");
    x.setAttribute("type", "text");
    x.innerHTML=pivot[i];
    
    row.cells[i].innerHTML = "";
    row.cells[i].appendChild(x);
    
}
}
function updateData(key) {
  let row = document.getElementById(`row${key}`);
  for (i = 1; i < row.cells.length - 1; i++) {
    var UpdatedValue=document.getElementById(`row${key}input${i}`).value;
 x = document.createElement("td");
    x.setAttribute("type", "text");
    x.innerHTML=UpdatedValue;
    
    row.cells[i].innerHTML = "";
    row.cells[i].appendChild(x);
    
  }
  var updateButton = document.getElementById("updateButton");
  updateButton.style.display = "none";
  var cancelButton = document.getElementById("cancelButton");
  cancelButton.style.display = "none";

  var edit = document.getElementById("edit");
  edit.style.display = "inline-block";
  var deleteBtn = document.getElementById("delete");
  deleteBtn.style.display = "inline-block";
  
  
}

const validate = () => {
  if (username.value === "" || grade.value === "" || reg.value === "") {
    if (grade.value === "") {
      document.getElementById("gradeWarning").innerText =
        "The Grade field cannot be blank";
      document.getElementById("grade").focus();
    }
    if (reg.value === "") {
      document.getElementById("regNoWarning").innerText =
        "The Reg field cannot be blank";
      document.getElementById("reg").focus();
    }
    if (username.value === "") {
      document.getElementById("userNameWarning").innerText =
        "The Name field cannot be blank";
      document.getElementById("username").focus();
    }

    return false;
  } else return true;
};

const disableWarning_userName = () => {
  userNameWarning.innerHTML = "";
};
const disableWarning_regNo = () => {
  regNoWarning.innerHTML = "";
};
const disableWarning_grade = () => {
  gradeWarning.innerHTML = "";
};

const clearForm = () => {
  document.getElementById("myForm").reset();
};

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
  }
}
function Warning_userName() {
  userNameWarning.innerHTML = "Enter the Valid Name(Hint Alphabets Only)";
}

function Warning_grade() {
  gardeWarning.innerHTML = "Enter Numbers from 0 to 100";
}

function inputChange() {
  var updateButton = document.getElementById("updateButton");
  updateButton.style.display = "inline-block";
}
