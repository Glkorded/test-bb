import { sliderData } from "./consts.ts";
import {
  Container,
  SliderInfo,
  SliderLeft,
  SliderPicture,
  SliderPrize,
  SliderQuantity,
  SliderRight,
  SliderTitle,
  SliderWrapper,
} from "./styles.ts";
import Freebet from "./assets/freebet.svg?react";

export const FundSlider = () => {
  const sliders = sliderData.map((slider) => (
    <SliderWrapper key={slider.title}>
      <SliderTitle>{slider.title}</SliderTitle>
      <SliderPicture src={slider.picture} />
      <SliderInfo>
        <SliderQuantity>{slider.quantity} угаданных команд</SliderQuantity>
        <SliderPrize>
          {slider.prize} <Freebet />
        </SliderPrize>
      </SliderInfo>
    </SliderWrapper>
  ));

  return (
    <Container>
      {sliders}
      <SliderLeft />
      <SliderRight />
    </Container>
  );
};
