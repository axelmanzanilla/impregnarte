var display = $( window ).width();

$('.taz').turn({
    display: display < 768 ? 'single' : 'double',
    gradients: true,
    acceleration: true
});

$('.taz .next').each(function() {
    $(this).parents().eq(1).click(function() { $(".taz").turn("next") });
});

$('.taz .previous').each(function() {
    $(this).parents().eq(1).click(function() { $(".taz").turn("previous") });
});
