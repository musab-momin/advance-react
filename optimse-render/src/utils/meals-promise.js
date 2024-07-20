const dishes = [
  { id: 1, name: "Butter Chicken" }, // Indian
  { id: 2, name: "Biryani" }, // Indian/Pakistani
  { id: 3, name: "Kebabs" }, // Turkish
  { id: 4, name: "Shawarma" }, // Turkish
  { id: 5, name: "Aloo Gobi" }, // Indian
  { id: 6, name: "Chapli Kebab" }, // Pakistani
  { id: 7, name: "Mantı" }, // Turkish
  { id: 8, name: "Rogan Josh" }, // Indian
  { id: 9, name: "Mantu" }, // Afghan
  { id: 10, name: "Chicken Karahi" }, // Pakistani
  { id: 11, name: "Baklava" }, // Turkish
  { id: 12, name: "Palak Paneer" }, // Indian
  { id: 13, name: "Lamb Korma" }, // Indian
  { id: 14, name: "Haleem" }, // Pakistani
  { id: 15, name: "Samosa" }, // Indian/Pakistani
  { id: 16, name: "Afghan Rice" }, // Afghan
  { id: 17, name: "Nihari" }, // Pakistani
  { id: 18, name: "Dal Makhani" }, // Indian
  { id: 19, name: "Pide" }, // Turkish
  { id: 20, name: "Kofta" }, // Indian/Turkish
];

const mealsPromsie = (query) => {
  return new Promise((resolve, _) => {
    const info = (() => {
      const searchedDish = !query
        ? []
        : dishes.filter((dish) =>
            dish.name.toLowerCase().includes(query.toLowerCase())
          );
      console.log("@@ FAKE API CAll: >>>");
      return searchedDish
        ? { message: searchedDish, isSuccess: true }
        : { message: "not found", isSuccess: false };
    })();

    setTimeout(() => {
      resolve(info);
    }, [800]);
  });
};

export default mealsPromsie;
