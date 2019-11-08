$(document).ready(function ($) {

    let global = (function() {
        
        let html = {
            insertButtons : function() {
                let stringDeliveryMode = '<div class="delivery-mode-title">Recuerda que la entrega del equipo se realizará el día 15 de noviembre en la tienda Av. Larco 497 - Miraflores, Lima a las 00:00 hrs</div>'                
                + '<div id="delivery-store" class="delivery-button">'
                    + '<span class="big-radio"></span>'
                    + '<img width="30" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-store.png"/>'
                    + '<span class="text">Recojo en<br>tienda GRATIS</span>'
                + '</div>'

                $('body').find('#shipping-data .accordion-inner').before(stringDeliveryMode)
            },
            removeButtons : function() {
                $('body').find('.delivery-mode-title').remove()
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
                $('#ship-address-search').attr('disabled','disabled')
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
            clickButton : function() {
                $('body').find('#delivery-store').click(function() {

                    if($(this).hasClass('active') === true ) {
                        $('.delivery-mode-label').removeClass('active')
                        $('#ship-address-search').attr('disabled','disabled')
                    } else {
                        $('.delivery-mode-label').addClass('active')
                        $('#ship-address-search').removeAttr('disabled')
                    }

                    $(this).toggleClass('active')
                })
            },
            searchOtherAddress : function() {
                $('body').find('.search-another-address-btn').click(function() {                    
                    setTimeout(function(){
                        html.removeButtons()
                        html.insertButtons()
                        events.clickButton()
                        html.setSelectStyle()
                        html.insertSelectElements()
                        validation.googleMap()
                    }, 500)
                })
            },
            editAddress : function() {
                $('body').find('#edit-shipping-data').click(function() {
                    html.removeButtons()
                    html.setExtraInfoValues()
                    html.insertMapFrame()
                    events.searchOtherAddress()
                    setTimeout(function() {
                        $('.shipping-option-item-name').html('Recojo en tienda')
                        $('.shipping-option-item-value').html(' - 5 de noviembre')
                        $('.shipping-option-item-sep').remove()
                        $('.shipping-option-item-time.delivery-estimate').remove()
                    }, 500)
                })
            }
        }

        let validation = {
            googleMap : function() {
                let intervalDetectGoogleMaps

                intervalDetectGoogleMaps = setInterval(function() {
                    if ($('#map-canvas').length) {
                        //
                        html.removeButtons()
                        html.setExtraInfoValues()
                        html.insertMapFrame()
                        events.searchOtherAddress()
                        setTimeout(function() {
                            $('.shipping-option-item-name').html('Recojo en tienda')
                            $('.shipping-option-item-value').html(' - 5 de noviembre')
                            $('.shipping-option-item-sep').remove()
                            $('.shipping-option-item-time.delivery-estimate').remove()                            
                        }, 500)
                        setInterval(function() {
                            $('.description .shipping-date.pull-left').remove()
                        }, 100)
                        clearInterval(intervalDetectGoogleMaps)                        
                    }
                }, 100)
            },
            shippingStep : function() {
                window.onpopstate = function(event) {
                    if (/shipping/i.test(document.location.href)) {
                        html.insertButtons()
                        events.clickButton()
                        setTimeout(function(){
                            html.setSelectStyle()
                            html.insertSelectElements()
                        }, 500)
                        validation.googleMap()
                    } else if (/payment/i.test(document.location.href)) {
                        setInterval(function() {
                            $('.description .shipping-date.pull-left').remove()
                        }, 100)
                        events.editAddress()
                    }
                }
            }
        }

        let initialize = function() {
            if (!(typeof vtexjs === 'undefined' || vtexjs === null)) {
                vtexjs.checkout.getOrderForm()
                .done(function(orderForm) {
                    // vars
                    var productID = orderForm.items[0].productId,
                        idsBuyBack = [31932, 31933, 31939, 31947, 31956, 32003, 31901, 31903, 32639, 32640, 32643, 32663, 31797, 31798, 31801, 31802, 31804, 31806]

                    // validating
                    if (productID && idsBuyBack.includes(parseInt(productID))) {
                        // load 
                        validation.shippingStep()
                    }
                })
            }
        }

        return {
            init : initialize
        }
    })()

    global.init()
})