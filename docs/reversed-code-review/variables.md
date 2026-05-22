# Variáveis

Essa página possui alguns trechos de código com bugs. analise cada um, descreva o bug e arrume

## 🟢 Bug 1

```javascript
nome = "Carlos";
console.log(nome);
```
> O código pode até funcionar em alguns casos mas está errado. O que falta antes de usar a variável?

## 🟢 Bug 2

```javascript
let nomeusuario = "Ana";
console.log(nomeUsuario);
```

## 🟢 Bug 3

```javascript
const idade = 20;
idade = 21;
console.log(idade);
```
## 🟡 Bug 4

```javascript
let numero = "10";
let resultado = numero + 5;
console.log(resultado);
```
> O resultado esperado era `15` mas saiu `"105"`. O que aconteceu e como corrigir?

## 🟡 Bug 5

```javascript
console.log(cidade);
let cidade = "São Paulo";
```
> O código dá erro. Por que isso aconteceria diferente se fosse `var` no lugar de `let`? Explique os dois comportamentos.

## 🟡 Bug 6

```javascript
let aprovado = false;

if (aprovado = true) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}
```
> O código sempre exibe `"Aprovado!"` independente do valor de `aprovado`. Por quê?

## 🟡 Bug 7     

```javascript
if (true) {
  var pontuacao = 100;
}

console.log(pontuacao);

if (true) {
  let bonus = 50;
}

console.log(bonus);
```
> Um dos `console.log` funciona e o outro dá erro. Explique por que cada um se comporta diferente.

## 🔴 Bug 8

```javascript
let resposta = "5";

if (resposta === 5) {
  console.log("Correto!");
} else {
  console.log("Errado!");
}
```
> O usuário digitou o número certo mas o código exibe `"Errado!"`

## 🔴 Bug 9

```javascript
let total = 100;
let desconto = 20;

let total = total - desconto;
console.log(total);
```
> O código dá erro antes mesmo de executar. Encontre o problema e corrija sem perder o valor calculado.

## 🔴 Bug 10

```javascript
const saldo = 500;
let valorsaque = 200;

saldo = saldo - valorSaque;

if (saldo = 0) {
  console.log("Saldo zerado!");
} else {
  console.log("Saldo restante: " + Saldo);
}
```
> Este tem 4 bugs. Liste todos antes de corrigir qualquer um.
