import React, {useState} from 'react';
import MyInput from './UI/input/MyInput';
import Button from './UI/button/Button';
import '/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/Form.css';

const Form = ({create}) => {

    const [list, setList] = useState({body: ''})

    const addNewList = (event) => {
        event.preventDefault()
        const newList = {
            ...list, id: Date.now()
        }
        create(newList)
        setList({body: ''})
      }
      
    return (
        <div className="form">
          <MyInput 
          type="text" 
          placeholder="Введите текст"
          value={list.body}
          onChange={event =>setList({...list, body: event.target.value})}>
          </MyInput>
          <Button appearance='FormBtn' onClick={addNewList}>Добавить +</Button>
        </div>
    );
};

export default Form;