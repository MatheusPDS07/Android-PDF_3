    let somaMussarela = 0;
	let somaMista = 0;
	let somaCalabresa = 0;
	let vendaMussarela = 0;
	let vendaMista = 0;
	let vendaCalabresa = 0;

	function venda() 
	{
	
	    if(document.getElementById('mussarela').checked)
	    {
		somaMussarela = somaMussarela + 1;
		vendaMussarela = vendaMussarela + 25;
		document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
		document.getElementById("vendaMussarela").innerHTML = vendaMussarela;
	    }else if(document.getElementById("mista").checked)
	    {
		somaMista = somaMista + 1;
		vendaMista = vendaMista + 25;
		document.getElementById("resultadoMista").innerHTML = somaMista;
		document.getElementById("vendaMista").innerHTML = vendaMista;
	    }else if(document.getElementById('calabresa').checked)
	    {
		somaCalabresa = somaCalabresa + 1;
		vendaCalabresa = vendaCalabresa + 25;
		document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
		document.getElementById("vendaCalabresa").innerHTML = vendaCalabresa;
	    }
	}

	function estorno() 
	{
	    if(document.getElementById('mussarela').checked)
	    {
		somaMussarela = somaMussarela - 1;
		vendaMussarela = vendaMussarela - 25;
		document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
		document.getElementById("vendaMussarela").innerHTML = vendaMussarela;
	    }else if(document.getElementById("mista").checked)
	    {
		somaMista = somaMista - 1;
		vendaMista = vendaMista - 25;
		document.getElementById("resultadoMista").innerHTML = somaMista;
		document.getElementById("vendaMista").innerHTML = vendaMista;
	    }else if(document.getElementById('calabresa').checked)
	    {
		somaCalabresa = somaCalabresa - 1;
		vendaCalabresa = vendaCalabresa - 25;
		document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
		document.getElementById("vendaCalabresa").innerHTML = vendaCalabresa;
	    }
	}
		function tableToCSV() {

			// Variable to store the final csv data
			var csv_data = [];

			// Get each row data
			var rows = document.getElementsByTagName('tr');

			for (var i = 0; i < rows.length; i++) {

				// Get each column data
				var cols = rows[i].querySelectorAll('td,th');

				// Stores each csv row data
				var csvrow = [];
				for (var j = 0; j < cols.length; j++) {

					// Get the text data of each cell
					// of a row and push it to csvrow
					csvrow.push(cols[j].innerHTML);

				}

				// Combine each column value with comma
				csv_data.push(csvrow.join("\t\t\t\t\t"+"*"+"\t\t\t\t\t"));
			}

			// Combine each row data with new line character
			csv_data = csv_data.join('\n');

			// Call this function to download csv file
			return csv_data;

		}

        function toastMe() {
             JSInterface.toastMe(tableToCSV());
        }