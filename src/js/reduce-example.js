const expenses = [
    { category: 'Food', cost: 50 },
    { category: 'Transportation', cost: 30 },
    { category: 'Accommodation', cost: 100 },
    { category: 'Food', cost: 40 },
    { category: 'Transportation', cost: 20 },
  ];
  
  const totalCost = expenses.reduce((initalValue,expense)=>{
  
  if(initalValue.hasOwnProperty(expense.category)){
    initalValue[expense.category]+=expense.cost}
  else{
    initalValue[expense.category]=expense.cost;
  }
  return initalValue;
  },{})