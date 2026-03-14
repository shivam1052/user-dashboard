import { create } from "zustand";
import { axiosInstance } from "../lib/fetchUsers.js";
import toast from "react-hot-toast";

export const userStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  getUser: async () => {
    try {
      const res = await axiosInstance.get("/users");
      // console.log(res.data);
      set({ users: res.data });
      toast.success("Users fetched successfully");
    } catch (error) {
      toast.error("Error in fetching users");
    }
  },
}));
