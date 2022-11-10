export default class Client {
  public _nome: string;

  constructor(n: string) {
    this._nome = n;
  }

  get name(): string {
    return this._nome;
  }

  set name(value:string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }

    this._nome = value;
  }
}