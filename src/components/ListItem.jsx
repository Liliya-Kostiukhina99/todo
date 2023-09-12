import React from 'react';
import '/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/List.css';

const ListItem = (props) => {
    return (
        <div className="list">
        <div>
          <p>{props.list.body}</p>
        </div>
        <div className="btnsList">
              <button onClick={() => props.remove(props.list)} className="delete"></button>
              <button className = "redact"></button>
        </div>
      </div>  
    );
};

export default ListItem;