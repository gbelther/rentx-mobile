import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

import { CarList, Container, Header, HeaderContent, TotalCars } from "./styles";

export function Home() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  const carData = {
    brand: "Audi",
    name: "RS 5 Coupé",
    rent: {
      period: "Ao dia",
      price: 120,
    },
    thumbnail:
      "https://w7.pngwing.com/pngs/444/585/png-transparent-2018-audi-tt-rs-car-audi-rs5-coupe-audi-compact-car-car-performance-car.png",
  };

  function handleCarDetails() {
    navigate("CarDetails");
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get("cars");
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCars();
  }, []);

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
      {loading ? (
        <Load />
      ) : (
        <CarList
          data={cars}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Car data={item} onPress={handleCarDetails} />
          )}
        />
      )}
    </Container>
  );
}
