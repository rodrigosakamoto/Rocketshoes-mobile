import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  margin: 20px;
  padding: 10px;
  flex: 1;
`;

export const CartTotal = styled.View``;

export const CartList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Product = styled.View``;

export const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
`;

export const ProductInfo = styled.View`
  width: 163px;
  height: 60px;
`;

export const Remove = styled.TouchableOpacity``;

export const ProductText = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #333;
`;
export const ProductPrice = styled.Text`
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  color: #000;
`;
export const Actions = styled.View`
  background: #eee;
  height: 40px;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ControllButton = styled.TouchableOpacity``;

export const ProductAmount = styled.Text`
  width: 51px;
  height: 26px;
  background: #fff;
  color: #666;
  border: 1px solid #dddddd;
  border-radius: 4px;
  text-align: center;
  padding: 5px;
  margin: 0 5px;
`;

export const ProductSubTotal = styled.Text``;

export const TotalText = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  font-weight: bold;
  color: #999;
  margin-top: 30px;
`;

export const TotalPrice = styled.Text`
  text-align: center;
  font-size: 30px;
  line-height: 35px;
  font-weight: bold;
  color: #000;
  margin-bottom: 30px;
`;

export const CartOrder = styled.TouchableOpacity`
  background: #7159c1;
  border-radius: 4px;
  margin: 10px;
`;

export const OrderText = styled.Text`
  text-align: center;
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  color: #fff;
  padding: 15px;
`;

export const EmptyCart = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;
export const EmptyText = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;
