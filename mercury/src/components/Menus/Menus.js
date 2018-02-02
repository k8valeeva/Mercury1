import React from 'react';
import LeftBar from "./LeftBar";
import TopNav from "./TopNav";

class Menus extends React.Component {
    render() {
        return(
           <div>
               <LeftBar/>
               <TopNav/>
           </div>
        )
    }
}

export default Menus;