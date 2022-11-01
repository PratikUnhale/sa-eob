import AdminHome from "../pages/Admin/Home/AdminHome";
import ClerkDash from "../pages/Clerk/ClerkDash";

export const routeMap: {
  [key: string]: { path: string; element: () => JSX.Element }[];
} = {
  ADMIN: [{ path: "home", element: AdminHome }],
  CLERK: [{ path: "home", element: ClerkDash }],

  "": [],
};
