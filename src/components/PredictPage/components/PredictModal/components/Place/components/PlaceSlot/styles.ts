import styled from "styled-components";
import SlotBig from "./assets/dashBig.svg?react";
import SlotSmall from "./assets/dashSmall.svg?react";
import _CloseRed from "./assets/closeRed.svg?react";

export const Container = styled.div<{ $img?: string }>`
  background-image: url(${(props) => props.$img});
  background-size: cover;
  position: relative;
`;

export const CloseRed = styled(_CloseRed)`
  height: 20px;
  width: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const PlaceSlotBig = styled(SlotBig)`
  height: 100px;
  width: 100px;
`;

export const PlaceSlotSmall = styled(SlotSmall)`
  height: 80px;
  width: 80px;
`;
