import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";
import Bookmarks from "../pages/bookmarks";
import Communities from "../pages/communities";
import Explore from "../pages/explore";
import Grok from "../pages/grok";
import Home from "../pages/home";
import Jobs from "../pages/jobs";
import Messages from "../pages/messages";
import NotFound from "../pages/not-found";
import Notifications from "../pages/notifications";
import Profile from "../pages/profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "explore",
        element: <Explore />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "grok",
        element: <Grok />,
      },
      {
        path: "bookmarks",
        element: <Bookmarks />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "communities",
        element: <Communities />,
      },
      {
        path: ":slug",
        element: <Profile />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
