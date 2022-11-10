import Client from "./Client";
import ItemPedido from "./OrderItem";

export default class Pedido {
  public _cliente: Client;
  public _itensConsumidos: ItemPedido[] = [];
  public _pagamento: string;
  public _desconto: number;

  constructor(c: Client, i: ItemPedido[], p: string, d: number) {
    this._cliente = c;
    this._itensConsumidos = i;
    this._pagamento = p;
    this._desconto = d;
  }

  get cliente(): Client {
    return this._cliente;
  }

  set cliente(value: Client) {
    this._cliente = value;
  }

  get itens(): ItemPedido[] {
    return this._itensConsumidos;
  }

  set itens(value: ItemPedido[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve ter pelo menos um item.')
    }

    this._itensConsumidos = value;
  }

  get pagamento(): string {
    return this._pagamento;
  }

  set pagamento(value: string) {
    this._pagamento = value;
  }

  get desconto(): number {
    return this._desconto;
  }

  set desconto(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ser um valor negativo.');
    }

    this._desconto = value;
  }

  totalPedido(): number {
    return this._itensConsumidos.reduce((a, b) => a + b.preço, 0)
  }

  totalPedidoCDesconto(): number {
    const total = this.totalPedido();
    return total * ( 1 - this._desconto)
  }
}
