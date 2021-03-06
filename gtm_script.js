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

/* -------------------------------------- */
/* -------------------------------------- */
/* ---------- RECOJO EN TIENDA ---------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

/*let intervalVar,
    stringPickupInStore = '<div class="pickup-in-store-title">O también puedes recoger en tienda</div>'
    + '<p class="pickup-in-store">'
        + '<span class="pickup-in-store__check"></span>'
        + '<img class="icon-store" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-store.png" alt="Recojo en tienda - Entel" />'
        + '<span class="pickup-in-store__title"><b>Recojo en tienda Jockey Plaza GRATIS</b></span>'
        + '<span class="pickup-in-store__schedule"><b>Atención:</b><br>Lunes - Domingo : 10:00am a 10:00pm</span>'
        + '<br>(Tienes 2 días hábiles para recoger tu pedido)'
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
                    $('body').find('#ship-reference').val($('body').find('#ship-reference').val().replace('Retiro en Tienda Jockey - ',''))                    
                    $('body').find('#ship-reference').removeAttr('disabled')
                    $('body').find('.ship-reference.input.text').css('opacity','')
                    $('body').find('.address-shipping-options').css({'opacity':'','position':'','z-index':''})
                // pickup in store on
                } else {
                    $('body').find('#ship-reference').val('Retiro en Tienda Jockey - ' + $('body').find('#ship-reference').val())                    
                    $('body').find('#ship-reference').attr('disabled','disabled')
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

load_pickap_in_store()*/

/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- */
/* -------------------------------------- */
/* -------- CAMPAÑA PAGOEFECTIVO -------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

let closePromo,
    openPromo,
    htmlCampaignString = '<div class="e-promo-section"> <a href="javascript:void(0)" class="e-promo-section__open-button"><img src="https://www.entel.pe/wp-content/uploads/2019/11/top-arrow.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/top-arrow.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/top-arrow@2x.png 2x" alt="abrir"></a><div class="e-promo-section__closed-content"><h5>Promoción de infarto <br> Obtén S/50 de dscto.</h5><p>pagando con PagoEfectivo</p> <img src="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-close.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-close.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-close@2x.png 2x"></div><div class="e-promo-section__openned-content"><h5>Promoción de infarto</h5><p>pagando con PagoEfectivo</p> <img src="https://www.entel.pe/wp-content/uploads/2019/11/pagoefectivo-descuento.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/pagoefectivo-descuento.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/pagoefectivo-descuento@2x.png 2x"><div class="e-promo-section__openned-content__steps"><p>Obtén el descuento en <strong>3 sencillos pasos</strong>:</p><ul><li class="step-one"><i>1</i> <span>Llena tus datos de identificación</span></li><li class="step-two"><i>2</i> <span>Ingresa la dirección de entrega</span></li><li class="step-three"><i>3</i> <span>Selecciona <strong>PagoEfectivo </strong></span></li></ul><div class="e-promo-section__openned-content__steps__disclaimer"> <img src="https://www.entel.pe/wp-content/uploads/2019/11/admiration-icon.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/admiration-icon.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/admiration-icon@2x.png 2x"><p>Recuerda que el descuento se verá reflejado al momento de <strong>seleccionar PagoEfectivo</strong></p></div></div><a href="javscript:void(0)" class="e-promo-section__openned-content__legals-link open-legal-popup">Ver condiciones <img src="https://www.entel.pe/wp-content/uploads/2019/11/right-icon.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/right-icon.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/right-icon@2x.png 2x"></a></div></div><div class="e-promo-overlay"></div><div class="e-promo-legales-popup"> <a href="javascript:void(0)" class="e-promo-legales-popup__close-button"> <img src="https://www.entel.pe/wp-content/uploads/2019/11/close-icon.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/close-icon.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/close-icon@2x.png 2x"> </a><div class="e-promo-legales-popup__content"><h5>Condiciones generales</h5> <img src="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-legals.png" srcset="https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-legals.png 1x, https://www.entel.pe/wp-content/uploads/2019/11/pago-efectivo-legals@2x.png 2x"><p>Válido para portabilidad en modalidad Pago único (Postpago a Postpago) de personas naturales y RUC 10, contratando un plan postpago de la plancha comercial vigente. Equipo sujeto a evaluación crediticia y con acuerdo de venta de equipo en cuotas a 18 meses. Disponible exclusivamente en Tienda ENTEL.PE del 04/11/19 al 06/11/19 y/o hasta agotar stock mínimo: 50 unidades. Entrega de equipos vía delivery solo en algunas zonas de Lima Metropolitana, sujeto a cobertura. Una promoción por cliente.</p></div></div>'

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
