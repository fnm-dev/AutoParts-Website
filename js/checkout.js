// Produtos

const items = [
    {
      id: 0,
      nome: 'TURBINA GARRETT .50/.48 872631-5001s',
      img: './img/products/turbina.jpg',
      quantidade: localStorage.getItem('0'),
      valor: 2711.19
    },
    {
      id: 1,
      nome: 'INJEÇÃO PROGRAMÁVEL FUELTECH FT550 LITE',
      img: './img/products/fueltech.jpg',
      quantidade: localStorage.getItem('1'),
      valor: 5384.65
    },{
      id: 2,
      nome: 'JOGO DE PISTÃO FORJADO AFP 800CV 82,5MM CÔNCAVO',
      img: './img/products/pistao.jpg',
      quantidade: localStorage.getItem('2'),
      valor: 1387.99
    },
  ]
    const valorTotalProdutos = parseFloat(localStorage.getItem('valorTotal'));
    atualizarCheckout = () => {
    var containerCheckout = document.getElementById('resumo-checkout');
    var containerValorCheckout = document.getElementById('valor-checkout');
    var containerEsvaziarDiv = document.getElementById('carrinho-vazio');
    items.map((val) => {
        if(localStorage.getItem(val.id)>0){
            containerEsvaziarDiv.innerHTML = "";
            containerCheckout.innerHTML += `
                <div class="checkout">
                <p><img src="`+val.img+`"/><b>NOME:</b> `+val.nome+` | <b>QUANTIDADE:</b> `+val.quantidade+` | <b>VALOR:</b> `+val.valor+`<p>
                <hr>
                </div>
            `;
            containerValorCheckout.innerHTML = "";
            containerValorCheckout.innerHTML += `
            <h2>VALOR TOTAL DO PEDIDO: `+valorTotalProdutos+` R$</h2>
            <button class="btn btn-3 btn-sep icon-heart" onclick="limparCarrinho()">LIMPAR CARRINHO</button>
            <button class="btn btn-2 btn-sep icon-cart" onclick="redirecionaProdutos()">CONTINUAR COMPRANDO</button>
            `;
        }
    })
    }

    redirecionaProdutos = () => {
      window.location.href="./produtos.html"
    }

    limparCarrinho = () => {
      localStorage.removeItem('valorTotal');
      localStorage.removeItem('0');
      localStorage.removeItem('1');
      localStorage.removeItem('2');
      window.location.reload();
    }

    atualizarCheckout();

    cartaoPagamento = () => {
      var containerCartao = document.getElementById('cartao');
      containerCartao.innerHTML="";
      if(document.getElementById('Credito').checked)
        containerCartao.innerHTML += `
        <i class="fas fa-divide"></i>&nbsp&nbsp</i><select>
          <option value="1x">1x de `+(valorTotalProdutos).toFixed(2)+` R$</option>
            <option value="2x">2x de `+(valorTotalProdutos/2).toFixed(2)+` R$</option>
            <option value="3x">3x de `+(valorTotalProdutos/3).toFixed(2)+` R$</option>
            <option value="4x">4x de `+(valorTotalProdutos/4).toFixed(2)+` R$</option>
            <option value="5x">5x de `+(valorTotalProdutos/5).toFixed(2)+` R$</option>
            <option value="6x">6x de `+(valorTotalProdutos/6).toFixed(2)+` R$</option>
            <option value="7x">7x de `+(valorTotalProdutos/7).toFixed(2)+` R$</option>
            <option value="8x">8x de `+(valorTotalProdutos/8).toFixed(2)+` R$</option>
            <option value="9x">9x de `+(valorTotalProdutos/9).toFixed(2)+` R$</option>
            <option value="10x">10x de `+(valorTotalProdutos/10).toFixed(2)+` R$</option>
            <option value="11x">11x de `+(valorTotalProdutos/11).toFixed(2)+` R$</option>
            <option value="12x">12x de `+(valorTotalProdutos/12).toFixed(2)+` R$</option>
          </select>
        `;
      if(document.getElementById('Debito').checked){
        containerCartao.innerHTML+=`
        <i class="fas fa-equals"></i>&nbsp&nbsp<select readonly>
         <option value="1x">1x de `+(valorTotalProdutos).toFixed(2)+` R$</option>
        </select>
        `;
      }
    }

    efetuarPedido = () => {
      alert("Pedido efetuado com sucesso!");
      limparCarrinho();
    }