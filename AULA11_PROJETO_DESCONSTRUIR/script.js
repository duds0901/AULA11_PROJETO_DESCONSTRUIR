
//1 construir um objeto 
let pessoa = {
    nome: 'Pedro',
    sobrenome: 'Brecher',
    empresa: 'CESF',
    cargo: 'Engenheiro de software'
};

//2 consumindo o objeto 
console.log(pessoa);
//3 consumo de caracteristicas do objeto 
console.log(pessoa.nome);
console.log(pessoa.cargo);

//4 desconstruindo o objeto
//const {nome, cargo, empresa}=pessoa
//console.log(nome);
//console.log(empresa);
//console.log(cargo);

let nome = 'TESTE';

const {nome: nomePessoa, cargo, empresa}=pessoa;
console.log(pessoa.nome);
console.log(nomePessoa);
console.log(cargo);
console.log(empresa);

//5 desconstruir um array
let nomes = ['Aparicio','Bernadete','Cremilda'];
console.log(nomes);
//console.log(nomes[2]);

let {0:primNome, 1:segNome, 2:terNome} = nomes;
console.log(primNome);
console.log(terNome);

//outra forma de desconstruir o array
let [nomeA ,nomeB, nomeC] = nomes;
console.log(nomeA);
console.log(nomeC);

