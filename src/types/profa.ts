export type ProfaType = {
  id: number;
  date: string;
  duration: {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  };
  ages: string;
  capacity: number;
};
