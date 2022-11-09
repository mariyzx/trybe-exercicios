class Estudante {
  public _matricula: number;
  public _nome: string;
  public _notas: number[];
  public _trabalhos: number[];

  constructor(matricula: number, nome: string, notas: number[], trabalhos: number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this._notas = notas;
    this._trabalhos = trabalhos;
  }

  calculaTotalNotas(notas: number[]): number {
    return notas.reduce((a,b) => a + b, 0)
  }

  calculaMediaNotas(notas: number[]): number {
    const total = this.calculaTotalNotas(notas) 
    return total / notas.length
  }
}