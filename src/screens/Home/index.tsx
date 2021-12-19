import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";
import { useTheme } from "styled-components";
import { Ionicons } from "@expo/vector-icons";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";

import { Car } from "../../components/Car";
import { Load } from "../../components/Load";

import {
  CarList,
  Container,
  Header,
  HeaderContent,
  MyCarsButton,
  TotalCars,
} from "./styles";

export function Home() {
  const theme = useTheme();
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);

  function handleCarDetails(car: CarDTO) {
    navigate("CarDetails", { car });
  }

  function handleOpenMyCars() {
    navigate("MyCars");
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
            <Car data={item} onPress={() => handleCarDetails(item)} />
          )}
        />
      )}

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={32} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
