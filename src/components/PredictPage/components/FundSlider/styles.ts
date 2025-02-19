import styled from "styled-components";
import { COLORS } from "@ui-kit/consts";
import { ALPHA } from "@ui-kit/consts/alpha";

export const Container = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 84px;
  justify-content: center;
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27.5px;
  width: 298px;
  height: 360px;
  justify-content: space-between;
  border-radius: 8px;
  padding: 24px 32px;
  background: ${COLORS.GREY + ALPHA["0.3"]};
  backdrop-filter: blur(12px);
  position: relative;
  z-index: 1;
`;

export const SliderTitle = styled.div`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 22px;
  line-height: 26.69px;
  letter-spacing: 0.26px;
  background: linear-gradient(
    264.2deg,
    ${COLORS.ORANGE_LIGHT} 1.01%,
    ${COLORS.ORANGE} 100.92%
  );
  color: transparent;
  background-clip: text;
  height: 39px;
  width: min-content;
  position: relative;
  padding: 6px 8px;

  &:after {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    width: calc(100%);
    height: calc(100%);
    padding: 2px;
    border-radius: 8px;

    background: linear-gradient(
      264.2deg,
      ${COLORS.ORANGE_LIGHT} 1.01%,
      ${COLORS.ORANGE} 100.92%
    );

    clip-path: inset(0 round 8px);

    mask:
      linear-gradient(white, white) content-box,
      linear-gradient(white, white);

    mask-composite: exclude;
  }
`;

export const SliderPicture = styled.img`
  width: 231px;
  height: 150px;
`;

export const SliderInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
`;

export const SliderQuantity = styled.div`
  font-family: Gilroy;
  font-weight: 500;
  font-size: 20px;
  line-height: 24.26px;
  letter-spacing: 0;
  color: ${COLORS.WHITE};
`;

export const SliderPrize = styled.div`
  font-family: Gilroy;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 0;
  color: ${COLORS.WHITE};
`;
