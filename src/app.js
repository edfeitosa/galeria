var meses = [
	"Janeiro",
	"Fevereiro",
	"Março",
	"Abril",
	"Maio",
	"Junho",
	"Julho",
	"Agosto",
	"Setembro",
	"Outubro",
	"Novembro",
	"Dezembro"
];

var semana = [
	"Domingo",
	"Segunda-feira",
	"Terça-feira",
	"Quarta-feira",
	"Quinta-feira",
	"Sexta-feira",
	"Sábado"
];

function dtExtenso() {
	hoje = new Date();
	dia = hoje.getDate();
	dias = hoje.getDay();
	mes = hoje.getMonth();
	ano = hoje.getYear();
	if (navigator.appName == "Netscape") { ano = ano + 1900; }
	if (dia < 10) { dia = "0" + dia; } else { dia = dia; }
	diaext = semana[dias] + ", " + dia + " de " + meses[mes] + " de " + ano;
	var dataExtenso = document.getElementById("dataExtenso");
	dataExtenso.innerHTML = diaext;
}

// arquivos
var dados_imagens = [
	{"img": "imagem-0.jpg", "visualizacoes": "2.546", "curtidas": "458"},
	{"img": "imagem-1.jpg", "visualizacoes": "3.879", "curtidas": "144"},
	{"img": "imagem-2.jpg", "visualizacoes": "2.022", "curtidas": "310"},
	{"img": "imagem-3.jpg", "visualizacoes": "1.892", "curtidas": "124"},
	{"img": "imagem-4.jpg", "visualizacoes": "986", "curtidas": "127"},
	{"img": "imagem-5.jpg", "visualizacoes": "3.985", "curtidas": "524"}
];

// diretório padrão das imagens
var diretorio = "img/";

// seleciona texto
function sel_texto(numero) {
	var texto;
	for (var i = 0; i < dados_imagens.length; i++) {
		texto = "<i class=\"material-icons\">remove_red_eye</i> " + 
			dados_imagens[i].visualizacoes + 
			"&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"material-icons\">favorite</i> " + 
			dados_imagens[i].curtidas;
	}
	return texto;
}

// monta card maior
function monta_card(numero) {
	var imgcard = document.getElementById("img-card");
	var img = document.getElementById("imagem-full");
	img.src = diretorio + "imagem-" + numero + ".jpg";
	img.style.width = "100%";
	imgcard.appendChild(img);
	var informacoes = document.getElementById("informacoes");
	informacoes.innerHTML = sel_texto(numero);
	var bgcard = document.getElementById("bg-card");
	bgcard.style.display = "block";
}

// gera divs dinamicamente
function monta_divs() {
	for (var i = 0; i < dados_imagens.length; i++) {
		
		var cardTumblr = document.createElement("div")
		cardTumblr.setAttribute("class", "cardTumblr");
		
		var imagem = document.createElement("div");
		imagem.setAttribute("class", "imagem");
		
		var texto = sel_texto(i);
		
		var info = document.createElement("div");
		info.setAttribute("class", "info");
		info.innerHTML = texto;
		
		// imagens
		var img = document.createElement("img");
		img.setAttribute("id", i);
		img.src = diretorio + dados_imagens[i].img;
		img.onclick = function() {
			monta_card(this.id);
		}
		
		// monta html
		imagem.appendChild(img);
		cardTumblr.appendChild(imagem);
		cardTumblr.appendChild(info);
		galeria.appendChild(cardTumblr);
	}
}

// fechar card maior
function fecha_card() {
	var fechar = document.getElementById("fechar").onclick = function() {
		document.getElementById("bg-card").style.display = "none";
	}
}

window.onload = function() {
	monta_divs();
	fecha_card();
	dtExtenso();
}