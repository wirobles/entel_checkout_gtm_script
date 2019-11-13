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
        //$('body').find('#shipping-data #ship-more-info').val('recojo en tienda recojo'.repeat(30))
        //$('body').find('#shipping-data #ship-reference').val('Recojo en tienda - TP LARCO')
        $('body').find('#shipping-data .ship-more-info').css({'opacity':'0','position':'absolute','z-index':'-1'})
        $('body').find('#shipping-data .ship-reference').css({'opacity':'0','position':'absolute','z-index':'-1'})
    },
    unSetExtraInfoValues : function() {
        //$('body').find('#shipping-data #ship-more-info').val('')
        //$('body').find('#shipping-data #ship-reference').val('')
        $('body').find('#shipping-data .ship-more-info').css({'opacity':'','position':'','z-index':''})
        $('body').find('#shipping-data .ship-reference').css({'opacity':'','position':'','z-index':''})
    },
    updatePostalCode : function() {
        vtexjs.checkout.getOrderForm()
        .then(function(orderForm) {
            var clientProfileData = orderForm.clientProfileData;
            clientProfileData.documentType = 'Recojo en tienda DNI';
            return vtexjs.checkout.sendAttachment('clientProfileData', clientProfileData)
        }).done(function(orderForm) {
            //alert("Nome alterado!");
            //console.log(orderForm.clientProfileData);
        })
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
                html.updatePostalCode()
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
                idsBuyBack = [31932,31933,31939,31947,31956,32003,31901,31903,32639,32640,32643,32663,31797,31798,31801,31802,31804,31806,31564,31588,31621,31627,31684,31692]

            // validating
            if (productID && idsBuyBack.includes(parseInt(productID))) {
                // load 
                validation.shippingStep()
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

/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- */
/* -------------------------------------- */
/* -------- CAMPAÑA PAGOEFECTIVO -------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

let closePromo,
    openPromo,
    htmlCampaignString = '<div class="e-promo-section"> <a href="javascript:void(0)" class="e-promo-section__open-button"><img src="https://www.entel.pe/wp-content/uploads/2019/11/top-arrow.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/top-arrow.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/top-arrow@2x.png 2x" alt="abrir"></a><div class="e-promo-section__closed-content"><h5>Promoción de infarto <br> Obtén S/50 de dscto.</h5><p>pagando con PagoEfectivo</p> <img src="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-close.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-close.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-close@2x.png 2x"></div><div class="e-promo-section__openned-content"><h5>Promoción de infarto</h5><p>pagando con PagoEfectivo</p> <img src="https://www.entel.pe/wp-content/uploads/2019/11/pagoefectivo-descuento.png?ver=123" srcset="https://www.entel.pe/wp-content/uploads/2019/11/pagoefectivo-descuento.png?v=123 1x, https://www.entel.pe/wp-content/uploads/2019/11/pagoefectivo-descuento@2x.png?ver=123 2x"><div class="e-promo-section__openned-content__steps"><p>Obtén el descuento en <strong>3 sencillos pasos</strong>:</p><ul><li class="step-one"><i>1</i> <span>Llena tus datos de identificación</span></li><li class="step-two"><i>2</i> <span>Ingresa la dirección de entrega</span></li><li class="step-three"><i>3</i> <span>Selecciona <strong>PagoEfectivo </strong></span></li></ul><div class="e-promo-section__openned-content__steps__disclaimer"> <img src="https://www.entel.pe/wp-content/uploads/2019/11/admiration-icon.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/admiration-icon.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/admiration-icon@2x.png 2x"><p>Recuerda que el descuento se verá reflejado al momento de <strong>seleccionar PagoEfectivo</strong></p></div></div><a href="javscript:void(0)" class="e-promo-section__openned-content__legals-link open-legal-popup">Ver condiciones <img src="https://www.entel.pe/wp-content/uploads/2019/11/right-icon.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/right-icon.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/right-icon@2x.png 2x"></a></div></div><div class="e-promo-overlay"></div><div class="e-promo-legales-popup"> <a href="javascript:void(0)" class="e-promo-legales-popup__close-button"> <img src="https://www.entel.pe/wp-content/uploads/2019/11/close-icon.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/close-icon.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/close-icon@2x.png 2x"> </a><div class="e-promo-legales-popup__content"><h5>Condiciones generales</h5> <img src="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-legals.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-legals.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-legals@2x.png 2x"><p>Válido para portabilidad en modalidad Pago único (Postpago a Postpago) de personas naturales y RUC 10, contratando un plan postpago de la plancha comercial vigente. Equipo sujeto a evaluación crediticia y con acuerdo de venta de equipo en cuotas a 18 meses. Disponible exclusivamente en Tienda ENTEL.PE del 11/11/19 al 13/11/19 y/o hasta agotar stock mínimo: 50 unidades. Entrega de equipos vía delivery solo en algunas zonas de Lima Metropolitana, sujeto a cobertura. Una promoción por cliente.</p></div></div>'

$('body').append(htmlCampaignString) 

// hearing event
$(document).on('click', function (evt) {
    $(document).trigger('close.promo')
})

// close promo
closePromo = function () {
    $('body').find('.e-promo-section').removeClass('e-promo-section--state--open')
    $('body').find('.e-promo-section__open-button').removeClass('active')

    $(document).unbind('close.promo')
}

// open promo
openPromo = function () {
    $('body').find('.e-promo-section').addClass('e-promo-section--state--open')
    $('body').find('.e-promo-section__open-button').addClass('active')

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
    $('body').find('.e-promo-overlay').addClass('e-promo-overlay--state--open')
    $('body').find('.e-promo-legales-popup').addClass('e-promo-legales-popup--state--open')
})

$('body').find('.e-promo-legales-popup__close-button, .e-promo-overlay').click(function() {
    $('body').find('.e-promo-overlay').removeClass('e-promo-overlay--state--open')
    $('body').find('.e-promo-legales-popup').removeClass('e-promo-legales-popup--state--open')
})

/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------------- */
/* -------------------------------------------- */
/* -------- COMUNICACION ENTREGA AM PM -------- */
/* -------------------------------------------- */
/* -------------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

let htmlStringAmPmOverlay = '<div class="popup-ampm-overlay"></div>',
    htmlStringAmPmButton = '<div class="popup-ampm-info-button"><img src="https://entelperu.vteximg.com.br/arquivos/entel-delivery-color.png" alt="Delivery Entel Perú"><p><span class="title">¡Delivery gratis en tiempo record!</span><span class="sub-title">Compra tu celu hoy y recíbelo en menos de 24 horas</span><span class="orange">Más información <span class="cta"></span></span></p></div>',
    htmlStringAmPmPopup = '<div class="popup-ampm-info-delivery"><div class="popup-ampm-info-delivery__title"><img src="https://entelperu.vteximg.com.br/arquivos/entel-delivery-color.png" alt="Delivery Entel Perú"><span>¡Delivery gratis en tiempo record!</span></div><div class="popup-ampm-info-delivery__subtitle">Compra tu celu hoy y recíbelo <br> en menos de 24 horas</div><div class="popup-ampm-info-delivery__orange">¡Aprovecha! haz tu compra por la mañana y recibirás tu pedido por la tarde</div><div class="popup-ampm-info-delivery__pay-method"><span>Medios de pago con tarjetas de crédito, débito y efectivo</span><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-visa.png" alt="Visa"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-mastercard.png" alt="Master card"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-americanexpress.png" alt="American Express"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-dinners.png" alt="Dinners"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-pagoefectivo.png" alt="Pago efectivo"></div><div class="popup-ampm-info-delivery__text">Condiciones de uso: Para entregas dentro del horario de 3:30pm a 8:00pm del mismo día, la compra y generación de orden debe estar ingresada y confirmada hasta la 1pm. No aplica para distritos de&nbsp;Lurín, Ventanilla, Puente Piedra, Carabayllo, Chosica, Chaclacayo, Ate en Lima. Detalle de cobertura en provincias para ventas por Televentas incluye Trujillo, Trujillo, Victor Larco, Esperanza, Porvenir, Florencia de Mora; en Chiclayo, Chiclayo, La Victoria, Jose Leonardo Ortiz; en Piura, Piura, Castilla, Distrito de 26 de Octubre y Arequipa, Yahahuara, Cercado, Cerro Colorado, Las Flores, Socabaya, Hunter, Jose Luis Bustamante, Mariano Melgar.&nbsp;Los pedidos ingresados desde las 01:0pm en adelante podrán ser programados en los siguientes horarios del día siguiente:&nbsp;8:30am a 12:30pm , 12:30pm a 4:30pm y 4:30 a 8:00pm. Para el siguiente detalle de distritos en provincia aplican horarios específicos de entrega. Piura: Catacaos, La Legua, Simbila, Monte Suyon , solo Martes y Viernes. Piura: Medio Piura, Caserío Miraflores, Río Seco, Los Tejidos, Chapaira – Solo Jueves. Chiclayo: Monsefú – Solo Martes y Viernes. Arequipa: Yahahuara, Cercado, Cerro Colorado, Las Flores, Socabaya, Hunter, Jose Luis Bustamante, Mariano Melgar.</div><span class="popup-ampm-info-delivery__button">Entendido</span><span class="popup-ampm-info-delivery__close"></span></div>'

$('.checkout-container.row-fluid').append(htmlStringAmPmOverlay)
$('.checkout-container.row-fluid').append(htmlStringAmPmButton)
$('.checkout-container.row-fluid').append(htmlStringAmPmPopup)

$('body').find('.popup-ampm-info-button').click(function() {
	$('body').find('.popup-ampm-info-delivery').addClass('active')
	$('body').find('.popup-ampm-overlay').addClass('active')
})

$('body').find('.popup-ampm-info-delivery__close,.popup-ampm-overlay,.popup-ampm-info-delivery__button').click(function() {
	$('body').find('.popup-ampm-info-delivery').removeClass('active')
	$('body').find('.popup-ampm-overlay').removeClass('active')
})