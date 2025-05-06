
// Exercício 7: Trabalhando com arrays de objetos
let alunos = [
    { nome: "João", idade: 20, nota: 8.5 },
    { nome: "Maria", idade: 22, nota: 9.0 },
    { nome: "Pedro", idade: 19, nota: 7.5 }
];
alunos.push({ nome: "Lucas", idade: 21, nota: 9.5 });
let alunoMelhorNota = alunos.reduce((max, aluno) => (aluno.nota > max.nota ? aluno : max), alunos[0]);
console.log(alunoMelhorNota);
let alunosAprovados = alunos.filter(aluno => aluno.nota > 8);
console.log(alunosAprovados);
