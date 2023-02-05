let arr = [
  {
      foodName: "Aloo Prantha",
      foodCategory : "breakfast",
      calories : "500",
      isJunkFood : false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/aloo-paratha-indian-potato-stuffed-flatbread-1563134212",
  },

  {
      foodName : "Poha",
      foodCategory : "breakfast",
      calories : "250",
      isJunkFood : false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/alookanda-poha-tarri-pohe-spicy-chana-1282013101"
  },

  {
      foodName: "Idli-Sambar",
      foodCategory : "breakfast",
      calories : "250",
      isJunkFood: false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/podi-idli-quick-easy-snack-made-1462352579"
  },

  {
      foodName: "Rajma-Rice",
      foodCategory : "Lunch",
      calories : "500",
      isJunkFood : false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/rajma-red-bean-masala-kidney-curry-1907617843"
  },

  {
      foodName : "Biryani",
      foodCategory : "Lunch",
      calories : "500",
      isJunkFood : false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/chicken-biryani-spicy-indian-malabar-hyderabadi-2021764724"
  },

  {
      foodName : "Himachali Dham",
      foodCategory: "Lunch",
      calories : "500",
      isJunkFood : false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/dham-traditional-food-himachal-pradesh-himachali-2074777408"
  },

  {
      foodName : "Siddu",
      foodCategory: "Snacks",
      calories : "450",
      isJunkFood : false,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/siddu-mouth-watering-authentic-himachali-food-1382397224"
  },

  {
      foodName : "Burger",
      foodCategory : "Snacks",
      calories : "450",
      isJunkFood : true,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/delicious-grilled-burgers-1146199442"
  },

  {
      foodName : "Pizza",
      foodCategory : "Snacks",
      calories : "450",
      isJunkFood : true,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/flatbread-pizza-garnished-fresh-arugula-on-1048511935"
  },

  {
      foodName: "Shahi-Paneer",
      foodCategory : "Dinner",
      calories : "450",
      isJunkFood : true,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/paneer-butter-masala-cheese-cottage-curry-620764247"
  },

  {
      foodName: "Butter-Chicken",
      foodCategory : "Dinner",
      calories : "450",
      isJunkFood : true,
      foodItemImageUrl : "https://www.shutterstock.com/image-photo/chicken-tikka-masala-spicy-curry-meat-1153329463"
  },
];
  
  let arrItem = "";
  
  let filter = arr.filter(function (item) {
    items(item);
  });
  function filterItem(category) {
    arrItem = "";
    if (category === "breakFast") {
      arr.filter(function (item) {
        if (item.foodCategory == "breakfast") {
          items(item);
        }
      });
    } else if (category === "calories") {
      arr.filter(function (item) {
        if (item.calories > 250) {
          items(item);
        }
      });
    } else if (category === "junk") {
      arr.filter(function (item) {
        if (item.isJunkFood == true) {
          items(item);
        }
      });
    } else if (category === "allItem") {
      arr.filter(function (item) {
        items(item);
      });
    }
  }
  if (item.isJunkFood == true) {
    abc(item);
  }
  
  function items(item) {
    arrItem += `<div class='maincontainer'>
    <div><img class='img' src='${item.foodItemImageUrl}'></div>
    <div class='data'><h4>FoodName - ${item.foodName}</h4>
    <h4>FoodCategory - ${item.foodCategory}</h4>
  
    <h4>IsJunkFood - ${item.isJunkFood}</h4>
    <h4>Calories - ${item.calories}</h4>
    </div>
    </div>`;
    document.getElementById("container").innerHTML = arrItem;
  }