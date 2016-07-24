import React from "react";
import ReactDOM from "react-dom";

require("../css/fonts.css");
require("../css/styles.css");


import Header from "./pages/Header";
import MainContainer from "./pages/mainContainer";

class Layout extends React.Component {
        
       render() {
           return( 
               <div>
            		<Header />
            		<MainContainer />
            	</div>
	    );
    }
}

ReactDOM.render(<Layout />, document.getElementById('app'));