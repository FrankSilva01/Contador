

    // CONTADOR SIMPLES

    let count = 0;

        
        document.getElementById("aumenta").onclick = function() {

        count +=1;
        document.getElementById("resultado").innerHTML = count;

    }

      

        document.getElementById("reseta").onclick = function() {

            count =0;
            document.getElementById("resultado").innerHTML = count;

        }

        document.getElementById("diminui").onclick = function() {

            count -= 1;
            document.getElementById("resultado").innerHTML = count;

        }
