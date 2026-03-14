import { create } from "zustand";
import { axiosInstance } from "../lib/fetchUsers.js";
import toast from "react-hot-toast";

export const userStore = create((set) => ({
  users: [],
  loading: false,
  error: null,

  getUser: async () => {
    try {
      set({ loading: true });
      const res = await axiosInstance.get("/users");
      // console.log(res.data);
      setTimeout(() => {
        set({ users: res.data, loading: false });
      }, 1000);
      toast.success("Users fetched successfully");
    } catch (error) {
      set({ loading: false, error: "Failed to fetch users" });
      toast.error("Error fetching users");
    }
  },
}));
