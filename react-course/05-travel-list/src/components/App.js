import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

/*
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];
*/

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    // Can't modify array directly, can't just add new element
    // Create new array with the contents of the previous one, plus the new one
    // ... spreads the contents of the items array
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    // Create a new array by filtering based on a function
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      // Create new array loopin over it
      items.map((item) =>
        // Check if the id is the one we're looking for
        // Create a new item with the updated status if so
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo></Logo>
      <Form onAddItems={handleAddItems}></Form>
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      ></PackingList>
      <Stats items={items}></Stats>
    </div>
  );
}
