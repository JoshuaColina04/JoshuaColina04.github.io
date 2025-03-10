
const hexs = document.querySelectorAll('.hex');

hexs.forEach((hex) => {
	hex.addEventListener('click', () => {
		document.querySelector('.active').classList.remove('active');
		hex.classList.add('active');

		verifyHexActive(hex);

	});
});


function verifyHexActive(hex) {
	let list = hex.className.split(" ");

	if(hex.id == 'idea'){
		list.forEach((l) => {
			if(l == "active"){
				showHex(hexs[1]);
				removeHex(hexs[8]);
				removeHex(hexs[9]);
				removeHex(hexs[10]);
				removeHex(hexs[11]);

			}
		});	

	} 

	else if(hex.id == 'market-size'){
		list.forEach((l) => {
			if(l == "active"){
				showHex(hexs[11]);
				removeHex(hexs[8]);
				removeHex(hexs[9]);
				removeHex(hexs[10]);
				removeHex(hexs[1]);
				removeHex(hexs[12]);
				removeHex(hexs[13]);
				removeHex(hexs[14]);

			}
		});	

	}

	else if(hex.id == 'pro-market'){
		list.forEach((l) => {
			if(l == "active"){
				showHex(hexs[8]);
				showHex(hexs[9]);
				showHex(hexs[10]);
				removeHex(hexs[1]);
				removeHex(hexs[11]);
				removeHex(hexs[12]);
				removeHex(hexs[13]);
				removeHex(hexs[14]);
				
			}
		});	

	}

	else if(hex.id == 'pasion'){
		list.forEach((l) => {
			if(l == "active"){
				showHex(hexs[1]);
				showHex(hexs[12]);
				showHex(hexs[13]);
				showHex(hexs[14]);
				removeHex(hexs[8]);
				removeHex(hexs[9]);
				removeHex(hexs[10]);
				removeHex(hexs[11]);
				
			}
		});	

	}



}

function showHex(hex) {
	hex.style.opacity = '1';

}

function removeHex(hex) {
	hex.style.opacity = '0';

}

verifyHexActive(hexs[0]);
