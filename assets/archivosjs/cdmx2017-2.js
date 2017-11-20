	var titulo = document.getElementById('tituloAqp');
	var h1 = document.createElement("h1");
	h1.innerHTML = 'Alumnas Ciudad de México 2017-2';
	titulo.appendChild(h1);

	var girl = document.getElementById('girlAqp');
	for (var i=0; i<data.CDMX['2017-2'].students.length; i++) {

		var image = document.createElement('img');
		var paragraph = document.createElement('p');
		var sprints = document.createElement('p');

		var photo = data.CDMX['2017-2'].students[i].photo;
		var paragraphName = data.CDMX['2017-2'].students[i].name;
		var sprintsData = data.CDMX['2017-2'].students[i].sprints.number;

		image.setAttribute("src", photo);
		//paragraph.appendChild(paragraphName);
		paragraph.textContent = paragraphName;
		sprints.textContent = sprintsData;
		girl.appendChild(image);
		girl.appendChild(paragraph);
		girl.appendChild(sprints);


} 