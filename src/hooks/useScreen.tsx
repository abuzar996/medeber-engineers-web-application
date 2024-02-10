//import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export const useScreens = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1025px)",
  });
  //   //  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1244px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });
  const isLowTab = useMediaQuery({
    query: "(min-width: 481px) and (max-width:767px)",
  });

  const isPotraitTab = useMediaQuery({
    query: "(min-width:768px) and (max-width: 1024px)",
  });
  return [isMobile, isLowTab, isPotraitTab, isDesktopOrLaptop];
};
