import { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import ThemeContext from "./Context/ThemeContext";

function App() {
	const [themeStatus, setThemeStatus] = useState('light')

	return (
		<ThemeContext.Provider value={{
		themeStatus,
		setThemeStatus
		}}>
			<div className={`App ${themeStatus === 'light'? 'light': 'dark'} `}>
				<Sidebar />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
