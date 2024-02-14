// TODO: Fix up this file after merging

import { Spin } from "antd";
import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("../components/home-page"));
const Main = lazy(() => import("../components/home-page/views/home"));
const Market = lazy(() => import("../components/home-page/views/market"));
const Services = lazy(() => import("../components/home-page/views/service"));
const SubService = lazy(
  () => import("../components/home-page/views/subService")
);
const StructuralEngineering = lazy(
  () => import("../components/home-page/views/sub-services")
);
// const CustomServices = lazy(
//   () => import("../components/home-page/commons/custom-service/custom-service")
// );
import App from "../App";
const FullscreenSpinner = () => <Spin fullscreen />;

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <Suspense fallback={<FullscreenSpinner />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<FullscreenSpinner />}>
            <HomePage />
          </Suspense>
        ),
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<FullscreenSpinner />}>
                <Main />
              </Suspense>
            ),
          },
          {
            path: "/market",
            element: (
              <Suspense fallback={<FullscreenSpinner />}>
                <Market />
              </Suspense>
            ),
          },
          {
            path: "/services",
            element: (
              <Suspense fallback={<FullscreenSpinner />}>
                <Services />
              </Suspense>
            ),
            children: [
              {
                path: "/services/",
                element: (
                  <Suspense fallback={<FullscreenSpinner />}>
                    <SubService />
                  </Suspense>
                ),
              },
              {
                path: "/services/:childRoute",
                element: (
                  <Suspense fallback={<FullscreenSpinner />}>
                    <StructuralEngineering />
                  </Suspense>
                ),
              },
            ],
          },
        ],
      },
    ],
  },
];

export default routes;
