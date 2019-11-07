$(document).ready(function ($) {

    let global = (function() {
        // objects
        let html = {
            insertButtons : function() {
                let stringDeliveryMode = '<div class="delivery-mode-title">O también puedes recoger en tienda</div>'
                + '<div id="delivery-home" class="delivery-button active">'
                    + '<span class="big-radio"></span>'
                    + '<img width="35" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-home.png"/>'
                    + '<span class="text">Envío a<br>domicilio</span>'
                + '</div>'
                + '<div id="delivery-store" class="delivery-button">'
                    + '<span class="big-radio"></span>'
                    + '<img width="30" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-store.png"/>'
                    + '<span class="text">Recojo en<br>tienda GRATIS</span>'
                + '</div>'

                $('body').find('#shipping-data .accordion-inner').before(stringDeliveryMode)
            },
            removeButtons : function() {
                $('body').find('.delivery-mode-title').remove()
                $('body').find('#delivery-home').remove()
                $('body').find('#delivery-store').remove()
            },
            insertSelectElements : function() {
                let stringDeliveryModeTriangle = '<span class="delivery-mode-triangle"></span>',
                    stringDeliveryModeLabel = '<span class="delivery-mode-label">Seleccionar tienda</span>'
                $('#ship-address-search').after(stringDeliveryModeTriangle)
                $('#ship-address-search').after(stringDeliveryModeLabel)
            },            
            removeSelectElements : function() {
                $('body').find('.delivery-mode-label').remove()
                $('body').find('.delivery-mode-triangle').remove()
            },
            setSelectStyle : function() {
                // setting values to Address input
                $('#ship-address-search').addClass('active')
                $('#ship-address-search').val('Av Jose Larco 497, Lima 15074')
                // setting read only
                $('#ship-address-search').attr('readonly','readonly')
            },
            unSetSelectStyle : function() {
                // removing active class to Address input
                $('#ship-address-search').removeClass('active')
                $('#ship-address-search').val('')
                // removing read only
                $('#ship-address-search').removeAttr('readonly')
            },
            insertMapFrame : function() {
                $('body').find('#map-canvas').after('<div class="delivery-mode-frame"><div>')
            },
            removeMapFrame : function() {
                $('body').find('.delivery-mode-frame').remove()
            },
            setExtraInfoValues : function() {
                $('body').find('#shipping-data .ship-more-info').val('recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda recojo en tienda')
                $('body').find('#shipping-data .ship-reference').val('Recojo en tienda - TP LARCO')
                $('body').find('#shipping-data .ship-more-info').css({'opacity':'0','position':'absolute','z-index':'-1'})
                $('body').find('#shipping-data .ship-reference').css({'opacity':'0','position':'absolute','z-index':'-1'})
            },
            unSetExtraInfoValues : function() {
                $('body').find('#shipping-data .ship-more-info').val('')
                $('body').find('#shipping-data .ship-reference').val('')
                $('body').find('#shipping-data .ship-more-info').css({'opacity':'','position':'','z-index':''})
                $('body').find('#shipping-data .ship-reference').css({'opacity':'','position':'','z-index':''})
            }
        }

        let events = {
            optionButtons : function() {
                // click entrega a domicilio
                $('body').find('#delivery-home').click(function() {
                    // remove active
                    $('body').find('.delivery-button').removeClass('active')
                    $(this).addClass('active')
                    // config input style
                    html.unSetSelectStyle()
                    html.removeSelectElements()
                    window.localStorage.deliveryModeFlag = 'pickup-in-home'
                })
        
                // click recojo en tienda
                $('body').find('#delivery-store').click(function() {
                    // add active
                    $('body').find('.delivery-button').removeClass('active')
                    $(this).addClass('active')
                    // config off input style
                    html.setSelectStyle()
                    html.insertSelectElements()
                    window.localStorage.deliveryModeFlag = 'pickup-in-store'
                })
            },
            searchOtherAddress : function() {
                $('body').find('.search-another-address-btn').click(function() {
                    html.removeButtons()
                    html.insertButtons()
                    events.optionButtons()
                    validation.googleMap()
                    window.localStorage.deliveryModeFlag = 'pickup-in-home'
                })
            }
        }

        let validation = {
            modalityChosed : function() {
                html.removeButtons()
                html.removeMapFrame()                    
    
                if ( window.localStorage.deliveryModeFlag === 'pickup-in-store' ) {
                    html.setExtraInfoValues()
                    html.insertMapFrame()
                } else {
                    html.unSetExtraInfoValues()
                    html.removeMapFrame()
                }
            },
            googleMap : function() {
                let intervalDetectGoogleMaps

                intervalDetectGoogleMaps = setInterval(function() {
                    if ($('#map-canvas').length) {
                        html.removeButtons()
                        validation.modalityChosed()
                        events.searchOtherAddress()
                        clearInterval(intervalDetectGoogleMaps)
                    }
                }, 100)
            },
            shippingStep : function() {
                window.onpopstate = function(event) {
                    if (/shipping/i.test(document.location.href)) {
                        html.removeButtons()
                        html.insertButtons()
                        events.optionButtons()
                        validation.googleMap()
                    }
                }
            }
        }

        let initialize = function() {
            validation.shippingStep()
        }

        return {
            init : initialize
        }
    })()

    global.init()
})