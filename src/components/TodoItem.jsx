/* eslint-disable react/prop-types */
{
  /* <button className="rounded-full border-2 h-5 w-5  flex-none bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 grid place-items-center">
        <ChecksIcon />
      </button> clase grid para centrar los item al centro
       templeid String {`${}`} nos permite hacer la interpolacion 
      */

}
import ChecksIcon from "./icons/ChecksIcon";
import CrossIcon from "./icons/crossicon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  // eslint-disable-next-line no-unused-vars
  const { id, title, completed } = todo;
  return (
    <article className="flex gap-4 border-b border-b-gray-400 ">
      <button
        className={`h-5 w-5 rounded-full border-2 flex-none ${
          completed
            ? " bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
            : "inline-block "
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <ChecksIcon />}
      </button>
      <p className={`text-gray-600 grow ${completed && "line-through"}`}>{title}</p>
      <button onClick={()=>removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
