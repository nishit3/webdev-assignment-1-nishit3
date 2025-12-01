import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    setModules: (state, { payload: modules }) => {
      state.modules = modules;
    },
    addModule: (state, { payload: module }) => {
      state.modules = [...state.modules, module];
    },
    removeModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },
    updateModuleState: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m._id === module._id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true, originalName: m.name } : m
      );
    },
    cancelEdit: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId
          ? { ...m, editing: false, name: m.originalName || m.name, originalName: undefined }
          : m
      );
    },
  },
});

export const {
  setModules,
  addModule,
  removeModule,
  updateModuleState,
  editModule,
  cancelEdit,
} = modulesSlice.actions;
export default modulesSlice.reducer;
