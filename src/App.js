import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";

// function App() {
//   return (
//     <ChakraProvider>
//       <AlertProvider>
//         <main>
//           <Header />
//           <LandingSection />
//           <ProjectsSection />
//           <ContactMeSection />
//           <Footer />
//           <Alert />
//         </main>
//       </AlertProvider>
//     </ChakraProvider>
//   );
// }

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Router>
          <Routes>
            <Route exact path='/react-advanced-example' element={<Home />} />
          </Routes>
        </Router>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
