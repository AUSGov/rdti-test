import 'bootstrap';
import '../signin.html';
import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
$('.table').on('hide.bs.collapse show.bs.collapse', e => {
  $(e.target)
    .prev()
    .find('i:last-child')
    .toggleClass('chevronUp chevronDown');
});