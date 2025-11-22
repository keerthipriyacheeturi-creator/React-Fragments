const Item = (props) => {
  let { foodItem } = props;
  return (
    <li key={foodItem} className="list-group-item kg-item">
      <span class="kg-span">{foodItem}</span>
    </li>
  );
};

export default Item;
