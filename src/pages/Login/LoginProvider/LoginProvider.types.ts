export type Role = "ADMIN" | "CLERK" | "ACCOUNTANT" | "";

export interface ILoginContext {
  isLoggedIn: boolean;
  role: Role;
}
