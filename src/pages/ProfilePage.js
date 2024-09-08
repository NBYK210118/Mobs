import { useCallback, useEffect, useRef, useState } from "react";
import Input from "../components/common/Input";
import AdComponent from "../components/specificFeature/ads/AdComponent";
import { EditIcon, Images, TrashIcon } from "../components/common/icons";
import { Scrollbars } from "react-custom-scrollbars-2";
import InputMessage from "../components/specificFeature/input_message";
import ImageViewer from "../components/specificFeature/imageViewer";
import BoardList from "../components/specificFeature/board_list";
import Pagination from "../components/common/paginiation";
import MyComments from "../components/specificFeature/myComments";
import ParticipatedVote from "../components/specificFeature/participatedVote";
import VerificationStatus from "../components/specificFeature/VerificationStatus";
import MyFAQ from "../components/specificFeature/profile/MyFaq";
import SmallMenuBar from "../components/specificFeature/profile/selectMenuBar";
import MainMenuBar from "../components/specificFeature/profile/MainMenuBar";
import { useAuthStore } from "../stores/userStore";
import { useNavigate } from "react-router-dom";
import useHeaderStore from "../stores/headerStore";

const ProfilePage = () => {
  const [profileBackGround, setProfileBackGround] = useState(Images.juice2);
  const [profileImg, setProfileImg] = useState(Images.juice1);
  const { token, user_metadata } = useAuthStore((state) => state);
  const [nickname, setNickname] = useState("Username");
  const [password, setPassword] = useState("");
  const [checkPw, setCheckPw] = useState("");
  const [commentsCount, setCommentsCount] = useState(5);
  const [participatedVoteCount, setParticipatedVoteCount] = useState(5);
  const [gender, setGender] = useState("male");
  const [isMatched, setIsMatched] = useState(false);
  const [showProfileBg, setShowProfileBg] = useState(false);
  const [phone, setPhone] = useState("");
  const [active, setActive] = useState("프로필");
  const [profileActive, setProfileActive] = useState("내 게시물");
  const { setSelectedSideBar } = useHeaderStore((state) => state);
  const profileBackGroundRef = useRef();
  const profileImgRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (user_metadata) {
      console.log("user_metadata: ", user_metadata);
    }

    if (!token) {
      alert("로그인이 필요한 페이지입니다!");
      navigate("/");
      setSelectedSideBar("홈");
    }
  }, []);

  useEffect(() => {
    checkPasswordMatch();
  }, [password, checkPw]);

  const checkPasswordMatch = useCallback(() => {
    if (password !== "" && checkPw !== "") {
      const passwordPattern =
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (passwordPattern.test(password) && passwordPattern.test(checkPw)) {
        if (password === checkPw) setIsMatched(true);
        else setIsMatched(false);
      }
    } else {
      setIsMatched(false);
    }
  }, [password, checkPw]);

  const showProfileBackground = () => {
    setShowProfileBg(!showProfileBg);
  };

  const handleChangeProfileBackground = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileBackGround(event.target.result);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleProfileImg = useCallback((file) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      setProfileImg(event.target.result);
    };
    reader.readAsDataURL(file);
  });

  return (
    <Scrollbars className="font-primary">
      {token ? (
        <div className="relative flex md:flex-row flex-col justify-center gap-72 md:mt-6 mt-0 ">
          <div className="mb-10 flex flex-col md:w-[40rem] lg:w-[50rem] bg-slate-900  rounded-t-lg border border-gray-800 shadow-md shadow-gray-800">
            <div className="relative">
              <div onClick={() => showProfileBackground()}>
                <img
                  src={profileBackGround}
                  alt=""
                  className="w-full max-h-60 rounded-t-lg cursor-pointer"
                />
              </div>

              <ImageViewer
                isOpen={showProfileBg}
                onRequestClose={() => setShowProfileBg(false)}
                imgSrc={profileBackGround}
                className={"flex justify-center"}
                overlayClassName={"fixed inset-0 bg-black bg-opacity-50"}
              />

              <div className="overflow-hidden absolute lg:top-36 top-44 lg:left-5 left-[1.2rem] border-4 border-white w-32 h-32 lg:w-52 lg:h-52 rounded-full">
                <img
                  src={
                    profileImg ? profileImg : "https://via.placeholder.com/208"
                  }
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>

            <div className="flex justify-between p-3 mb-10">
              <div />
              <div className="flex flex-col space-y-2 mt-2 lg:ml-6 ml-24">
                <span className="text-sm lg:text-3xl font-bold">
                  {user_metadata?.name ? user_metadata.name : nickname}
                </span>
                <span className="text-xs lg:text-base">
                  @
                  {user_metadata?.email
                    ? user_metadata.email
                    : "Failed to load your email"}
                </span>
              </div>
              <input
                type="file"
                className="hidden"
                ref={profileBackGroundRef}
                onChange={(e) =>
                  handleChangeProfileBackground(e.target.files[0])
                }
              />
              <div>
                <span
                  className="rounded-lg p-2 bg-blue-500 font-bold text-xs lg:text-sm cursor-pointer"
                  onClick={() => profileBackGroundRef.current.click()}
                >
                  프로필 배경 변경
                </span>
              </div>
            </div>
            <MainMenuBar
              items={["프로필", "패스워드", "인증 정보", "문의사항"]}
              active={active}
              onClick={setActive}
            />
            {active === "패스워드" && (
              <>
                <div className="p-5 border-b border-slate-400">
                  <h1 className="font-bold text-3xl">비밀번호</h1>
                  <span>
                    비밀번호를 변경하시려면 현재 비밀번호를 입력해주세요.
                  </span>
                </div>
                <div className="flex flex-col space-y-2 border-b border-slate-400">
                  <div className="space-x-2 border-b p-5">
                    <label htmlFor="" className="font-bold mr-10">
                      현재 비밀번호
                    </label>
                    <Input
                      type="password"
                      className="w-1/2 border border-gray-500 rounded-lg outline-none p-1 bg-gray-800 hover:bg-gray-900 caret-black focus:outline-2 focus:outline-blue-500 duration-300"
                    />
                  </div>
                  <div className="flex gap-2 border-b p-5">
                    <label htmlFor="" className="font-bold mr-6">
                      변경할 비밀번호
                    </label>
                    <InputMessage
                      type={"password"}
                      value={password}
                      onChange={setPassword}
                      isMatched={isMatched}
                      matchedMsg={"비밀번호가 일치합니다"}
                      className={"w-96"}
                    >
                      영문 소문자,대문자,특수문자,숫자를 조합해야 합니다(8자
                      이상)
                    </InputMessage>
                  </div>
                  <div className="flex gap-2 border-b p-5">
                    <label htmlFor="" className="font-bold mr-10">
                      비밀번호 확인
                    </label>
                    <InputMessage
                      type={"password"}
                      value={checkPw}
                      onChange={setCheckPw}
                      isMatched={isMatched}
                      matchedMsg={"비밀번호가 일치합니다"}
                      className={"w-96"}
                    >
                      변경하실 패스워드를 입력해주세요(일치하지 않음).
                    </InputMessage>
                  </div>
                </div>
                <div className="flex justify-end cursor-pointer space-x-10 p-5">
                  <span className="px-5 py-2 bg-white hover:bg-slate-300 rounded-lg text-black font-bold">
                    취소
                  </span>
                  <span className="px-5 py-2 bg-green-600 hover:bg-green-700 rounded-lg font-bold">
                    변경
                  </span>
                </div>
              </>
            )}
            {active === "프로필" && (
              <>
                <div className="p-5 leading-10 border-b border-slate-500">
                  <h1 className="font-bold lg:text-3xl text-md">프로필</h1>
                  <span className="text-sm">
                    변경하시려는 프로필 정보를 업데이트 해주세요.
                  </span>
                </div>
                <div className="flex flex-col justify-center items-center border-b border-slate-500">
                  <div className="flex items-center p-5">
                    <div className="overflow-hidden w-32 h-32 mr-7 md:mr-16">
                      <img
                        src={
                          profileImg
                            ? profileImg
                            : "https://via.placeholder.com/128"
                        }
                        alt="x"
                        className="object-cover"
                      />
                    </div>
                    <div className="">
                      <input
                        type="file"
                        className="hidden"
                        ref={profileImgRef}
                        onChange={(e) =>
                          handleProfileImg(e.currentTarget.files[0])
                        }
                      />
                      <span
                        className="block text-xs bg-blue-500 text-center p-2 cursor-pointer font-bold hover:bg-blue-600"
                        onClick={() => profileImgRef.current.click()}
                      >
                        프로필 이미지 변경
                      </span>
                      <span className="text-xs">
                        Dolor duis velit magna sit laboris ullamco duis duis est
                        consectetur elit.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-0 lg:p-5 border-b border-slate-500">
                  <div className="flex justify-center items-center p-4 lg:p-0 gap-10 md:gap-32">
                    <label
                      htmlFor="nickname"
                      className="text-sm md:text-lg font-bold whitespace-nowrap"
                    >
                      닉네임
                    </label>
                    <input
                      type="text"
                      value={nickname}
                      onChange={(e) => setNickname(e.target.value)}
                      disabled={true}
                      className="w-56 md:w-96 p-1 bg-gray-800 outline-none focus:outline-2 focus:outline-blue-500"
                    />
                  </div>
                </div>

                <div className="p-1 lg:p-3 border-b border-slate-500">
                  <SmallMenuBar
                    active={profileActive}
                    onClick={setProfileActive}
                    items={[
                      "내 게시물",
                      "작성 중인 게시물",
                      `작성한 댓글(${commentsCount})`,
                      `투표 참여(${participatedVoteCount})`,
                    ]}
                  />
                </div>
                {profileActive === "내 게시물" && <BoardList />}
                {profileActive === "작성 중인 게시물" && <BoardList />}
                {profileActive === `작성한 댓글(${commentsCount})` && (
                  <MyComments />
                )}
                {profileActive === `투표 참여(${participatedVoteCount})` && (
                  <ParticipatedVote />
                )}
              </>
            )}
            {active === "인증 정보" && <VerificationStatus />}
            {active === "문의사항" && <MyFAQ />}
          </div>

          <div className="flex flex-col gap-32 -mr-48">
            <AdComponent
              src={Images.juice1}
              widthHeight="'w-[100px] h-[250px] xl:w-[140px] xl:h-[350px] 2xl:w-[200px] 2xl:h-[500px]'"
            />
            <AdComponent
              src={Images.juice2}
              widthHeight="'w-[100px] h-[250px] xl:w-[140px] xl:h-[350px] 2xl:w-[200px] 2xl:h-[500px]'"
            />
          </div>
        </div>
      ) : null}
    </Scrollbars>
  );
};

export default ProfilePage;
