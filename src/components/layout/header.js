import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import SearchBar from "../specificFeature/search_bar/search_bar";
import { sidebaritems } from "../../sample_data/sample_data";
import {
  ClockIcon,
  DiscordIcon,
  GoogleIcon,
  LoginIcon,
  SignOutIcon,
  SignUpIcon,
  SpeechBubbleIcon,
  WriteIcon,
} from "../common/icons";
import RecentBoard from "../specificFeature/displayItem/recent_board";
import useHeaderStore from "../../stores/headerStore";
import Modal from "react-modal";
import Button from "../common/Button";
import { IoMdClose } from "react-icons/io";
import Input from "../common/Input";
import PostModal from "../specificFeature/header/postModal";
import { supabase } from "../../services/supabaseClient";
import useUserStore, { syncTokenWithStore } from "../../stores/userStore";
import useUserState from "../../hooks/useUserState";
import { useSupabaseOAuth } from "../../hooks/useSupabaseOAuth";

const menus = [
  {
    icon: (
      <ClockIcon className="p-1 text-4xl hover:bg-slate-400 rounded-full" />
    ),
  },
  {
    icon: (
      <WriteIcon className="p-1 text-4xl hover:bg-slate-400 rounded-full" />
    ),
  },
  {
    name: "회원가입",
    to: "/signup",
    icon: (
      <SignUpIcon className="p-1 text-4xl hover:bg-slate-400 rounded-full" />
    ),
  },
  {
    name: "로그인",
    icon: (
      <LoginIcon className="p-1 text-4xl hover:bg-slate-400 rounded-full" />
    ),
  },
  {
    name: "로그아웃",
    icon: (
      <SignOutIcon className="p-1 text-4xl hover:bg-slate-400 rounded-full" />
    ),
  },
];

const MobileSideBar = ({ viewOption, setViewOption }) => {
  return (
    <div
      className={`absolute z-10 top-[4.1rem] bg-slate-300 border-b rounded-lg transition-all duration-300 ${
        viewOption ? "w-36 right-0" : "w-0"
      }`}
    >
      {viewOption && (
        <ul className="flex flex-col justify-evenly">
          {sidebaritems.map((item, idx) => (
            <li
              className="flex items-center px-4 py-3 border-b-[0.2rem]"
              key={idx}
            >
              {item.icon}
              <Link
                to={item.to}
                className="font-side text-[0.77rem] text-black pl-2 whitespace-nowrap font-bold"
                onClick={() => setViewOption(false)}
              >
                {item.category}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const [viewMobileSideBar, setViewMobileSideBar] = useState(false);
  const [showRecentBoard, setShowRecentBoard] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const { setSelectedSideBar } = useHeaderStore((state) => state);
  const { token, clearTokens } = useUserState(
    (state) => state
  );
  const { loginDiscord, loginGoogle, loginKakao } = useSupabaseOAuth();
  const [viewPostForm, setViewPostForm] = useState(false);

  useEffect(()=>{
    syncTokenWithStore()
  },[])

  const handleShowRecentBoards = (idx) => {
    if (idx === 0) {
      setShowRecentBoard(true);
    }
  };
  const handleLogoClick = () => {
    setSelectedSideBar("홈");
  };

  const handleHeaderIconClick = (idx) => {
    if (idx === 1) {
      setViewPostForm(true);
    } else if (idx === 3) {
      setShowLoginModal(true);
    } else if (idx === 4) {
      clearTokens();
    }
  };

  const handlePostModal = () => {
    setViewPostForm(false);
  };

  const BeforeSignInIcons = (item, idx) => {
    if (idx === 0 || idx === 2 || idx === 3) {
      return (
        <li
          key={`li-${idx}`}
          onMouseOver={() => handleShowRecentBoards(idx)}
          onClick={() => handleHeaderIconClick(idx)}
        >
          <Link
            key={`Link-${idx}`}
            to={item.to}
            className="font-primary sm:text-sm lg:text-lg xl:text-xl text-white font-semibold"
          >
            {item.icon}
          </Link>
        </li>
      );
    }
  };

  const AfterSignInIcons = (item, idx) => {
    if (idx === 0 || idx === 1 || idx === 4) {
      return (
        <li
          key={`li-${idx}`}
          onMouseOver={() => handleShowRecentBoards(idx)}
          onClick={() => handleHeaderIconClick(idx)}
        >
          <Link
            key={`Link-${idx}`}
            to={item.to}
            className="font-primary sm:text-sm lg:text-lg xl:text-xl text-white font-semibold"
          >
            {item.icon}
          </Link>
        </li>
      );
    }
  };

  return (
    <>
      <nav
        className={`relative flex justify-between items-center bg-black p-4`}
      >
        <div className="flex items-center">
          <Link
            to="/"
            className="mr-10 md:mr-0 text-xl md:text-2xl font-[1000] md:font-bold text-green-400"
            onClick={() => handleLogoClick()}
          >
            Checker
          </Link>
        </div>
        <SearchBar />
        <GrMenu
          className="visible md:hidden text-2xl"
          onClick={() => setViewMobileSideBar(!viewMobileSideBar)}
        />
        <MobileSideBar
          viewOption={viewMobileSideBar}
          setViewOption={setViewMobileSideBar}
        />
        {/* <DarkMode /> */}
        <ul className="hidden md:flex space-x-14 mr-5">
          {menus.map((item, idx) => {
            if (!token) return BeforeSignInIcons(item, idx);
            else return AfterSignInIcons(item, idx);
          })}
        </ul>
      </nav>

      <div
        className={`absolute top-[4.4rem] right-1 z-10  bg-white ${
          showRecentBoard ? "opacity-100 h-[550px]" : "opacity-0 h-0"
        } duration-300 rounded-b-lg overflow-hidden overflow-y-scroll`}
        onMouseLeave={() => setShowRecentBoard(false)}
      >
        <div className="grid grid-cols-2 place-items-center">
          <div className="w-full col-[1/-1] row-[1/2] flex justify-center items-center">
            <h1 className="p-2 sm:text-xs md:text-base text-[#2F2F2F] font-bold">
              최근 업로드된 게시물
            </h1>
          </div>

          {[...Array(8)].map((_, idx) => (
            <RecentBoard key={idx} />
          ))}
        </div>
      </div>
      <PostModal
        isOpen={viewPostForm}
        onRequestClose={() => handlePostModal()}
        overlayClassName={"fixed inset-0 bg-black bg-opacity-50"}
      />
      <Modal
        isOpen={showLoginModal}
        onRequestClose={() => setShowLoginModal(false)}
        overlayClassName={"fixed inset-0 bg-black bg-opacity-50"}
        className="p-6 w-full max-w-2xl mx-auto mt-20 bg-white rounded-lg shadow-xl"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">로그인</h2>
          <button
            onClick={() => setShowLoginModal(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <IoMdClose size={24} />
          </button>
        </div>
        <div className="flex justify-center gap-3 p-3">
          <div
            className="w-56 flex items-center gap-3 py-2 px-4 rounded-[12px] bg-[#FEE500] hover:bg-[#FEE000] transition-colors duration-300 cursor-pointer"
            onClick={loginKakao}
          >
            <SpeechBubbleIcon className="mr-4" />
            <span className="text-black text-xs whitespace-nowrap">
              카카오 로그인
            </span>
          </div>

          <div
            className="w-56 flex items-center gap-3 py-2 px-4 rounded-[12px] bg-[#5865F2] hover:bg-[#5865F2]/80 text-white hover:text-white/80 transition-colors duration-300 cursor-pointer"
            onClick={loginDiscord}
          >
            <DiscordIcon className="w-5 h-5 fill-white hover:fill-white/80 mr-4" />
            <span className="text-xs whitespace-nowrap">
              Sign in with Discord
            </span>
          </div>

          <div
            className="w-56 flex items-center gap-3 py-2 px-4  rounded-[12px] bg-white hover:bg-gray-300 text-black duration-300 cursor-pointer outline-none border"
            onClick={loginGoogle}
          >
            <GoogleIcon className="mr-4" />
            <span className="font-roboto text-xs whitespace-nowrap">
              Sign in with Google
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default React.memo(Header);
