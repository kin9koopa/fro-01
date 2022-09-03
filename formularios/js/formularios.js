const buttonRegister = document.getElementById('btn-register');

// funcion de flecha
const printInfo = () => {
	let first_name = document.getElementById('txt-name').value;
	let last_name = document.getElementById('txt-last-name').value;
	let email_input = document.getElementById('txt-email').value;
	let address_input = document.getElementById('txt-address').value;
	let city_name = document.getElementById('txt-city').value;
	let province_name = document.getElementById('slt-province').value;
	let zip_name = document.getElementById('txt-zip').value;

	console.log(
		'Los datos son: ',
		first_name,
		last_name,
		email_input,
		address_input,
		city_name,
		province_name,
		zip_name
	);
};

buttonRegister.addEventListener('click', printInfo);
