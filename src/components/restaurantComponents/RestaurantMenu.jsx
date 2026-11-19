
import { useState } from "react";
import { Phone, Info, Utensils } from "lucide-react";

const menuCategories = [
  {
    id: "soups",
    name: "Soups",
    icon: "♨",
    items: [
      { name: "Veg Soup", price: 50 },
      { name: "Tomato Soup", price: 50 },
      { name: "Hot & Sour Soup", price: 70 },
      { name: "Veg Manchow Soup", price: 80 },
    ],
  },
  {
    id: "starters",
    name: "Starters",
    icon: "◉",
    items: [
      { name: "Veg Noodles", price: 150 },
      { name: "Chola Bhatura", price: 200 },
      { name: "Finger Pizza", price: 150 },
      { name: "Paneer Pakoda", price: 200 },
      { name: "Mix Pakoda", price: 150 },
      { name: "Crispy Veg / Crispy Corn", price: 250 },
      { name: "Hara Bhara Kabab", price: 200 },
      { name: "Veg Cutlet", price: 150 },
      { name: "Veg Manchurian", price: 200 },
      { name: "Veg Fried Rice", price: 200 },
      { name: "Veg All Mix", price: 200 },
    ],
  },
//   {
//     id: "main-course",
//     name: "Indian Main Course",
//     icon: "♨",
//     items: [],
//   },
//   {
//     id: "dal-rice",
//     name: "Dal & Rice",
//     icon: "◉",
//     items: [],
//   },
//   {
//     id: "breads",
//     name: "Indian Breads",
//     icon: "♧",
//     items: [],
//   },
  {
    id: "thalis",
    name: "Thalis",
    icon: "▤",
    items: [
      { name: "Regular Thali (5 Items)", price: 200 },
      { name: "Special Thali (8 Items)", price: 250 },
      { name: "Executive Thali", price: 300 },
    ],
  },
  {
    id: "snacks",
    name: "Snacks",
    icon: "◈",
    items: [
      { name: "Papad Fry / Roast", price: 20 },
      { name: "Masala Papad Fry / Roast", price: 40 },
    ],
  },
  {
    id: "beverages",
    name: "Hot & Cold",
    icon: "♨",
    items: [
      { name: "Tea", price: 30 },
      { name: "Coffee", price: 50 },
      { name: "Lassi / Cold Coffee", price: 60 },
      { name: "Cold Drink", price: 50 },
      { name: "Mineral Water", price: 40 },
      { name: "Butter Milk / Chhach", price: 40 },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    icon: "♧",
    items: [
      { name: "Green Salad", price: 50 },
      { name: "Onion Salad", price: 40 },
      { name: "Cucumber Salad", price: 100 },
      { name: "Dahi Cucumber", price: 120 },
      { name: "Dahi Cucumber Peanut", price: 150 },
    ],
  },
  {
    id: "raita",
    name: "Raita",
    icon: "◉",
    items: [
      { name: "Plain Dahi", price: 100 },
      { name: "Boondi Raita", price: 100 },
      { name: "Cucumber Raita", price: 100 },
      { name: "Fruit Raita", price: 150 },
    ],
  },
  {
    id: "sizzlers",
    name: "Sizzlers",
    icon: "♨",
    items: [
      { name: "Manchurian Sizzler", price: 200 },
      { name: "Paneer Sizzler", price: 250 },
      { name: "Vrindavan Special Sizzler", price: 300 },
    ],
  },
];

function RestaurantMenu() {
  const [activeCategory, setActiveCategory] = useState("soups");

  const selectedCategory = menuCategories.find(
    (category) => category.id === activeCategory
  );

  return (
    <section className="bg-[#eae4d9] px-5 py-20 sm:px-8 md:py-24 lg:py-28">
      <div className="mx-auto max-w-[1000px]">

        {/* Section Heading */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-7 bg-[#c5a46d]" />
            <span className="text-[9px] font-medium uppercase tracking-[0.28em] text-[#b28c50]">
              Our Menu
            </span>
            <span className="h-px w-7 bg-[#c5a46d]" />
          </div>

          <h2 className="font-heading text-3xl text-[#193e32] sm:text-4xl">
            Nine Categories,{" "}
            <span className="italic text-[#c5a46d]">Endless</span> Comfort
          </h2>

          <p className="mt-3 text-xs leading-relaxed text-[#77736c]">
            Browse our food categories below. The menu is 100% vegetarian.
          </p>
        </div>

        {/* Information Notice */}
        <div className="mb-8 flex items-start gap-3 border border-[#c5a46d]/40 bg-[#c5a46d]/[0.07] px-4 py-4">
          <Info
            size={15}
            className="mt-0.5 shrink-0 text-[#b28c50]"
          />
          <p className="text-[11px] leading-relaxed text-[#77736c]">
            All dishes are freshly prepared at Hotel Vrindavan.
            Please call us for the latest menu and prices.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-[9px] font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
                activeCategory === category.id
                  ? "border-[#1c4034] bg-[#1c4034] text-white"
                  : "border-[#b9b5aa] bg-transparent text-[#65645e] hover:border-[#1c4034] hover:bg-[#1c4034] hover:text-white"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Card */}
        <div className="min-h-[300px] bg-[#f8f6f1] px-5 py-7 shadow-sm sm:px-8 sm:py-9 md:px-10">

          {/* Category Title */}
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#c5a46d]/50 text-[#b28c50]">
              <Utensils size={17} strokeWidth={1.4} />
            </div>

            <h3 className="font-heading text-xl text-[#193e32]">
              {selectedCategory.name}
            </h3>
          </div>

          {/* Menu Items */}
          {selectedCategory.items.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-10 gap-y-6 md:grid-cols-2">
              {selectedCategory.items.map((item, index) => (
                <div key={`${item.name}-${index}`}>
                  <div className="flex items-baseline gap-2">
                    <h4 className="shrink-0 font-heading text-[15px] text-[#244438]">
                      {item.name}
                    </h4>

                    <span className="relative top-[-4px] min-w-0 flex-1 border-b border-dotted border-[#bdb6a8]" />

                    <span className="shrink-0 text-xs font-medium text-[#b28c50]">
                      ₹ {item.price}
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] leading-relaxed text-[#969087]">
                    Freshly prepared and served with care.
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex min-h-[180px] items-center justify-center text-center">
              <p className="max-w-sm text-sm leading-relaxed text-[#89847b]">
                Menu details for this category are being verified
                against the original restaurant menu.
              </p>
            </div>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="mt-9 text-center">
          <p className="mb-4 text-[9px] uppercase tracking-[0.13em] text-[#969087]">
            For today's menu and prices, call us directly.
          </p>

         <a
  href="tel:7987775155"
  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1c4034] px-7 py-3.5 !text-white text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-300 hover:bg-[#c5a46d] hover:!text-[#193e32]"
>
  <Phone size={13} />
  Call for Menu & Prices
</a>
        </div>

      </div>
    </section>
  );
}

export default RestaurantMenu;
