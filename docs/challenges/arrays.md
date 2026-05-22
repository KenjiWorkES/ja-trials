# Arrays

Essa pagina possui alguns desafios sobre arrays em JavaScript para ajudar no desenvolvimento do nosso jovem aprendiz.

## 🟢 Bloco 1 — Criação e acesso

::: info Desafio 1
Crie um array com 5 nomes. Exiba o primeiro, o último e o do meio usando o índice.
:::

::: info Desafio 2
Crie um array com 4 números. Exiba no console o tamanho do array usando <code>.length</code>. Depois acesse o último elemento sem digitar o índice diretamente (use <code>.length</code> para isso).
:::

::: info Desafio 3
Crie um array vazio. Adicione 3 frutas uma por uma usando <code>.push()</code>. Exiba o array após cada adição.
:::

::: info Desafio 4
Crie um array com 4 itens. Remova o último com <code>.pop()</code> e o primeiro com <code>.shift()</code>. Exiba o array antes e depois de cada remoção.
:::

::: info Desafio 5
Crie um array com 3 itens. Use <code>.unshift()</code> para adicionar um item no início. Depois use <code>.push()</code> para adicionar um no final. Exiba o resultado.
:::

## 🟢 Bloco 2 — Métodos básicos

::: info Desafio 6
Crie um array com 5 números. Use <code>.indexOf()</code> para descobrir em qual posição está o número 7. Teste também com um número que não existe no array e observe o retorno.
:::

::: info Desafio 7
Crie um array de compras. Use <code>.includes()</code> para verificar se "leite" está na lista. Exiba "Tem leite" ou "Não tem leite" conforme o resultado.
:::

::: info Desafio 8
Crie dois arrays de nomes. Una os dois em um terceiro array usando <code>.concat()</code>. Exiba o resultado sem modificar os originais.
:::

::: info Desafio 9
Crie um array com 6 números. Use <code>.slice(1, 4)</code> para extrair uma parte dele. Exiba o array original e a parte extraída e observe que o original não foi alterado.
:::

::: info Desafio 10
Crie um array com 5 itens. Use <code>.splice(2, 1)</code> para remover o item do meio. Exiba o array antes e depois e observe que desta vez o original é modificado.
:::

## 🟡 Bloco 3 — Iteração

::: info Desafio 11
Crie um array de 5 nomes. Use <code>for</code> clássico para exibir cada nome no console com seu índice, no formato "0 - Ana".
:::

::: info Desafio 12
Crie um array de números. Use <code>for...of</code> para percorrer o array e exibir apenas os números pares.
:::

::: info Desafio 13
Crie um array de produtos. Use <code>.forEach()</code> para exibir cada produto no console. Depois explique a diferença entre usar <code>forEach</code> e um <code>for</code> comum.
:::

::: info Desafio 14
Crie um array com os números <code>[1, 2, 3, 4, 5]</code>. Use <code>.map()</code> para criar um novo array onde cada número é elevado ao quadrado. Exiba o array original e o novo.
:::

::: info Desafio 15
Crie um array de idades <code>[15, 22, 17, 30, 13, 28]</code>. Use <code>.filter()</code> para criar um novo array só com as maiores de 18. Exiba o resultado.
:::

## 🟡 Bloco 4 — Métodos de busca e verificação

::: info Desafio 16
Crie um array de números. Use <code>.find()</code> para retornar o primeiro número maior que 10. Depois use <code>.findIndex()</code> para retornar a posição desse número.
:::

::: info Desafio 17
Crie um array de números com alguns negativos. Use <code>.some()</code> para verificar se existe pelo menos um negativo. Use <code>.every()</code> para verificar se todos são positivos. Exiba os dois resultados.
:::

::: info Desafio 18
Crie um array de nomes. Use <code>.find()</code> para buscar um nome específico. Se não encontrar, exiba "Nome não encontrado".
:::

::: info Desafio 19
Crie um array <code>[3, 1, 4, 1, 5, 9, 2, 6]</code>. Use <code>.filter()</code> para pegar os números maiores que 3 e em seguida use <code>.map()</code> no resultado para multiplicar cada um por 2. Faça tudo em cadeia (chaining).
:::

## 🔴 Bloco 5 — Ordenação, reduce e combinações

::: info Desafio 20
Crie um array de strings. Use <code>.sort()</code> para ordenar alfabeticamente. Depois crie um array de números e tente ordenar com <code>.sort()</code> sem argumentos. Observe o problema e corrija passando uma função de comparação.
:::

::: info Desafio 21
Crie um array <code>[10, 20, 30, 40, 50]</code>. Use <code>.reduce()</code> para somar todos os valores. Exiba o resultado final.
:::

::: info Desafio 22
Crie um array de preços <code>[19.90, 35.00, 8.50, 120.00, 45.00]</code>. Use <code>.reduce()</code> para calcular o total da compra.
:::

::: info Desafio 23
Crie dois arrays de números. Una os dois com spread operator <code>[...array1, ...array2]</code>. Depois ordene o array resultante do menor para o maior.
:::

::: info Desafio 24
Crie um array de objetos <code>[{ nome, aprovado }]</code> com 5 alunos onde alguns estão aprovados e outros não. Use <code>.filter()</code> para pegar só os aprovados e <code>.map()</code> para retornar apenas os nomes. Exiba a lista final.
:::

::: info Desafio 25
Crie um array de números com repetições, por exemplo <code>[1, 2, 2, 3, 3, 3, 4]</code>. Use <code>indexOf</code> dentro de um <code>filter</code> para retornar apenas a primeira ocorrência de cada número, eliminando os duplicados sem usar <code>Set</code>.
:::
