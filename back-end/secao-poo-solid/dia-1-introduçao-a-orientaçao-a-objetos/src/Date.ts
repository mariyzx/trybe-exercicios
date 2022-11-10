export default class Data {
  public _dia: number;
  public _mes: number;
  public _ano: number;

  constructor(dia: number, mes: number, ano: number) {
    const dataStr = `${dia}-${mes}-${ano}`;

    if (new Date(dataStr).getDate() != dia) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  get dia(): number {
    return this._dia;
  }

  set dia(value: number) {
    this._dia = value;
  }

  get mes(): number {
    return this._mes;
  }

  set mes(value: number) {
    this._mes = value;
  }

  get ano(): number {
    return this._ano;
  }

  set ano(value: number) {
    this._ano = value;
  }
}