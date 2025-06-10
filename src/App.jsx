import { useEffect, useState } from "react";
import BackgroundHeading from "./components/BackgroundHeading";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import SideBar from "./components/SideBar";
import { initialItems } from "./lib/constants";
import Logo from "./components/Logo";
import Counter from "./components/Counter";

function App() {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("items") || initialItems)
  );
  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  const handleDeleteitem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };
  const handleReset = () => {
    setItems(initialItems);
  };
  const handleRemoveAllItems = () => {
    setItems([]);
  };
  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };
  const handleMarkAllAsInComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header>
          <Logo />
          <Counter
            totalNumberOfItems={items.length}
            numberOfItemsPacked={items.filter((item) => item.packed).length}
          />
        </Header>
        <ItemList
          items={items}
          handleDeleteitem={handleDeleteitem}
          handleToggleItem={handleToggleItem}
        />
        <SideBar
          handleAddItem={handleAddItem}
          handleRemoveAllItems={handleRemoveAllItems}
          handleReset={handleReset}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsInComplete={handleMarkAllAsInComplete}
        ></SideBar>
      </main>
      <Footer />
    </>
  );
}

export default App;
