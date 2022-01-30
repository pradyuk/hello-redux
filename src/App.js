import React, { Component } from "react";
import {createStore} from "redux";
import reducer from "./reducers"
import HelloWorld from "./HelloWorld";

// const App = () => {
//   const [tech] = useState("React");
//   return <HelloWorld tech={tech} />;
// };
const initialState = {
  tech: "React"
};
const store = createStore(reducer, initialState);
class App extends Component {
  render(){
    return <HelloWorld tech={store.getState().tech}/>
  }
}



export default App;
