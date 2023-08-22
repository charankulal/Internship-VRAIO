function addTableRow() {
    var i=0;
    const userName = document.getElementById('userName').value;
        const regNo = document.getElementById('regNo').value;
        const grade = document.getElementById('grade').value;
        if (userName && regNo&&grade) {
            const tableElement = document.getElementById('tableData');
            const trElement = document.createElement('tr');
            const tbodyElement = document.createElement('tbody');
            const nameEle = document.createElement('td');
            const emailEle = document.createElement('td');
            const gradeEle = document.createElement('td');
            nameEle.innerHTML = userName;
            emailEle.innerHTML = regNo;
            gradeEle.innerHTML = grade;
            trElement.appendChild(nameEle);
            trElement.appendChild(emailEle);
            trElement.appendChild(gradeEle);
            tbodyElement.appendChild(trElement);
            tableElement.appendChild(tbodyElement);
            i=i+1;
            sortTable(0);
        } 
        else if(!userName){
            alert("Name field cannot be empty");
        } 
        else if(!regNo){
            alert("Registration number field cannot be empty");
        } 
        else if(!grade){
            alert("Grade field cannot be empty");
        }     
 }
 function sortTable(n) {
    let table;
    table = document.getElementById("tableData");
    var rows, i, x, y, count = 0;
    var switching = true;
    var direction = "asc";
    while (switching) {
        switching = false;
        var rows = table.rows;
        for (i = 1; i < (rows.length); i++) {
            var Switch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            if (direction == "asc") {
                if (x.innerHTML.toLowerCase() >
                y.innerHTML.toLowerCase()) {
                    Switch = true;
                    break;
                }
            } else if (direction == "desc") {
                if (x.innerHTML.toLowerCase() <
                y.innerHTML.toLowerCase()) {
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
}