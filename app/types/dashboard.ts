/**
 * Navigation Type Feature
 */
export type Feature = {
  id: number;
  title: string;
  icon: string;
  color: string;
  description: string;
};

/**
 * Navigation Type Building
 */
export type Building = {
  id: number;
  title: string;
  icon: string;
  color: string;
  floors: string;
};

/**
 * Navigation Type Search Entry
 */
export type Search = {
  id: number;
  room: string;
  building: string;
  time: string;
};

