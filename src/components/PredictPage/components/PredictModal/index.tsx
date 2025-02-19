import { Modal } from "@ui-kit/components/Modal";
import { IPredictModalProps, ISelected } from "./types";
import {
  ExitButton,
  Footer,
  FooterConfirm,
  FooterEdit,
  FooterQuantity,
  FooterText,
  FooterTextWrapper,
  Header,
  ModalBody,
  PlacesWrapper,
  RandomChoice,
  TeamAndPlaces,
  TeamSelector,
  TeamSelectorWrapper,
} from "./styles.ts";
import { placesGroup, teamsGroup } from "./consts";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { Team } from "./components/Team";
import { Place } from "./components/Place";

export const PredictModal = ({ isOpen, onClose }: IPredictModalProps) => {
  const [selectedTeam, setSelectedTeam] = useState("");
  const [selected, setSelected] = useState<ISelected>({});
  const [isEditing, setIsEditing] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("teamSelection", JSON.stringify(selected));
  }, [selected]);

  useLayoutEffect(() => {
    const LSCache = localStorage.getItem("teamSelection");

    if (LSCache) {
      setSelected(JSON.parse(LSCache));
    }
  }, []);

  const toggleIsEditing = () => setIsEditing((prev) => !prev);

  const places = placesGroup.map((place) => {
    const slots = new Array(place.slots).fill("");
    const size = place.gridPlace === "sixth" ? "small" : "big";
    return (
      <Place
        key={place.title}
        place={place}
        size={size}
        slots={slots}
        selected={selected}
        setSelected={setSelected}
        isEditing={isEditing}
      />
    );
  });

  const teams = useMemo(() => {
    const filteredTeams = teamsGroup.filter(
      (team) => !Object.keys(selected).some((item) => item === team.title),
    );

    return filteredTeams.map((team) => (
      <Team
        key={team.title}
        team={team}
        selectedTeam={selectedTeam}
        setSelectedTeam={setSelectedTeam}
      />
    ));
  }, [selected, selectedTeam]);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      if (!event.over) {
        return;
      }

      const eventOverId = event.over.id as string;
      const placeToPut =
        Number(eventOverId.slice(0, 1)) + Number(eventOverId.split("|")[1]);

      if (selected[event.active.id]) {
        return;
      }

      setSelected((prev) => {
        return {
          ...prev,
          [event.active.id]: placeToPut,
        };
      });

      setSelectedTeam("");
    },
    [selected],
  );

  if (!isOpen) {
    return null;
  }

  return (
    <Modal>
      <DndContext onDragEnd={handleDragEnd}>
        <ModalBody>
          <Header>Перенеси логотип команды на соответствующее место</Header>
          <ExitButton onClick={onClose} />
          <TeamAndPlaces>
            <TeamSelectorWrapper>
              <TeamSelector>{teams}</TeamSelector>
              <RandomChoice>Случайный выбор</RandomChoice>
            </TeamSelectorWrapper>
            <PlacesWrapper>{places}</PlacesWrapper>
          </TeamAndPlaces>
          <Footer>
            <FooterTextWrapper>
              <FooterText>Выбрано</FooterText>
              <FooterQuantity>{Object.keys(selected).length}/12</FooterQuantity>
            </FooterTextWrapper>
            <FooterEdit onClick={toggleIsEditing} $isEditing={isEditing}>
              Редактировать
            </FooterEdit>
            <FooterConfirm>Подтвердить выбор</FooterConfirm>
          </Footer>
        </ModalBody>
      </DndContext>
    </Modal>
  );
};
