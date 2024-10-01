const con = document.getElementById("container");

        function makegrid(rows, cols) {
            for (let i = 0; i < rows * cols; i++) {
                let cell = document.createElement("div"); 
                cell.className = "cells";
                con.appendChild(cell); 
            }
        }

        makegrid(16, 16); 