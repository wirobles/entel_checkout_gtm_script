
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

window.addEventListener("popstate", function() {
    if (/profile/i.test(window.location.href)) {
        // setting disable to button
        myStartloopArray1()
    }
})

document.querySelector('.box-client-info-pj .links').addEventListener('click', function(event) {
    if ((document.querySelectorAll("#is-corporate-client")[0].style.display === "none") === true ) {
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