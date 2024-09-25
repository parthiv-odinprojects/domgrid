const con=document.getElementById("container");
let row=document.getElementsByClassName("gridrows");
let cells=document.getElementsByClassName("cells");

function makegrid(){
    makerows(16);
    makecells(16);
}

function makerows(rn){
    for(i=0;i<rn;i++){
        let row=document.createElement("div");
        con.appendChild(row).className="gridrows";
    }
}

function makecells(cn){
    for(i=0;i<row.length;i++){
        for(j=0;j<cn;j++){
            let ncell=document.createElement("div");
            row[j].appendChild(ncell).className="cells";
        }
    }
}