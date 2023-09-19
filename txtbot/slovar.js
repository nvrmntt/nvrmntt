
// Слова по пять синонимов

Slova = Slovaold = [
	'практика', 'тщета','традиция','маниакальность','суть',//0 - номера слов
	'важных', 'животрепещущих','экзистенциальных','актуальных','необходимых',//1
	'ущербной', 'уродливой','отсталой','импотентной','дикой',//2
	'модели', 'миссии','организации','конструкции','аритектуре',//3
	'перманентного', 'всеобъемлющего','беспримерного','поражающего','нарастающего',//4
	'конфликта', 'подавления','диссонанса','тупика','притеснения',//5
	'исключает', 'искореняет','истребляет','кастрирует','отсекает',//6
	'предвестие', 'претворение','становление','формирование','образование',//7
	'надежд', 'перспектив','гарантий','контуров','предпосылок',//8
	'просвещения', 'цивилизации','эволюции','прогресса','развития',//9
	'идиотизма', 'планирования','абсурдизма','скудоумия','целеполагания',//10
	'дегенеративная', 'регрессивная','беспросветная','подрывная','людоедская',//11
	'всячески', 'целиком','бесцеремонно','полностью','окончательно',//12
	'тормозит', 'запрещает','табуирует','блокирует','компрометирует',//13
	'судьба', 'участь','тенденция','будущность','карма',//14
	'в основном','— очередная','лишь','только','наиболее'//15
	//'фронтэнда','микросервисов','итераций','спринтов','планирования'//16
	//'сервис','разработка','интеграция','имплементация','рекурсия'//17


	],

// Дополнительные вставки для предложений

Vstavka = Vstavkaold = [
	'отчего', 'почему','где ещё','разве','неужели',//0
	'очевидно,','разумеется,','конечно,','естественно,','безусловно,',//5
	'поскольку','т.к.','ибо','видимо','в целом,',//10
	'оттого, что','потому что','там, где','да,','нет,',//15
	'но','а','и','так','вот'//20
	],

// Структура предложений по номерам слов
//// [', она',', это',', которая'] - случайный выбор

Stroka = Strokaold = [
	[],
	[],
	[],
	[],
	[],
	[],
	[],
	[]]
	],

// Структура заголовков

Zagolovok = Zagolovokold = [
	[14,3,[' —',' и'],11,0,10],
	[0,5,13,7,9,['?','!','?!']],
	[7,4,10],
	[3,4,10, [' вместо',' из',' в угоду'],3,4,5,'?'],
	[11,14,10,[' вопреки',' вне', ' против'],3,9],
	[14,1,8],
	[3,10]
	]
