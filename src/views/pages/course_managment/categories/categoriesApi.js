import { apiService as api }  from "../../../../store/apiService";

export const addTagTypes = ["Categories", "Category"];

export const categoriesApi = api
.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        let url = `category?page=1`;
        // if (searchText) url += `&search=${searchText}`;
        // if (dateFromFilter) url += `&dateFrom=${dateFromFilter}`;
        // if (dateToFilter) url += `&dateTo=${dateToFilter}`;
        return { url, method: "GET" };
      },
    }),
    // getCategories: builder.query({
    //   query: () => {
    //     let url = `category?page=1`;
    //     // if (searchText) url += `&search=${searchText}`;
    //     // if (dateFromFilter) url += `&dateFrom=${dateFromFilter}`;
    //     // if (dateToFilter) url += `&dateTo=${dateToFilter}`;
    //     return { url, method: "GET" };
    //   },
    // }),
    // Get a specific category
    getSpecificCategory: builder.query({
      query: (categoryId) => `/category/${categoryId}/`,
    }),

    // Create a new category
    createCategory: builder.mutation({
      query: (categoryData) => ({
        url: "category/",
        method: "POST",
        body: categoryData,
      }),
      invalidatesTags: [{ type: 'Categories' }],
    }),

    // Update a category
    updateCategory: builder.mutation({
      query: ({ categoryId, ...categoryData }) => ({
        url: `category/${categoryId}/`,
        method: "PUT",
        body: categoryData,
      }),
    }),

    // Delete a category
    deleteCategory: builder.mutation({
      query: (categoryId) => ({
        url: `categories/${categoryId}/`,
        method: "DELETE",
      }),
    }),

    // View category image
    viewCategoryImage: builder.query({
      query: (categoryId) => `/view-category-image/${categoryId}/`,
    }),

    // Download category image
    downloadCategoryImage: builder.query({
      query: (categoryId) => ({
        url: `/download-category-image/${categoryId}`,
        responseHandler: (response) => response.blob(),
      }),
    }),

    // Upload category image
    uploadCategoryImage: builder.mutation({
      query: ({categoryId, imageFile}) => {
        const formData = new FormData();
        formData.append("image", imageFile);
        return {
          url: `/upload-category-image/${categoryId}`,
          method: "POST",
          body: formData,
        };
      },
      invalidatesTags: (result, error, { categoryId }) => [
        { type: 'Category', id: categoryId }
      ],
    }),

    // Delete category image
    deleteCategoryImage: builder.mutation({
      query: (categoryId) => ({
        url: `delete-category-image/${categoryId}/`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,  
  useGetSpecificCategoryQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useViewCategoryImageQuery,
  useDownloadCategoryImageQuery,
  useUploadCategoryImageMutation,
  useDeleteCategoryImageMutation,
  useLazyGetCategoriesQuery,
  useLazyGetSpecificCategoryQuery,
  useLazyViewCategoryImageQuery,
  useLazyDownloadCategoryImageQuery,
} = categoriesApi;