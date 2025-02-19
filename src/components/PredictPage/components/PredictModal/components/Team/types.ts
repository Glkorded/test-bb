export type IProps = {
  team: ITeam;
  setSelectedTeam: (team: string) => void;
  selectedTeam: string;
};

export type ITeam = {
  picture: string;
  title: string;
};
