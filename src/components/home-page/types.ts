import { ReactNode } from "react";
export enum FIRMNAME {
  NAME = "M.E.D.E.B.E.R",
}

import type { MenuProps } from "antd";
export interface HomepageData {
  id: number;
  label: string;
  icon: ReactNode;
  items?: MenuProps["items"];
}
