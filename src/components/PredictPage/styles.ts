import styled from "styled-components";
import { COLORS } from "@ui-kit/consts";
import _BGLeft from "./assets/BGLeft.svg?react";
import _BGRight from "./assets/BGRight.svg?react";
import _BGDark from "./assets/BGDark.svg?react";
import noise from "./assets/noise.png";
import teamNoise from "./assets/teamNoise.png";

export const Container = styled.div`
  background: ${COLORS.BLACK};
  width: 100%;
  height: 100%;
  min-height: 100vh;
  overflow-y: hidden;
`;

export const Header = styled.div`
  aspect-ratio: 1920 / 655;
  margin-bottom: 87px;
  position: relative;
`;

export const BGWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 15;
`;

export const BGLeft = styled(_BGLeft)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
`;

export const BGRight = styled(_BGRight)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 10;
  max-height: 100%;
  width: auto;
`;

export const BGDark = styled(_BGDark)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5;
  width: 100%;
  height: auto;
`;

export const BGNoise = styled.div`
  position: absolute;
  background-image: url(${noise});
  width: 100%;
  height: 100%;
  z-index: 15;
  mix-blend-mode: color-burn;
`;

export const BGBoxes = styled.img`
  position: absolute;
  right: 122px;
  top: 0;
  z-index: 15;
  height: 100%;
`;

export const HeaderInfoWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  max-height: 655px;
  max-width: 666px;
  margin-left: 200px;
  top: 0;
  left: 0;
  z-index: 20;
`;

export const HeaderTitle = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 80px;
  line-height: 93.75px;
  letter-spacing: 0;
  color: ${COLORS.WHITE};
  margin-bottom: 14px;
`;

export const HeaderContent = styled.div`
  font-family: Open Sans;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0;
  color: ${COLORS.WHITE};
  margin-bottom: 40px;
`;

export const HeaderButton = styled.button`
  font-family: Lato;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  width: 242px;
  height: 56px;
  background-color: ${COLORS.YELLOW};
  color: ${COLORS.BLACK_TEXT};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const Fund = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 480px;
`;

export const FundTitle = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 72px;
  line-height: 84.38px;
  letter-spacing: 0;
  text-align: center;
  color: ${COLORS.WHITE};
  margin-bottom: 32px;
`;

export const FundButtonWrapper = styled.div`
  width: 602px;
  height: 250px;
  background-image: url(${teamNoise});
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  backdrop-filter: blur(12px);
`;

export const FundButton = styled.button`
  font-family: Lato;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  width: 242px;
  height: 56px;
  background-color: ${COLORS.YELLOW};
  color: ${COLORS.BLACK_TEXT};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const AWP = styled.img`
  position: absolute;
  top: 1276px;
  left: 1392px;
  z-index: 0;
  height: 488px;
  width: 488px;
`;

export const Bomb = styled.img`
  position: absolute;
  top: 1411px;
  left: -46px;
  z-index: 2;
  height: 546px;
  width: 546px;
`;

export const Flashbang = styled.img`
  position: absolute;
  top: 778px;
  left: 130px;
  z-index: 0;
  height: 335px;
  width: 335px;
`;
