import type { User } from "../types/types";

const U1: User = {
  id: "user-1",
  username: "Rado",
  colorBase: "amber",
};

const U2: User = {
  id: "user-2",
  username: "Marienka",
  colorBase: "fuchsia",
};

const U3: User = {
  id: "user-3",
  username: "Jožko",
  colorBase: "emerald",
};

export const TEST_USERS = [{ ...U1 }, { ...U2 }, { ...U3 }];
