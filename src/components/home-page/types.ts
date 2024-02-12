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

export interface CustomInnerContainer {
  label: string;
  subHeading: string;
  headImage: string;
  headDescription: string;
}
export interface CustomContainerServices {
  id: string;
  label: string;
  serviceImage: string;
  headDescription: string;
}
export interface CustomContainer {
  image: string;
  mainLabel: string;
  description: string;
  headData: CustomInnerContainer;
  services: CustomContainerServices[];
}
