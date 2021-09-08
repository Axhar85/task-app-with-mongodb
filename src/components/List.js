import React from "react";
import Todo from "./Todo";

const List = ({list, removeTodo}) => {
    const renderedList = list.map((item) => <Todo title={item.title} completed={item.completed} removeTodoItemProp={(event) => removeTodo(item.id)} key={item.title}/>);
    return(
        <div className=" ui grid center aligned">
            {renderedList}
        </div>
    );

};

export default List;