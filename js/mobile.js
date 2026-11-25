var pets = [["Mel", "cão", "🐶", "2 anos · porte médio", "Dócil e ótima com crianças."], ["Luna", "gato", "🐱", "1 ano · porte pequeno", "Curiosa e carinhosa."], ["Thor", "cão", "🐶", "4 anos · porte grande", "Calmo e leal."], ["Nina", "gato", "🐱", "3 anos · porte pequeno", "Perfeita para apartamento."], ["Bob", "cão", "🐶", "6 meses · filhote", "Cheio de energia."], ["Mimi", "gato", "🐱", "2 anos · porte pequeno", "Independente e afetuosa."]];
var camps = [["Ração para 40 animais", "ONG Patas Amigas", "🥣", 68], ["Cobertores para o inverno", "ONG Lar dos Gatinhos", "🧣", 45], ["Brinquedos e caminhas", "ONG Amigo Fiel", "🧸", 82]];
var vals = [["Respeito e bem-estar animal", "Animais são seres sencientes que merecem dignidade, cuidado e proteção."], ["Adoção responsável", "Compatibilidade entre animal e adotante e vínculo por toda a vida."], ["Transparência", "Prestação de contas clara sobre o destino das doações."], ["Responsabilidade social", "Menos abandono por meio de educação e conscientização."], ["Empatia e solidariedade", "Sensibilidade com a causa animal e com as dificuldades das ONGs."], ["Colaboração e comunidade", "Trabalho em rede entre empresas, ONGs, voluntários e poder público."]];
var $ = function (s) { return document.querySelector(s) };
function renderPets(f) { $("#pets").innerHTML = pets.filter(function (p) { return f === "todos" || p[1] === f }).map(function (p) { return '<div class="c pr"><div class="av">' + p[2] + '</div><div class="in"><h3>' + p[0] + '</h3><small>' + p[3] + '</small><small>' + p[4] + '</small><button class="btn">Quero adotar</button></div></div>' }).join("") }
renderPets("todos");
$("#camps").innerHTML = camps.map(function (c) { return '<div class="c"><div class="pr"><div class="ic">' + c[2] + '</div><div class="in"><h3>' + c[0] + '</h3><small>' + c[1] + '</small></div></div><div class="bar"><i style="width:' + c[3] + '%"></i></div><small>' + c[3] + '% da meta</small><br><button class="btn">Quero doar</button></div>' }).join("");
$("#vals").innerHTML = vals.map(function (v, i) { return '<details><summary>' + (i + 1) + '. ' + v[0] + '</summary><p>' + v[1] + '</p></details>' }).join("");
document.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    if (b.dataset.f) { document.querySelectorAll(".chip").forEach(function (c) { c.setAttribute("aria-pressed", c === b) }); renderPets(b.dataset.f) }
    else if (b.textContent === "Quero adotar") { b.textContent = "Solicitação enviada ✓"; b.classList.add("ok") }
    else if (b.textContent === "Quero doar") { b.textContent = "Obrigado! 💚"; b.classList.add("ok") }
});
$("#copy").onclick = function () { try { navigator.clipboard.writeText($("#pixk").textContent) } catch (e) { } this.textContent = "Chave copiada ✓" };
document.querySelectorAll(".seg").forEach(function (b) { b.onclick = function () { document.querySelectorAll(".seg").forEach(function (x) { x.setAttribute("aria-pressed", x === b) }); document.querySelectorAll(".fm").forEach(function (f) { f.hidden = f.id !== b.dataset.v }) } });
document.querySelectorAll(".fm").forEach(function (f) { f.onsubmit = function (e) { e.preventDefault(); var m = f.querySelector(".msg"); m.textContent = (f.id === "cong" && $("#c9").value !== $("#c10").value) ? "As senhas não conferem. Confira e tente de novo." : f.dataset.ok; m.hidden = false } });
function show(t) { if (!/^(adocao|doacao|missao|entrar)$/.test(t)) t = "adocao";["adocao", "doacao", "missao", "entrar"].forEach(function (n) { $("#" + n).hidden = n !== t }); document.querySelectorAll(".tabs button").forEach(function (b) { b.setAttribute("aria-selected", b.dataset.t === t) }); $("#scr").scrollTop = 0 }
document.querySelectorAll(".tabs button").forEach(function (b) { b.onclick = function () { show(b.dataset.t); location.hash = b.dataset.t } });
window.addEventListener("hashchange", function () { show(location.hash.slice(1)) }); show(location.hash.slice(1));
