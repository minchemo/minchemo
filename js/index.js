$(document).ready(function () {
    $('.work').click(function () {
        $('.popup').css({
            height: '100vh',
            display: 'block',
        });
    });
    $('.popup-close').click(function () {
        $('.popup').css({
            height: '0vh',
            display: 'none',
        });
    });
    $('a').click(function (e) {
        e.preventDefault();

        if ($(this).attr('href')) {
            window.open($(this).attr('href'), '_blank');
        }
    });
});

function openLink(url) {
    window.open(url, '_blank');
}
