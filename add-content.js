var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) { greeting = 'Salutations!';}
else if (hourNow > 12) { greeting = 'Ahoy!';}
else if (hourNow > 0) {greeting = 'Howdy!';}
else { greetins = 'Greetings!';}

document.write('<h3>' + greeting + '</h3>');

function getProduct() {
  var response = prompt('Would you rather a house or an apartment?');
  var item;

  while(response != 'house' && response != 'apartment') {
      item = prompt('HOUSE or APARTMENT!')
  }
      if (response === 'house') {
      item = '<img src="images/house.png">';
  }   else if (response === 'apartment') {
      item = '<img src="images/hotel.png">';
  }

  return item;
}


function getCount() {
  var count = prompt('How many rooms would you like?');
  while(isNaN(count) || count === '') {
      count = prompt('How many rooms would you like?');
  }
  return count;
}

function showOrder() {
  var result = '';
  var itemType = getProduct();
  var total = getCount();

  for(var i = 0; i < total; i++) {
      result = result + '<p>' + itemType + '</p>';
  }

  return document.write(result);

}

showOrder();