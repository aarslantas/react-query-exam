import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonPage from "./components/Person";
import HomePage from "./components/Home";
import ReactQueryPage from "./components/React-query";
import SinglePersonPage from "./components/SinglePerson";

import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/react-query">react-query</Link>
            </li>
            <li>
              <Link to="/person">persons</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/persons/:personId" element={<SinglePersonPage />} />
          <Route path="/react-query" element={<ReactQueryPage />} />
          <Route path="/person" element={<PersonPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
