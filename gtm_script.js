/* -------------------------------------- */
/* -------------------------------------- */
/* --------------- HOTJAR --------------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/
/*let removePoll = function () {
    $('#_hj_poll_container').parent().remove()
}

let addEventExitIntent = function () {
    // adding event listener
    window.onbeforeunload = function () {
        // load trigger hotjar to show poll
        hj('trigger', 'windows_closing')
        event.preventDefault()
        event.returnValue = 'No te vayas :( ¿Debemos mejorar algo?'
        return true
    }
}

let removeEventExitIntent = function () {
    // removing event listener
    window.onbeforeunload = false
}

// Searching poll's container to remove
let setIntervalPoll = setInterval(function () {
    if (document.querySelectorAll('#_hj_poll_container').length) {
        clearInterval(setIntervalPoll)
    } else {
        removePoll()
    }
}, 1000)

// load event listener
addEventExitIntent()

// add event listener click
window.addEventListener('click', function(e) {
    var id = e.target.id

    // if click id is payment button
    if (id === 'payment-data-submit') {
        removeEventExitIntent()
        removePoll()
    } else {
        addEventExitIntent()
    }
})*/

/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- */
/* -------------------------------------- */
/* ------------ STEP PROFILE ------------ */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/
var array_1 = ['client-email', 'client-first-name', 'client-appat', 'client-apmat', 'client-document', 'client-phone']
var array_2 = ['client-company-name', 'client-company-document']

var loopArray1
var loopArray2

function myStartloopArray1() {
    loopArray1 = setInterval(function(){
        validateIpunts(array_1)
    }, 500)
}

function myStartloopArray2() {
    loopArray2 = setInterval(function(){
        validateIpunts(array_1.concat(array_2))
    }, 500)
}

window.addEventListener('popstate', function() {
    if (/profile/i.test(window.location.href)) {
        // setting disable to button
        myStartloopArray1()
    }
})

document.querySelector('.box-client-info-pj .links').addEventListener('click', function(event) {
    if ((document.querySelectorAll('#is-corporate-client')[0].style.display === 'none') === true ) {
        //
        clearInterval(loopArray1)
        myStartloopArray2()
    } else {
        // 
        //validateIpunts(array_1)
        clearInterval(loopArray2)
        myStartloopArray1()

        for (var i = 0; i < array_2.length; i++ ) {
            document.querySelector('#' + array_2[i]).value = ''
            document.querySelector('#' + array_2[i]).classList.remove('success')
        }
    }
})

// Validate inputs
function validateIpunts (array) {
    if (validateInputsClass(array)) {
        document.getElementById('go-to-shipping').disabled = false
    } else {
        document.getElementById('go-to-shipping').disabled = true
    }
}

// function to validate inputs class
function validateInputsClass (array) {
    var flag = true
    if (true) {
        for (var i = 0; i < array.length; i++) {
            var className = document.querySelector('#' + array[i]).getAttribute('class')
            if (className.indexOf('success') < 0) {
                flag = false
            }
        }
    }

    return flag
}
/*--------------------------------------------------------------------------------------------------------------------*/

/* --------------------------------------- */
/* --------------------------------------- */
/* ------------ STEP SHIPPING ------------ */
/* --------------------------------------- */
/* --------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/
// event to measure pop-up impressions 'outside the delivery zone'
var interval_fuera_zona_delivery = setInterval(function() {
    var modal_error_zona_delivery = document.querySelectorAll('.unavailable-message-modal')
    if (modal_error_zona_delivery.length) {
        if (modal_error_zona_delivery[0].style.display != 'none') {
            clearInterval(interval_fuera_zona_delivery)

            var inputState = document.querySelectorAll('input[name=state][type=hidden]'),
                inputCity = document.querySelectorAll('input[name=city][type=hidden]'),
                inputNeighborhood = document.querySelectorAll('input[name=neighborhood][type=hidden]'),
                inputStreet = document.querySelectorAll('input[name=street][type=hidden]'),
                direccionState = inputState.length ? inputState[0].value : '',
                direccionCity = inputCity.length ? inputCity[0].value : '',
                direccionNeighborhood = inputNeighborhood.length ? inputNeighborhood[0].value : '',
                direccionStreet = inputStreet.length ? inputStreet[0].value : '',
                direccionFinal = direccionState + ' - ' + direccionCity + ' - ' + direccionNeighborhood + ' - ' + direccionStreet,        
                dataLayer = window.dataLayer || []

            dataLayer.push({
                'event': 'fuera_zona_delivery',
                'direccion': direccionFinal
            })
      }
    }
}, 500)
/*--------------------------------------------------------------------------------------------------------------------*/
// add steps popup html
window.addEventListener('popstate', function() {
    if (/shipping/i.test(window.location.href)) {
        setTimeout(function(){
            var _body = document.querySelector('body'),
                container = document.createElement('div'),
                overlay = document.createElement('div'),
                h5 = document.createElement('h5'),
                ul = document.createElement('ul'),
                li1 = document.createElement('li'),
                li2 = document.createElement('li'),
                li3 = document.createElement('li'),
                picture = document.createElement('picture'),
                source1 = document.createElement('source'),
                source2 = document.createElement('source'),
                img = document.createElement('img'),
                a = document.createElement('a')

            container.setAttribute('class','step-popup')
            overlay.setAttribute('class','popup-overlay')
            _body.appendChild(container)
            _body.appendChild(overlay)
            container.appendChild(h5)
            container.appendChild(ul)    
            ul.appendChild(li1)
            ul.appendChild(li2)
            ul.appendChild(li3)
            container.appendChild(picture)
            picture.appendChild(source1)
            picture.appendChild(source2)
            picture.appendChild(img)
            container.appendChild(a)
            h5.appendChild(document.createTextNode('Para poder ubicar tu dirección, sigue estos pasos:'))
            li1.appendChild(document.createTextNode('Ingresa solo el nombre de la calle, avenida o jirón.'))
            li2.appendChild(document.createTextNode('Recuerda en agregar tu número y distrito.'))
            li3.appendChild(document.createTextNode('Finalmente, ubica y selecciona tu dirección en la lista.'))
            source1.setAttribute('media','(min-width: 650px)')
            source1.setAttribute('srcset','/arquivos/step-popup-img-desktop.jpg')
            source2.setAttribute('media','(min-width: 465px)')
            source2.setAttribute('srcset','/arquivos/step-popup-img-desktop.jpg')
            img.setAttribute('src','/arquivos/step-popup-img.jpg')
            a.setAttribute('href','javascript:void(0)')
            a.appendChild(document.createTextNode('Entendido'))

            // elements to click to open steps popup
            build_Step_Open_Pop_Up_Button ()
        }, 500)
    }    
})

function build_Step_Open_Pop_Up_Button () {
    // remove this element if it exists
    if(document.querySelector('#gtm-label-shipping p')){
        document.querySelector('#gtm-label-shipping p').remove()
    }

    var content_click_to_open_popup = document.querySelectorAll("#gtm-label-shipping")[0],
        content_click_to_open_popup_p = document.createElement('p'),
        content_click_to_open_popup_p_a = document.createElement('a')

    content_click_to_open_popup.appendChild(content_click_to_open_popup_p)
    content_click_to_open_popup_p.setAttribute('class','btn-dir-here')
    content_click_to_open_popup_p.appendChild(document.createTextNode('Si no encuentras tu dirección, ingresa '))
    content_click_to_open_popup_p.appendChild(content_click_to_open_popup_p_a)
    content_click_to_open_popup_p_a.setAttribute('href','javascript:void(0)')
    content_click_to_open_popup_p_a.appendChild(document.createTextNode('aquí'))

    // events to open steps popup
    document.querySelector('.btn-dir-here a').addEventListener("click", function() {
        document.querySelector('.step-popup').classList.add("active")
        document.querySelector('.popup-overlay').classList.add("active")
    })

    document.querySelector('.step-popup a').addEventListener("click", function() {
        document.querySelector('.step-popup').classList.remove("active")
        document.querySelector('.popup-overlay').classList.remove("active")
    })

    document.querySelector('.popup-overlay').addEventListener("click", function() {
        document.querySelector('.step-popup').classList.remove("active")
        document.querySelector('.popup-overlay').classList.remove("active")
    })
}
/*--------------------------------------------------------------------------------------------------------------------*/

/* verificar modal error pago tarjeta */
var interval_modalerrorpago = setInterval(function() {
    if (document.querySelectorAll(".payment-unauthorized-modal").length) {
        if (document.querySelectorAll(".payment-unauthorized-modal")[0].style.display == "block") {
            clearInterval(interval_modalerrorpago)
            var dataLayer = window.dataLayer || []
            dataLayer.push({
                'event': 'event.modalErrorPago',
                'eventLabel': document.querySelectorAll(".payment-unauthorized-message3 small")[0].textContent
            })
        }
    }
}, 100)

/*--------------------------------------------------------------------------------------------------------------------*/

/* ------------------------------------------------------- */
/* ------------------------------------------------------- */
/* ---------- RECOJO EN TIENDA SOLO PARA IPHONE ---------- */
/* ------------------------------------------------------- */
/* ------------------------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

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
                idsBuyBack = [6177,31932,31933,31939,31947,31956,32003,31901,31903,32639,32640,32643,32663,31797,31798,31801,31802,31804,31806]

            // validating
            if (productID && idsBuyBack.includes(parseInt(productID))) {
                // load 
                validation.shippingStep()
            } else {
                console.log('Invocando a Willy')
            }
        })
    }
}

initialize()

/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- */
/* -------------------------------------- */
/* ---------- CAMPAÑA INTERBANK---------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

/*let htmlCampaignString = '<div class="entel-checkout-campaign-container"> <div class="entel-checkout-campaign"> <div class="entel-checkout-campaign__open-close"> <span class="text">Ver más</span> <span class="arrow"></span> </div> <div class="entel-checkout-campaign__title"> <h3> <span>Obtén hasta</span> <span class="desc">40<span><div class="symbol">%</div><div class="type-desc">dscto.</div></span></span> <span>en tus equipos<br>al pagar con tu tarjeta crédito y<br>débito Interbank.</span> </h3> </div> <div class="entel-checkout-campaign__content">Llévatelo en 3 sencillos pasos:</div> <ul class="entel-checkout-campaign__steps"> <li>Llena tus datos de identificación</li> <li>Ingresa la dirección de entrega</li> <li>Ingresa TUS DATOS DE PAGO</li> </ul> <div class="entel-checkout-campaign__minimessage">Recuerda que el descuento se verá<br>reflejado al momento de <span>ingresar los<br>datos de tu tarjeta Interbank</span> </div> <img class="entel-checkout-campaign__main-img" src="https://enteltest.vteximg.com.br/arquivos/image-bar-interbank-v2.png" alt="Obtén hasta 40% de dscto con Interbank"> </div> </div>'

$('body').append(htmlCampaignString)

$('body').find('.entel-checkout-campaign .entel-checkout-campaign__title').hide()
$('body').find('.entel-checkout-campaign .entel-checkout-campaign__content').hide()
$('body').find('.entel-checkout-campaign .entel-checkout-campaign__steps').hide()

$('.entel-checkout-campaign-container').height(98)

$('body').find('.entel-checkout-campaign .entel-checkout-campaign__open-close').click(function() {
    if ($(this).hasClass('active')) {
        // button to open
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__open-close .text').html('Ver más')
        // hidding blocks
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__title').hide()
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__content').hide()
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__steps').hide()
        // setting hight
        $('.entel-checkout-campaign-container').height(98)
    } else {
        // button  to close
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__open-close .text').html('Ocultar')
        // showing blocks
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__title').show()
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__content').show()
        $('body').find('.entel-checkout-campaign .entel-checkout-campaign__steps').show()
        // setting hight
        $('.entel-checkout-campaign-container').height(310)
    }
    $(this).toggleClass('active')
})*/