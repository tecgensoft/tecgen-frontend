export interface IProduct {
    id: number;
    created_at: string;
    updated_at: string;
    name: string | null | undefined;
    description: string;
    images: string[];
    selling_price: number;
    minimum_stock_quantity: number;
    is_active: boolean;
    is_featured: boolean;
    is_top_sale: boolean;
    is_upcoming: boolean;
    is_new_arrival: boolean;
    show_in_ecommerce: boolean;
    rating: number;
    ordering: number;
    weight: number;
    created_by: number;
    updated_by: number;
    unit: number;
    category: number;
    brand: number;
    sub_category: number;
    store: number;
  }
  