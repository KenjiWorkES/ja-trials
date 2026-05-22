# Variáveis

Essa pagina possui alguns desafios sobre variáveis em JavaScript para ajudar no desenvolvimento do nosso jovem aprendiz.


## 🟢 Bloco 1 — Declaração básica

::: info Desafio 1
Declare três variáveis usando <code>var</code>, <code>let</code> e <code>const</code>, cada uma com um valor diferente. Exiba todas no console.
:::

::: info Desafio 2
Declare uma variável com <code>let</code> chamada <code>idade</code> com o valor 20. Depois reatribua o valor para 21. Exiba antes e depois.
:::

::: info Desafio 3
Tente reatribuir uma variável <code>const</code>. Observe e explique o erro que aparece no console.
:::

::: info Desafio 4
Declare uma variável com <code>var</code> dentro de um bloco <code>if</code> e tente acessá-la fora do bloco. Faça o mesmo com <code>let</code> e compare os resultados.
:::

::: info Desafio 5
Declare uma variável sem atribuir nenhum valor. Exiba ela no console e use <code>typeof</code> para ver qual tipo aparece.
:::

## 🟢 Bloco 2 — Tipos de dados

::: info Desafio 6
Crie uma variável para cada tipo primitivo: <code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code> e <code>undefined</code>. Use <code>typeof</code> em cada uma e exiba o resultado.
:::

::: info Desafio 7
Crie uma variável <code>preco</code> com o valor 19.90 e uma variável <code>quantidade</code> com o valor 3. Exiba a multiplicação dos dois.
:::

::: info Desafio 8
Crie uma variável <code>nome</code> com seu nome e uma variável <code>sobrenome</code> com seu sobrenome. Junte as duas usando template literal e exiba a frase "Meu nome é [nome] [sobrenome]".
:::

::: info Desafio 9
Crie uma variável com o valor "5" (string) e outra com o valor 5 (number). Compare as duas com <code>==</code> e depois com <code>===</code>. Exiba e explique cada resultado.
:::

::: info Desafio 10
Crie uma variável <code>ativo</code> com o valor <code>true</code> e uma <code>deslogado</code> com o valor <code>false</code>. Exiba o resultado de <code>ativo && deslogado</code> e de <code>ativo || deslogado</code>.
:::

## 🟡 Bloco 3 — Conversão de tipos

::: info Desafio 11
Use <code>Number()</code> para converter as strings "42", "3.14", "" e "abc" em número. Exiba cada resultado e observe o que acontece nos casos estranhos.
:::

::: info Desafio 12
Use <code>parseInt</code> para extrair o número da string "25px". Depois use <code>parseFloat</code> para extrair o número de "3.99reais". Exiba os dois.
:::

::: info Desafio 13
Crie uma variável com o número 0, uma com o número 1, uma com "" (string vazia) e uma com "oi". Use <code>Boolean()</code> em cada uma e explique por que cada resultado é <code>true</code> ou <code>false</code>.
:::

## 🔴 Bloco 4 — Escopo e hoisting

::: info Desafio 14
Escreva um código onde você usa uma variável <code>var</code> antes de declará-la. Observe o que acontece. Repita com <code>let</code> e compare os dois comportamentos.
:::

::: info Desafio 15
Crie uma variável <code>const</code> com um array <code>[1, 2, 3]</code>. Tente adicionar um item com <code>.push()</code> e exiba o resultado. Depois tente reatribuir a variável inteira com um novo array e observe o erro. Explique por que uma operação funciona e a outra não.
:::
