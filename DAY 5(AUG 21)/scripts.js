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
        
 }
 function sortTable(n) {
    let table;
    table = document.getElementById("tableData");
    var rows, i, x, y, count = 0;
    var switching = true;

    // Order is set as ascending
    var direction = "ascending";

    // Run loop until no switching is needed
    while (switching) {
        switching = false;
        var rows = table.rows;

        //Loop to go through all rows
        for (i = 1; i < (rows.length - 1); i++) {
            var Switch = false;

            // Fetch 2 elements that need to be compared
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            // Check the direction of order
            if (direction == "ascending") {

                // Check if 2 rows need to be switched
                if (x.innerHTML.toLowerCase() >
                y.innerHTML.toLowerCase()) {
                     
                    // If yes, mark Switch as needed
                    // and break loop
                    Switch = true;
                    break;
                }
            } else if (direction == "descending") {

                // Check direction
                if (x.innerHTML.toLowerCase() <
                y.innerHTML.toLowerCase()) {

                    // If yes, mark Switch as needed
                    // and break loop
                    Switch = true;
                    break;
                }
            }
        }
        if (Switch) {

            // Function to switch rows and mark
            // switch as completed
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;

            // Increase count for each switch
            count++;
        } else {

            // Run while loop again for descending order
            if (count == 0 && direction == "ascending") {
                direction = "descending";
                switching = true;
            }
        }
    }
}