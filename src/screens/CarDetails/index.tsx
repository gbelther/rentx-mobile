import React from "react";

import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import { Container, Header, CarImages } from "./styles";

export function CarDetails() {
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
    </Container>
  );
}
