import React from "react";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { ImageSlider } from "../../components/ImageSlider";

import SpeedSvg from "../../assets/speed.svg";
import AccelerationSvg from "../../assets/acceleration.svg";
import ForceSvg from "../../assets/force.svg";
import GasolineSvg from "../../assets/gasoline.svg";
import ExchangeSvg from "../../assets/exchange.svg";
import PeopleSvg from "../../assets/people.svg";

import {
  Container,
  Header,
  CarImages,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  About,
  Accessories,
  Footer,
} from "./styles";
import {
  useNavigation,
  NavigationProp,
  ParamListBase,
} from "@react-navigation/native";

export function CarDetails() {
  const { navigate }: NavigationProp<ParamListBase> = useNavigation();

  function handleConfirmRental() {
    navigate("Scheduling");
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider
          imagesUrl={[
            "https://w7.pngwing.com/pngs/444/585/png-transparent-2018-audi-tt-rs-car-audi-rs5-coupe-audi-compact-car-car-performance-car.png",
          ]}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Lambirghini</Brand>
            <Name>Huracan</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380Km/h" icon={SpeedSvg} />
          <Accessory name="3.2s" icon={AccelerationSvg} />
          <Accessory name="800 HP" icon={ForceSvg} />
          <Accessory name="Gasolina" icon={GasolineSvg} />
          <Accessory name="Auto" icon={ExchangeSvg} />
          <Accessory name="2 pessoas" icon={PeopleSvg} />
        </Accessories>

        <About>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          laboriosam ad, omnis dicta, animi ratione, temporibus neque pariatur
          et architecto eligendi labore rem voluptate similique quasi!
          Architecto quam omnis iusto?
        </About>
      </Content>

      <Footer>
        <Button
          title="Escolher período do aluguel"
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
