export default class Estudante {
  public _matricula: string;
  public _nome: string;
  public _notas: number[];
  public _trabalhos: number[];

  constructor(matricula: string, nome: string) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = [];
    this._trabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo 3 caracteres.')
    }

    this._nome = value;
  }

  get notas(): number[] {
    return this._notas
  }

  set notas(value: number[]) {
    if (value.length > 4) {
      throw new Error('A pessoa estudante deve ter no máximo 4 notas de provas.')
    }

    this._notas = value;
  }

  get notasTrabalhos(): number[] {
    return this._trabalhos;
  }

  set notasTrabalhos(value: number[]) {
    if (value.length > 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.')
    }
    this._trabalhos = value;
  }

  calculaTotalNotas(): number {
    return [...this._notas, ...this._trabalhos].reduce((a,b) => {
      const nota = a + b;
      return nota
    }, 0)
  }

  calculaMediaNotas(): number {
    const total = this.calculaTotalNotas() 
    const div = this._notas.length + this._trabalhos.length;
    return Math.round(total / div)
  }
}