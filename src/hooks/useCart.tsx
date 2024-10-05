/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useMemo } from "react";
import { useAppDispatch } from "../redux/hooks";
import { decrementQty, incrementQty } from "../utility/cart";
import { additionOfAttribute, groupByAttributeName } from "../utility/product";

export const useCart = (
  data: any,
  item: ICookiesData,
  setOpen: any,
  setQuantityOpen: any,
  setCountryOpen: any
) => {
  const dispatch = useAppDispatch();
  const [selectedAttributes, setSelectedAttributes] = useState({});
  const [countryWiseChanges, setCountryWiseChanges] =
    useState<ICountryWiseChanges>({
      countryWiseCharge: undefined,
      availableCountriesState: undefined,
      quantityWisePrice: [],
      qtyWisePrice: null,
      updatedPrice: 0,
      sellingPrice: 0,
      shipmentListState: [], // Initialize with an empty array
    });
  const { quantityWisePrice } = countryWiseChanges;
  let myQty: number = item.qty!;

  const {
    quantity_wise_price: quantityWisePrices,
    selling_price: sellingPriceOfProduct,
    available_countries: availableCountries,
    attributes,
  } = data?.data?.variant || {};

  const attributePrice = Object.entries(selectedAttributes).map(
    ([key, value]: [string, any]) => {
      const {
        price_increment: priceDifference,
        id,
        attribute_value: attributeValue,
      } = value;
      const { name } = attributeValue;
      return {
        attribute_id: id,
        attribute_name: key,
        attribute_value: name,
        price_increment: priceDifference ?? 0,
      };
    }
  );

  // Find Default Country
  useEffect(() => {
    const findDefaultCountry = availableCountries?.find(
      (country: ICountry) => country?.id === item?.c
    );
    setCountryWiseChanges((prev) => ({
      ...prev,
      availableCountriesState: findDefaultCountry,
    }));
  }, [availableCountries, item?.c]);

  // Find quantity wise price
  useEffect(() => {
    if (countryWiseChanges?.availableCountriesState) {
      const qtyWisePrice = quantityWisePrices?.filter(
        (qtyWisePrice: any) => qtyWisePrice?.country === item?.c
      );
      setCountryWiseChanges((prev) => ({
        ...prev,
        quantityWisePrice: qtyWisePrice ?? [],
      }));
    }
  }, [
    countryWiseChanges?.availableCountriesState,
    item?.c,
    quantityWisePrices,
  ]);

  const additionPrice = additionOfAttribute(attributePrice) ?? 0;

  // Calculate of Discount
  const calculationOfDiscount = (
    variant: IVariant | undefined,
    sellingPrice: number
  ) => {
    let discount: number = 0;
    const {
      online_discount: onlineDiscount,
      deal_of_the_week: dealOfTheWeek,
      campaign_member: campaignMember,
    } = variant || {};
    if (onlineDiscount && Object.keys(onlineDiscount).length > 0) {
      if (onlineDiscount.discount_type === "percentage") {
        discount +=
          (sellingPrice * Number(onlineDiscount?.discount_value) ?? 0) / 100 ||
          0;
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
  const discount = calculationOfDiscount(
    data?.data?.variant,
    countryWiseChanges.sellingPrice
  );
  const filteredData = quantityWisePrice.filter(
    (item) => item?.min_quantity <= myQty
  );
  const selectedField =
    filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;

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
    additionPrice,
    discount,
    quantityWisePrice,
    quantityWisePrices,
    selectedField,
    sellingPriceOfProduct,
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

  const updateQty = (
    productId: number,
    countryId: number,
    increment: boolean
  ) => {
    const delta = increment ? 1 : -1;
    myQty += delta;

    const quantityWiseP = quantityWisePrices?.filter(
      (countryPrice: any) => countryPrice?.country === countryId
    );
    const filteredData = quantityWisePrice.filter(
      (item) => item?.min_quantity <= myQty
    );
    const selected =
      filteredData.length > 0 ? filteredData[filteredData.length - 1] : null;

    let updated = sellingPriceOfProduct + additionPrice - discount;
    let selling = sellingPriceOfProduct + additionPrice;
    let qtyWiseP: any = {};

    if (quantityWiseP) {
      quantityWiseP.forEach((wisePrice: any) => {
        if (!selected) {
          updated = sellingPriceOfProduct + additionPrice - discount;
          selling = sellingPriceOfProduct + additionPrice;
        } else if (wisePrice?.id === selected?.id) {
          const sellingPriceP = wisePrice.selling_price;
          updated = sellingPriceP + additionPrice - discount;
          selling = sellingPriceP + additionPrice;
          qtyWiseP = wisePrice;
        }
      });
    }

    const discountPrice = calculationOfDiscount(data?.data?.variant, selling);
    setOpen(false);
    setQuantityOpen(productId);
    setCountryOpen(countryId);

    if (increment) {
      incrementQty(
        dispatch,
        item?.slug,
        item?.cn,
        qtyWiseP?.id,
        selling,
        updated,
        discountPrice,
        myQty
      );
    } else {
      decrementQty(
        dispatch,
        item?.slug,
        item?.cn,
        qtyWiseP?.id,
        selling,
        updated,
        discountPrice,
        myQty
      );
    }
  };
  return {
    countryWiseChanges,
    updateQty,
  };
};
