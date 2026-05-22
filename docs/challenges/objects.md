# Objetos

Essa pagina possui alguns desafios sobre objetos em JavaScript para ajudar no desenvolvimento do nosso jovem aprendiz.

## 🟢 Bloco 1 — Criação e acesso

::: info Desafio 1
Crie um objeto <code>carro</code> com as propriedades <code>marca</code>, <code>modelo</code> e <code>ano</code>. Exiba cada propriedade no console usando notação de ponto.
:::

::: info Desafio 2
Acesse as mesmas propriedades do objeto <code>carro</code> usando notação de colchetes <code>[]</code>. Explique quando faz sentido usar cada forma.
:::

::: info Desafio 3
Crie um objeto <code>pessoa</code> com <code>nome</code>, <code>idade</code> e <code>cidade</code>. Depois adicione uma nova propriedade <code>profissao</code> sem recriar o objeto. Exiba o objeto completo.
:::

::: info Desafio 4
Crie um objeto <code>produto</code> com <code>nome</code>, <code>preco</code> e <code>estoque</code>. Use <code>delete</code> para remover a propriedade <code>estoque</code>. Exiba o objeto antes e depois.
:::

::: info Desafio 5
Crie um objeto com uma propriedade cujo nome tem espaço: <code>'nome completo'</code>. Tente acessar com notação de ponto e depois com colchetes. Explique o que acontece em cada caso.
:::

## 🟢 Bloco 2 — Verificação e iteração

::: info Desafio 6
Crie um objeto <code>usuario</code> e verifique se a propriedade <code>email</code> existe usando o operador <code>in</code>. Teste com uma propriedade que existe e uma que não existe.
:::

::: info Desafio 7
Crie um objeto <code>aluno</code> com <code>nome</code>, <code>nota</code> e <code>turma</code>. Use <code>Object.keys()</code> para listar as chaves e <code>Object.values()</code> para listar os valores.
:::

::: info Desafio 8
Crie um objeto <code>config</code> com pelo menos 4 propriedades. Use <code>for...in</code> para percorrer todas elas e exibir cada chave e valor no formato "chave: valor".
:::

::: info Desafio 9
Crie dois objetos: <code>dadosPessoais</code> com <code>nome</code> e <code>idade</code>, e <code>dadosContato</code> com <code>email</code> e <code>telefone</code>. Mescle os dois em um terceiro objeto usando spread operator. Exiba o resultado.
:::

::: info Desafio 10
Crie um objeto <code>estoque</code> com 3 produtos como chaves e suas quantidades como valores, por exemplo <code>{ camisa: 10, calca: 5, tenis: 8 }</code>. Use <code>for...in</code> para exibir quais produtos estão com estoque abaixo de 7.
:::

## 🟡 Bloco 3 — Métodos e this

::: info Desafio 11
Crie um objeto <code>contaBancaria</code> com <code>titular</code> e <code>saldo</code>. Adicione um método <code>exibirSaldo()</code> que exibe "Titular: [nome] | Saldo: R$[saldo]" usando <code>this</code>.
:::

::: info Desafio 12
Adicione ao objeto <code>contaBancaria</code> um método <code>depositar(valor)</code> que soma o valor ao saldo e exibe o novo saldo. Chame o método 3 vezes com valores diferentes.
:::

::: info Desafio 13
Adicione ao objeto <code>contaBancaria</code> um método <code>sacar(valor)</code> que só realiza o saque se o saldo for suficiente. Se não for, exibe "Saldo insuficiente".
:::

::: info Desafio 14
Crie um objeto <code>calculadora</code> com os métodos <code>somar(a, b)</code>, <code>subtrair(a, b)</code>, <code>multiplicar(a, b)</code> e <code>dividir(a, b)</code>. Cada método deve retornar o resultado da operação.
:::

::: info Desafio 15
Crie um objeto <code>pessoa</code> com <code>nome</code> e <code>hobbies</code> (array). Adicione um método <code>apresentar()</code> que exibe o nome e lista os hobbies usando <code>this</code>.
:::

## 🔴 Bloco 4 — Desestruturação e combinações

::: info Desafio 16
Dado o objeto <code>{ nome: 'Carlos', idade: 28, cidade: 'RJ' }</code>, use desestruturação para extrair as três propriedades em variáveis separadas.
:::

::: info Desafio 17
Use desestruturação e renomeie <code>cidade</code> para <code>local</code> durante a própria extração. Exiba a variável <code>local</code> no console.
:::

::: info Desafio 18
Crie uma função <code>exibirUsuario</code> que recebe um objeto <code>{ nome, email }</code> e usa desestruturação direto no parâmetro para exibir as informações.
:::

::: info Desafio 19
Crie um objeto <code>aluno</code> com <code>nome</code>, <code>nota</code> e <code>aprovado</code>. Use desestruturação para extrair as três propriedades e exiba uma frase como "[nome] teve nota [nota] e foi [aprovado ? 'aprovado' : 'reprovado']".
:::

::: info Desafio 20
Crie um array de 4 objetos <code>{ nome, preco, emEstoque }</code>. Use <code>.filter()</code> para pegar só os em estoque e <code>.map()</code> para retornar apenas <code>nome</code> e <code>preco</code> de cada um. Exiba o resultado.
:::
