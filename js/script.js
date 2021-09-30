let produtos = [
  {
    nomeProduto: 'Arroz',
    valorProduto: 500,
    qualidadeProduto: 80,
    statusProduto: true
  },
  {
    nomeProduto: 'Feijão',
    valorProduto: 800,
    qualidadeProduto: 90,
    statusProduto: false
  },
  {
    nomeProduto: 'Carne',
    valorProduto: 400,
    qualidadeProduto: 40,
    statusProduto: true
  },
  {
    nomeProduto: 'Macarrão',
    valorProduto: 556,
    qualidadeProduto: 100,
    statusProduto: true
  },
  {
    nomeProduto: 'Bebida',
    valorProduto: 821,
    qualidadeProduto: 70,
    statusProduto: true
  },
  {
    nomeProduto: 'Leite',
    valorProduto: 1271.21,
    qualidadeProduto: 100,
    statusProduto: true
  },
  {
    nomeProduto: 'Doces',
    valorProduto: 100,
    qualidadeProduto: 70,
    statusProduto: true
  },
  {
    nomeProduto: 'Peixe',
    valorProduto: 2500,
    qualidadeProduto: 80,
    statusProduto: false
  },
  {
    nomeProduto: 'Legumes',
    valorProduto: 490,
    qualidadeProduto: 50,
    statusProduto: true
  },
  {
    nomeProduto: 'Frutas',
    valorProduto: 600.8,
    qualidadeProduto: 80,
    statusProduto: true,
  },

];


// Filtro dos produtos com base no valor, Qualidade e ststus disponivel
const carrinho = produtos.filter(function (elemento) {
  return elemento.valorProduto >= 482 && elemento.valorProduto <= 1600 && elemento.qualidadeProduto > 60 && elemento.statusProduto == true;   //Condição para adicionar ao carrinho
})

console.log('')
console.log('******************Filtro do cliente****************************')
console.log('')

// Função para impressão dos produtos com base no valor, Qualidade e ststus disponivel
function imprimirProdutos() {
  const produto = carrinho.map(function (elemento) {
    return (`Produto: ${elemento.nomeProduto} = R$ ${elemento.valorProduto.toFixed(2)} / 'Disponivel'`)

  })
  console.log(produto.join('\n'))
}

imprimirProdutos()


console.log('')
console.log('***************Carrinho de compras******************')
console.log('')

//Função para acumular os itens no carrnho e a realizar a soma

function carrinhoDeCompras() {

  const carrinhoMap = carrinho.map(function (elemento) {
    return elemento.valorProduto
  })

  const carrinhoTotal = carrinhoMap.reduce(function (valorAcumulador, valorTotal) {             //Total da compra
    return valorAcumulador + valorTotal
  })

  const carrinhoFinalizado = carrinho.map(function (elemento) {
    return (`Itens: ${elemento.nomeProduto} = R$ ${elemento.valorProduto.toFixed(2)}`)
  })


  console.log(carrinhoFinalizado.join('\n'))


  console.log(`Total do Carrinho = R$ ${carrinhoTotal.toFixed(2)}`)
}

carrinhoDeCompras()
