const con = document.getElementById("container");

function makegrid(rows, cols) {
    con.innerHTML = '';
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (let i = 0; i < rows * cols; i++) {
        let cell = document.createElement("div");
        cell.className = "cells";
        con.appendChild(cell);
        cell.onmouseover=()=> cell.style.backgroundColor = `#${Math.floor(Math.random()*15674564).toString(16)}`;
    }
}

function start() {
    let r = parseInt(document.getElementById("Rows").value);
    let c = parseInt(document.getElementById("cols").value);
    if (r > 0 && c > 0) {
        makegrid(r, c);
    }
    else {
        alert("enter valid rows and coloumns");
    }
}