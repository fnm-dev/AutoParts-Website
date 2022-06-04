const items = [
    {
      id: 0,
      nome: 'TURBINA GARRETT .50/.48 872631-5001s',
      img: './img/products/turbina.jpg',
      quantidade: 0,
      valor: 2711.19,
      descricao: 'Turboalimentador Garrett Part Number 872631-5001S também conhecida como T34, é recomendada para motores 1400 até 2500cc com potência estimada de 200 até 430HP.'
    },
    {
      id: 1,
      nome: 'INJEÇÃO PROGRAMÁVEL FUELTECH FT550 LITE',
      img: './img/products/fueltech.jpg',
      quantidade: 0,
      valor: 5384.65,
      descricao: 'A FT550LITE é um sistema de controle e monitoramento de motores da FuelTech: injeção eletrônica, aquisição de dados e gerenciamento de potência.'
    },{
      id: 2,
      nome: 'JOGO DE PISTÃO FORJADO AFP 800CV 82,5MM CÔNCAVO',
      img: './img/products/pistao.jpg',
      quantidade: 0,
      valor: 1387.99,
      descricao: 'Marca compatível com este produto: Volkswagen | Aplicação: Motor AP 2.0 16v bloco alto. Produzidos com ligas especiais com o objetivo de otimização de massa e garantia de resistência.'
    },
  ]

  inicializarLoja = () => {
    var containerProdutos = document.getElementById('products');
    
    containerProdutos.innerHTML = "<center><h1>PRODUTOS</h1><center>";
    items.map((val)=>{
        containerProdutos.innerHTML+= `
        <div class="produto-single">
        <center>
          <div class="textDescricao"><img src="`+val.img+`"/></div>
          <div class="hide">`+val.descricao+`</div><br>
        </center>
          <h2>`+val.nome+`</h2>
          <center>
          <br><p>`+val.valor+` R$</p><br>
          </center>
          <button class="btn btn-2 btn-sep icon-cart" key="`+val.id+`" href="#">Adicionar ao carrinho</button>
        </div>
        `;
        
    })
  }
  
  inicializarLoja();
  
  atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById('cart');
    var containerResumo = document.getElementById('resumo');
    containerCarrinho.innerHTML = "";
    containerCarrinho.innerHTML = "<hr>";
    items.map((val)=>{ 
      if(localStorage.getItem(val.id)>0){
        const valorTotalProdutos = (items.map(p => (p.valor*p.quantidade)).reduce((anterior, proximo) => anterior+proximo)).toFixed(2);
        localStorage.setItem("valorTotal",valorTotalProdutos);   
        val.quantidade=localStorage.getItem(val.id);
        containerCarrinho.innerHTML+= `
        <div class="carrinho">
          <p><b>`+val.nome+`</b></p>
          <p><b>QUANTIDADE:</b> `+val.quantidade+`</p>
          <p><b>VALOR:</b> `+(val.valor*val.quantidade).toFixed(2)+` R$</p>
          <hr>
        </div>
        `;
        containerResumo.innerHTML = "";
        containerResumo.innerHTML+= `
        <div class="resumo">
          <h2>VALOR TOTAL DO PEDIDO: `+localStorage.getItem("valorTotal")+` R$</h2>
          <button class="btn btn-3 btn-sep icon-heart" onclick="limparCarrinho()">LIMPAR CARRINHO</button>
          <button class="btn btn-1 btn-sep icon-info" onclick="redirecionaCheckout()">CHECKOUT</button>
        </div>
        `;
      }
    })
  }

  atualizarCarrinho();

  redirecionaCheckout = () => {
    window.location.href="./checkout.html"
  }

  limparCarrinho = () => {
    localStorage.removeItem('valorTotal');
    localStorage.removeItem('0');
    localStorage.removeItem('1');
    localStorage.removeItem('2');
    window.location.reload();
  }

  var links = document.getElementsByClassName('btn btn-2 btn-sep icon-cart');

    for(i=0;i<links.length;i++){
      links[i].addEventListener("click",function(){
        let key = this.getAttribute('key');
        let quantidade = items[key].quantidade++;
        localStorage.setItem(key, (quantidade+1));
        atualizarCarrinho();
        return false;
      })
    }