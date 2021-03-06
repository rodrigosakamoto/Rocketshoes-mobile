import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartList,
  Product,
  ProductContainer,
  ProductImage,
  ProductInfo,
  Remove,
  ProductText,
  ProductPrice,
  Actions,
  ButtonsContainer,
  ControllButton,
  ProductAmount,
  ProductSubTotal,
  CartTotal,
  TotalText,
  TotalPrice,
  CartOrder,
  OrderText,
  EmptyCart,
  EmptyText,
} from './styles';

export default function Cart() {
  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <CartList>
            {cart.map(item => (
              <Product key={item.id}>
                <ProductContainer>
                  <ProductImage source={{ uri: item.image }} />
                  <ProductInfo>
                    <ProductText>{item.title}</ProductText>
                    <ProductPrice>{item.priceFormatted}</ProductPrice>
                  </ProductInfo>
                  <Remove
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  >
                    <Icon name="delete-forever" size={24} color="#7159c1" />
                  </Remove>
                </ProductContainer>
                <Actions>
                  <ButtonsContainer>
                    <ControllButton onPress={() => decrement(item)}>
                      <Icon
                        name="remove-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ControllButton>
                    <ProductAmount>{item.amount}</ProductAmount>
                    <ControllButton onPress={() => increment(item)}>
                      <Icon
                        name="add-circle-outline"
                        size={20}
                        color="#7159c1"
                      />
                    </ControllButton>
                  </ButtonsContainer>
                  <ProductSubTotal>{item.subtotal}</ProductSubTotal>
                </Actions>
              </Product>
            ))}
          </CartList>
          <CartTotal>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{total}</TotalPrice>
            <CartOrder>
              <OrderText>FINALIZAR PEDIDO</OrderText>
            </CartOrder>
          </CartTotal>
        </>
      ) : (
        <EmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#eee" />
          <EmptyText>Seu Carrinho está vazio</EmptyText>
        </EmptyCart>
      )}
    </Container>
  );
}
