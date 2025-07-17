// coursesApi.js
import { apiService as api }  from "../../../../store/apiService"; // Adjust path as per your project structure

export const addTagTypes = ["Courses", "Course"]; // Define tag types for caching

export const coursesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // Endpoint to get all courses
    getCourses: builder.query({
      query: (params) => {
        // Construct URL with optional query parameters for filtering, pagination, etc.
        // Example: /course?page=1&search=marketing&status=pending
        let url = `course?page=1&access_type=Free`; // Base URL for courses (now singular)
        // if (params) {
        //   if (params.searchText) url += `&search=${params.searchText}`;
        //   if (params.statusFilter) url += `&status=${params.statusFilter}`;
        //   // Add more filters as needed (e.g., level, instructor, date ranges)
        // }
        return { url, method: "GET" };
      },
      providesTags: ["Courses"], // Invalidate 'Courses' tag when data changes
    }),

    // Endpoint to get a specific course by ID
    getSpecificCourse: builder.query({
      query: (courseId) => `/course/${courseId}/`, // Now singular
      //providesTags: (result, error, courseId) => [{ type: "Course", id: courseId }], // Invalidate specific 'Course' tag
    }),

    // Endpoint to update an existing course
    updateCourse: builder.mutation({
      query: ({ courseId, ...courseData }) => ({
        url: `course/${courseId}/`, // Now singular
        method: "PUT", // Or PATCH, depending on your backend's partial update support
        body: courseData,
      }),
      // Invalidate relevant tags to refetch data after an update
      invalidatesTags: (result, error, { courseId }) => [
        { type: "Course", id: courseId },
        "Courses", // Invalidate all courses to update list view
      ],
    }),

    // Endpoint to delete a course
    deleteCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}/`, // Now singular
        method: "DELETE",
      }),
      // Invalidate relevant tags to refetch data after a deletion
      invalidatesTags: (result, error, courseId) => [
        { type: "Course", id: courseId },
        "Courses", // Invalidate all courses to update list view
      ],
    }),

    // You can add more specific mutations here, e.g., for approving/rejecting courses
    approveCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}/approve/`, // Now singular
        method: "POST", // Or PUT/PATCH depending on your backend
      }),
      invalidatesTags: (result, error, courseId) => [
        { type: "Course", id: courseId },
        "Courses",
      ],
    }),

    rejectCourse: builder.mutation({
      query: (courseId) => ({
        url: `course/${courseId}/reject/`, // Now singular
        method: "POST", // Or PUT/PATCH depending on your backend
      }),
      invalidatesTags: (result, error, courseId) => [
        { type: "Course", id: courseId },
        "Courses",
      ],
    }),
  }),
});

// Export the generated hooks for use in your components
export const {
  useGetCoursesQuery,
  useGetSpecificCourseQuery,
  useUpdateCourseMutation,
  useDeleteCourseMutation,
  useApproveCourseMutation,
  useRejectCourseMutation,
  useLazyGetCoursesQuery, // Lazy query for manual fetching
  useLazyGetSpecificCourseQuery,
} = coursesApi;
