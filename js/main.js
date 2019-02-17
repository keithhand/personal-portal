$(function(){
      $('#hide').text($('#search-field').val());
      $('#search-field').width($('#hide').width());
}).on('input', function () {
      $('#hide').text($('#search-field').val());
      $('#search-field').width($('#hide').width());
});
