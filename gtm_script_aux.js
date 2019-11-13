let htmlStringAmPmOverlay = '<div class="popup-ampm-overlay"></div>',
    htmlStringAmPmButton = '<div class="popup-ampm-info-button"><img src="https://entelperu.vteximg.com.br/arquivos/entel-delivery-color.png" alt="Delivery Entel Perú"><p><span class="title">¡Delivery gratis en tiempo record!</span><span class="sub-title">Compra tu celu hoy y recíbelo en menos de 24 horas</span><span class="orange">Más información <span class="cta"></span></span></p></div>',
    htmlStringAmPmPopup = '<div class="popup-ampm-info-delivery"><div class="popup-ampm-info-delivery__title"><img src="https://entelperu.vteximg.com.br/arquivos/entel-delivery-color.png" alt="Delivery Entel Perú"><span>¡Delivery gratis en tiempo record!</span></div><div class="popup-ampm-info-delivery__subtitle">Compra tu celu hoy y recíbelo <br> en menos de 24 horas</div><div class="popup-ampm-info-delivery__orange">¡Aprovecha! haz tu compra por la mañana y recibirás tu pedido por la tarde</div><div class="popup-ampm-info-delivery__pay-method"><span>Medios de pago con tarjetas de crédito, débito y efectivo</span><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-visa.png" alt="Visa"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-mastercard.png" alt="Master card"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-americanexpress.png" alt="American Express"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-dinners.png" alt="Dinners"><img src="https://entelperu.vteximg.com.br/arquivos/creditcard-pagoefectivo.png" alt="Pago efectivo"></div><div class="popup-ampm-info-delivery__text">Condiciones de uso: Para entregas dentro del horario de 3:30pm a 8:00pm del mismo día, la compra y generación de orden debe estar ingresada y confirmada hasta la 1pm. No aplica para distritos de&nbsp;Lurín, Ventanilla, Puente Piedra, Carabayllo, Chosica, Chaclacayo, Ate en Lima. Detalle de cobertura en provincias para ventas por Televentas incluye Trujillo, Trujillo, Victor Larco, Esperanza, Porvenir, Florencia de Mora; en Chiclayo, Chiclayo, La Victoria, Jose Leonardo Ortiz; en Piura, Piura, Castilla, Distrito de 26 de Octubre y Arequipa, Yahahuara, Cercado, Cerro Colorado, Las Flores, Socabaya, Hunter, Jose Luis Bustamante, Mariano Melgar.&nbsp;Los pedidos ingresados desde las 01:0pm en adelante podrán ser programados en los siguientes horarios del día siguiente:&nbsp;8:30am a 12:30pm , 12:30pm a 4:30pm y 4:30 a 8:00pm. Para el siguiente detalle de distritos en provincia aplican horarios específicos de entrega. Piura: Catacaos, La Legua, Simbila, Monte Suyon , solo Martes y Viernes. Piura: Medio Piura, Caserío Miraflores, Río Seco, Los Tejidos, Chapaira – Solo Jueves. Chiclayo: Monsefú – Solo Martes y Viernes. Arequipa: Yahahuara, Cercado, Cerro Colorado, Las Flores, Socabaya, Hunter, Jose Luis Bustamante, Mariano Melgar.</div><span class="popup-ampm-info-delivery__button">Entendido</span><span class="popup-ampm-info-delivery__close"></span></div>'    

$('.checkout-container.row-fluid').append(htmlStringAmPmOverlay)
$('.checkout-container.row-fluid').append(htmlStringAmPmPopup)
$('.checkout-container.row-fluid').append(htmlStringAmPmButton)

$('body').find('.popup-ampm-info-button').click(function () {
	$('.popup-ampm-info-delivery').addClass('active')
	$('.popup-ampm-overlay').addClass('active')
})

$('body').find('.popup-ampm-info-delivery__close,.popup-ampm-overlay,.popup-ampm-info-delivery__button').click(function () {
	$('.popup-ampm-info-delivery').removeClass('active')
	$('.popup-ampm-overlay').removeClass('active')
})