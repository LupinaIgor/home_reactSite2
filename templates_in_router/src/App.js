import './assets/css/styles.css';
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import MainLayout from "./layouts/MainLayout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import IndexPage from "./pages/IndexPage";
import {Suspense} from "react";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Error404 from "./pages/Error404";

function App() {
  return (
      <BrowserRouter>
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout />}>
        {/*<Route path="/" element={<MainLayout byPropsPageName={byPropsPageName}/>}>*/}
          <Route index element={<IndexPage />}/>
          {/*<Route path="" element={<IndexPage setByPropsPageName={setByPropsPageName}/>}/>*/}


          {/* Лениво загружаемый AboutPage */}
          <Route path="about" element={
            <Suspense fallback={<div>Loading...</div>}>
              <AboutPage />
              {/*<AboutPage setByPropsPageName={setByPropsPageName}/>*/}
            </Suspense>
          } />

          <Route path="services" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ServicesPage/>
              {/*<ProjectsPage setByPropsPageName={setByPropsPageName}/>*/}
            </Suspense>
          } />

          <Route path="portfolio" element={
            <Suspense fallback={<div>Loading...</div>}>
              <PortfolioPage/>
              {/*<ProjectsPage setByPropsPageName={setByPropsPageName}/>*/}
            </Suspense>
          } />

          <Route path="contact" element={
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
              {/*<ContactPage setByPropsPageName={setByPropsPageName}/>*/}
            </Suspense>
          } />


          <Route path="*" element={<Error404/>} />
          {/*<Route path="*" element={<Error404Page setByPropsPageName={setByPropsPageName}/>}/>*/}
        </Route>
      </Routes>
      <ToastContainer/>

    </div>
      </BrowserRouter>
  );
}

export default App;
