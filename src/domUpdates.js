import $ from 'jquery';

export function loginError() {
  $('.user-input').addClass('login-error-indicator');
}

export function openUserInterface(usersName) {
  $('.main-menu').addClass('close-display');
  $('.user-interface').removeClass('close-display');
  $('body').css({background: "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../images/user-image.jpg) center / cover"});
  $('#title').text(`Welcome, ${usersName}!`);
}
