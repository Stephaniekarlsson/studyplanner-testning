// item.jsx
import { useState } from "react";
import { useStore } from "../../data/store";

const Item = ({ item }) => {
  const { removeTodo, updateTodoText, toggleTodo } = useStore();
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(item.text);

  let itemClass = "";
  if (item.done) itemClass += "done";
  if (item.late) itemClass += "due";

  const handleChange = () => {
    // Implementera logik för när checkboxen ändras
    toggleTodo(item.id);
  };

  const handleDelete = () => {
    removeTodo(item.id);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    updateTodoText(item.id, newText);
    setEditing(false);
  };

  const handleCancel = () => {
    setNewText(item.text);
    setEditing(false);
  };

  return (
    <div className="item">
      <input
        type="checkbox"
        data-cy="checkbox"
        checked={item.done}
        onChange={handleChange}
      />
      {editing ? (
        <input
          type="text"
          data-cy="input-field"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
          autoFocus
          onBlur={handleSave}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSave();
            } else if (e.key === "Escape") {
              handleCancel();
            }
          }}
        />
      ) : (
        <label className={itemClass} onClick={handleChange}>
          {item.text}
        </label>
      )}
      {/* <span title="Snooza">💤</span> */}
      <span data-cy="edit-icon" title="Ändra" onClick={handleEdit}>
        ✍️
      </span>
      <span title="Ta bort" data-cy="delete-icon" onClick={handleDelete}>
        🗑️
      </span>
    </div>
  );
};

export default Item;
