## 🟢 Bug 1

```javascript
const pessoa = {
  nome: "Ana"
  idade: 25
  cidade: "SP"
};

console.log(pessoa.nome);
```

> O código dá erro antes de executar. Olhe com atenção a estrutura do objeto e encontre o que está faltando.

## 🟢 Bug 2

```javascript
const usuario = {
  "nome completo": "Carlos Silva",
  idade: 30
};

console.log(usuario.nome completo);
```

> O console retorna erro. Por que notação de ponto não funciona aqui e como corrigir?

## 🟢 Bug 3

```javascript
const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  ano: 2020,
};

console.log(carro.Marca);
```

> O console retorna `undefined`. Olhe com atenção o nome da propriedade e encontre a diferença.

## 🟡 Bug 4

```javascript
const produto = {
  nome: "Teclado",
  preco: 150,
};

console.log(nome);
console.log(preco);
```

## 🟡 Bug 5

```javascript
const config = {
  tema: "claro",
  idioma: "pt-BR",
};

config = {
  tema: "escuro",
  idioma: "pt-BR",
};

console.log(config.tema);
```

> O código dá erro. Como alterar o tema sem precisar reatribuir o objeto inteiro?

## 🟡 Bug 6

```javascript
const contaBancaria = {
  titular: "Lucas",
  saldo: 1000,
  exibirSaldo() {
    console.log("Titular: " + titular + " | Saldo: R$" + saldo);
  },
};

contaBancaria.exibirSaldo();
```

> O código dá erro dentro do método. O que está faltando para acessar as propriedades do próprio objeto?

## 🟡 Bug 6

```javascript
const contaBancaria = {
  titular: "Lucas",
  saldo: 1000,
  exibirSaldo() {
    console.log("Titular: " + titular + " | Saldo: R$" + saldo);
  },
};

contaBancaria.exibirSaldo();
```

> O código dá erro dentro do método. O que está faltando para acessar as propriedades do próprio objeto?

## 🟡 Bug 7

```javascript
const aluno = {
  nome: "Beatriz",
  nota: 8,
  turma: "A",
};

aluno = {
  aprovado: true,
};

console.log(aluno.nome);
```

## 🔴 Bug 8

```javascript
const estoque = {
  camisa: 10,
  calca: 5,
  tenis: 8,
};

for (let item in estoque) {
  console.log(estoque.item);
}
```

> O código exibe `undefined` três vezes. O `for...in` entrega a chave como string, então acessar com notação de ponto não funciona. Como corrigir?

## 🔴 Bug 9

```javascript
const pessoa = {
  nome: "Fernanda",
  idade: 27,
  cidade: "BH",
};

let chaves = Object.keys(pessoa);
console.log(chaves.nome);
```

> O aprendiz queria listar as chaves mas tentou acessar como se `chaves` ainda fosse o objeto. O que `Object.keys()` realmente retorna e como exibir corretamente?

## 🔴 Bug 10

```javascript
const funcionario = {
  nome: "Roberto"
  cargo: "Desenvolvedor",
  salario: 3000
  exibirInfo() {
    console.log(nome + " trabalha como " + Cargo + " e ganha R$" + salario);
  }
};

funcionario.ExibirInfo();
```

> Este tem 5 bugs. Liste todos antes de corrigir qualquer um.
