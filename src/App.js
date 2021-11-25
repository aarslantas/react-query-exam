import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PersonPage from "./components/Person";
import HomePage from "./components/Home";
import ReactQueryPage from "./components/React-query";
import SinglePersonPage from "./components/SinglePerson";
import ParallelQueriesPage from "./components/ParallelQueries";

import "./App.css";
import DynamicParallelQueries from "./components/DynamicParallelQueries";
import DependentQueriesPage from "./components/DependentQueris";
import PaginatedQueries from "./components/PaginatedQueries";
import InfiniteQueries from "./components/InfiniteQueries";
import AddPerson from "./components/AddPerson";

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
          <Route path="/rq-addperson" element={<AddPerson />} />
          <Route path="/rq-infinite" element={<InfiniteQueries />} />
          <Route path="/rq-paginated" element={<PaginatedQueries />} />
          <Route
            path="/rq-dependent"
            element={<DependentQueriesPage email="aarslantas@exam.com" />}
          />
          <Route
            path="/rq-dynamic-parallel"
            element={<DynamicParallelQueries personIds={[1, 3]} />}
          />
          <Route path="/rq-parallel" element={<ParallelQueriesPage />} />
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
