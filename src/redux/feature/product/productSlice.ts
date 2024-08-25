import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => {
                const product = `products`;
                return product;
            },
        }),
        featuresProducts: builder.query({
            query: () => {
                return {
                    url: "product/users-productvariant-list/?show_in_ecommerce=True",
                };
            },
        }),
        getProductById: builder.query({
            query: ({id}) => {
                return {
                    url: `/product/users-productvariant-retrieve/${id}`,
                };
            },
        })
    }),
});

export const { useGetProductsQuery, useFeaturesProductsQuery, useGetProductByIdQuery } = productApi;
