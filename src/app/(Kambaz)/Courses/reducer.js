import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload: courses }) => {
      state.courses = courses;
    },
    addNewCourse: (state, { payload: course }) => {
      state.courses = [...state.courses, course];
    },
    removeCourse: (state, { payload: courseId }) => {
      state.courses = state.courses.filter((course) => course._id !== courseId);
    },
    updateCourseInState: (state, { payload: course }) => {
      state.courses = state.courses.map((c) =>
        c._id === course._id ? course : c
      );
    },
  },
});

export const { setCourses, addNewCourse, removeCourse, updateCourseInState } =
  coursesSlice.actions;
export default coursesSlice.reducer;
