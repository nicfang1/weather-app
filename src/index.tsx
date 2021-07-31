import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./store/store";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
	<Provider store={store}>
		<ChakraProvider>
			<App />
		</ChakraProvider>
	</Provider>,
	document.getElementById("root")
);
