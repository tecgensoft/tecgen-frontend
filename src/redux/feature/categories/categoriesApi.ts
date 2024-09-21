import { api } from "../../api/apiSlice";

const categoriesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => {
        const categories = `/catalog/user-all-categories/`;
        return categories;
      },
    }),
  }),
});

export const { useGetCategoriesQuery } = categoriesApi;
