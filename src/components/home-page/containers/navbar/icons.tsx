import { ReactNode } from "react";
import { IconContext } from "react-icons";
//const color1 = "#1b1247";
interface IconProps {
  children: ReactNode;
}
const Icons: React.FC<IconProps> = ({ children }) => {
  return (
    <IconContext.Provider value={{ color: "#efc75e", size: "25" }}>
      {children}
    </IconContext.Provider>
  );
};
export default Icons;
