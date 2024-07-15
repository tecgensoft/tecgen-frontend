export interface IProduct {
    slug: string;
    name: string;
    price: number;
    discount_price: number | null | undefined;
    images: string[];
}
