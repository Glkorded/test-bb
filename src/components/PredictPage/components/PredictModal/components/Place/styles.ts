import styled from "styled-components";
import {COLORS, ALPHA} from "@ui-kit/consts";

export const Container = styled.div<{ $gridPlace: string; size: "small" | "big" }>`
  grid-area: ${(props) => props.$gridPlace};
  background: ${COLORS.GREY + ALPHA["0.3"]};
  border-radius: 8px;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  gap: ${(props) => (props.size === "big" ? "20px" : "32px")};
`;

export const PlaceHeader = styled.div`
  font-family: Lato;
  font-weight: 500;
  font-size: 18px;
  line-height: 21.6px;
  letter-spacing: 0;
  text-align: center;
  color: ${COLORS.WHITE + ALPHA["0.6"]};
`;

export const PlaceSlots = styled.div<{ size: "small" | "big" }>`
  display: flex;
  gap: ${(props) => (props.size === "big" ? "48px" : "44px")};
`;
