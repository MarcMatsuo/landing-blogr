import React from 'react';
import './main.css'
import Design from '../Design';
import Infra from '../Infra';
import Tooling from '../Tooling';

const Main = () => {
    return (
        <div className="main">
            <Design />
            <Infra />
            <Tooling />
        </div>
    );
}
 
export default Main;