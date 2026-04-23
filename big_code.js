const grid = document.getElementById("grid");
const y_length = document.getElementById("y_length");
const x_length = document.getElementById("x_length");
const x_start = document.getElementById("x_start");
const y_start = document.getElementById("y_start");
const x_end = document.getElementById("x_end");
const y_end = document.getElementById("y_end");
const grid_row = document.getElementsByTagName("tr");
const grid_column = document.getElementsByTagName("td");
x_length.value = 5;
y_length.value = 5;
x_start.value = 1;
y_start.value = 1;
x_end.value = x_length.value;
y_end.value = y_length.value;
// x_length.addEventListener("change", () => {
//     });
// y_length.addEventListener("change", () => {
//     });
// implement this after algorythm is working.
x_start.addEventListener("change", () => {
    if (x_start.value > x_length.value){ 
        x_start.value = x_length.value;
    }
    if (x_start.value < 1){
        x_start.value = 1;
    }
    testmaze.demolish_grid();
    testmaze.build_grid();
    });
y_start.addEventListener("change", () => {
    if (y_start.value > y_length.value){ 
        y_start.value = y_length.value;
    }
    if (y_start.value < 1){
        y_start.value = 1;
    }
    testmaze.demolish_grid();
    testmaze.build_grid();
});
x_end.addEventListener("change", () => {
    if (x_end.value > x_length.value){ 
        x_end.value = x_length.value;
    }
    if (x_end.value < 1){
        x_end.value = 1;
    }
    testmaze.demolish_grid();
    testmaze.build_grid();
    });
y_end.addEventListener("change", () => {
    if (y_end.value > y_length.value){ 
        y_end.value = y_length.value;
    }
    if (y_end.value < 1){
        y_end.value = 1;
    }
    testmaze.demolish_grid();
    testmaze.build_grid();
});

class Maze{
    constructor(){

    }
    build_grid(){
        this.create_table = document.createElement("table");
        this.create_table.id = "table";
        grid.appendChild(this.create_table);
        for(let y=0; y<=y_length.value; y++){
            this.table_row = document.createElement("tr");
            this.table_row.id = y;
            this.create_table.appendChild(this.table_row);
            for(let x=0; x<=x_length.value; x++){
                this.table_column = document.createElement("td");
                this.table_column.id = x + "," + y;
                this.table_row.appendChild(this.table_column);
                this.table_column.innerHTML = x + "," + y;
            }
        }
    }
    demolish_grid(){
        grid.removeChild(this.create_table);
    }
}

class tiles extends Maze{
    constructor(){
        super();
    }
    start_tile(){
        
    }
}

testmaze = new Maze() 

testmaze.build_grid()