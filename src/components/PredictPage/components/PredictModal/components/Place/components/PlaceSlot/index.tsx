import { useDroppable } from "@dnd-kit/core";
import { CloseRed, Container, PlaceSlotBig, PlaceSlotSmall } from "./styles";
import { IProps } from "./types";
import { useMemo } from "react";
import { teamsGroup } from "@/components/PredictPage/components/PredictModal/consts";

export const PlaceSlot = ({
  id,
  size,
  selected,
  setSelected,
  isEditing,
}: IProps) => {
  const { setNodeRef } = useDroppable({
    id: `${id.title}|${id.index}`,
  });

  const place = useMemo(
    () => +id.title.slice(0, 1) + +id.index,
    [id.index, id.title],
  );

  const teamInPlace = useMemo(
    () => Object.keys(selected).find((key) => selected[key] === place),
    [place, selected],
  );

  const img = useMemo(
    () => teamsGroup.find((item) => item.title === teamInPlace)?.picture,
    [teamInPlace],
  );

  const handleDelete = () => {
    const filteredObject = Object.entries(selected).filter(
      (item) => !item.some((elem) => elem === place),
    );
    setSelected(Object.fromEntries(filteredObject));
  };

  return (
    <Container $img={img} ref={setNodeRef}>
      {isEditing && teamInPlace && <CloseRed onClick={handleDelete} />}
      {size === "big" ? <PlaceSlotBig /> : <PlaceSlotSmall />}
    </Container>
  );
};
