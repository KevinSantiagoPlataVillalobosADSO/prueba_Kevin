import axios from "axios";
import { Users } from "@/interfaces/InUsers";

export const getUsers = async (): Promise<Users> => {
  try {
    const res = await axios.get<Users>("informix");
    return res.data;
  } catch (error) {
    throw new Error(
      `getfailed: ${error instanceof Error ? error.message : "Unknown error"}`
    );
  }
};
