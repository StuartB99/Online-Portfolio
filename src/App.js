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
          <Route path="/" exact component={() => <Home />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/profile" exact component={() => <Profile />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/projects/flatland_page" exact component={() => <FlatlandPage />} />
          <Route path="/projects/data_vis_page" exact component={() => <DataVisPage />} />
          <Route path="/projects/tas_page" exact component={() => <TasPage />} />
          <Route path="/projects/dite_page" exact component={() => <DitePage />} />
          <Route path="/projects/restaurant_page" exact component={() => <RestaurantJournalPage />} />
          <Route path="/projects/gitrepo_page" exact component={() => <GitRepoInspectPage />} />
          <Route path="/projects/vitals_page" exact component={() => <HealthVitalsPage />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
