const grid = document.getElementById("grid");
const y_length = document.getElementById("y_length");
const x_length = document.getElementById("x_length");
const x_start = document.getElementById("x_start");
const y_start = document.getElementById("y_start");
const x_end = document.getElementById("x_end");
const y_end = document.getElementById("y_end");

class Maze{
    constructor(){

    }
    build_grid(){
        this.create_table = document.createElement("table");
        this.create_table.id = "table";
        this.y_length = 6; //remove this after i make the table dynamic
        this.x_length = 5; //remove this after i make the table dynamic
        grid.appendChild(this.create_table);
        for(let y=0; y<=this.y_length; y++){
            this.table_row = document.createElement("tr");
            this.table_row.id = y;
            this.create_table.appendChild(this.table_row);
            for(let x=0; x<=this.x_length; x++){
                this.table_column = document.createElement("td");
                this.table_column.id = x;
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

y_length.addEventListener("change", () => {
    });
x_length.addEventListener("change", () => {
    });
x_start.addEventListener("change", () => {
    });
y_start.addEventListener("change", () => {
    });
x_end.addEventListener("change", () => {
    });
y_end.addEventListener("change", () => {
    });