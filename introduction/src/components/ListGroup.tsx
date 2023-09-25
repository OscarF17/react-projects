import { Fragment, useState } from "react";

// Se utiliza para pasar información
interface Props {
  items: string[];
  heading: string;

  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelected] = useState(-1);
  /*
   * useState devuelve un arreglo con dos valores: el elemento a cambiar y la función que lo cambia en el DOM
   * Los podemos separar en dos variables para no tener que manejar el arreglo directamente
   * Se le puede dar un valor inicial a la variable o dejarla como indefinido
   * Si se copia el elemento, cada uno tiene su propio estado
   */

  // items.length === 0 ? <p>No items found</p> : null;
  return (
    // Llaves vacías significan fragmento
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelected(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
