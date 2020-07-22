document.getElementById('sim1').addEventListener("click", segunda)
document.getElementById('nao1').addEventListener("click", segunda)

function segunda() {
	document.getElementById('caixa1').classList.add("hide")
	document.getElementById('caixa2').classList.remove("hide")
}

document.getElementById('sim2').addEventListener("click", terceira)
document.getElementById('nao2').addEventListener("click", terceira)

function terceira() {
	document.getElementById('caixa2').classList.add("hide")
	document.getElementById('caixa3').classList.remove("hide")
}

document.getElementById('sim3').addEventListener("click", quarta)
document.getElementById('nao3').addEventListener("click", quarta)

function quarta() {
	document.getElementById('caixa3').classList.add("hide")
	document.getElementById('caixa4').classList.remove("hide")
}


function redirect() {
	location.href = "linkdeafiliado";

}


