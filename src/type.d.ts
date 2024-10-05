/* eslint-disable @typescript-eslint/no-explicit-any */
type IProductVariant = {
  id: number;
  name: string;
  category: {
    slug: string;
    name: string;
  };
  slug: string;
  images: string;
  selling_price: number;
  updated_selling_price: number;
  translation: {
    l: string;
  };
  rating: number;
};

type IOnlineDiscount = {
  online_discount_amount: number;
  online_discount_method: string;
};
type IOfflineDiscount = {
  maximum_offline_discount_amount: number;
  offline_discount_method: string;
};

type IProduct = {
  id: number;
  images: string;
  tax_value: number;
  updated_selling_price: number;
  stock_available: string;
  name: string;
  selling_price: number;
  translation: object;
  slug: string;
  sku: string;
  specifications: object;
  meta: object;
  online_discount: IOnlineDiscount;
  offline_discount: IOfflineDiscount;
  service_warranty: number;
  service_warranty_duration_type: string;
  sell_warranty: number;
  sell_warranty_duration_type: string;
  minimum_stock_quantity: number;
  is_active: boolean;
  is_featured: boolean;
  is_top_sale: boolean;
  is_upcoming: boolean;
  is_new_arrival: boolean;
  show_on_landing_page: boolean;
  show_in_ecommerce: boolean;
  rating: number;
  ordering: string;
  product_variant?: IProductVariant;
  offer_price?: number;
  discount_type?: string;
  discount_value?: number;
  discount_amount?: number;
  created_by?: number;
  updated_by?: null;
  qty?: number;
  cid: number;
  qid: number;
  countryName: string;
  attributes: IAttributes[];
  average_rating: number;
};

type ITranslation = {
  bn_name?: string;
  en_name?: string;
};
interface ICommonFields {
  logo?: string;
  name: string;
  slug: string;
}
interface ISubCategoriesType extends ICommonFields {
  translation?: ITranslation | undefined;
}
interface ICategoriesType extends ICommonFields {
  subcategories: ISubCategoriesType[] | [];
  translation: { Category: string };
  group: {
    name: string;
    slug: string;
    logo: string;
  };
}
interface ICategoryGroupType extends ICommonFields {
  categories: ICategoriesType[] | [];
  translation?: ITranslation;
}

type IMetaData = {
  total: number;
  page_size: string;
  next: null;
  previous: null;
};

type IResponse<T> = {
  success: boolean;
  meta_data?: IMetaData | undefined;
  message?: string | undefined;
  data: T;
};

interface IAttributes {
  id: number;
  name: string;
  value: string;
}

interface ICookiesData {
  slug: string;
  id: number;
  qty?: number;
  c: number;
  qid: number;
  cn: string;
  attr: IAttributes[];
  sp: number;
  p: number;
  d: number;
}

interface IStore {
  name: string;
  slug: string;
  bio: string;
  about: string;
  address: string;
  primary_phone: string;
  logo: string;
  cover_photo: string;
  product_variants: IProduct[];
}

interface IVerifyCode {
  num1: string;
  num2: string;
  num3: string;
  num4: string;
  num5: string;
}

interface IRenderItem {
  isLoading: boolean;
  item?: IProduct | ICategoriesType | undefined;
}
interface IQueryParameters {
  category__slug?: string;
  sub_category__slug?: string;
  brand__slug?: string;

  // Define other query parameters if needed
}

interface IOrderItems {
  product_variant: number;
  quantity: number | undefined;
  country: number;
  product_variant_attributes: number[];
  quantity_wise_price_id: number;
}
// order types
interface ICreateOrderData {
  receiver_name: string | undefined;
  address: string | undefined;
  receiver_contact: string | undefined;
  note: string | undefined;
  payment_type: string;
  delivery_method: string;
  promo: string | undefined;
  tax_amount: number;
  sell_order_items: IOrderItems[];
}

interface ICreateOrder {
  payment_type: string;
  invoice_no: string;
}
interface IMakePayment {
  payment_gateway_url: string;
}
interface IMakePaymentData {
  order: string | undefined;
  amount?: number | undefined;
}

interface ICustomer {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  contact_number: string;
  is_active: boolean;
  customer_type: string;
}

interface ProductVariant {
  id: number;
  name: string;
  images: string[];
  weight: number;
  selling_price: number;
  store: {
    id: number;
    name: string;
  };
}

interface IOrderItem {
  id: number;
  order: number;
  country: {
    id: number;
    name: string;
    currency_code: string;
    code: string;
  };
  product_variant: ProductVariant;
  product_variant_attributes: any[]; // You may define the type for this if known
  quantity: number;
  unit_price: number;
  tax_amount: number;
  discount_amount: number;
  discount_value: number;
  total_discount: number;
  discount_type: string;
  sub_total: number;
  meta: {
    variant: {
      id: number;
      sku: string;
      name: string;
      slug: string;
      rating: number;
      ordering: number;
      attributes: any[]; // You may define the type for this if known
      translation: any; // You may define the type for this if known
      sell_warranty: number;
      selling_price: number;
      online_discount: {
        online_discount_amount: number;
        online_discount_method: string;
      };
      service_warranty: number;
      sell_warranty_duration_type: string | null;
      service_warranty_duration_type: string | null;
    };
    per_kg_charge: number;
    customs_charge: number;
    shipment_charge: number;
    raw_selling_price: number;
    customs_charge_discount: {
      flat: number;
      percentage: number;
    };
  };
  total_weight_charge: number;
  campaign_member_discount: number;
  deal_of_the_week_discount: number;
  others_charge: number;
  final_customs_charge: number;
  selling_price: number;
}

interface IStatusNote {
  status: string;
  history_change_reason: string;
}

interface IPayment {
  id: number;
  updated_by: any; // Adjust the type if necessary
  created_at: string;
  updated_at: string;
  is_active: boolean;
  paid_amount: number;
  payment_method: string;
}

interface ISingleOrderDetails {
  id: number;
  created_by: ICustomer;
  updated_by: any; // You may define the type for this if known
  customer: ICustomer;
  order_items: IOrderItem[];
  store: any; // You may define the type for this if known
  campaign: any; // You may define the type for this if known
  terms_conditions: any; // You may define the type for this if known
  courier: any; // You may define the type for this if known
  status_notes: IStatusNote[];
  created_at: string;
  updated_at: string;
  invoice_no: string;
  delivery_method: string;
  payment_status: string;
  status: string;
  payment_type: string;
  receiver_name: string;
  receiver_contact: string;
  note: string | null;
  address: string;
  customer_type: string;
  items_total_price_without_discount: number;
  items_total_discount: number;
  items_total_customs_charge_discount: number;
  items_total_price: number;
  order_total_shipment_charge: number;
  order_total_customs_charge: number;
  order_total_weight_charge: number;
  order_net_amount: number;
  order_net_amount_without_shipping: number;
  order_total_due_amount: number | undefined;
  promo_deductable_amount: number;
  order_total_discount_amount: number;
  paid_amount: number;
  others_charge: number;
  total_tax_amount: number;
  invoice_file_url: string | null;
  advance_payment_percentage: number;
  advance_payment: number;
  is_advance_payment_done: boolean;
  payments: IPayment[];
}
interface ICartTableProps {
  title: string;
  detailsWidth: string;
  colWidth: string;
  visibleColumns: boolean[];
}
interface IOrderData {
  data: ISingleOrderDetails | undefined;
}
interface IOrderProduct {
  id: string;
  name: string;
  image: string;
  atributes: { size: string }[];
  by: string;
  offer?: string;
  price: number;
  discountedPrice: number;
  quantity: number;
}
interface IOrder {
  id: number;
  status: string;
  created_at: string;
  order_items: object[];
  net_amount?: number;
  products: IOrderProduct[];
}
interface ICreateReview {
  order_item_id: number;
  rating: number;
  review: string;
  images: string[];
}
interface IReview {
  url: string;
}

// Product card types
interface IProductCard {
  product: IProduct | undefined;
  radius?: string;
  radiusTop?: string;
  radiusBottom?: string;
  radiusBottomright?: string;
  image?: string | undefined;
  name?: string | undefined;
  sellingPrice?: number | undefined;
  discountPrice?: number | undefined;
  discountValue?: number | undefined;
  size?: string | undefined;
  titleSize?: string | undefined;
}

// Section heading types

interface ISectionHeadingProps {
  title: string;
  button?: boolean;
  route?: string;
}

// pagination types
interface IPageTitleProps {
  title: string | undefined;
  height?: string;
}
// See all button types
interface ISeeAllButtonProps {
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
  title?: string;
  textStyle?: string;
  borderStyle?: string;
  fontSize?: string;
}

// dropdown types
interface IDropdownProps {
  title: string;
  options: string[];
  onOptionSelected: (option: string) => void;
}

// mini cart types
interface IMiniCartProps {
  // cartProduct: IProduct[];
  cartData: ICookiesData[];
  // total: number;
  item: ICookiesData;
  index: number;
  setQuantityOpen: Dispatch<SetStateAction<number | boolean | null>>;
  quantityOpen: number | boolean | null;
  setCountryOpen: Dispatch<SetStateAction<number | null>>;
  countryOpen: number | null;
}

interface IBasicInfoProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  setQuantityOpen: Dispatch<SetStateAction<number | boolean | null>>;
  data: any;
  item: ICookiesData;
  countryWiseChanges: ICountryWiseChanges;
  updateQty: any;
  detailsWidth?: string;
  colWidth?: string;
  visibleColumns?: boolean[] | undefined;
  quantityOpen?: number | boolean | null;
  countryOpen?: number | null;
}

interface IQtyWisePriceProps {
  setQuantityOpen: Dispatch<SetStateAction<number | boolean | null>>;
  countryWiseChanges: ICountryWiseChanges;
}
interface IShowDetails {
  data: any;
  item: ICookiesData;
}

// cart table types
interface ICartTableProps {
  title: string;
  detailsWidth: string;
  colWidth: string;
  visibleColumns: boolean[];
}
interface ICartTableBody {
  // cartProducts: IProduct[] | undefined;
  visibleColumns?: boolean[];
  // handleItemSelection: (arg0: ICookiesData) => void;
  // selectedItems: ICookiesData[];
  detailsWidth?: string;
  colWidth?: string;
  // setSelectedItems: Dispatch<SetStateAction<ICookiesData[]>>;
  item: ICookiesData;
  // index: number;
  setQuantityOpen: Dispatch<SetStateAction<boolean | number | null>>;
  quantityOpen: boolean | number | null;
  setCountryOpen: any;
  countryOpen: any;
}
interface ICartTableHeaderProps {
  title: string;
  // handleSelectAll: ChangeEventHandler<HTMLInputElement> | undefined;
  // deleteSelectedItems: () => void;
  visibleColumns: boolean[];
  // cartProduct: IProduct[] | undefined;
  // selectedItems: ICookiesData[];
}
// filter types
interface IFilterProps {
  filterBy: ICategoriesType[] | undefined;
}
interface IBrandFilterProps {
  itemName: string;
  filterBy: ICategoriesType[] | undefined;
}
interface ICategoryFilterProps {
  itemName: string;
  filterBy: ICategoriesType[] | undefined;
  selectedFilter: string[];
  setSelectedFilter: Dispatch<SetStateAction<string[]>>;
}

// Auth From input
interface AuthFormInputProps {
  type: string;
  name: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  isPassword?: boolean;
  isOtp?: boolean;
  otpText?: string;
  onClick?: any;
  disabled?: any;
  timer?: any;
}

type RefActionType = HTMLDivElement | null;

// Breadcrumb Types
interface IBreadcrumbs {
  label: string | undefined;
  url: string | undefined;
}
interface IBreadcrumbsProps {
  breadcrumbs?: IBreadcrumbs[];
  currentLabel?: string | undefined;
}

interface ISwiperSliderProps {
  loading: boolean | undefined;
  data: IProduct[] | ICategoriesType[] | undefined;
  renderItem: ({
    isLoading,
    item,
  }: {
    isLoading: boolean;
    item?: IProduct | ICategoriesType | undefined;
  }) => ReactNode;
}
// social login
interface ISocialLogin {
  title: string;
  link: string;
  handleRoute: MouseEventHandler<HTMLButtonElement> | undefined;
  openModal?: (() => void) | undefined;
  fontSize: string;
}
// Tabs
interface ITab {
  id: number;
  label: string | null;
}

interface ITabs {
  type?: "button" | "button-outline";
  tabs: ITab[];
  defaultTab: number;
  styles?: string;
  renderContent: (activeTab: number) => JSX.Element | null;
}

interface IModalContainer {
  closeModal: () => void;
  children: ReactNode;
  styles?: string;
}

interface IProductCard {
  product: IProduct | undefined;
  radius?: string;
  radiusTop?: string;
  radiusBottom?: string;
  radiusBottomright?: string;
  image?: string | undefined;
  name?: string | undefined;
  sellingPrice?: number | undefined;
  discountPrice?: number | undefined;
  discountValue?: number | undefined;
  size?: string | undefined;
  titleSize?: string | undefined;
}

interface IBrand {
  id: number;
  name: string;
  slug: string;
}

interface ICategory {
  id: number;
  name: string;
  slug: string;
  translation: {
    bn_name: string;
  };
}

interface IBaseProduct {
  id: number;
  brand: IBrand;
  category: ICategory;
  sub_category: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    translation: {
      bn: string;
    };
  };
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  is_featured: boolean;
}

interface IAttribute {
  id: number;
  variant_id: number;
  attribute: {
    name: string;
    id: number;
  };
  attribute_value: {
    name: string;
    id: number;
  };
  price: number;
}

interface IQuantityWisePrice {
  id: number;
  product_variant: number;
  country: number;
  min_quantity: number;
  max_quantity: number;
  selling_price: number;
  updated_selling_price: number;
}

interface IBrand {
  id: number;
  name: string;
  slug: string;
}

interface ICategory {
  id: number;
  name: string;
  slug: string;
  translation: {
    bn_name: string;
  };
}

interface IBaseProduct {
  id: number;
  brand: IBrand;
  category: ICategory;
  sub_category: {
    id: number;
    name: string;
    slug: string;
    logo: string;
    translation: {
      bn: string;
    };
  };
  name: string;
  slug: string;
  description: string;
  is_active: boolean;
  is_featured: boolean;
}

interface IAttribute {
  id: number;
  variant_id: number;
  attribute: {
    name: string;
    id: number;
  };
  attribute_value: {
    name: string;
    id: number;
  };
  price: number;
}

interface IQuantityWisePrice {
  id: number;
  product_variant: number;
  country: number;
  min_quantity: number;
  max_quantity: number;
  selling_price: number;
  updated_selling_price: number;
}

interface ICountry {
  // id: number;
  // created_by: {
  //   first_name: string;
  //   last_name: string;
  //   username: string;
  //   email: string;
  //   contact_number: string;
  //   is_active: boolean;
  //   customer_type: string;
  // };
  // updated_by: null;
  // created_at: string;
  // updated_at: string;
  // customs_charge: number;
  // customs_charge_discount: {
  //   flat: number;
  //   percentage: number;
  // };
  // per_kg_charge: number;
  // shipment_charge: number;
  // product_variant: number;
  // country: {
  //   id: number;
  //   name: string;
  //   code: string;
  //   currency_code: string;
  //   flag: string;
  // };
  id: number;
  name: string;
  currency_code: string;
  code: string;
  flag: string;
}

interface IVariant {
  id: number;
  name: string;
  updated_selling_price: number;
  deal_of_the_week: {
    discount_type: string;
    discount_value: number;
    discount_amount: number;
  };
  slug: string;
  stock_available: null;
  images: string[];
  sku: string;
  selling_price: number;
  specifications: {
    name: string;
    group: string;
    value: string;
  }[];
  meta: {
    description: string;
    short_description: string;
  };
  online_discount: {
    discount_value: number;
    discount_type: string;
  };
  service_warranty: number;
  service_warranty_duration_type: string;
  sell_warranty: number;
  sell_warranty_duration_type: string;
  rating: number;
  total_rating_count: number;
  rating_one: number;
  rating_two: number;
  rating_three: number;
  rating_four: number;
  rating_five: number;
  tax_value: number;
  average_rating: number;
  campaign_member: {
    campaign: {
      start_date: string;
      end_date: string;
    };
    discount_type: string;
    discount_value: number;
  };
  is_upcoming: boolean;
  translation: {
    bn_name: string;
    bn_description: string;
    bn_short_description: string;
  };
  group: {
    id: number;
    name: string;
    slug: string;
    translation: {
      bn: string;
    };
  };
  store: {
    name: string;
    slug: string;
  };
  attributes: IAttribute[];
  quantity_wise_price: IQuantityWisePrice[] | [];
  default_country: number;
  available_countries: ICountry[];
  minimum_order_quantity: number;
}

interface IProductDetails {
  base_product: IBaseProduct | undefined;
  variant: IVariant | undefined;
}
// Product Interface
interface ITranslation {
  bn_name: string;
  bn_description: string;
  bn_short_description: string;
}

interface IMeta {
  description: string;
  short_description: string;
}

interface IOnlineDiscount {}

interface IOfflineDiscount {}

interface IProduct {
  id: number;
  images: string[]; // Assuming images are URLs
  tax_value: number;
  updated_selling_price: number;
  stock_available: number | null;
  name: string;
  translation: ITranslation;
  slug: string;
  sku: string;
  selling_price: number;
  specifications: []; // You can replace 'any' with a more specific type
  meta: IMeta;
  online_discount: IOnlineDiscount;
  offline_discount: IOfflineDiscount;
  service_warranty: number;
  service_warranty_duration_type: string | null; // Adjust type accordingly
  sell_warranty: number;
  sell_warranty_duration_type: string | null; // Adjust type accordingly
  minimum_stock_quantity: number;
  is_active: boolean;
  is_featured: boolean;
  is_top_sale: boolean;
  is_upcoming: boolean;
  is_new_arrival: boolean;
  show_on_landing_page: boolean;
  show_in_ecommerce: boolean;
  rating: number;
  ordering: number;
  weight: number;
  store: number;
  group: number;
  default_country: number;
}
interface IShipmentCategoryList {
  id: number;
  created_at: string;
  updated_at: string;
  is_active: boolean;
  title: string;
  description: string;
  charge: number | null;
  translation: {
    title_bn: string;
    description_bn: string;
  };
  country: IAvailableCountry;
}
interface IAvailableCountry {
  id: number;
  name: string;
  currency_code: string;
  code: string;
  flag: string;
}
interface ICountryWiseChanges {
  countryWiseCharge: ICountry | undefined;
  availableCountriesState: IAvailableCountry | undefined;
  shipmentListState: IShipmentCategoryList[] | undefined;
  qtyWisePrice: IQuantityWisePrice | null;
  quantityWisePrice: IQuantityWisePrice[] | [];
  updatedPrice: number;
  sellingPrice: number;
}

interface IAttributeValue {
  name: string;
  id: number;
}

interface IGroupAttribute {
  name: string;
  id: number;
}

interface IAttributeItem {
  id: number;
  variant_id: number;
  attribute: IGroupAttribute;
  attribute_value: IAttributeValue;
  price: number;
  price_difference: number;
}

interface IAttributes {
  attribute_name: string;
  items: IAttributeItem[];
}

interface IAttributeSelectItem {
  id: number;
  variant_id: number;
  attribute: {
    name: string;
    id: number;
  };
  attribute_value: {
    name: string;
    id: number;
  };
  price: number;
  price_difference: number;
}

interface IUser {
  first_name: string;
  last_name: string;
  username: string;
  email: string;
  contact_number: string;
  is_active: boolean;
  customer_type: string;
}

interface IProductVariant {
  id: number;
  sku: string;
  name: string;
  slug: string;
  service_warranty: number;
  sell_warranty: number;
  selling_price: number;
  translation: Record<string, unknown>;
}

interface IReview {
  id: number;
  created_by: IUser;
  updated_by: IUser;
  product_variant: IProductVariant;
  created_at: string;
  updated_at: string;
  review: string;
  rating: number;
  is_accepted: boolean;
  order: number;
  images: [];
}
