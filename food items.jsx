import Item from "./assets/item"
const FoodItem = () => {
    // let foodItems = ['Dal','Green vegetables','Roti','Salad','Milk'];
    return (
        <ul className="list-group">
            {foodItems.map ((item) => (
                <li key={prop.foodItem} className="list-group-item">{prop.foodItem}</li>
                
                //<Item key={items} foodItem={item}></Item>
                
            ))}
        </ul>
    );
};

export default FoodItem;