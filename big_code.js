// create a function that builds the page using javascript.
// create a function that builds the table.

class cell {
    constructor(x_cord, y_cord){
        this.x_cord = x_cord
        this.y_cord = y_cord
    }
    
}

class table1{
    constructor(x_length, y_length){
        this.x_length = x_length
        this.y_length = y_length
    }
    build_table(){
        const table = document.getElementById("table").createElement("table");
        const tbody = document.getElementById("table").createElement("table");
        const row = document.getElementById("table").createElement("tr");
        const cell = document.getElementById("table").createElement("td");
        for(let y=0; y<this.y_length; y++){
            for(let x=0; x<this.x_length; x++){
                cell.appendChild(document.getElementById("table").createTextNode(`${y}, ${x}`));
                row.appendChild(cell);
            }
            tbody.appendChild(row);
        }
        table.appendChild(tbody)
        document.getElementById("table").appendChild(table);
        table.setAttribute("border", "2");
    }
}

newTable = new table1(30, 30);
newTable.build_table();
// // 1. Create the table and tbody elements
// const table = document.createElement("table");
// const tblBody = document.createElement("tbody");

// // 2. Create rows and cells using a loop
// for (let i = 0; i < 2; i++) {
//   const row = document.createElement("tr");

//   for (let j = 0; j < 2; j++) {
//     const cell = document.createElement("td");
//     const cellText = document.createTextNode(`Row ${i}, Column ${j}`);
    
//     // 3. Append text to cell, then cell to row
//     cell.appendChild(cellText);
//     row.appendChild(cell);
//   }

//   // 4. Append row to the table body
//   tblBody.appendChild(row);
// }

// // 5. Append tbody to table, then table to the body of the document
// table.appendChild(tblBody);
// document.body.appendChild(table);

// // Optional: Add a border for visibility
// table.setAttribute("border", "2");
