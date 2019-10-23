/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- */
/* -------------------------------------- */
/* -------- ENTREGA A DOMICILIO --------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

let flagDelivery = false

setInterval(function() {
    if (window.location.href.indexOf('shipping') > -1 && flagDelivery === false && $('#gtm-label-shipping')) {
        let stringHtmlDom = '<div class="delivery-type-container">'
            + '<div class="text">Elige el tipo de entrega</div>'
            + '<div id="delivery-domicile" class="delivery-button active">'
                + '<span class="big-radio"></span>'
                + '<img width="30" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-home.png"/>'
                + '<span class="text">Envío a<br>domicilio</span>'
            + '</div>'
            + '<div id="delivery-store" class="delivery-button">'
                + '<span class="big-radio"></span>'
                + '<img width="30" src="https://enteltest.vteximg.com.br/arquivos/icon-pick-up-in-store.png"/>'
                + '<span class="text">Recojo en<br>tienda GRATIS</span>'
            + '</div>'
        + '</div>'

        let stringHtmlSelectDom = '<div class="delivery-type-selector">'
            + '<div class="text">Recoge este producto en la tienda más cercana</div>'
            + '<div class="delivery-label">Distrito</div>'
            + '<div class="selector">'
                + '<div>LIMA</div>'
                + '<ul>'
                    + '<li data-distrito="ate">ATE</li>'
                    + '<li data-distrito="bellavista">BELLAVISTA</li>'
                    + '<li data-distrito="brena">BREÑA</li>'
                    + '<li data-distrito="callao">CALLAO</li>'
                    + '<li data-distrito="cercado">CERCADO</li>'
                    + '<li data-distrito="chorrillos">CHORRILLOS</li>'
                    + '<li data-distrito="comas">COMAS</li>'
                    + '<li data-distrito="independencia">INDEPENDENCIA</li>'
                    + '<li data-distrito="jesus-maria">JESUS MARIA</li>'
                    + '<li data-distrito="la-victoria">LA VICTORIA</li>'
                    + '<li data-distrito="lima" class="active">LIMA</li>'
                    + '<li data-distrito="lurin">LURIN</li>'
                    + '<li data-distrito="miraflores">MIRAFLORES</li>'
                    + '<li data-distrito="puente-piedra">PUENTE PIEDRA</li>'
                    + '<li data-distrito="san-borja">SAN BORJA</li>'
                    + '<li data-distrito="san-isidro">SAN ISIDRO</li>'
                    + '<li data-distrito="san-juan-de-lurigancho">SAN JUAN DE LURIGANCHO</li>'
                    + '<li data-distrito="san-juan-de-miraflores">SAN JUAN DE MIRAFLORES</li>'
                    + '<li data-distrito="san-miguel">SAN MIGUEL</li>'
                    + '<li data-distrito="santa-anita">SANTA ANITA</li>'
                    + '<li data-distrito="santa-clara">SANTA CLARA</li>'
                    + '<li data-distrito="santiago-de-surco">SANTIAGO DE SURCO</li>'
                    + '<li data-distrito="surquillo">SURQUILLO</li>'
                    + '<li data-distrito="ventanilla">VENTANILLA</li>'
                    + '<li data-distrito="villa-el-salvador">VILLA EL SALVADOR</li>'
                    + '<li data-distrito="vtm">VMT</li>'
                + '</ul>'
            + '</div>'
            + '<div class="delivery-label">Elige tu tienda más cercana</div>'
            + '<div class="delivery-type-option">'
                + '<ul>'
                    + '<li class="active">'
                        + '<div class="delivery-bold">Entel Santa Clara</div>'
                        + '<div class="delivery-text">Carretera central 7887 Ate, Lima, Lima - Perú</div>'
                        + '<div class="delivery-bold">Carretera central 7887 Ate, Lima, Lima - Perú</div>'
                        + '<span class="delivery-choose">Recojo aquí</span>'
                    + '</li>'
                    + '<li>'
                        + '<div class="delivery-bold">Entel Santa Clara</div>'
                        + '<div class="delivery-text">Carretera central 7887 Ate, Lima, Lima - Perú</div>'
                        + '<div class="delivery-bold">Carretera central 7887 Ate, Lima, Lima - Perú</div>'
                        + '<span class="delivery-choose">Recojo aquí</span>'
                    + '</li>'
                + '</ul>'
            + '</div>'
        + '</div>'

        $('body').find('#gtm-label-shipping').before(stringHtmlDom)
        $('body').find('#gtm-label-shipping').before(stringHtmlSelectDom)
        $('body').find('.delivery-type-selector').hide()


        // events
        $('body').find('.delivery-button').click(function() {
            $('body').find('.delivery-button').removeClass('active')
            $(this).addClass('active')

            if ($(this).attr('id') === 'delivery-store') {
                $('body').find('#gtm-label-shipping').hide()
                $('body').find('#shipping-data .accordion-inner').hide()
                $('body').find('.delivery-type-selector').show()

            } else if ($(this).attr('id') === 'delivery-domicile') {
                $('body').find('#gtm-label-shipping').show()
                $('body').find('#shipping-data .accordion-inner').show()
                $('body').find('.delivery-type-selector').hide()
            }
        })

        $('body').find('.selector').click(function() {
            $('body').find('.selector').toggleClass('active')
        })

        $('body').find('.selector ul li').click(function() {
            $('body').find('.selector ul li').removeClass('active')
            $(this).addClass('active')
            $('body').find('.selector > div').html($(this).text())
        })

        $('body').find('.delivery-type-option ul li').click(function() {
            $('body').find('.delivery-type-option ul li').removeClass('active')
            $(this).addClass('active')
        })

        flagDelivery = true
    }
}, 100)