import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ProSidebar,
  SidebarHeader,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { ImPriceTags } from "react-icons/im";
import { BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { logoutInitiate } from "../../features/action";
import { useDispatch } from "react-redux";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePostAdd } from "react-icons/md";
import { AiFillFolderAdd } from "react-icons/ai";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

import { SiApacheairflow } from "react-icons/si";
import { GiAbstract050 } from "react-icons/gi";
import "./Sidebar.css";
function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuCollapse, setMenuCollapse] = useState(false);
  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const handleAuth = () => {
    dispatch(logoutInitiate());
    navigate("/admin/login");
  };
  return (
    <>
      <div id="header">
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
            <div className="logotext">
              <p>{menuCollapse ? <GiAbstract050 /> : <SiApacheairflow />}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? <FiArrowRightCircle /> : <FiArrowLeftCircle />}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="circle">
              <MenuItem icon={<MdOutlineDashboard />}>
                Dashboard
                <Link to="/admin/dashboard" />
              </MenuItem>
            </Menu>
            <Menu iconShape="circle">
              <SubMenu title="Properties" icon={<ImPriceTags />}>
                <MenuItem icon={<MdOutlinePostAdd />}>
                  All
                  <Link to="/admin/properties/list" />
                </MenuItem>
                <MenuItem icon={<AiFillFolderAdd />}>
                  Create
                  <Link to="/admin/property/new" />
                </MenuItem>
              </SubMenu>
            </Menu>
            <Menu iconShape="square">
              <MenuItem icon={<BiExit />} onClick={handleAuth}>
                Logout
              </MenuItem>
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
    </>
  );
}

export default Sidebar;
