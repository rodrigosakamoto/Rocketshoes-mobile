import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { darken } from 'polished';

export const ProductList = styled.FlatList``;

export const ProductContainer = styled.View`
  flex: 1;
  background: #191920;
  justify-content: center;
`;

export const Product = styled.View`
  background: #fff;
  width: 220px;
  height: 400px;
  border-radius: 4px;
  padding: 10px;
  margin: 0 0px 0 20px;
  justify-content: space-around;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  line-height: 21px;
  margin-top: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  line-height: 25px;
  font-weight: bold;
  margin: 5px 0 15px 0;
`;

export const AddButton = styled(RectButton)`
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  color: #fff;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
`;
