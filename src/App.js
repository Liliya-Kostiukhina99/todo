import React, {useState} from 'react';
import './styles/App.css';
import List from './components/List';
import Group from './components/Group';
import Header from './components/Header';

function App() {
  const [lists, setLists] = useState([
    {id: 1, body: 'Выбрать хостинг для сайта'},
    {id: 2, body: 'Записаться к стоматологу'},
    {id: 3, body: 'Записаться на курсы по Английскому'},
    {id: 4, body: 'Навести порядок на кухне'},
    {id: 5, body: 'Подготовить одежду к поездке'},
    {id: 6, body: 'Подготовиться к выступлению в понедельник'},
    {id: 7, body: 'Помыть машину'},
    {id: 8, body: 'Купить продукты'},
    {id: 9, body: 'Отдать проект на проверку'}
  ])

  const createList = (newList) => {
    setLists([...lists, newList])
  }

  const removeList = (list) => {
    setLists(lists.filter(l => l.id !== list.id))
  }

  return (
    <div className="App">
      <Header></Header>
      <Group create={createList}/>
      <List remove={removeList} lists={lists}/>
    </div>
  );
}

export default App;
