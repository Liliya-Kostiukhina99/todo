import React from 'react';
import Button from './UI/button/Button';
import '/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/Filter.css';

const Filter = () => {
    return (
        <div className="filter">
          <Button appearance='FilterBtn'>Список</Button>
          <Button  appearance='FilterBtn' >Напоминания</Button>
          <Button appearance='FilterBtn'>Ещё</Button>
        </div>
    );
};

export default Filter;