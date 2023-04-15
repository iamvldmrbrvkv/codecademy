/*
Write a function groceries() that takes an array of object literals of grocery items. The function should return a string with each item separated by a comma except the last two items should be separated by the word 'and'. Make sure spaces (' ') are inserted where they are appropriate.

Examples:

groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] );
// returns 'Carrots, Hummus, Pesto and Rigatoni'
 
groceries( [{item: 'Bread'}, {item: 'Butter'}] );
// returns 'Bread and Butter'
 
groceries( [{item: 'Cheese Balls'}] );
// returns 'Cheese Balls'
*/

const groceries = list => {
    let listString = ''
  
    for (let i=0; i<list.length; i++) {
      listString += list[i].item;
      if (i < list.length - 2) {
        listString += ', ';
      } else if (i == list.length - 2){
        listString += ' and ';
      }
    }
    
    return listString;
  }
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));