$(function () {
    $('.filter').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        let valor = $(this).attr('data-nombre');
        if (valor == 'todos') {
            $('.content-oferta').show('1000');
        } else {
            $('.content-oferta').not('.' + valor).hide('1000');
            $('.content-oferta').filter('.' + valor).show('1000');
        }
    });
});