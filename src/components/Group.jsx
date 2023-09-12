import React from 'react';
import Filter from './Filter';
import Form from './Form';
import '/Users/liliyakostuhina/Documents/vscode/justice-project/src/styles/Group.css';


const Group = ({create}) => {
    return (
        <div className="group">
        <Filter></Filter>
        <Form create={create}></Form>
      </div>
    );
};

export default Group;