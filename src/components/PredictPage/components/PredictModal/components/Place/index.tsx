import { Container, PlaceHeader, PlaceSlots } from "./styles";
import { IProps } from "./types";
import { PlaceSlot } from "./components/PlaceSlot";

export const Place = ({
  place,
  size,
  slots,
  selected,
  setSelected,
  isEditing,
}: IProps) => {
  return (
    <Container $gridPlace={place.gridPlace} size={size} key={place.title}>
      <PlaceHeader>{place.title}</PlaceHeader>
      <PlaceSlots size={size}>
        {slots.map((_, index) => (
          <PlaceSlot
            key={index}
            id={{ title: place.title, index }}
            size={size}
            selected={selected}
            setSelected={setSelected}
            isEditing={isEditing}
          />
        ))}
      </PlaceSlots>
    </Container>
  );
};
