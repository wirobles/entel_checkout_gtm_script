
/*var array_1 = ['client-email', 'client-first-name', 'client-appat', 'client-apmat', 'client-document', 'client-phone'],
array_2 = ['client-company-name', 'client-company-document']

// setting disable to button
document.getElementById('go-to-shipping').disabled = true

// create event to principal fields
for (var i = 0; i < array_1.length; i++ ) {
document.querySelector('#' + array_1[i]).addEventListener('blur', function(event) {
    // 
    validateIpunts(array_1)
}, true)
}

// create event to billing fields
for (var i = 0; i < array_2.length; i++ ) {
document.querySelector('#' + array_2[i]).addEventListener('blur', function(event) {
    // 
    validateIpunts(array_1.concat(array_2))
}, true)
}

// create event to checkbox
document.querySelector('.box-client-info-pj .links').addEventListener('click', function(event) {
if ((document.querySelectorAll("#is-corporate-client")[0].style.display === "none") === true ) {
    // 
    validateIpunts(array_1.concat(array_2))
} else {
    // 
    validateIpunts(array_1)
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
}*/