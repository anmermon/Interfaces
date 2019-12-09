$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.cont-exp').show('1000');
        } else {
            $('.cont-exp').not('.' + valor).hide('1000');
            $('.cont-exp').filter('.' + valor).show('1000');
        }
    });
});