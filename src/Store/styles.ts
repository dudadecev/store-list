import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background: #91ff9c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 0 50px;

  input {
    width: 350px;
    height: 30px;
    background: #e7e7e7;
    border: 2px solid #c9c9c9;
    box-sizing: border-box;
    border-radius: 20px;
    padding-left: 20px;
  }
`;
export const LogoImage = styled.img`
  width: 60px;
  height: 50px;
`;
export const CartImage = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;
export const TitleContainer = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  h1 {
    width: 155px;
    height: 42px;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 42px;
    color: #000000;
    margin: 20px 0 0 0;
  }

  div {
    width: 100%;
    border-bottom: 2px solid #bfbfbf;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 105px;
  justify-content: center;  
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8f8;
  border: 2px solid #90ff9c;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 20px;
  row-gap: 15px;
  h2 {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #000000;
    width: 205px;
    word-wrap: break-word;
    margin: 0;
  }

  span {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.08em;
    color: #6a6a6a;
  }

  button {
    width: 200px;
    height: 40px;
    background: #90ff9c;
    border: 2px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    cursor: pointer;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.08em;
    color: #000000;
    display: none;
  }
  :hover {
    button {
      display: block;
    }
  }
`;

export const Product = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  img {
    width: 100px;
    height: 150px;
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2px;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 21px;
    letter-spacing: 0.08em;
    color: #000000;
    margin: 0;
  }
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    width: 220px;
    word-wrap: break-word;
    margin: 0;
  }
`;
