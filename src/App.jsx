import { useState } from "react";
import menu from "./data";

const App = () => {
  const categories = ["all", ...new Set(menu.map((item) => item.category))];
  const [items, setItems] = useState(menu);
  const setCategoryItems = (category) => {
    if (category === "all") return setItems(menu);
    setItems(menu.filter((item) => item.category === category));
  };

  console.log(items, categories);

  return (
    <section className="menu">
      <div className="title">
        <h2>My Menu</h2>
        <div className="title-underline"></div>
      </div>

      <div className="btn-container">
        {categories.map((category) => (
          <button className="btn" onClick={() => setCategoryItems(category)}>
            {category}
          </button>
        ))}
      </div>

      <div className="section-center">
        {items.map((item) => {
          return (
            <div className="menu-item item" key={item.id}>
              <img src={item.img} className="img menu-img" alt="" />

              <div className="menu-info item-info">
                <header>
                  <h4>{item.title}</h4>
                  <div className="item-price">
                    <span>$</span>
                    <span>{item.price}</span>
                  </div>
                </header>
                <p className="item-text">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default App;
