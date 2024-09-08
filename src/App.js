import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import Header from "./components/layout/header";
import Footer from "./components/layout/Footer";
import SideBar from "./components/layout/SideBar";
import SideBarItem from "./components/specificFeature/SideBarItem";
import { sidebaritems } from "./sample_data/sample_data";
import LoadingBar from "./components/common/loading_bar";
import Banner from "./components/specificFeature/ads/Banner";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import useHeaderStore from "./stores/headerStore";
import UserBox from "./components/specificFeature/userBox";

const App = () => {
  const { selectedSideBar, setSelectedSideBar } = useHeaderStore(
    (state) => state
  );
  return (
    <div className="relative h-screen flex flex-col bg-gray-900 text-white overflow-hidden">
      <Header />
      <LoadingBar />
      <Banner />
      <div className="flex grow bg-gray-900">
        <SideBar>
          <UserBox />
          {sidebaritems.map((item, idx) => (
            <SideBarItem
              key={idx}
              item={item}
              selectedSidebar={selectedSideBar}
              setSelectedSideBar={setSelectedSideBar}
            />
          ))}
        </SideBar>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/leaderboard" element={<LeaderBoardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
