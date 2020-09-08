import styled from 'styled-components';

export const ButtonStyled = styled.button`
 border-radius: 6px;
  border: none;
  height: 36px;
  background: #E0E0E0;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor:pointer;
  padding: 8px 16px;
  &.outline{
    background: #fff;
    border: 1px solid #3D5AFE;
    color: #3D5AFE;
    &:hover,
    &:focus{
      background: rgba(41, 98, 255, 0.1);
    }
  }
  &.text{
    background: #fff;
    border:  none;
    color: #3D5AFE;
    &:hover,
    &:focus{
      background: rgba(41, 98, 255, 0.1);
    }
  }
  &.sd{
    width: 73px;
  }
  &.md{
    width: 81px;
  }
  &.lg{
    width: 93px;
  }
  &.default{
    background: #E0E0E0;
    &:hover,
    &:focus{
      background: #AEAEAE;
    }
  }
  &.primary{
    background: #2962FF;
    color: #fff;
    &:hover,
    &:focus{
      background: #0039CB;
      box-shadow: 0px 2px 3px rgba(41, 98, 255, 0.2);
    }
  }
  &.secondary{
    background: #455A64;
    color: #fff;
    &:hover,
    &:focus{
      background: #1C313A;
      box-shadow: 0px 2px 3px rgba(69, 90, 100, 0.2);
    }
  }
  &.disable{
    cursor: unset;
  }
  &.danger{
    background: #D32F2F;
    color: #fff;
    &:hover,
    &:focus{
      background: #9A0007;
      box-shadow: 0px 2px 3px rgba(211, 47, 47, 0.2);
    }
  }
  &.disableShadow{
    box-shadow: unset;
    }
   > img{
    width: 13.2px;
    height: 14px;
    display: flex;
    margin-right: 5px;
    &.endIcon{
      margin-left: 5px;
      margin-right: unset;
    }
`;