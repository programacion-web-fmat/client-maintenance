function validateLogin() {
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if(username == 'administrador' && password == 'admFmat2018') {
    alert('Ha ingresado al sistema');
    window.open("clientes.html");
    window.close();
  }
  else {
    alert('Usuario o contraseña no válido');
  }
}

function validateForm() {
  var name = document.getElementById('name');
  var lastName = document.getElementById('last-name');
  var address = document.getElementById('address');
  var city = document.getElementById('city');
  var bank = document.getElementById('bank');
  var agency = document.getElementById('agency');
  var account = document.getElementById('account');

  if(name.value == '') {
    alert('Nombre en blanco');
    name.focus();
  }
  else if(lastName.value == '') {
    alert('Apellido en blanco');
    lastName.focus();
  }
  else if(address.value == '') {
    alert('Dirección en blanco');
    address.focus();
  }
  else if(city.value == '') {
    alert('Ciudad en blanco');
    city.focus();
  }
  else if(bank.value == '') {
    alert('Banco en blanco');
    bank.focus();
  }
  else if(agency.value == '') {
    alert('Agencia en blanco');
    agency.focus();
  }
  else if(account.value == '') {
    alert('Cuenta en blanco');
    account.focus();
  }
  else {
    alert('Los datos han sido enviados con exito');
    window.open('index.html');
    window.close();
  }
}

function validateBank() {
  if(!(bank.value == 'Banamex' && account.value == '123456')) {
    alert('No puede seleccionar esta opción');
    document.getElementById('cash').checked = true;
  }
}

function validateDays() {

  var credit = document.getElementById('credit');

  if(credit.checked) {
    alert('No puede seleccionar está opción a crédito');
    document.getElementById('day15').checked = true;
    document.getElementById('day60').checked = false;
    document.getElementById('day90').checked = false;
  }

}

function clearFields() {
  document.getElementById('name').value = '';
  document.getElementById('last-name').value = '';
  document.getElementById('address').value = '';
  document.getElementById('city').value = '';
  document.getElementById('bank').value = '';
  document.getElementById('agency').value = '';
  document.getElementById('account').value = '';
  document.getElementById('cash').checked = true;
  document.getElementById('day15').checked = true;
  document.getElementById('day30').checked = false;
  document.getElementById('day60').checked = false;
  document.getElementById('day90').checked = false;
}
