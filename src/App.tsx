import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Layout from "components/Layout/Layout"
import Home from './pages/EmployeeApp/Home/Home';
import About from './pages/EmployeeApp/About/About';
import LogIn from './pages/EmployeeApp/LogIn/LogIn';
import ContactUs from './pages/EmployeeApp/ContactUs/ContactUs';
import Clients from 'pages/EmployeeApp/Clients/Clients';
import Apple from 'pages/EmployeeApp/Clients/Apple/Apple';
import Samsung from 'pages/EmployeeApp/Clients/Samsung/Samsung';
import Xiaomi from 'pages/EmployeeApp/Clients/Xiaomi/Xiaomi';

import GlobalStyles from "styles/GlobalStyles";
// import Lesson_06 from "./lessons/Lesson_06/Lesson_06";
// import Lesson_07 from "./lessons/Lesson_07/Lesson_07"
// import Lesson_08 from "lessons/Lesson_08/Lesson_08";
// import Lesson_09 from "lessons/Lesson_09/Lesson_09";
// import Lesson_10 from "lessons/Lesson_10/Lesson_10";
// import Lesson_11 from "lessons/Lesson_11/Lesson_11";
// import Lesson_12 from "lessons/Lesson_12/Lesson_12"
// import Lesson_13 from "lessons/Lesson_13/Lesson_13"


// import Homework_06 from "homeworks/homework_06/Homework_06";
// import Homework_07 from "homeworks/homework_07/Homework_07";
// import Homework_08 from "homeworks/Homework_08/Homework_08";
// import Homework_09 from "homeworks/homework_09/homework_09"
// import Homework_10 from "homeworks/homework_10/Homework_10";
// import Homework_12 from "homeworks/homework_12/Homework_12";




function App() {
  return (
  <BrowserRouter>
  <GlobalStyles />
  <Layout>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/login" element={<LogIn />}/>
      <Route path="/contactUs" element={<ContactUs />}/>
      <Route path="/clients" element={<Clients />}/>
      <Route path="/clients/apple" element={<Apple />}/>
      <Route path="/clients/samsung" element={<Samsung />}/>
      <Route path="/clients/xiaomi" element={<Xiaomi />}/>
      <Route path="*" element="Page not found"/>
    </Routes>
  </Layout>
  {/* Homeworks */}
  {/* <Homework_06 /> */}
  {/* <Homework_07 /> */}
  {/* <Homework_08/> */}
  {/* <Homework_09/> */}
  {/* <Homework_10 /> */}
  {/* <Homework_12 /> */}

  {/*Lessons */}
  {/* <Lesson_06/> */}
  {/* <Lesson_07 /> */}
  {/* <Lesson_08 /> */}
  {/* <Lesson_09/> */}
  {/* <Lesson_10 /> */}
  {/* <Lesson_11 /> */}
  {/* <Lesson_12 /> */}
  {/* <Lesson_13 /> */}

  </BrowserRouter>
);
}

export default App;