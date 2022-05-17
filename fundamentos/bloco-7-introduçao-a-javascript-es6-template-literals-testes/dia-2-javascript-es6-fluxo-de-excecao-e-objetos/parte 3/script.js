const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };

  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };

  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

 // A função abaixo adiciona um novo par chave-valor em um objeto.

  const addNoite = (obj, chave, valor) => {

      obj[chave] = valor;
  }

 addNoite(lesson2, 'turno', 'noite')

 // A função abaixo lista as keys de um objeto

 const listKeys = (obj) => {
     Object.keys(obj);
 }

 listKeys(lesson2);

 // A função abaixo mostra o tamanho de um objeto

 const objLength = (obj) => {
     Object.keys(obj).length;
 }

 objLength(lesson2);

 // A função abaixo lista os valores de um objeto

 const objValues = (obj) => {
     Object.values(obj);
 }

 objValues(lesson2)

 // Cria um novo objeto com todos os objetos 'lesson'.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });


 // A função abaixo resulta o número total de estudantes em todas as aulas.

 const totalStudents = (obj) => {
    let chaves = Object.keys(obj);

    let total = 0;

    for (let i = 0; i < chaves.length; i += 1) {
        let chaveAtual = chaves[i]
        total += obj[chaveAtual].numeroEstudantes
    }
    console.log(total);
    return total;
 }

 totalStudents(allLessons); 