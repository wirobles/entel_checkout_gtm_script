
let intervalVar,
    stringPickupInStore = '<div class="pickup-in-store-title">O también puedes recoger en tienda</div>'
    + '<p class="pickup-in-store">'
        + '<span class="pickup-in-store__check"></span>'
        + '<img class="icon-store" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-store.png" alt="Recojo en tienda - Entel" />'
        + '<span class="pickup-in-store__title"><b>Recojo en tienda Jockey Plaza GRATIS</b></span>'
        + '<span class="pickup-in-store__schedule"><b>Atención:</b><br>Lunes - Domingo : 10:00 am a 10:00 pm</span>'
    + '</p>'

// append html into container
function load_pickap_in_store() {
    intervalVar = setInterval(function () {
        if (window.location.href.indexOf('shipping') > -1 && $('#map-canvas').length > 0) {
            $('body').find('.ship-reference.input.text').after(stringPickupInStore)
    
            // event to activate pickup in store
            $('body').find('.pickup-in-store').click(function() {
                // pickup in store off
                if ($(this).hasClass('active') == true) {
                    $('body').find('#ship-more-info').val($('body').find('#ship-more-info').val().replace('Retiro en Tienda Jockey - ',''))
                    $('body').find('#ship-reference').val($('body').find('#ship-reference').val().replace('Retiro en Tienda Jockey - ',''))
                    $('body').find('#ship-more-info').removeAttr('disabled')
                    $('body').find('#ship-reference').removeAttr('disabled')
                    $('body').find('.ship-more-info.input.text').css('opacity','')
                    $('body').find('.ship-reference.input.text').css('opacity','')
                    $('body').find('.address-shipping-options').css({'opacity':'','position':'','z-index':''})
                // pickup in store on
                } else {
                    $('body').find('#ship-more-info').val('Retiro en Tienda Jockey - ' + $('body').find('#ship-more-info').val())
                    $('body').find('#ship-reference').val('Retiro en Tienda Jockey - ' + $('body').find('#ship-reference').val())
                    $('body').find('#ship-more-info').attr('disabled','disabled')
                    $('body').find('#ship-reference').attr('disabled','disabled')
                    $('body').find('.ship-more-info.input.text').css('opacity','0.6')
                    $('body').find('.ship-reference.input.text').css('opacity','0.6')
                    $('body').find('.address-shipping-options').css({'opacity':'0','position':'absolute','z-index':'-1'})                
                }
                $(this).toggleClass('active')
            })
    
            $('body').find('.search-another-address-btn').click(function() {
                load_pickap_in_store()
            })
    
            clearInterval(intervalVar)
        }
    }, 100)
}

load_pickap_in_store()