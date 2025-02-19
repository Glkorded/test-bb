import styled from "styled-components";
import { COLORS } from "@ui-kit/consts";
import { ALPHA } from "@ui-kit/consts/alpha";
import _ExitButton from "./assets/close.svg?react";

export const ModalBody = styled.div`
  height: 800px;
  background: ${COLORS.MODAL_BLACK};
  padding: 32px 160px;
  display: flex;
  flex-direction: column;
  gap: 34.5px;
  border-radius: 10px;

  @media (max-width: 1440px) {
    padding: 32px 100px;
  }

  @media (max-width: 1280px) {
    padding: 32px 32px;
  }
`;

export const Header = styled.div`
  font-family: Roboto;
  font-weight: 500;
  font-size: 28px;
  line-height: 32.81px;
  letter-spacing: 0;
  text-align: center;
  color: ${COLORS.WHITE};
`;

export const ExitButton = styled(_ExitButton)`
  cursor: pointer;
  position: absolute;
  top: 34px;
  right: 34px;
`;

export const TeamAndPlaces = styled.div`
  display: flex;
  gap: 16px;
`;

export const TeamSelectorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TeamSelector = styled.div`
  padding: 18px 32px 12px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 192px;
  border: 4px solid ${COLORS.GREY_BORDER};
  border-radius: 8px;
  min-height: 530px;
`;

export const RandomChoice = styled.button`
  background: ${COLORS.GREY + ALPHA["0.3"]};
  width: 192px;
  height: 32px;
  border-radius: 4px;
  padding: 7px 36.5px;
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0;
  text-align: center;
  color: ${COLORS.WHITE};
  outline: none;
  border: none;
`;

export const PlacesWrapper = styled.div`
  display: grid;
  width: 818px;
  gap: 16px;
  grid-template-columns: repeat(4, 192px);
  grid-template-rows: repeat(3, 182px);
  grid-template-areas:
    "first second third third"
    "fourth fourth fifth fifth"
    "sixth sixth sixth sixth";
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
`;

export const FooterTextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding: 16px 62px 16px 32px;
  height: 56px;
`;

export const FooterText = styled.div`
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 171%;
  letter-spacing: 0.02em;
  color: ${COLORS.WHITE};
  margin-right: 10px;
`;

export const FooterQuantity = styled.div`
  font-family: Lato;
  font-weight: 500;
  font-size: 20px;
  line-height: 120%;
  color: ${COLORS.WHITE};
`;

export const FooterEdit = styled.div<{ $isEditing: boolean }>`
  width: 402px;
  height: 56px;
  border-radius: 4px;
  border: 2px solid ${COLORS.GREY_BORDER + ALPHA["0.9"]};
  padding: 16px 43px;
  color: ${(props) =>
    props.$isEditing ? COLORS.BLACK : COLORS.WHITE + ALPHA["0.6"]};
  background-color: ${(props) =>
    props.$isEditing ? COLORS.YELLOW : "transparent"};
  font-family: Lato;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  margin-right: 16px;
  cursor: pointer;
`;

export const FooterConfirm = styled.div`
  width: 402px;
  height: 56px;
  border-radius: 4px;
  padding: 16px 43px;
  background-color: ${COLORS.GREY_BORDER + ALPHA["0.9"]};
  font-family: Lato;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0;
  text-align: center;
  color: ${COLORS.WHITE + ALPHA["0.6"]};
  cursor: pointer;
`;
