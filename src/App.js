import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Section from './components/Section';
import List from './components/List';
import axios from 'axios';

const appTitle ="Tasks-To-Do APP"

const list = [
  {id: 1,title: "Test #1", completed: false},
  {id: 2,title: "Test #2", completed: false},
  {id: 3,title: "Test #3", completed: false}
];


const App = () => {
  const [todoList, setTodoList] = useState(list);

  useEffect (() => {
    async function fetchData() {

    const response = await axios.get("http://localhost:3030/todos/");
      console.log(response);
    }

    fetchData();
  }, []);

  const addTodo = (item) =>{
    setTodoList((oldList) => [...oldList, item]);
  };

  const removeTodo = (id) => {
      setTodoList((oldList) => oldList.filter((item) => item.id !== id));
  };

  return (
    <div className="ui container center aligned">
      <Section>
        <h1>{appTitle}</h1>
      </Section>
      
      <Section>
        <Form addTodo={addTodo}/>
      </Section>

      <Section>
        <List removeTodo={removeTodo} list={todoList}/>
      </Section>
    </div>
  );
}

export default App;
