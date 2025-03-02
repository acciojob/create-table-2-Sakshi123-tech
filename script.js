function createTable() {
    // Prompt the user to input the number of rows
    let rows = prompt("Input number of rows");
    // Prompt the user to input the number of columns
    let columns = prompt("Input number of columns");

    // Convert the input values to integers
    rows = parseInt(rows);
    columns = parseInt(columns);

    // Validate the input values
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    let table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Loop to create the rows and columns
    for (let i = 0; i < rows; i++) {
        // Create a new row
        let row = table.insertRow();
        for (let j = 0; j < columns; j++) {
            // Create a new cell
            let cell = row.insertCell();
            // Set the text content of the cell
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
