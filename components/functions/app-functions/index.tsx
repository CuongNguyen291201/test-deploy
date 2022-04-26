import React, { useState } from 'react'
import AppFunction1 from './AppFunction1';
import AppFunction2 from './AppFunction2';
import AppFunction3 from './AppFunction3';
import AppFunction4 from './AppFunction4';

const color = { bgHover: "#006684", descHover: "#C4E5EE", titleHover: "#fff", iconHover: "#00CBE7" };
const AppFunctions = (props: { location?: number }) => {
    const { location } = props;
    const [hover, setHover] = useState(false);
    const chooseAppFunction = (index: number) => {
        switch (index) {
            case 1:
                return hover ?
                    <AppFunction1 bgHover={color.bgHover} descHover={color.descHover} titleHover={color.titleHover} iconHover={color.iconHover} />
                    : <AppFunction1 />
            case 2:
                return hover ?
                    <AppFunction2 bgHover={color.bgHover} descHover={color.descHover} titleHover={color.titleHover} iconHover={color.iconHover} />
                    : <AppFunction2 />
            case 3:
                return hover ?
                    <AppFunction3 bgHover={color.bgHover} descHover={color.descHover} titleHover={color.titleHover} iconHover={color.iconHover} />
                    : <AppFunction3 />
            case 4:
                return hover ?
                    <AppFunction4 bgHover={color.bgHover} descHover={color.descHover} titleHover={color.titleHover} iconHover={color.iconHover} />
                    : <AppFunction4 />
            default:
                break;
        }
    }

    return (
        <div id="app-functions"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {chooseAppFunction(location)}    
        </div>
    )
}

export default AppFunctions