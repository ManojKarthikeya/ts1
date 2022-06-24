import "./App.css";
import Cards from "./Components/Cards/Cards";
import Header from "./Components/Header/Header";
import Menu from "./Components/Menu/menu";
import Overview from "./Components/Overview/Overview";
import TodayDeliv from "./Components/TodayDeliv/TodayDeliv";

function App() {
	return (
		<div className="App">
			<div className="maincont">
				<div className="lpart">
					<Menu />
				</div>
				<div className="rpart">
					<Header />
					<Cards />
					<div className="abdy">
						<TodayDeliv />
						<Overview />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
