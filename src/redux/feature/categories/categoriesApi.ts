import { api } from "../../api/apiSlice";

const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        const categories = `/catalog/users-all-categories/`;
        return categories;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
