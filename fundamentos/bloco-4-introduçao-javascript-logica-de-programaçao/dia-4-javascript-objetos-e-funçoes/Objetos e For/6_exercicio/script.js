let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };

  let fullName = leitor.nome + ' ' + leitor.sobrenome
  let livro = leitor.livrosFavoritos[0].titulo

  console.log('O livro favorito de ' + fullName + ' se chama ' + livro);