let intervalPickapInStore,
    intervalDetectGoogleMaps,
    intervalEditAddress,
    stringDeliveryMode = '<div class="delivery-mode-title">O también puedes recoger en tienda</div>'
    + '<div id="delivery-home" class="delivery-button active">'
        + '<span class="big-radio"></span>'
        + '<img width="35" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-home.png"/>'
        + '<span class="text">Envío a<br>domicilio</span>'
    + '</div>'
    + '<div id="delivery-store" class="delivery-button">'
        + '<span class="big-radio"></span>'
        + '<img width="30" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-store.png"/>'
        + '<span class="text">Recojo en<br>tienda GRATIS</span>'
    + '</div>',
    stringDeliveryModeTriangle = '<span class="delivery-mode-triangle"></span>',
    stringDeliveryModeLabel = '<span class="delivery-mode-label">Seleccionar tienda</span>'

function load_pickap_in_store() {
    // start interval
    intervalPickapInStore = setInterval(function () {
        if (window.location.href.indexOf('shipping') > -1) {
            // remove html
            $('body').find('.delivery-mode-title').remove()
            $('body').find('#delivery-home').remove()
            $('body').find('#delivery-store').remove()
            // appending html
            $('body').find('#shipping-data .accordion-inner').before(stringDeliveryMode)

            $('body').find('#delivery-home').click(function() {
                // reset address stores - reset styles to input
                $('body').find('.delivery-button').removeClass('active')
                $(this).addClass('active')
                $('#ship-address-search').removeClass('active')
                $('#ship-address-search').val('')
                // reset read only
                $('#ship-address-search').removeAttr('readonly')
                // clear elements
                $('body').find('.delivery-mode-label').remove()
                $('body').find('.delivery-mode-triangle').remove()
                // setting value in localstorage
                window.localStorage.deliveryModeFlag = 'pickup-in-home'
            })

            $('body').find('#delivery-store').click(function() {
                // setting address stores - setting styles to input
                $('body').find('.delivery-button').removeClass('active')
                $(this).addClass('active')
                $('#ship-address-search').addClass('active')
                $('#ship-address-search').val('Av Jose Larco 497, Lima 15074')
                // read only
                $('#ship-address-search').attr('readonly','readonly')
                // add elements
                $('#ship-address-search').after(stringDeliveryModeTriangle)
                $('#ship-address-search').after(stringDeliveryModeLabel)
                // setting value in localstorage
                window.localStorage.deliveryModeFlag = 'pickup-in-store'
            })

            clearInterval(intervalPickapInStore)
        }
    }, 100)
}

function load_detect_googlemaps() {
    // start interval
    intervalDetectGoogleMaps = setInterval(function () {
        if (window.location.href.indexOf('shipping') > -1 && $('#map-canvas').length > 0) {
            // remove html
            $('body').find('.delivery-mode-title').remove()
            $('body').find('#delivery-home').remove()
            $('body').find('#delivery-store').remove()
            $('body').find('.delivery-mode-frame').remove()

            if ( window.localStorage.deliveryModeFlag === 'pickup-in-store' ) {
                $('body').find('#shipping-data .ship-more-info').val('recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda')
                $('body').find('#shipping-data .ship-reference').val('Recojo en tienda - TP LARCO')
                $('body').find('#shipping-data .ship-more-info').css({'opacity':'0','position':'absolute','z-index':'-1'})
                $('body').find('#shipping-data .ship-reference').css({'opacity':'0','position':'absolute','z-index':'-1'})
                // append frame
                $('body').find('#map-canvas').after('<div class="delivery-mode-frame"><div>')

            } else {
                $('body').find('#shipping-data .ship-more-info').val('')
                $('body').find('#shipping-data .ship-reference').val('')
                $('body').find('#shipping-data .ship-more-info').css({'opacity':'','position':'','z-index':''})
                $('body').find('#shipping-data .ship-reference').css({'opacity':'','position':'','z-index':''})
                $('body').find('.delivery-mode-frame').remove()
            }

            // event click
            $('body').find('.search-another-address-btn').click(function() {
                load_detect_googlemaps()
                load_pickap_in_store()
            })

            clearInterval(intervalDetectGoogleMaps)
        }
    }, 100)
}

function load_edit_address() {
    // start interval
    intervalEditAddress = setInterval(function () {
        if (window.location.href.indexOf('payment') > -1 && $('#edit-shipping-data').length > 0) {
            // event click
            $('body').find('#edit-shipping-data').click(function() {
                console.log('asdasdasdasdd')
                load_edit_address()
                load_detect_googlemaps()
            })

            clearInterval(intervalEditAddress)
        }
    }, 100)
}

load_edit_address()
load_detect_googlemaps()
load_pickap_in_store()