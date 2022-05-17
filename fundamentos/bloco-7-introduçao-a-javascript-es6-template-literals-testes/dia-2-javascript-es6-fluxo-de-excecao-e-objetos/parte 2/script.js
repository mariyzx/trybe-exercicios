const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };

  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    let retorno = `Olá ${order.order.delivery.deliveryPerson}, entrega para ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment} `
    console.log(retorno);
  }

  customerInfo(order);

  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoNome = order.name = 'Luiz Silva';
    const pedidos = Object.keys(order.order.pizza);
    const bebida = order.order.drinks.coke.type;
    const preco = order.payment = '50,00'

    let retorno = `Olá ${novoNome}, o total do seu pedido de ${pedidos[0]}, ${pedidos[1]}  e ${bebida} é R$ ${preco}`;
    console.log(retorno);
  }

  orderModifier(order); 