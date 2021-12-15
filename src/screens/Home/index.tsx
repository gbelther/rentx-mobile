import React from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { Car } from "../../components/Car";

import { Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const carDataOne = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://w7.pngwing.com/pngs/444/585/png-transparent-2018-audi-tt-rs-car-audi-rs5-coupe-audi-compact-car-car-performance-car.png",
  };

  const carDataTwo = {
    brand: "Porsche",
    name: "Gol",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://w7.pngwing.com/pngs/522/870/png-transparent-volkswagen-gol-car-vw-saveiro-volkswagen-up-volkswagen-compact-car-sedan-car.png",
  };

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />
          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <Car data={carDataOne} />
      <Car data={carDataTwo} />
    </Container>
  );
}
