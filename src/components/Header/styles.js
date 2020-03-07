import styled from 'styled-components/native';

import logo from '../../assets/image/logo.png';

export const Container = styled.SafeAreaView`
  background: #191920;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  margin: 20px;
`;

export const LogoButton = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  align-content: center;
`;

export const CartButton = styled.TouchableOpacity``;

export const CartBadge = styled.Text`
  font-size: 12px;
  color: #fff;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  background: #7159c1;
  text-align: center;
  position: absolute;
  padding: 2px;
  overflow: hidden;
  top: -8px;
  right: -8px;
`;
