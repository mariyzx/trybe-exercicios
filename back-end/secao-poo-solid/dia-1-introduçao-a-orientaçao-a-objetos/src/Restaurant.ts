class Cliente {
  public _nome: string;

  constructor(n: string) {
    this._nome = n;
  }
}

class Pedido {
  public _cliente: string;
  public _itensConsumidos: string[];
  public _pagamento: string;
  public _desconto?: number;

  constructor(c: string, i: string[], p: string, d: number) {
    this._cliente = c;
    this._itensConsumidos = i;
    this._pagamento = p;
  }
}

class ItemPedido {
  public _nomePedido: string;

  constructor(n: string) {
    this._nomePedido = n;
  }
}