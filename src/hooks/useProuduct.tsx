/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { ICountry, ICountryWiseChanges, IVariant } from "../pages/ProductDetails/types";
import { additionOfAttribute, groupByAttributeName } from "../utility/product";

export function useProduct(variant: IVariant | undefined) {
  // console.log("hook variant ----->", variant);

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [countryWiseChanges, setCountryWiseChanges] = useState<ICountryWiseChanges>({
    countryWiseCharge: undefined,
    availableCountriesState: undefined,
    quantityWisePrice: [],
    qtyWisePrice: null,
    updatedPrice: 0,
    sellingPrice: 0,
    shipmentListState: [],
  });
  const { pathname } = useLocation();
  const {
    quantity_wise_price: quantityWisePrices,
    updated_selling_price: updatedSellingPrice = 0,
    selling_price: sellingPriceOfProduct = 0,
    available_countries: availableCountries,
    default_country: defaultCountry,
    attributes,
    // online_discount: onlineDiscount = 1,
  } = variant || {};
  const attributePrice = Object.entries(selectedAttributes).map(([key, value]: [string, any]) => {
    const { price_increment: priceDifference, id, attribute_value: attributeValue } = value;
    const { name } = attributeValue;
    return {
      attribute_id: id,
      attribute_name: key,
      attribute_value: name,
      price_increment: priceDifference ?? 0,
    };
  });
  const attrData = attributePrice?.map((a) => ({
    id: a?.attribute_id,
    name: a?.attribute_name,
    value: a?.attribute_value,
  }));

  // 1. Step we store country in state.
  useEffect(() => {
    // Find Default Country
    const findDefaultCountry = availableCountries?.find((country: ICountry) => {
      return country.id === defaultCountry;
    });
    // country store in state
    // if not found default country
    if (findDefaultCountry === undefined) {
      // Not found country. so we will show available country
      if (availableCountries !== undefined && availableCountries.length > 0) {
        setCountryWiseChanges((prev) => ({
          ...prev,
          // countryWiseCharge: availableCountries[0],
          availableCountriesState: availableCountries[0],
        }));
      }
    } else {
      // found country
      setCountryWiseChanges((prev) => ({
        ...prev,
        availableCountriesState: findDefaultCountry,
      }));
    }
  }, [availableCountries, defaultCountry]); // if i will get any error remove the availableCountries dependency

  useEffect(() => {
    if (countryWiseChanges.availableCountriesState) {
      // const countryId = countryWiseChanges.countryWiseCharge.country;
      const countryId = countryWiseChanges.availableCountriesState;
      const qtyWisePrice = quantityWisePrices?.filter((qtyWisePrice) => qtyWisePrice?.country === countryId?.id);
      setCountryWiseChanges((prev) => ({
        ...prev,
        quantityWisePrice: qtyWisePrice ?? [],
      }));
    }
  }, [countryWiseChanges.availableCountriesState, quantityWisePrices]);

  const { quantityWisePrice } = countryWiseChanges;
  const additionPrice = additionOfAttribute(attributePrice) ?? 0;

  useEffect(() => {
    if (pathname.includes("product-details")) {
      if (countryWiseChanges?.quantityWisePrice?.length > 0) {
        setQuantity(countryWiseChanges?.quantityWisePrice[0]?.min_quantity);
      }
    }
  }, [countryWiseChanges?.quantityWisePrice, pathname]);

  // Calculate of Discount
  const calculationOfDiscount = (variant: IVariant | undefined, sellingPrice: number) => {
    let discount: number = 0;
    // console.log("inner discount---------->", discount);
    const { online_discount: onlineDiscount, deal_of_the_week: dealOfTheWeek, campaign_member: campaignMember } = variant || {};
    if (onlineDiscount && Object.keys(onlineDiscount).length > 0) {
      if (onlineDiscount.discount_type === "percentage") {
        discount += (sellingPrice * Number(onlineDiscount?.discount_value) ?? 0) / 100 || 0;
      } else {
        discount += onlineDiscount?.discount_value ?? 0;
      }
    }
    if (dealOfTheWeek && Object.keys(dealOfTheWeek).length > 0) {
      if (dealOfTheWeek.discount_type === "flat") {
        discount += variant?.deal_of_the_week?.discount_value ?? 0;
      } else {
        discount += (sellingPrice * dealOfTheWeek.discount_value) / 100 ?? 0;
      }
    }
    if (campaignMember && Object.keys(campaignMember).length > 0) {
      const compaingn = campaignMember;
      if (compaingn.discount_type === "flat") {
        discount += compaingn.discount_value || 0;
      } else {
        // discount += (sellingPrice * variant.deal_of_the_week.discount_value) / 100 || 0;
      }
    }
    return discount;
  };
  const discount = calculationOfDiscount(variant, countryWiseChanges.sellingPrice);
  const filteredData = quantityWisePrice.filter((item) => item.min_quantity <= quantity);
  const selectedField = filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;
  // console.log(quantity);
  useEffect(() => {
    if (quantityWisePrices && quantityWisePrices?.length > 0) {
      quantityWisePrice?.forEach((wisePrice) => {
        if (selectedField === null) {
          setCountryWiseChanges((prev) => ({
            ...prev,
            updatedPrice: sellingPriceOfProduct + additionPrice - discount,
            sellingPrice: sellingPriceOfProduct + additionPrice,
          }));
        } else if (wisePrice?.id === selectedField?.id) {
          const sellingPriceP = wisePrice.selling_price;
          setCountryWiseChanges((prev) => ({
            ...prev,
            updatedPrice: sellingPriceP + additionPrice - discount,
            sellingPrice: sellingPriceP + additionPrice,
            qtyWisePrice: wisePrice,
          }));
        }
      });
    } else {
      setCountryWiseChanges((prev) => ({
        ...prev,
        updatedPrice: sellingPriceOfProduct + additionPrice - discount,
        sellingPrice: sellingPriceOfProduct + additionPrice,
      }));
    }
  }, [
    countryWiseChanges.quantityWisePrice,
    quantity,
    quantityWisePrice,
    quantityWisePrices,
    selectedAttributes,
    sellingPriceOfProduct,
    updatedSellingPrice,
    discount,
    selectedField,
    additionPrice,
  ]);
  const groupAttribute:
    | {
        attribute_name: string;
        items: unknown;
      }[]
    | null = useMemo(() => groupByAttributeName(attributes), [attributes]);
  useEffect(() => {
    const defaultState: { [key: string]: Record<string, unknown> } = {};
    if (groupAttribute !== undefined) {
      groupAttribute?.forEach((attribute: any) => {
        if (attribute.items && attribute.items.length > 0) {
          const [firstItem] = attribute.items;
          defaultState[attribute.attribute_name.toLowerCase()] = firstItem;
        }
      });
      setSelectedAttributes(defaultState);
    }
  }, [groupAttribute]);
  // console.log("hook country wise changes", countryWiseChanges);
  return {
    quantity,
    setQuantity,
    countryWiseChanges,
    setCountryWiseChanges,
    selectedAttributes,
    setSelectedAttributes,
    discount,
    groupAttribute,
    attrData,
  };
}
