const produtos=[
{name:"Antártica 350ml",preco:4},
{name:"Brahma 350ml",preco:4},
{name:"Original 350ml",preco:5},
{name:"Stella Artois 350ml",preco:5},
{name:"Império 350ml",preco:4.3},
{name:"Coca-Cola 350ml",preco:4},
{name:"Fanta 350ml",preco:3.5}
];

const bairros={
"Centro":10,
"Bandeirantes":12,
"Aeroporto":12
};

const carrinho={};

const prodDiv=document.getElementById("produtos");
produtos.forEach((p,i)=>{
carrinho[i]=0;
prodDiv.innerHTML+=`<div class="card">
<div class="row"><b>${p.name}</b><span>R$ ${p.preco.toFixed(2)}</span></div>
<div class="qty">
<button onclick="alt(${i},-1)">-</button>
<span id="q${i}">0</span>
<button onclick="alt(${i},1)">+</button>
</div></div>`;
});

const bairroSel=document.getElementById("bairro");
bairroSel.innerHTML='<option value="">Selecione</option>';
Object.keys(bairros).forEach(b=>{
bairroSel.innerHTML+=`<option value="${b}">${b} - R$ ${bairros[b].toFixed(2)}</option>`;
});

function alt(i,v){
carrinho[i]=Math.max(0,carrinho[i]+v);
document.getElementById("q"+i).innerText=carrinho[i];
calc();
}

function calc(){
let tp=0;
produtos.forEach((p,i)=>tp+=p.preco*carrinho[i]);
document.getElementById("tp").innerText=tp.toFixed(2);
let te=bairros[bairroSel.value]||0;
document.getElementById("te").innerText=te.toFixed(2);
document.getElementById("tt").innerText=(tp+te).toFixed(2);
}

bairroSel.onchange=calc;

function finalizar(){
let msg="Olá, eu gostaria de fazer esse pedido:%0A%0A";
produtos.forEach((p,i)=>{
if(carrinho[i]>0){
msg+=`- ${p.name} – ${carrinho[i]} un – R$ ${(p.preco*carrinho[i]).toFixed(2)}%0A`;
}
});
msg+=`%0A📍 Bairro: ${bairroSel.value}%0A🏠 Rua: ${rua.value}%0A📌 Referência: ${ref.value}%0A📝 Observações: ${obs.value}%0A💳 Pagamento: ${pagamento.value}%0A💰 Total: R$ ${document.getElementById("tt").innerText}`;
window.open("https://wa.me/553899363226?text="+msg,"_blank");
}
