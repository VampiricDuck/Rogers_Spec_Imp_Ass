const grid = document.getElementById("grid");
const x_length = document.getElementById("x_length");
const y_length = document.getElementById("y_length");
const x_start = document.getElementById("x_start");
const y_start = document.getElementById("y_start");
const x_end = document.getElementById("x_end");
const y_end = document.getElementById("y_end");

class Maze{
    constructor(){

    }
    build_grid(){
        this.create_table = document.createElement("table"); this.create_table.id = "table";
        this.table_row = document.createElement("tr")
        // grid.appendChild(this.create_table);
        // for(let x=0; x<this.x_length; x++){
        //     this.table_row.id = x;
            
        }
    }

testmaze = new Maze() 

testmaze.build_grid()