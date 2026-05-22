# Arrays

Essa página possui alguns trechos de código com bugs. analise cada um, descreva o bug e arrume

## 🟢 Bug 1

```javascript
const frutas = ["maçã", "banana", "uva", "pera"];

console.log(frutas[4]);
```

> O console retorna `undefined`. Arrays começam no índice 0. Qual o índice correto para acessar `"pera"`?

## 🟢 Bug 2

```javascript
const nomes = ["Ana" "Carlos" "Beatriz"];

console.log(nomes[0]);
```

> O código dá erro antes de executar. Olhe com atenção a declaração do array e encontre o que está faltando.

## 🟢 Bug 3

```javascript
const numeros = [10, 20, 30, 40, 50];

console.log(numeros + 1);
```

> O aprendiz queria somar 1 ao primeiro número do array. O que ele fez de errado e como corrigir?

## 🟡 Bug 4

```javascript
const cores = ["vermelho", "azul", "verde"];

console.log(cores[cores.length]);
```

> O console retorna `undefined`. O aprendiz queria acessar o último item. Por que `length` sozinho não funciona como índice e como corrigir?

## 🟡 Bug 5

```javascript
const itens = ["caderno", "caneta"];

itens[2] = "borracha";
itens[2] = "régua";

console.log(itens);
```

> O aprendiz queria adicionar `"borracha"` e `"régua"` ao array. O que acontece de fato com esse código e como resolver?

## 🟡 Bug 6

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.map(function (n) {
  return n * 2;
});

console.log(numeros);
```

> O array exibido ainda é o original. O aprendiz usou `.map()` mas o resultado foi perdido. Como corrigir?

## 🟡 Bug 7

```javascript
const precos = [10, 20, 30];

const novosPrecos = precos.forEach(function (preco) {
  return preco * 1.1;
});

console.log(novosPrecos);
```

> O console exibe `undefined`. O aprendiz queria criar um novo array com os preços reajustados. Por que `.forEach()` não resolve isso e qual método usar no lugar?

## 🔴 Bug 8

```javascript
const numeros = [40, 100, 5, 25, 10];

numeros.sort();

console.log(numeros);
```

> O array foi ordenado mas o resultado está errado. O `.sort()` sem argumentos não funciona como esperado para números. Por que isso acontece e como corrigir passando uma função de comparação?

## 🔴 Bug 9

```javascript
const idades = [15, 22, 17, 30, 13, 28];

const maiores = idades.filter(function (idade) {
  idade >= 18;
});

console.log(maiores);
```

> O array `maiores` saiu vazio. O aprendiz escreveu a condição certa mas o resultado não veio. O que está faltando dentro da função?

## 🔴 Bug 10

```javascript
const alunos = ["Carlos", "Ana", "Beatriz", "Lucas"];

console.log(alunos[4]);

alunos.push["Fernanda"];

const maiusculos = alunos.map(function (aluno) {
  aluno.toUpperCase();
});

console.log(maiusculos);
```

> Este tem 3 bugs. Liste todos antes de corrigir qualquer um.
