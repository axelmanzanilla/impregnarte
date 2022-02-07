var display = $( window ).width();

$('.nav').turn({
    display: display < 768 ? 'single' : 'double',
    gradients: true,
    acceleration: true
});

$('.nav .next').each(function() {
    $(this).parents().eq(1).click(function() { $(".nav").turn("next") });
});

$('.nav .previous').each(function() {
    $(this).parents().eq(1).click(function() { $(".nav").turn("previous") });
});
