const menu = {
    _meal: '',
    _price: 0,
    set meal(mealToCheck) {
      if (typeof mealToCheck === 'string') {
        this._meal = mealToCheck;
      }
    },
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number') {
        this._price = priceToCheck;
      }
    },
    get todaysSpecial() {
      if (this._meal || this._price === true) {
        return `Today’s Special is ${menu._meal} for 50% discount!`;
      } else {
        return 'Meal or price was not set correctly!';
      }
    }
  }
  menu.meal = 'Vodka';
  menu.price = 100;
  console.log(menu.todaysSpecial);
  
  // first test log
  /*
  menu._meal = 'Vodka';
  menu._price = 100;
  console.log(menu._meal);
  console.log(menu._price);
  */
  
  //secong test log
  /*
  menu.meal = 'Vodka';
  menu.price = 100;
  console.log(menu._meal);
  console.log(menu._price);
  */
 // If you want to extend your learning on this project, try adding an array of meals and prices to randomly set and get Today’s Special!