import { ReactNode } from "react";
export enum FIRMNAME {
  NAME = "MEDEBER",
}

import type { MenuProps } from "antd";
export interface HomepageData {
  id: number;
  label: string;
  icon: ReactNode;
  items?: MenuProps["items"];
}
