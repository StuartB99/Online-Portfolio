import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Navigation} from "./components/index_component";
import {Home, Projects, Profile, Contact, FlatlandPage, DataVisPage, TasPage, DitePage, RestaurantJournalPage, GitRepoInspectPage, HealthVitalsPage} from "./pages/index_pages"

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Online-Portfolio/" exact component={() => <Home />} />
          <Route path="/Online-Portfolio/projects" exact component={() => <Projects />} />
          <Route path="/Online-Portfolio/profile" exact component={() => <Profile />} />
          <Route path="/Online-Portfolio/contact" exact component={() => <Contact />} />
          <Route path="/Online-Portfolio/projects/flatland_page" exact component={() => <FlatlandPage />} />
          <Route path="/Online-Portfolio/projects/data_vis_page" exact component={() => <DataVisPage />} />
          <Route path="/Online-Portfolio/projects/tas_page" exact component={() => <TasPage />} />
          <Route path="/Online-Portfolio/projects/dite_page" exact component={() => <DitePage />} />
          <Route path="/Online-Portfolio/projects/restaurant_page" exact component={() => <RestaurantJournalPage />} />
          <Route path="/Online-Portfolio/projects/gitrepo_page" exact component={() => <GitRepoInspectPage />} />
          <Route path="/Online-Portfolio/projects/vitals_page" exact component={() => <HealthVitalsPage />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
