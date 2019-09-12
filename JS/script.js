
function crear() {
    miArray = new Array();
    for (var i = 0; i < 8; i++) {


        miArray[i] = Math.trunc(Math.random() * 100);
    }
}

var i = 0;

crear();
function burbuja(miArray) {

    for (var i = 1; i < miArray.length; i++) {
        for (var j = 0; j < (miArray.length - i); j++) {

            if (miArray[j] > miArray[j + 1]) {

                k = miArray[j + 1];

                miArray[j + 1] = miArray[j];

                miArray[j] = k;

            }

        }

    }

    return miArray;

}
motraro();
motraror();




function motraro(){
/*miArray=Array(9,2,7,3,5,8)*/
document.write("<h1>" + "Metodo burbuja" + "</h1>");
document.write("<br>");
document.write("Valores Iniciales<br>");

for (var i = 0; i < miArray.length; i++) {




    document.write("<div " + "style=" + '"' + "padding-top:" + miArray[i] * 2 + "px;" + '"' + ">" + (miArray[i]) + "</div>") + "\n";


}

}
function motraror() {
arrayB = burbuja(miArray);


document.write("<br>");
document.write("Valores ordenados " + "<br>");

for (i = 0; i < arrayB.length; i++) {


    document.write("<div " + "style=" + '"' + "padding-top:" + arrayB[i] * 2 + "px;" + '"' + ">" + (arrayB[i]) + "</div>") + "\n";
}



document.write("<br>");



max = Math.max.apply(null, arrayB);
document.write("<div " + "class=" + '"' + "pp" + '"' + ">" + "El numero maximo es" + " " + max + "</div>");

min = Math.min.apply(null, arrayB);
document.write("<div " + "class=" + '"' + "pp" + '"' + ">" + "El numero minimo es" + " " + min + "</div>");

}



/*union */

function Ins() {
    crear();
  
    document.write("<h1>" + "INS" + "</h1>");
    document.write("<br>");
    function insertionSort(miArray) {
        for (var i = 0; i < miArray.length; i++) {
            let value = miArray[i];
            // store the current item value so it can be placed right
            for (var j = i - 1; j > -1 && miArray[j] > value; j--) {
                // loop through the numeros in the sorted array (the numeros from the current to the beginning)
                // copy each item to the next one
                miArray[j + 1] = miArray[j];
            }
            // the last item we've reached should now hold the value of the currently sorted item
            miArray[j + 1] = value;
        }
    }
    insertionSort(miArray);

    document.write("Valores Iniciales<br>");

    for (var i = 0; i < miArray.length; i++) {




        document.write("<div " + "style=" + '"' + "padding-top:" + miArray[i] * 2 + "px;" + '"' + ">" + (miArray[i]) + "</div>") + "\n";


    }
    document.write("<br>");
    
    document.write("Valores ordenados " + "<br>");
    for (i = 0; i < miArray.length; i++) {
        document.write("<head>" + "<link rel=" + '"' + "stylesheet" + '"' + " href=" + '"' + "CSS/estilos.css" + '"' + ">" + " </head>");

        document.write("<div " + "style=" + '"' + "padding-top:" + miArray[i] * 2 + "px;" + '"' + ">" + (miArray[i]) + "</div>") + "\n";
    }
    document.write("<br>");



    max = Math.max.apply(null, miArray);
    document.write("<div " + "class=" + '"' + "pp" + '"' + ">" + "El numero maximo es" + " " + max + "</div>");

    min = Math.min.apply(null, miArray);
    document.write("<div " + "class=" + '"' + "pp" + '"' + ">" + "El numero minimo es" + " " + min + "</div>");
}



/* */

function Quik() {
    crear();
    document.write("<h1>" + "Quik" + "</h1>");
    document.write("<br>");
    miArray = burbuja(miArray);
    function swap(miArray, leftIndex, rightIndex) {
        var temp = miArray[leftIndex];
        miArray[leftIndex] = miArray[rightIndex];
        miArray[rightIndex] = temp;
    }
    function partition(miArray, left, right) {
        var pivot = miArray[Math.floor((right + left) / 2)], //middle element
            i = left, //left pointer
            j = right; //right pointer
        while (i <= j) {
            while (miArray[i] < pivot) {
                i++;
            }
            while (miArray[j] > pivot) {
                j--;
            }
            if (i <= j) {
                swap(miArray, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    function quickSort(miArray, left, right) {
        var index;
        if (miArray.length > 1) {
            index = partition(miArray, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                quickSort(miArray, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                quickSort(miArray, index, right);
            }
        }
    }



    quickSort(miArray, 0, 5);
    document.write("Valores Iniciales<br>");

    for (var i = 0; i < miArray.length; i++) {




        document.write("<div " + "style=" + '"' + "padding-top:" + miArray[i] * 2 + "px;" + '"' + ">" + (miArray[i]) + "</div>") + "\n";


    }
    document.write("<br>");
    document.write("Valores ordenados " + "<br>");
    for (i = 0; i < miArray.length; i++) {
        //document.write("<head>" + " </head>"); 
        document.write("<head>" + "<link rel=" + '"' + "stylesheet" + '"' + " href=" + '"' + "CSS/estilos.css" + '"' + ">" + " </head>");

        document.write("<div " + "style=" + '"' + "padding-top:" + miArray[i] * 2 + "px;" + '"' + ">" + (miArray[i]) + "</div>") + "\n"
    }
    document.write("<br>");
    max = Math.max.apply(null, miArray);
    document.write("<div " + "class=" + '"' + "pp" + '"' + ">" + "El numero maximo es" + " " + max + "</div>");

    min = Math.min.apply(null, miArray);
    document.write("<div " + "class=" + '"' + "pp" + '"' + ">" + "El numero minimo es" + " " + min + "</div>");
}
