//---
let intervalVar,
    flagDelivery = false    

//---
intervalVar = setInterval(function () {
    if (window.location.href.indexOf('shipping') > -1 && flagDelivery === false && $('#map-canvas').length > 0 && $('body').find('.address-shipping-options .shipping-options .pull-left').length > 0) {

        //console.log('entró')
        $('body').find('.address-shipping-options .shipping-options .pull-left').after('<div>HOla</div>')
        
        flagDelivery = true
        clearInterval(intervalVar)
    }
}, 100)