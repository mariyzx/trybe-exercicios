export default class ItemPedido {
  public _nomePedido: string;
  public _preço: number;

  constructor(n: string, p: number) {
    this._nomePedido = n;
    this._preço = p;
  }

  get nome(): string {
    return this._nomePedido;
  }

  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres')
    }

    this._nomePedido = value;
  }

  get preço(): number {
    return this._preço;
  }

  set preço(value: number) {
    if (value < 0) throw new Error('O preço deve ser positivo.')

    this._preço = value;
  }
}