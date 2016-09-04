
$('[data-action="toggle"]').click(function(){
  const target = $(this).attr('data-target');
  $('[data-type="bubble"][data-name="' + target + '"]').toggle();
});

// for ibooks widget
widget.notifyContentIsReady();

