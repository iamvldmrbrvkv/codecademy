// Write your code here:
const convertToBaby = arr => {
    const baby = [];
    for (let i = 0; i < arr.length; i++) {
      baby.push(`baby ${arr[i]}`);
    }
    return baby;
  };
  
  
  
  
  
  
  
  // When you're ready to test your code, uncomment the below and run:
  
  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  
  console.log(convertToBaby(animals)) 
  
  