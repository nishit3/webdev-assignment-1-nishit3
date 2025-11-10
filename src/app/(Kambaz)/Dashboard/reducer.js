import { createSlice } from "@reduxjs/toolkit";
import enrollments from "../Database/enrollments.json";

const initialState = {
  enrollments: enrollments,
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollCourse: (state, { payload: { userId, course } }) => {
      const newEnrollment = {
        _id: new Date().getTime().toString(),
        userId: userId,
        course: course,
      };
      state.enrollments = [...state.enrollments, newEnrollment];
    },
    unenrollCourse: (state, { payload: { userId, course } }) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) =>
          !(enrollment.userId === userId && enrollment.course === course)
      );
    },
  },
});

export const { enrollCourse, unenrollCourse } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;
