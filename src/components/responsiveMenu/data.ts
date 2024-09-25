interface Submenu {
  title: string;
  path?: string;
  submenus?: Submenu[];
}

interface MenuItem {
  title: string;
  submenus?: Submenu[];
}

export const menuData: MenuItem[] = [
  {
    title: "Desktop",
    submenus: [
      {
        title: "Desktop Offer",
        path: "/desktop-offer",
      },
      {
        title: "Star PC",
        submenus: [
          { title: "Intel PC", path: "/intel-pc" },
          { title: "Ryzen PC", path: "/ryzen-pc" },
        ],
      },
      {
        title: "Gaming PC",
        path: "/gaming-pc",
      },
      {
        title: "Brand PC",
        path: "/brand-pc",
      },
      {
        title: "All-in-One PC",
        path: "/all-in-one-pc",
      },
      {
        title: "Portable Mini PC",
        path: "/portable-mini-pc",
      },
      {
        title: "Apple Mac Mini",
        path: "/apple-mac-mini",
      },
      {
        title: "Apple iMac",
        path: "/apple-imac",
      },
      {
        title: "Apple Mac Studio",
        path: "/apple-mac-studio",
      },
    ],
  },
  {
    title: "Laptops",
    submenus: [
      {
        title: "Laptop Offers",
        path: "/laptop-offer",
      },
      {
        title: "Gaming Laptops",
        path: "/gaming-laptops",
      },
      {
        title: "Business Laptops",
        path: "/business-laptops",
      },
      {
        title: "Student Laptops",
        path: "/student-laptops",
      },
      {
        title: "Apple MacBook",
        path: "/macbook",
      },
    ],
  },
  {
    title: "Smartphones",
    submenus: [
      {
        title: "Flagship Phones",
        path: "/flagship-phones",
      },
      {
        title: "Mid-Range Phones",
        path: "/midrange-phones",
      },
      {
        title: "Budget Phones",
        path: "/budget-phones",
      },
      {
        title: "5G Phones",
        path: "/5g-phones",
      },
      {
        title: "Apple iPhones",
        path: "/iphones",
      },
    ],
  },
  {
    title: "Tablets",
    submenus: [
      {
        title: "Apple iPad",
        path: "/ipad",
      },
      {
        title: "Android Tablets",
        path: "/android-tablets",
      },
      {
        title: "Windows Tablets",
        path: "/windows-tablets",
      },
      {
        title: "Tablet Accessories",
        path: "/tablet-accessories",
      },
    ],
  },
  {
    title: "Televisions",
    submenus: [
      {
        title: "Smart TVs",
        path: "/smart-tvs",
      },
      {
        title: "4K UHD TVs",
        path: "/4k-uhd-tvs",
      },
      {
        title: "OLED TVs",
        path: "/oled-tvs",
      },
      {
        title: "QLED TVs",
        path: "/qled-tvs",
      },
      {
        title: "Gaming TVs",
        path: "/gaming-tvs",
      },
    ],
  },
  {
    title: "Wearable Devices",
    submenus: [
      {
        title: "Smartwatches",
        path: "/smartwatches",
      },
      {
        title: "Fitness Trackers",
        path: "/fitness-trackers",
      },
      {
        title: "VR Headsets",
        path: "/vr-headsets",
      },
      {
        title: "AR Glasses",
        path: "/ar-glasses",
      },
    ],
  },
];
