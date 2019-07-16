import 'bootstrap';
import '../signin.html';
import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code

$('.view').click(() => {
  alert('This takes user to the referenced error on the form');
});

$('.allow').click(() => {
  alert('This removes the warning');
});

