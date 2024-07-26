import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeLayout from "./Layout/HomeLayout";
import SingleRestaurant from "./Pages/SingleRestaurant";
import NotFoundPage from "./Pages/NotFound";





function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />}>
        <Route path="*" element={<NotFoundPage />} />
        <Route index element={<HomePage />} />
        <Route path="/restaurant/:name" element={<SingleRestaurant />} />
      </Route>
      </>
    )
  )
  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
