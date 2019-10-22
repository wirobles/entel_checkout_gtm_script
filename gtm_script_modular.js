$(document).ready(function() {
    let closePromo,
        openPromo

    // hearing event
    $(document).on('click', function (evt) {
        $(document).trigger('close.promo')
    })

    // close promo
    closePromo = function () {
        $('.e-promo-section').removeClass('e-promo-section--state--open')
        $('.e-promo-section__open-button').removeClass('active')

        $(document).unbind('close.promo')
    }

    // open promo
    openPromo = function () {
        $('.e-promo-section').addClass('e-promo-section--state--open')
        $('.e-promo-section__open-button').addClass('active')

        $(document).on('close.promo', function() {
            closePromo ()
        })
    }

    // click promo section event
    $('body').find('.e-promo-section').click(function (e) {
        if ($(this).hasClass('e-promo-section--state--open')) {
            e.stopPropagation()
            closePromo ()
        } else {
            e.stopPropagation()
            openPromo ()
        }
    })

    $('body').find('.open-legal-popup').click(function() {
        $('.e-promo-overlay').addClass('e-promo-overlay--state--open')
        $('.e-promo-legales-popup').addClass('e-promo-legales-popup--state--open')
    })

    $('body').find('.e-promo-legales-popup__close-button, .e-promo-overlay').click(function() {
        $('.e-promo-overlay').removeClass('e-promo-overlay--state--open')
        $('.e-promo-legales-popup').removeClass('e-promo-legales-popup--state--open')
    })
})