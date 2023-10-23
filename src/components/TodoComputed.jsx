/* eslint-disable react/prop-types */
const TodoComputed = ({computedItemLeft, clearCompleted}) =>{
    return (
        <section className="py-4 px-4 flex justify-between bg-white rounded-b-md">
            <span className="text-gray-400">{computedItemLeft} item  left</span>
            <button className="text-gray-400" onClick={clearCompleted}>Clear Complete</button>
          </section>

    )
}

export default TodoComputed