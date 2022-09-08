$(document).ready(function(){
$( '#topheader .navbar-nav a' ).on( 'click', function () {
	$( '#topheader .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$( this ).parent( 'li' ).addClass( 'active' );
});
});


// генерируем сообщение message_price пользователю

$("#button_1").click(function(){
	$("#priceModalLabel").html('Website bussines card')
	$("#message_price").html("A business card site is your business card on the Internet. Its main task is to briefly convey information about a company or person to attract the attention of visitors. For each client, a unique design is developed that can most fully reflect the direction of your company and its advantages. Over time, you can expand the structure and functionality of an already created business card site up to a multi-page resource or an online store.");
});

$("#button_2").click(function(){
	$("#priceModalLabel").html('Promo website')
	$("#message_price").html("A promo site is a site whose main task is to present a product, service, brand or company on the Internet. To achieve this goal, in addition to a detailed description of the product, various drawings, promotions, games and contests are held on promo sites. Usually one promo site is dedicated to one product and focuses on interaction with users as much as possible. The design of the promo site is a bright and memorable design. A promo site differs from a business card site in greater functionality. For example, it may contain a voting form, a forum, games, etc.");
});

$("#button_3").click(function(){
	$("#priceModalLabel").html('Website catalog')
	$("#message_price").html("A catalog is a type of commercial site that presents the entire range of a company with a detailed description. This is a fairly large, multi-page site containing comprehensive information about the company itself and the products it sells. In this, it looks like a regular corporate website and an online store at the same time. In the case of a catalog site, much more emphasis is placed on the presentation of the product. If there are many products and they are heterogeneous, then for a better search, a category tree is created. Product pages are necessarily supplied with high-quality photographs and descriptions of characteristics. The Space studio is ready to create for you a worthy showcase or catalog site for your business.");
});

$("#button_4").click(function(){
	$("#priceModalLabel").html('Сайт-визитка')
	$("#message_price").html("Сайт-визитка - это Ваша визитная карточка в Интернете. Её основная задача краткая передача информации о компании или персоне для  привлечения внимания посетителей. Для каждого клиента разрабатывается уникальный дизайн, способный наиболее полно отразить направление деятельности вашей компании и её преимущества. Со временем можно расширить структуру и функционал уже созданного сайта-визитки вплоть до многостраничного ресурса или интернет-магазина.");
});

$("#button_5").click(function(){
	$("#priceModalLabel").html('Промо-сайт')
	$("#message_price").html("Промо  сайт - это сайт, основная задача которого - представление товара, услуги, бренда или компании в Интернете. Для достижения этой цели, помимо подробного описания товара, на промо-сайтах проводятся различные розыгрыши, рекламные акции, игры и конкурсы. Обычно один промо  сайт посвящается одному продукту и максимально фокусируется на взаимодействии с пользователями. Дизайн промо-сайта - это яркий и запоминающийся дизайн. От сайта-визитки промо-сайт отличается большей функциональностью. Так, например, он может содержать форму для голосования, форум, игры и др.");
});

$("#button_6").click(function(){
	$("#priceModalLabel").html('Сайт-каталог')
	$("#message_price").html("Каталог - это вид коммерческого сайта, на котором представлен весь ассортимент компании с подробным описанием. Это достаточно крупный, многостраничный сайт, содержащий в себе исчерпывающую информацию о самой фирме и о продаваемых ею изделиях. В этом он похож одновременно на обычный корпоративный сайт и на интернет магазин. В случае сайта-каталога куда больший упор делается на презентацию товара. Если изделий много и они разнородны, то для лучшего поиска, создается дерево категорий. Страницы товара, в обязательном порядке снабжаются качественными фотографиями и описанием характеристик. Студия The Space готова создать для Вас достойную витрину или сайт-каталог, для вашего бизнеса.");
});

//Go to ru region
function change_Reg_ru (){
	return location.href = './index_ru.html';

}

//Go to eng region
function change_Reg_en (){
	return location.href = './index.html';

}


//Изменяем размер фавиконок от размера дисплея
if (document.documentElement.clientWidth < 480) {           
	for (let index = 0; index <= 3; index++) {
		var favSize = document.querySelector('.fa-2x');
		favSize.classList.remove('fa-2x');
	}
}

//Открываем форму по клику, скрываем кнопку и описание
$( '#btn_get_start' ).on( 'click', function () {
	$ ('.price_form').css('display','block');
	$('#btn_footer').css('display','none');
	$('#message_price').css('display','none');
});



// Отправка данных на сервер
function send(event, php){
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); // Baddy internet explorer 11
			console.log(json);
			
			// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
			if (json.result == "success") {
				// Если сообщение отправлено
				
				alert("Сообщение отправлено. Message sent.");
				$('#feedbackFormModal').removeClass('show');
				$('#feedbackFormModal').hide();
				$('#priceModal').hide();
				$('#feedbackFormModal').removeAttr('aria-modal');
				$('#feedbackFormModal').attr('aria-hidden', true);
				$('body').removeClass('modal-open');
				$('body').css('padding-right','0px');
				$(".modal-backdrop").remove();
			} else {
				// Если произошла ошибка
				alert("Ошибка. Сообщение не отправлено. Error. Message not sent");
				$('#feedbackFormModal').removeClass('show');
				$('#feedbackFormModal').hide();
				$('#priceModal').hide();
				$('#feedbackFormModal').removeAttr('aria-modal');
				$('#feedbackFormModal').attr('aria-hidden', true);
				$('body').removeClass('modal-open');
				$('body').css('padding-right','0px');
				$(".modal-backdrop").remove();
			}
		// Если не удалось связаться с php файлом
		} else {
			alert("Ошибка сервера. Номер: "+req.status);
			$('#feedbackFormModal').removeClass('show');
			$('#feedbackFormModal').hide();
			$('#priceModal').hide();
			$('#feedbackFormModal').removeAttr('aria-modal');
			$('#feedbackFormModal').attr('aria-hidden', true);
			$('body').removeClass('modal-open');
			$('body').css('padding-right','0px');
			$(".modal-backdrop").remove();
		}}; 
	
	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function() {
		alert("Ошибка отправки запроса. Error sending request.");
		$('#feedbackFormModal').removeClass('show');
		$('#feedbackFormModal').hide();
		$('#priceModal').hide();
		$('#feedbackFormModal').removeAttr('aria-modal');
		$('#feedbackFormModal').attr('aria-hidden', true);
		$('body').removeClass('modal-open');
		$('body').css('padding-right','0px');
		$(".modal-backdrop").remove();
};
	req.send(new FormData(event.target));
}

