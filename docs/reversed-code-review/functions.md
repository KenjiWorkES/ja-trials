# Funções

Essa página possui alguns trechos de código com bugs. analise cada um, descreva o bug e arrume

## 🟢 Bug 1

```js
function saudar() {
  console.log("Olá, mundo!");
}
```
<blockquote>
    A função foi declarada mas nunca executada. O que falta para ela funcionar?
</blockquote>

## 🟢 Bug 2 

```js
function somar(a + b) {
  return a + b;
}

console.log(somar(5, 3));
```

## 🟢 Bug 3 

```js
function calcularArea(largura; altura) {
  return largura * altura;
}

console.log(calcularArea(5, 3));
```

## 🟢 Bug 4

```js
function exibirNome(nome) {
  console.log("Meu nome é " + name);
}

exibirNome("Carlos");
```


## 🟡 Bug 5

```js
function apresentar(nome, idade) {
  console.log("Meu nome é " + nome + " e tenho " + idade + " anos.");
}

apresentar("Carlos" + 25);
```


## 🟡 Bug 6 

```js
function somar(a, b) {
  return;
  a + b;
}

console.log(somar(5, 3));
```
<blockquote>
A função retorna <code>undefined</code> em vez de <code>8</code>. Por quê?
</blockquote>


## 🟡 Bug 7

```js
function cumprimentar(nome, saudacao) {
  console.log(saudacao + ", " + nome + "!");
}

cumprimentar("Ana");
```
<blockquote>
A chamada exibe <code>"undefined, Ana!".</code> Como corrigir a função para que saudacao tenha um valor padrão de <code>"Olá"</code>?
</blockquote>

## 🟡 Bug 8

```js
function calcularMedia(a, b) {
  console.log((a + b) / 2);
}

let resultado = calcularMedia(8, 6);
console.log("A média é: " + resultado);
```
<blockquote>
A média aparece duas vezes no console mas uma delas está errada. Explique por que e corrija.</blockquote>

## 🔴 Bug 9

```js
function calcularDesconto(preco) {
  let desconto = preco * 0.1;
}

console.log("Desconto: R$" + desconto);
```

## 🔴 Bug 10

```js
function calcularPrecoFinal(preco, desconto) {
  precoFinal = preco - preco * desconto / 100;
  return precoFinal
}

let resultado = calcularPrecoFinal(200);
console.log("Preço final: R$" + Resultado);
```
<blockquote>
Este tem 3 bugs. Encontre todos antes de corrigir qualquer um.
</blockquote>