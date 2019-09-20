/* -------------------------------------- */
/* -------------------------------------- */
/* --------------- HOTJAR --------------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/
if (/checkout/.test(window.location.pathname)){
    document.querySelectorAll('body')[0].click()

    window.onbeforeunload = function(e) {
        hj('trigger', 'windows_closing')
        return 'Seguro que desea salir'
    }
}
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