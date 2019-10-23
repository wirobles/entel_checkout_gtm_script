/*--------------------------------------------------------------------------------------------------------------------*/

/* -------------------------------------- */
/* -------------------------------------- */
/* -------- ENTREGA A DOMICILIO --------- */
/* -------------------------------------- */
/* -------------------------------------- */

/*--------------------------------------------------------------------------------------------------------------------*/

let flagDelivery = false,    
    activeClass,
    activeClassFlag,
    htmlStringDelivery,
    jsonStoreDelivery = [
        {
            'location_id': 'miraflores',
            'store_name': 'LARCO',
            'district': 'MIRAFLORES',
            'schedule_mon_fri': '9:30 am a 8:30 pm',
            'schedule_sat': '9:30 am a 8:30 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Larco 497',
            'latitude': '-12.1222615',
            'longitude': '-77.0290764'
        },
        {
            'location_id': 'independencia',
            'store_name': 'MEGA PLAZA (lun-vier)',
            'district': 'INDEPENDENCIA',
            'schedule_mon_fri': '10:00 am a 10:00 pm',
            'schedule_sat': '10:00 am a 10:00 pm',
            'schedule_sun': '10:00 am a 10:00 pm',
            'address': 'CC Megaplaza - Local L-520 - Av. Alfredo Mendiola 3698 y la Av. Industrial 3513-3515-3517-3519',
            'latitude': '-11.9944875',
            'longitude': '-77.062628'
        },
        {
            'location_id': 'miraflores',
            'store_name': 'COMANDANTE ESPINAR',
            'district': 'MIRAFLORES',
            'schedule_mon_fri': '8:30 am a 7:30 pm',
            'schedule_sat': '8:30 am a 2:00 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Comandante Espinar 368, Miraflores.',
            'latitude': '-12.1163302',
            'longitude': '-77.0368873'
        },
        {
            'location_id': 'san-isidro',
            'store_name': 'PLAZA REPUBLICA',
            'district': 'SAN ISIDRO',
            'schedule_mon_fri': '8:30 am a 7:30 pm',
            'schedule_sat': '8:30 am a 2:00 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Paseo de la República 3490',
            'latitude': '-12.098359',
            'longitude': '-77.026173'
        },
        {
            'location_id': 'san-borja',
            'store_name': 'AVIACIÓN',
            'district': 'SAN BORJA',
            'schedule_mon_fri': '8:30 am a 7:30 pm',
            'schedule_sat': '8:30 am a 2:00 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Aviación 2647 San Borja',
            'latitude': '-12.0930643',
            'longitude': '-77.0027836'
        },
        {
            'location_id': 'santa-anita',
            'store_name': 'CENTRO BANCARIO',
            'district': 'SANTA ANITA',
            'schedule_mon_fri': '8:30 am a 6:30 pm',
            'schedule_sat': '8:30 am a 1:00 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Carretera Central 193, Local 15, Piso 2, Santa Anita',
            'latitude': '-12.056381',
            'longitude': '-76.969657'
        },
        {
            'location_id': 'san-juan-de-lurigancho',
            'store_name': 'PROCERES',
            'district': 'SAN JUAN DE LURIGANCHO',
            'schedule_mon_fri': '8:30 am a 7:00 pm',
            'schedule_sat': '8:30 am a 2:00 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Próceres de la Independencia N° 1679 Mz. T LT. 3 Urb. Las Flores de Lima',
            'latitude': '-12.006665',
            'longitude': '-77.006092'
        },
        {
            'location_id': 'san-juan-de-miraflores',
            'store_name': 'SAN JUAN1',
            'district': 'SAN JUAN DE MIRAFLORES',
            'schedule_mon_fri': '8:30 am a 7:00 pm',
            'schedule_sat': '8:30 am a 2:00 pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. San Juan 899, San juan de Miraflores. Cruce con Av. Billinghurst',
            'latitude': '-12.15849',
            'longitude': '-76.97355'
        },
        {
            'location_id': 'san-juan-de-miraflores',
            'store_name': 'OPEN PLAZA ATOCONGO',
            'district': 'SAN JUAN DE MIRAFLORES',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Centro Comercial Open Plaza - Atocongo: Av. Circunvalacion N° 1801 Local 42 B. San Juan de Miraflores',
            'latitude': '-12.1471521',
            'longitude': '-76.9811653'
        },
        {
            'location_id': 'callao',
            'store_name': 'CANTACALLAO',
            'district': 'CALLAO',
            'schedule_mon_fri': '09:00am a 10:00pm',
            'schedule_sat': '09:00am a 10:00pm',
            'schedule_sun': '09:00am a 10:00pm',
            'address': 'TPF CANTACALLAO  CC OPEN PLAZA CANTA CALLAO - LOCAL N-10A ',
            'latitude': '-11.9976783',
            'longitude': '-77.11302'
        },
        {
            'location_id': 'chorrillos',
            'store_name': 'PLAZA LIMA SUR1',
            'district': 'CHORRILLOS',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'CC Plaza Lima Sur: Prol. Paseo de la República s/n, Local LI-201 - Chorrillos',
            'latitude': '-12.172497',
            'longitude': '-77.01332'
        },
        {
            'location_id': 'santiago-de-surco',
            'store_name': 'HIGUERETA OVALO',
            'district': 'SANTIAGO DE SURCO',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 8:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Aviación  # 5187 y 5191 - Santiago de Surco',
            'latitude': '-12.1283636',
            'longitude': '-77.0005804'
        },
        {
            'location_id': 'san-juan-de-miraflores',
            'store_name': 'MALL DEL SUR',
            'district': 'SAN JUAN DE MIRAFLORES',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'AV. Pedro Miotta San Juan de Miraflores 15842, Mall del Sur San Juan de Miraflores',
            'latitude': '-12.1559803',
            'longitude': '-76.9818287'
        },
        {
            'location_id': 'vtm',
            'store_name': 'REAL PLAZA VILLA MARIA',
            'district': 'VMT',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'CC Real Plaza Villa Maria Triunfo LC-104.Av. Pachacutec No. 3721 - 3781, Nueva Esperanza',
            'latitude': '-12.1805243',
            'longitude': '-76.9425109'
        },
        {
            'location_id': 'san-juan-de-miraflores',
            'store_name': 'SAN JUAN2',
            'district': 'SAN JUAN DE MIRAFLORES',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 8:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av san juan 1143 san juan de miraflores ',
            'latitude': '-12.1553812',
            'longitude': '-76.972288'
        },
        {
            'location_id': 'surquillo',
            'store_name': 'OPEN PLAZA ANGAMOS',
            'district': 'SURQUILLO',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av. Angamos Este N° 2681 Interior N° LC 25-26A Surquillo',
            'latitude': '-12.11158',
            'longitude': '-77.01186'
        },
        {
            'location_id': 'independencia',
            'store_name': 'PLAZA NORTE',
            'district': 'INDEPENDENCIA',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': ' Av. Alfredo Mendiola 1400 - Locales Int. 340-362',
            'latitude': '-12.006475',
            'longitude': '-77.058012'
        },
        {
            'location_id': 'san-miguel',
            'store_name': 'PLAZA SAN MIGUEL',
            'district': 'SAN MIGUEL',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av la marina N° 2000 local T321-322',
            'latitude': '-12.0769482',
            'longitude': '-77.0828036'
        },
        {
            'location_id': 'ate',
            'store_name': 'NICOLAS AYLLON',
            'district': 'ATE',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 8:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Nicolás Ayllón 5580 Int 4 - Urb. Valdiviezo - Ate - Lima',
            'latitude': '-12.029156',
            'longitude': '-76.923932'
        },
        {
            'location_id': 'cercado',
            'store_name': 'REAL PLAZA CERCADO',
            'district': 'CERCADO',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 8:00pm',
            'schedule_sun': '10:00am a 8:00pm',
            'address': 'Av. Paseo de la República 144, Tienda 6 - Cercado De Lima - Lima',
            'latitude': '-12.056399',
            'longitude': '-77.036915'
        },
        {
            'location_id': 'comas',
            'store_name': 'BELAUNDE',
            'district': 'COMAS',
            'schedule_mon_fri': '9:00am a 7:00pm',
            'schedule_sat': '9:00am a 7:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Andres Belaunde Oeste Nro 265 - Comas - Lima',
            'latitude': '-11.93939',
            'longitude': '-77.05167'
        },
        {
            'location_id': 'santa-anita',
            'store_name': 'MAP SANTA ANITA ',
            'district': 'SANTA ANITA',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av. Carretera Central Nro 111 - Local LF-9 - Santa Anita - Lima',
            'latitude': '-12.0567044',
            'longitude': '-76.9705994'
        },
        {
            'location_id': 'san-juan-de-lurigancho',
            'store_name': 'CHIMU',
            'district': 'SAN JUAN DE LURIGANCHO',
            'schedule_mon_fri': '9:00am a 7:00pm',
            'schedule_sat': '9:00am a 7:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av Gran Chimu 513 - Urb. Zarate - San Juan de Lurigancho',
            'latitude': '-12.0270681',
            'longitude': '-77.0053389'
        },
        {
            'location_id': 'santa-clara',
            'store_name': 'SANTA CLARA',
            'district': 'SANTA CLARA',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av. Nicolás Ayllón Nro. 8694 Fnd. La Estrella (Carretera Central km.10.5) - Ate - Lima',
            'latitude': '-12.015278',
            'longitude': '-76.885518'
        },
        {
            'location_id': 'santiago-de-surco',
            'store_name': 'TPF JOCKEY PLAZA',
            'district': 'SANTIAGO DE SURCO',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av Javier Prado Este 4200 CC Jockey Plaza Locatario 208 A1',
            'latitude': '-12.0858307',
            'longitude': '-76.9773227'
        },
        {
            'location_id': 'callao',
            'store_name': 'MINKA',
            'district': 'CALLAO',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 8:00pm',
            'schedule_sun': '10:00am a 8:00pm',
            'address': 'CC Minka - Local 105-106-107 - Av. Argentina 3093 - Avenida 3 Pabellon 9 (Minka 3)',
            'latitude': '-12.048861',
            'longitude': '-77.111075'
        },
        {
            'location_id': 'bellavista',
            'store_name': 'MAP BELLAVISTA',
            'district': 'BELLAVISTA',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av. Oscar R. Benavides 3866 interior  LF-05 Bellavista - Lima',
            'latitude': '-12.0554683',
            'longitude': '-77.1021704'
        },
        {
            'location_id': 'lima',
            'store_name': 'JR DE LA UNION 2',
            'district': 'LIMA',
            'schedule_mon_fri': '10:00am a 8:00pm',
            'schedule_sat': '10:00am a 8:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Jr de la union 465 cercado de lima',
            'latitude': '-12.04683',
            'longitude': '-77.031803'
        },
        {
            'location_id': 'la-victoria',
            'store_name': 'MANCO CAPAC',
            'district': 'LA VICTORIA',
            'schedule_mon_fri': '8:30am a 6:30pm',
            'schedule_sat': '8:30am a 1:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av. Manco Capac 680 tienda 103 - La Victoria',
            'latitude': '-12.0667298',
            'longitude': '-77.028939'
        },
        {
            'location_id': 'puente-piedra',
            'store_name': 'LECAROS',
            'district': 'PUENTE PIEDRA',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 8:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Av, Juan Lecaros Mza. 6 Lt. 12 Del Casco Urbano',
            'latitude': '-11.8597762',
            'longitude': '-77.0703465'
        },
        {
            'location_id': 'jesus-maria',
            'store_name': 'REAL PLAZA SALAVERRY',
            'district': 'JESUS MARIA',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'Av. General Felipe Santiago Salaverry Nro. 2370 Lima - Lima - Jesús María',
            'latitude': '-12.089662',
            'longitude': '-77.052561'
        },
        {
            'location_id': 'brena',
            'store_name': 'LA RAMBLA',
            'district': 'BREÑA',
            'schedule_mon_fri': '10:00am a 10:00pm',
            'schedule_sat': '10:00am a 10:00pm',
            'schedule_sun': '10:00am a 10:00pm',
            'address': 'CC La Rambla-Local LO103-Av Brasil N° 714 al N° 792 Jr. Centenario.',
            'latitude': '-12.0663108',
            'longitude': '-77.0474596'
        },
        {
            'location_id': 'lurin',
            'store_name': 'LURIN',
            'district': 'LURIN',
            'schedule_mon_fri': '9:00am a 6:00pm',
            'schedule_sat': '9:00am a 5:30pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Fundo San vicente Parcela B62 Ref Entrada san pedro- ',
            'latitude': '-12.274713',
            'longitude': '-76.871984'
        },
        {
            'location_id': 'ventanilla',
            'store_name': 'VENTANILLA',
            'district': 'VENTANILLA',
            'schedule_mon_fri': '9:00am a 8:00pm',
            'schedule_sat': '9:00am a 4:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Mz. C3 Lte. 17-Urb. Ex zona Comercial  e Industrial / Prov. Constitucional del Callao- Ventanilla',
            'latitude': '-11.8713688',
            'longitude': '-77.127953'
        },
        {
            'location_id': 'villa-el-salvador',
            'store_name': 'PARQUE INDUSTRIAL',
            'district': 'VILLA EL SALVADOR',
            'schedule_mon_fri': '9:00am a 6:00pm',
            'schedule_sat': '9:00am a 2:00pm',
            'schedule_sun': 'NO ATIENDE',
            'address': 'Mz K2 Lt5 Parcela II del Parque Industrial (av. Velasco Alvarado)',
            'latitude': '-12.2032159',
            'longitude': '-76.9319903'
        }
    ]

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
                        + '<div class="delivery-bold">Entel JR DE LA UNION 2</div>'
                        + '<div class="delivery-text">Jr de la union 465 cercado de lima</div>'
                        + '<div class="delivery-bold">Horario</div>'
                        + '<div class="delivery-text"><b>L-V</b>: 10:00am a 8:00pm</div>'
                        + '<div class="delivery-text"><b>S</b>: 10:00am a 8:00pm</div>'
                        + '<div class="delivery-text"><b>D</b>: NO ATIENDE</div>'
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

            // reset stores
            $('body').find('.delivery-type-option ul').empty()

            // reset flag
            activeClassFlag = 0
            
            // print stores
            for (let i = 0; i < jsonStoreDelivery.length; i++) {
                if (jsonStoreDelivery[i].location_id === $(this).attr('data-distrito')) {
                    // flag
                    if (activeClassFlag == 0) {
                        activeClass = 'active'
                    } else {
                        activeClass = ''
                    }

                    htmlStringDelivery = '<li class="' + activeClass + '">'
                        + '<div class="delivery-bold">Entel ' + jsonStoreDelivery[i].store_name + '</div>'
                        + '<div class="delivery-text">' + jsonStoreDelivery[i].address + '</div>'
                        + '<div class="delivery-bold">Horario</div>'
                        + '<div class="delivery-text"><b>L-V</b>: ' + jsonStoreDelivery[i].schedule_mon_fri + '</div>'
                        + '<div class="delivery-text"><b>S</b>: ' + jsonStoreDelivery[i].schedule_sat + '</div>'
                        + '<div class="delivery-text"><b>D</b>: ' + jsonStoreDelivery[i].schedule_sun + '</div>'
                        + '<span class="delivery-choose">Recojo aquí</span>'
                    + '</li>'

                    $('body').find('.delivery-type-option ul').append(htmlStringDelivery)

                    activeClassFlag++
                }                
            }

            $('body').find('.delivery-type-option ul li').click(function() {            
                $('body').find('.delivery-type-option ul li').removeClass('active')
                $(this).addClass('active')            
            })
        })            

        // main flag
        flagDelivery = true
    }
}, 100)