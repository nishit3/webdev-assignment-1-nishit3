import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  enrollments: [],
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    setEnrollments: (state, { payload: enrollments }) => {
      state.enrollments = enrollments;
    },
    addEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = [...state.enrollments, enrollment];
    },
    removeEnrollment: (state, { payload: enrollmentId }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== enrollmentId
      );
    },
  },
});

export const { setEnrollments, addEnrollment, removeEnrollment } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
