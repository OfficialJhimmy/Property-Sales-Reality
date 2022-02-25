import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./container/Home/index";
import Properties from "./container/Properties/index";
import ForSale from "./container/ForSale/index";
import Error404 from "./container/Error404/index";
import AdminRegister from "./container/Admin/AdminRegister";
import AdminLogin from "./container/Admin/AdminLogin";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase-config";
import { setUser } from "./features/action";
import AdminDashboard from "./container/Admin/AdminDashboard";
import NewProperty from "./container/Admin/NewProperty";
import EditProperty from "./container/Admin/EditProperty";
import PropertyDetails from "./container/PropertyDetail/PropertyDetails";
import PropertyList from "./container/Admin/PropertyList";
import ForRent from "./container/ForRent/index";
import Scrolltotop from "./components/Scroll-to-top/index";
import CustomCursor from "./components/CustomCursor/index";
import { ScrollFromBottom } from "./components/Scroll-to-top/ScrollFromBottom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Scrolltotop />
        <CustomCursor />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/properties" element={<Properties />} />
          <Route exact path="/properties/:id" element={<PropertyDetails />} />
          <Route exact path="/for-sale" element={<ForSale />} />
          <Route exact path="/for-rent" element={<ForRent />} />
          <Route exact path="/admin/register" element={<AdminRegister />} />
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
          <Route exact path="/admin/property/new" element={<NewProperty />} />
          <Route
            exact
            path="/admin/properties/list"
            element={<PropertyList />}
          />
          <Route exact path="/admin/property/:id" element={<EditProperty />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
        <ScrollFromBottom />
      </Router>
    </div>
  );
}

export default App;
