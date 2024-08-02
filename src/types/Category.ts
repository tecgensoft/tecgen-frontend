/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ISubCategory {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    show_in_ecommerce: boolean;
    ordering: number;
    icon: string | null;
    logo: string | null;
    is_active: boolean;
    created_by: string | null;
    updated_by: string | null;
    category: number;
}

export interface ICategory {
    id: number;
    sub_category: ISubCategory[];
    brand: any[]; // Adjust the type if you have more information about the brand objects
    created_at: string;
    updated_at: string;
    name: string;
    show_in_ecommerce: boolean;
    ordering: number;
    icon: string | null;
    logo: string | null;
    is_active: boolean;
    created_by: string | null;
    updated_by: string | null;
}

export interface IResults {
    results: ICategory[];
}
