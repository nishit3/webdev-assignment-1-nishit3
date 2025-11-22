import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  modules: modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule = {
        cid: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m) => m.cid !== moduleId);
    },
    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m.cid === module.cid ? module : m
      );
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m.cid === moduleId ? { ...m, editing: true, originalName: m.name } : m
      );
    },
    saveModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m.cid === moduleId ? { ...m, editing: false, originalName: undefined } : m
      );
    },
    cancelEdit: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m.cid === moduleId
          ? { ...m, editing: false, name: m.originalName || m.name, originalName: undefined }
          : m
      );
    },
  },
});

export const {
  addModule,
  deleteModule,
  updateModule,
  editModule,
  saveModule,
  cancelEdit,
} = modulesSlice.actions;
export default modulesSlice.reducer;
