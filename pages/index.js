
import React, { useState } from "react";

 
    
  
 
      function CompB(){
        return (
          <div>
          
          <h1>CompB</h1>
          </div>
        )
      }

      class CompC extends React.Component {

        render(){
          return(
          <h1>CompC</h1>
        )
        }
      }

    function Home() {
      const [value, setValue] = useState(10);
      // const value = valueState[0];
      // const setValue = valueState[1];


        return (
            <div>
              valueState: { value }
              <h1>Hello World</h1>
              <CompB />
              <CompC />
            </div>
          )
      }

  
export default Home;