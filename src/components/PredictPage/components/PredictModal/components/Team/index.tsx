import { Container, TeamPicture, TeamText } from "./styles";
import { IProps } from "./types";
import { useDraggable } from "@dnd-kit/core";

export const Team = ({ team, setSelectedTeam, selectedTeam }: IProps) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: team.title,
    disabled: team.title !== selectedTeam,

  });

  const style = transform
      ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
      : undefined;

  return (
    <Container
      key={team.title}
      onClick={() => setSelectedTeam(team.title)}
      $isSelected={team.title === selectedTeam}
      $isDragging={isDragging}
      style={style}
      ref={setNodeRef}
      {...listeners}
      {...attributes}
    >
      <TeamPicture src={team.picture} />
      <TeamText>{team.title}</TeamText>
    </Container>
  );
};
