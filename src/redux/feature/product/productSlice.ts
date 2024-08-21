import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => {
                const product = `products`;
                return product;
            },
        }),
        
    }),
});

export const { useGetProductsQuery } = productApi;
