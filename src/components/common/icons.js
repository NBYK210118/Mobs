import { BiEdit, BiSolidDashboard } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaHome, FaHotjar, FaVideo } from "react-icons/fa";
import {
  MdContactSupport,
  MdLibraryBooks,
  MdOutlineRecentActors,
  MdPoll,
  MdReportProblem,
} from "react-icons/md";
import { TfiAnnouncement } from "react-icons/tfi";
import Juice1 from "../../assets/images/sample_ad_1.jpeg";
import Juice2 from "../../assets/images/sampe_ad_2.jpg";
import { VscFoldDown } from "react-icons/vsc";
import { VscFoldUp } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosTrophy } from "react-icons/io";
import { IoMdLogIn } from "react-icons/io";
import { IoMdPersonAdd } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { GrEdit } from "react-icons/gr";
import { FaRegFileImage } from "react-icons/fa";
import { CiVideoOn } from "react-icons/ci";
import { FaRegThumbsDown } from "react-icons/fa";
import { FaThumbsDown } from "react-icons/fa";
import { CiViewTimeline } from "react-icons/ci";
import { PiSignOutBold } from "react-icons/pi";

export const SignOutIcon = ({ className = "" }) => (
  <PiSignOutBold className={className} />
);
export const HomeIcon = ({ className = "" }) => (
  <FaHome className={`text-lg md:text-4xl ${className}`} />
);
export const WriteIcon = ({ className = "" }) => (
  <GrEdit className={className} />
);
export const NoticeIcon = ({ className = "" }) => (
  <TfiAnnouncement className={`text-lg md:text-4xl ${className}`} />
);
export const ProfileIcon = ({ className = "" }) => (
  <CgProfile className={`text-lg md:text-4xl ${className}`} />
);
export const CommunitiesIcon = ({ className = "" }) => (
  <FaUsers className={`text-lg md:text-4xl ${className}`} />
);
export const LoginIcon = ({ className = "" }) => (
  <IoMdLogIn className={className} />
);
export const SignUpIcon = ({ className = "" }) => (
  <IoMdPersonAdd className={className} />
);
export const IssueIcon = ({ className = "" }) => (
  <FaHotjar className={`text-lg md:text-4xl ${className}`} />
);
export const RecentIcon = ({ className = "" }) => (
  <MdLeaderboard className={`text-lg md:text-4xl ${className}`} />
);
export const ClockIcon = ({ className = "" }) => (
  <FaRegClock className={className} />
);
export const PollsIcon = ({ className = "" }) => (
  <MdPoll className={`text-lg md:text-4xl ${className}`} />
);
export const SupportIcon = ({ className = "" }) => (
  <MdContactSupport className={`text-lg md:text-4xl ${className}`} />
);
export const GuideIcon = ({ className = "" }) => (
  <MdLibraryBooks className={`text-lg md:text-4xl ${className}`} />
);
export const Highlight = ({ className = "" }) => (
  <FaVideo className={`text-lg md:text-4xl ${className}`} />
);
export const UserReportIcon = ({ className = "" }) => (
  <MdReportProblem className={`text-lg md:text-4xl ${className}`} />
);
export const CheckIcon = ({ className = "" }) => (
  <FaCheck className={className} />
);
export const EditIcon = ({ className = "" }) => (
  <BiEdit className={className} />
);
export const FoldDownIcon = ({ className = "" }) => (
  <VscFoldDown className={className} />
);
export const FoldUpIcon = ({ className = "" }) => (
  <VscFoldUp className={className} />
);
export const CloseIcon = ({ className = "" }) => (
  <IoMdClose className={className} />
);
export const SunIcon = ({ className = "" }) => <FaSun className={className} />;
export const MoonIcon = ({ className = "" }) => (
  <FaMoon className={className} />
);
export const TrashIcon = ({ className = "" }) => (
  <FaRegTrashAlt className={className} />
);
export const LeftArrowIcon = ({ className = "" }) => (
  <IoIosArrowBack className={className} />
);
export const RightArrowIcon = ({ className = "" }) => (
  <IoIosArrowForward className={className} />
);
export const TrophyIcon = ({ className = "" }) => (
  <IoIosTrophy className={className} />
);
export const ImageIcon = ({ className = "" }) => (
  <FaRegFileImage className={className} />
);
export const VideoIcon = ({ className = "" }) => (
  <CiVideoOn className={className} />
);
export const Images = {
  juice1: Juice1,
  juice2: Juice2,
};
export const TimeIcon = ({ className = "" }) => (
  <CiViewTimeline className={className} />
);
export const DownThumbIcon = ({ className = "" }) => (
  <FaRegThumbsDown className={className} />
);
export const DownThumbCheckedIcon = ({ className = "" }) => (
  <FaThumbsDown className={className} />
);

export const DiscordIcon = (props) => {
  return (
    <svg viewBox="0 -28.5 256 256" {...props}>
      <g>
        <path
          d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
          fill="currentColor"
          fillRule="nonzero"
        ></path>
      </g>
    </svg>
  );
};

export const SpeechBubbleIcon = (props) => (
  <svg
    height="20px"
    width="20px"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <style>{`.st0 { fill: #000000; }`}</style>
    <g>
      <path
        className="st0"
        d="M257.135,19.179C103.967,19.179,0,97.273,0,218.763c0,74.744,31.075,134.641,91.108,173.176 c4.004,2.572,8.728,2.962,6.955,10.365c-7.16,29.935-19.608,83.276-19.608,83.276c-0.527,2.26,0.321,4.618,2.162,6.03 c1.84,1.402,4.334,1.607,6.38,0.507c0,0,87.864-52.066,99.583-58.573c27.333-15.625,50.878-18.654,68.558-18.654 C376.619,414.89,512,366.282,512,217.458C512,102.036,418.974,19.179,257.135,19.179z"
      />
    </g>
  </svg>
);

export const GoogleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="20"
    height="20"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    ></path>
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    ></path>
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    ></path>
  </svg>
);
