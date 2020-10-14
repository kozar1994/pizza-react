import React from "react";

import { Categories, PizzaBlock, SortPopup } from "components";

function Home({items}) {
  

  const onClickItem = (index) => {
    console.log(index);
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          onClickItem={onClickItem}
          items={["Сирна", "Вегетеріанська", "М'ясна", "Гостра"]}
        />
        <SortPopup items={["популярности", "цене", "алфавиту"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && (
          items.map((item)=><PizzaBlock key={item.id} {...item} />)
        )}
      </div>
    </div>
  );
}

export default Home;
