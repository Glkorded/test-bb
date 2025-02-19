import styled from "styled-components";
import { COLORS } from "@ui-kit/consts";

export const Container = styled.div<{ $isSelected: boolean, $isDragging: boolean }>`
  padding: 11px 20px;
  height: 120px;
  width: 120px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  opacity: ${(props) => (props.$isSelected ? 1 : 0.4)};
  position: relative;
  background: ${(props) =>
    props.$isSelected && !props.$isDragging &&
    `linear-gradient(${COLORS.YELLOW}, ${COLORS.YELLOW}) bottom 0 right 2px / 16px 2px no-repeat,` +
      `linear-gradient(${COLORS.YELLOW}, ${COLORS.YELLOW}) bottom 2px right 0 / 2px 16px no-repeat,` +
      `linear-gradient(${COLORS.RED}, ${COLORS.RED}) top 0 left 2px / 16px 2px no-repeat,` +
      `linear-gradient(${COLORS.RED}, ${COLORS.RED}) top 2px left 0 / 2px 16px no-repeat;`};
    
    transition: opacity 0.3s linear;
    cursor: pointer;
    &:hover {
        opacity:1
    }
`;

export const TeamPicture = styled.img`
  height: 80px;
  width: 80px;
`;

export const TeamText = styled.div`
  font-family: Lato;
  font-weight: 500;
  font-size: 12px;
  line-height: 14.4px;
  letter-spacing: 0;
  text-align: center;
  color: ${COLORS.WHITE};
`;
