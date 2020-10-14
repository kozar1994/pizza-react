import React from "react";

function Categories({items, onClickItem}) {
  const [selectItem, setSelectItems] = React.useState(null)

  const onSelectItems = (index) => {
    onClickItem(index)
    setSelectItems(index)
  }
  

  return (
    <div className="categories">
      <ul>
        <li className={selectItem === null ? "active" : ""} onClick={()=>onSelectItems(null)}>Все</li>
        {items && items.map((name,index) => (
          <li className={selectItem === index ? "active" : ""} onClick={()=>onSelectItems(index)} key={`${name}_${index}`}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
