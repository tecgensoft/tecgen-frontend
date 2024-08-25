import { api } from "../../api/apiSlice";

const homeApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getBanners: builder.query({
            query: () => {
                const product = `configure/banner-list`;
                return product;
                
            },
        }),
    }),
});

export const { useGetBannersQuery } = homeApi;
