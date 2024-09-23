$(document).ready(function() {
    $('a.nav-link').on('click', function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 500);
    });
});
