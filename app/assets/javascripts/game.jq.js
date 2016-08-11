$(document).ready(function() {
  //   these are are pages
  var navLinks = $('.nav-link');
  var pageAddCustomer = $('#page-add-customer');
  var pageAddGame = $('#page-add-game');
  var pageOrder = $('#page-order');
  var pageCart = $('#page-cart');
  //buttons
  var buttonCustomer = $('#btn-add-customer');
  var buttonGame = $('#btn-game');
  var buttonCart = $('#btn-cart');
  //  variables for the cutsomer & address
  var customer = {};
  var firstName = $('#firstName');
  var lastName = $('#lastName');
  var address = $('#address');
  var address2 = $('#address2');
  var email = $('#email');
  var city = $('#city');
  var state = $('#state');
  var zip = $('#zip');
  // the cart/order declaration
  var cart = {};
  var order = {};


  // this should represent the customer add page
  pageAddCustomer.css('display', 'block');
  var currentPage = pageAddCustomer;

  buttonCustomer.on('click', function() {

    console.log('');
    console.log('------ Customer Order Created! ------');
    console.log(customer);
    console.log(order);

    navigate(currentPage, pageAddGame);
  });

  $(function() {
  $('#btn-ajax').on('click', function() {
    $.ajax('http://localhost:4000/users', {
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: JSON.stringify({
        name: $('#name').val(),
        email: $('#email').val(),
        username: $('#username').val(),
        shipTo:{
        address: $('#address').val(),
        address2: $('#address2').val(),
        city: $('#city').val(),
        state: $('#state').val(),
        zip: $('#zip').val(),
        }
      })
    })
    .done(function(user) {
      console.log(user);
    })
    .fail(function() {
      console.log('error');
    })
    .always(function() {
      console.log('complete');;
    });
  });
})

  //this should represent the add games page
buttonGame.on('click', function(){

    navigate(currentPage, pageCart);
});


  //this should represent the cart page



  // *********** Navigation ***********
  var navigate = function(pageFrom, pageTo) {
    pageFrom.css('display', 'none');
    currentPage = pageTo;
    currentPage.css('display', 'block');
  }

  // Nav links
  navLinks.on('click', function() {
    switch (this.id) {
      case 'btn-customer':
        navigate(currentPage, pageAddCustomer);
        break;

      case 'btn-game':
        navigate(currentPage, pageAddGame);
        break;

      case 'btn-cart':
        navigate(currentPage, pageCart);
        break;

      case 'checkout-link':
        navigate(currentPage, pageReceipt);
        break;

      default:
        console.log('404');
    }


  });


});
