/* eslint-disable array-callback-return */
import React, { useState, useEffect } from "react";
import {
  Container,
  Header,
  LogoImage,
  CartImage,
  TitleContainer,
  ContentContainer,
  CardContainer,
  Product,
  PriceContainer,
  Description,
  CardBox,
} from "./styles";
import Logo from "C:/Users/discover/Documents/store-list/src/asset/image/Logo.png";
import Cart from "C:/Users/discover/Documents/store-list/src/asset/image/Cart.png";
import axios from "axios";

interface IProductData {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: IRating;
  title: string;
}

interface IRating {
  count: number;
  rate: number;
}

export const Store: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const [productData, setProductData] = useState<IProductData[]>([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProductData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // baixar biblioteca axios - ok
  // utilizar useEffect para recebimento de dados - ok
  // salvar os dados em um estado - ok
  // tipar o estado - ok
  // manipular array de dados na renderização do html - ok
  // criar modal de confirmação de compra
  // criar estado e incluir no botao de compra para abrir no modal

  return (
    <Container>
      <Header>
        <LogoImage src={Logo} alt="Logo" />
        <input
          type="text"
          placeholder="Pesquisar produto"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <CartImage src={Cart} alt="Cart" />
      </Header>
      <TitleContainer>
        <h1>Produtos:</h1>
        <div />
      </TitleContainer>
      <ContentContainer>
        <CardBox>
          {productData
            .filter((item) => {
              if (searchText === "") {
                return item;
              } else if (
                item.title.toLowerCase().includes(searchText.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item, index) => (
              <CardContainer key={index}>
                <h2>{item.title}</h2>
                <Product>
                  <img src={item.image} alt="HandBag" />
                  <PriceContainer>
                    <span>Preço:</span>
                    <p>R$ {item.price}</p>
                    <span>Avaliação:</span>
                    <p>{item.rating.rate}</p>
                  </PriceContainer>
                </Product>
                <Description>
                  <span>Categoria</span>
                  <p>{item.category}</p>
                  <span>Descrição</span>
                  <p>{item.description}</p>
                </Description>
                <button>COMPRAR</button>
              </CardContainer>
            ))}
        </CardBox>
      </ContentContainer>
    </Container>
  );
};
