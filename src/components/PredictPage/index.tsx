import {
  BGDark,
  BGLeft,
  BGRight,
  BGNoise,
  BGBoxes,
  BGWrapper,
  Container,
  Fund,
  FundButton,
  FundButtonWrapper,
  FundTitle,
  Header,
  HeaderButton,
  HeaderContent,
  HeaderInfoWrapper,
  HeaderTitle,
  Bomb,
  Flashbang,
  AWP,
} from "./styles.ts";
import boxes from "./assets/boxes.png";
import { FundSlider } from "./components/FundSlider";

import awp from "./assets/AWP.png";
import bomb from "./assets/bomb.png";
import flashbang from "./assets/flashbang.png";
import { useState } from "react";
import { PredictModal } from "./components/PredictModal";

export const PredictPage = () => {
  const [isPredictModalOpen, setIsPredictModalOpen] = useState(false);

  const toggleIsPredictModalOpen = () => setIsPredictModalOpen((prev) => !prev);

  return (
    <Container>
      <Header>
        <BGWrapper>
          <BGLeft />
          <BGRight />
          <BGDark />
          <BGNoise />
          <BGBoxes src={boxes} alt={"boxes"} />
        </BGWrapper>
        <HeaderInfoWrapper>
          <HeaderTitle>ЗАГОЛОВОК</HeaderTitle>
          <HeaderContent>
            Расположи команды в порядке мест, которые они займут и получи шанс
            выиграть фрибеты!
          </HeaderContent>
          <HeaderButton onClick={toggleIsPredictModalOpen}>
            Принять участие
          </HeaderButton>
        </HeaderInfoWrapper>
      </Header>
      <Fund>
        <FundTitle>Призовой фонд</FundTitle>
        <FundSlider />
        <FundButtonWrapper>
          <FundButton onClick={toggleIsPredictModalOpen}>
            Расположить команды
          </FundButton>
        </FundButtonWrapper>
      </Fund>
      <AWP src={awp} />
      <Bomb src={bomb} />
      <Flashbang src={flashbang} />
      <PredictModal isOpen={isPredictModalOpen} onClose={toggleIsPredictModalOpen}/>
    </Container>
  );
};
