import React from "react";
import ReactDOM from "react-dom";
import { MeuComponenteReact } from "./components/MeuComponenteReact";

const App = props => {
	return (
		<MeuComponenteReact />
	);
};

ReactDOM.render(<App />, document.getElementById('injected-react-content'));