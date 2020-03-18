$( document ).ready(function() {
    $('.work').click(function(){
        $('.popup').css({
            'height': '100vh',
            'display': 'block'
        })
    })
    $('.popup-close').click(function(){
        $('.popup').css({
            'height': '0vh',
            'display': 'none'
        })
    })
});

function openLink(url){
    window.open(url,"_blank")
}