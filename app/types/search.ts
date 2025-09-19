export type Building = {
  id: number;
  title: string;
  icon: string;
  color: string;
};

export type Room = {
  id: number;
  room: string;
  building: string;
};
