import ErrorMessage from './assets/errorMessage.jsx';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './food items.jsx';

function App() {


  let foodItems = ['Dal','Green vegetables','Roti','Salad','Milk'];
   
  /*ternary*/

  let emptyMessage = 
   foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;


  if(foodItems.length === 0) {
    return <h3>I am still hungry.</h3>
  }

  return (
    <React.Fragment>
      <h1 className="food-Heading">Healthy Food</h1>   
      {emptyMessage}
      /*logical*/
      {foodItems.length === 0 && <h3>I am still hungry.</h3>}
      /*if-else*/
      {foodItems.length === 0 ? <h3>I am still hungry.</h3> : null}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className = "list-group-item">{item}</li>))}
{/* 

         <li className="list-group-item">Dal</li>
        <li className="list-group-item">Green vegetables</li>
        <li className="list-group-item">Roti</li>
        <li className="list-group-item">Salad</li>
        <li className="list-group-item">Milk</li> */}
      </ul> 
    </React.Fragment>
  );
}

<>
<FoodItems items={foodItems}></FoodItems>
<ErrorMessage items={foodItems}></ErrorMessage>
</>


export default App;
