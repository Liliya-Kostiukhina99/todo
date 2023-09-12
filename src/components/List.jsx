import React from 'react';
import ListItem from './ListItem';

const List = ({lists, remove}) => {
    return (
        <div>
            {lists.map(list =>
               <ListItem remove={remove} list={list} key={list.id}/>
            )} 
        </div>
    );
};

export default List;