import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import { Layout, Home, Market, NoPage, Details, Empty, Upload } from "./pages";

let router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="market" element={<Market />} />
      <Route path="details" element={<Details />} />
      <Route path="empty" element={<Empty />} />
      <Route path="upload" element={<Upload />} />
      <Route path="*" element={<NoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
