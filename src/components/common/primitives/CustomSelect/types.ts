export type TSelect = { checked?: boolean } & Record<string, string | number>;

export type TSelectProps = {
  options?: TSelect[];
  setState: (item: Record<string, string | number>) => void;
  state?: Record<string, string | number>;
  fieldName: string;
  comparisonField?: string;
  searchField?: string;
  text: string;
};
