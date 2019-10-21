
	var i = 0; // Start point
	var images = [];
	var time = 1000;

	// Image List
	images[0] = 'images/img1.jpg';
	images[1] = 'images/img2.jpg';
	images[2] = 'images/img3.jpg';
	images[3] = 'images/img4.jpg';
	
	// Change Image
	function changeImg(){
		document.slide.src = images[i];

		if(i < images.length-1){
			i++;
		} else {
			i = 0;
		}

		setTimeout("changeImg()", time);
	}

	window.onload = changeImg;

