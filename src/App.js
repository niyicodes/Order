import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import HomeLayout from "./Layout/HomeLayout";





function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      </>
    )
  )
  return (
    <div className="w-full md:px-[5%]">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
