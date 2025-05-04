import MaxHeap from "./MaxHeap";

function verificarVencedoresMegaSena(numerosSorteados, apostas) {
    if (numerosSorteados.length !== 6) {
      throw new Error("Devem ser fornecidos exatamente 6 números sorteados");
    }
  
    const heapSorteados = new MaxHeap();
    heapSorteados.buildHeap(numerosSorteados);
    const sorteadosOrdenados = heapSorteados.sort();
    
    const vencedores = {
      sena: [],
      quina: []
    };
  
    for (let i = 0; i < apostas.length; i++) {
      const aposta = apostas[i];
      
      if (aposta.length < 6 || aposta.length > 15) {
        console.log(`Aposta ${i+1} inválida: deve ter entre 6 e 15 números`);
        continue;
      }
      
      const heapAposta = new MaxHeap();
      heapAposta.buildHeap(aposta);
      const apostaOrdenada = heapAposta.sort();
      
      // Contar acertos
      let acertos = 0;
      let j = 0, k = 0;
      
      while (j < apostaOrdenada.length && k < sorteadosOrdenados.length) {
        if (apostaOrdenada[j] === sorteadosOrdenados[k]) {
          acertos++;
          j++;
          k++;
        } else if (apostaOrdenada[j] < sorteadosOrdenados[k]) {
          j++;
        } else {
          k++;
        }
      }
      
      // Registrar vencedores
      if (acertos === 6) {
        vencedores.sena.push(i + 1);
      } else if (acertos === 5) {
        vencedores.quina.push(i + 1);
      }
    }
  
    return vencedores;
  }

  module.exports = verificarVencedoresMegaSena;