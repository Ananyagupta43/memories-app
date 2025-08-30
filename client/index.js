import React from "react";
import ReactDom from 'react-dom/client';

const App=()=>{
    return <div>Heading</div>
}

const root=ReactDom.createRoot(document.getElementById('root'));

root.render(<App/>)