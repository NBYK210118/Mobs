import {
  CommunitiesIcon,
  GuideIcon,
  Highlight,
  HomeIcon,
  IssueIcon,
  NoticeIcon,
  PollsIcon,
  ProfileIcon,
  RecentIcon,
  SupportIcon,
  UserReportIcon,
} from "../components/common/icons";

export const sidebaritems = [
  {
    id: 1,
    category: "홈",
    to: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    category: "공지사항",
    to: "/notice",
    icon: <NoticeIcon />,
  },
  {
    id: 3,
    category: "내 프로필",
    to: "/profile",
    icon: <ProfileIcon />,
  },
  {
    id: 4,
    category: "리더보드",
    to: "/leaderboard",
    icon: <RecentIcon />,
  },
  {
    id: 6,
    category: "공략/가이드",
    to: "",
    icon: <GuideIcon />,
  },
  {
    id: 7,
    category: "하이라이트 영상",
    to: "",
    icon: <Highlight />,
  },
  {
    id: 8,
    category: "문의/요청",
    to: "",
    icon: <SupportIcon />,
  },
];

export const items = [
  {
    id: 1,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 2,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 3,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 4,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 5,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 6,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 7,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 8,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 9,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 10,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 11,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
  {
    id: 12,
    category: "카테고리명",
    author: "작성자",
    title: "제목",
    votes: "투표 현황",
  },
];

export const feed_item = {
  nickname: "사용자 닉네임",
  category: "카테고리",
  title: "제목",
  content:
    "Sit aliquip nisi sunt dolor ut fugiat sint adipisicing.Anim nostrud cupidatat anim sit fugiat consectetur commodo ex pariatur eiusmod magna ullamco labore.",
};

export const comments = [
  { id: 1, nickname: "이은준", content: "ㄵ" },
  { id: 2, nickname: "이은호", content: "ㄱㄱ" },
  { id: 3, nickname: "장태원", content: "ㄱㄱㅆ" },
  { id: 4, nickname: "이은준", content: "ㄵ" },
  { id: 5, nickname: "이은호", content: "ㄱㄱ" },
  { id: 6, nickname: "장태원", content: "ㄱㄱㅆ" },
  { id: 7, nickname: "이은준", content: "ㄵ" },
  { id: 8, nickname: "이은호", content: "ㄱㄱ" },
  { id: 9, nickname: "장태원", content: "ㄱㄱㅆ" },
];

// export const users = [
//   { rank: 1, username: 'User01', totalPoint: '500k', totalBoards: '10k', totalComments: '20k' },
//   { rank: 2, username: 'User02', totalPoint: '480k', totalBoards: '9.8k', totalComments: '19.5k' },
//   { rank: 3, username: 'User03', totalPoint: '470k', totalBoards: '9.5k', totalComments: '18k' },
//   { rank: 4, username: 'User04', totalPoint: '460k', totalBoards: '9.3k', totalComments: '17.8k' },
//   { rank: 5, username: 'User05', totalPoint: '450k', totalBoards: '9k', totalComments: '17k' },
//   { rank: 6, username: 'User06', totalPoint: '440k', totalBoards: '8.8k', totalComments: '16.5k' },
//   { rank: 7, username: 'User07', totalPoint: '430k', totalBoards: '8.5k', totalComments: '16k' },
//   { rank: 8, username: 'User08', totalPoint: '420k', totalBoards: '8.3k', totalComments: '15.8k' },
//   { rank: 9, username: 'User09', totalPoint: '410k', totalBoards: '8k', totalComments: '15k' },
//   { rank: 10, username: 'User10', totalPoint: '400k', totalBoards: '7.8k', totalComments: '14.5k' },
//   { rank: 11, username: 'User11', totalPoint: '390k', totalBoards: '7.5k', totalComments: '14k' },
//   { rank: 12, username: 'User12', totalPoint: '380k', totalBoards: '7.3k', totalComments: '13.5k' },
//   { rank: 13, username: 'User13', totalPoint: '370k', totalBoards: '7k', totalComments: '13k' },
//   { rank: 14, username: 'User14', totalPoint: '360k', totalBoards: '6.8k', totalComments: '12.8k' },
//   { rank: 15, username: 'User15', totalPoint: '350k', totalBoards: '6.5k', totalComments: '12k' },
//   { rank: 16, username: 'User16', totalPoint: '340k', totalBoards: '6.3k', totalComments: '11.5k' },
//   { rank: 17, username: 'User17', totalPoint: '330k', totalBoards: '6k', totalComments: '11k' },
//   { rank: 18, username: 'User18', totalPoint: '320k', totalBoards: '5.8k', totalComments: '10.5k' },
//   { rank: 19, username: 'User19', totalPoint: '310k', totalBoards: '5.5k', totalComments: '10k' },
//   { rank: 20, username: 'User20', totalPoint: '300k', totalBoards: '5.3k', totalComments: '9.8k' },
//   { rank: 21, username: 'User21', totalPoint: '290k', totalBoards: '5k', totalComments: '9.5k' },
//   { rank: 22, username: 'User22', totalPoint: '280k', totalBoards: '4.8k', totalComments: '9k' },
//   { rank: 23, username: 'User23', totalPoint: '270k', totalBoards: '4.5k', totalComments: '8.5k' },
//   { rank: 24, username: 'User24', totalPoint: '260k', totalBoards: '4.3k', totalComments: '8k' },
//   { rank: 25, username: 'User25', totalPoint: '250k', totalBoards: '4k', totalComments: '7.8k' },
//   { rank: 26, username: 'User26', totalPoint: '240k', totalBoards: '3.8k', totalComments: '7.5k' },
//   { rank: 27, username: 'User27', totalPoint: '230k', totalBoards: '3.5k', totalComments: '7k' },
//   { rank: 28, username: 'User28', totalPoint: '220k', totalBoards: '3.3k', totalComments: '6.8k' },
//   { rank: 29, username: 'User29', totalPoint: '210k', totalBoards: '3k', totalComments: '6.5k' },
//   { rank: 30, username: 'User30', totalPoint: '200k', totalBoards: '2.8k', totalComments: '6k' },
//   { rank: 31, username: 'User31', totalPoint: '190k', totalBoards: '2.5k', totalComments: '5.5k' },
//   { rank: 32, username: 'User32', totalPoint: '180k', totalBoards: '2.3k', totalComments: '5k' },
//   { rank: 33, username: 'User33', totalPoint: '170k', totalBoards: '2k', totalComments: '4.8k' },
//   { rank: 34, username: 'User34', totalPoint: '160k', totalBoards: '1.8k', totalComments: '4.5k' },
//   { rank: 35, username: 'User35', totalPoint: '150k', totalBoards: '1.5k', totalComments: '4k' },
//   { rank: 36, username: 'User36', totalPoint: '140k', totalBoards: '1.3k', totalComments: '3.8k' },
//   { rank: 37, username: 'User37', totalPoint: '130k', totalBoards: '1k', totalComments: '3.5k' },
//   { rank: 38, username: 'User38', totalPoint: '120k', totalBoards: '800', totalComments: '3k' },
//   { rank: 39, username: 'User39', totalPoint: '110k', totalBoards: '750', totalComments: '2.8k' },
//   { rank: 40, username: 'User40', totalPoint: '100k', totalBoards: '700', totalComments: '2.5k' },
//   { rank: 41, username: 'User41', totalPoint: '90k', totalBoards: '650', totalComments: '2.3k' },
//   { rank: 42, username: 'User42', totalPoint: '80k', totalBoards: '600', totalComments: '2k' },
//   { rank: 43, username: 'User43', totalPoint: '70k', totalBoards: '550', totalComments: '1.8k' },
//   { rank: 44, username: 'User44', totalPoint: '60k', totalBoards: '500', totalComments: '1.5k' },
//   { rank: 45, username: 'User45', totalPoint: '50k', totalBoards: '450', totalComments: '1.3k' },
//   { rank: 46, username: 'User46', totalPoint: '40k', totalBoards: '400', totalComments: '1k' },
//   { rank: 47, username: 'User47', totalPoint: '30k', totalBoards: '350', totalComments: '800' },
//   { rank: 48, username: 'User48', totalPoint: '20k', totalBoards: '300', totalComments: '500' },
//   { rank: 49, username: 'User49', totalPoint: '10k', totalBoards: '250', totalComments: '300' },
//   { rank: 50, username: 'User50', totalPoint: '5k', totalBoards: '200', totalComments: '100' },
// ];

const colors = ["#fff", "#33FF57", "#3357FF"];

export const users = Array.from({ length: 50 }, (_, i) => {
  const rank = i + 1;
  return {
    rank: rank,
    username: `User${rank.toString().padStart(2, "0")}`,
    totalPoint: `${Math.floor(500 - 10 * i)}k`,
    totalBoards: `${Math.floor(10 - 0.2 * i)}k`,
    totalComments: `${Math.abs(20 - 0.5 * i)}k`,
    ...(rank > 3 && { borderColor: colors[(rank - 4) % 4] }), // 1,2,3등을 제외하고 색상을 할당
  };
});
