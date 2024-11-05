import CasinoIcon from "../assets/casino-icon.svg";
import Tvicon from "../assets/tv.svg";
import BmIcon from "../assets/bm-icon.svg";
import FancyIcon from "../assets/fancy-icon.svg";
import HorseIcon from "../assets/horse-login.svg";
import DogIcon from "../assets/dog-login.svg";
import { FaMobileAlt } from "react-icons/fa";

export const options = {
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
};

export const navItems = [
  {
    label: "Home",
    icon: "homeIcon.svg",
    isLinkAvailable: false,
    path: "homepage",
    isHide: false,
  },
  {
    label: "In-Play",
    icon: "inPlayIcon.svg",
    backgroundPosition: "center -1635px",
    isLinkAvailable: false,
    path: "inplay",
  },
  {
    label: "100 Cup Winner",
    icon: "cupWinnerIcon.svg",
    liveScore: 0,
    backgroundPosition: "center -1899px",
    isLinkAvailable: false,
    path: "thehundredcup",
  },
  {
    label: "Cricket",
    icon: "cricketIcon.svg",
    liveScore: 10,
    backgroundPosition: "center -348px",
    isLinkAvailable: false,
    path: "game/4",
  },
  {
    label: "Soccer",
    icon: "soccerIcon.svg",
    liveScore: 15,
    backgroundPosition: "center -1099px",
    isLinkAvailable: false,
    path: "game/1",
  },
  {
    label: "Tennis",
    icon: "tennisIcon.svg",
    liveScore: 2,
    backgroundPosition: "center -1174px",
    isLinkAvailable: false,
    path: "game/2",
  },
  {
    label: "Horse",
    icon: "horseIcon.svg",
    liveScore: 7,
    backgroundPosition: "center -724px",
    isLinkAvailable: false,
    path: "game/7",
  },
  {
    label: "Greyhound",
    icon: "greyhoundIcon.svg",
    liveScore: 3,
    backgroundPosition: "center -674px",
    isLinkAvailable: false,
    path: "game/4339",
  },
  {
    label: "Indian Pocker",
    icon: "pockerIcon.svg",
    backgroundPosition: "center -924px",
    isLinkAvailable: false,
    path: "royalcasino",
  },
  {
    label: "Indian Poker II",
    icon: "pokerIIIcon.svg",
    backgroundPosition: "center -1865px",
    isLinkAvailable: false,
    path: "Indianpoker",
  },
  {
    label: "Aviator",
    icon: "https://images.staticcontent.io/casino/banner/images/aviator-icon.svg",
    isLinkAvailable: true,
    path: "spribe",
  },
  {
    label: "AE SEXY",
    icon: "aeSexyIcon.svg",
    backgroundPosition: "center -924px",
    isLinkAvailable: false,
    path: "casino3/aesexybcrt",
  },
  {
    label: "Evolution",
    icon: CasinoIcon,
    isLinkAvailable: true,
    path: "evolution",
  },
  {
    label: "Live Casino",
    icon: "liveCasinoIcon.svg",
    backgroundPosition: "center -924px",
    isLinkAvailable: false,
    path: "livecasino",
  },
  {
    label: "Vivo",
    icon: CasinoIcon,
    isLinkAvailable: true,
    path: "vivo",
  },
  {
    label: "Betgames",
    icon: CasinoIcon,
    isLinkAvailable: true,
    path: "betgames",
  },
  {
    label: "Casion III",
    icon: "casinoIIIIcon.svg",
    backgroundPosition: "center -924px",
    isLinkAvailable: false,
    path: "casino3",
  },
];

export const games = [
  {
    title: "Dice Duel",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame1.webp",
  },
  {
    title: "High Roulette",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame2.webp",
  },
  {
    title: "6+ Poker",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame3.webp",
  },
  {
    title: "Casino Hold'em",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame4.webp",
  },
  {
    title: "Game 5",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame5.webp",
  },
  {
    title: "Game 6",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame6.webp",
  },
  {
    title: "Game 7",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame7.webp",
  },
  {
    title: "Game 8",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame8.webp",
  },
  {
    title: "Game 6",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame9.webp",
  },
  {
    title: "7+ Poker",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame3.webp",
  },
  {
    title: "Casino Hold7'em",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame4.webp",
  },
  {
    title: "Game1 5",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame5.webp",
  },
  {
    title: "Game 61",
    image:
      "https://images.staticcontent.io/casino/without-login/topgame/topgame6.webp",
  },
];

export const liveStats = {
  game: ["Cricket", "Soccer", "Tennis"],
  data: [
    {
      date: "18 Aug 2024",
      match: "Heraclesd vs PSV",
      status: "Live Now",
      icons: [
        { src: BmIcon, alt: "bm-icon" },
        { src: FancyIcon, alt: "fancy-icon" },
        { src: Tvicon, alt: "tv" },
      ],
      scores: [
        { home: 23, away: 23 },
        { home: 23, away: 23 },
        { home: 23, away: 23 },
      ],
    },
    {
      date: "19 Aug 2024",
      match: "Team A vs Team B",
      status: "Upcoming",
      icons: [
        { src: Tvicon, alt: "tv" },
        { src: BmIcon, alt: "bm-icon" },
      ],
      scores: [
        { home: 0, away: 0 },
        { home: 0, away: 0 },
        { home: 0, away: 0 },
      ],
    },
    {
      date: "20 Aug 2024",
      match: "Team C vs Team D",
      status: "Live Now",
      icons: [{ src: FancyIcon, alt: "fancy-icon" }],
      scores: [
        { home: 30, away: 25 },
        { home: 28, away: 26 },
        { home: 29, away: 27 },
      ],
    },
    {
      date: "21 Aug 2024",
      match: "Club X vs Club Y",
      status: "Completed",
      icons: [
        { src: Tvicon, alt: "tv" },
        { src: FancyIcon, alt: "fancy-icon" },
      ],
      scores: [
        { home: 22, away: 20 },
        { home: 25, away: 22 },
        { home: 21, away: 21 },
      ],
    },
    {
      date: "22 Aug 2024",
      match: "Team E vs Team F",
      status: "Upcoming",
      icons: [
        { src: BmIcon, alt: "bm-icon" },
        { src: Tvicon, alt: "tv" },
      ],
      scores: [
        { home: 0, away: 0 },
        { home: 0, away: 0 },
        { home: 0, away: 0 },
      ],
    },
    {
      date: "23 Aug 2024",
      match: "Team G vs Team H",
      status: "Live Now",
      icons: [
        { src: FancyIcon, alt: "fancy-icon" },
        { src: BmIcon, alt: "bm-icon" },
      ],
      scores: [
        { home: 35, away: 30 },
        { home: 33, away: 31 },
        { home: 34, away: 32 },
      ],
    },
  ],
};

export const horseRacingsData = [
  {
    icon: HorseIcon,
    name: "Horse Racing",
    location: "Redcliffe (AUS) 18th Aug",
    dateTime: "18th Aug 15:08",
  },
  {
    icon: HorseIcon,
    name: "Horse Racing",
    location: "Gold Coast (AUS) 19th Aug",
    dateTime: "19th Aug 12:45",
  },
  {
    icon: HorseIcon,
    name: "Horse Racing",
    location: "Sunshine Coast (AUS) 20th Aug",
    dateTime: "20th Aug 13:30",
  },
  {
    icon: HorseIcon,
    name: "Horse Racing",
    location: "Brisbane (AUS) 21st Aug",
    dateTime: "21st Aug 14:00",
  },
];

export const dogRacingsData = [
  {
    icon: DogIcon,
    name: "Horse Racing",
    location: "Redcliffe (AUS) 18th Aug",
    dateTime: "18th Aug 15:08",
  },
  {
    icon: DogIcon,
    name: "Horse Racing",
    location: "Gold Coast (AUS) 19th Aug",
    dateTime: "19th Aug 12:45",
  },
  {
    icon: DogIcon,
    name: "Horse Racing",
    location: "Sunshine Coast (AUS) 20th Aug",
    dateTime: "20th Aug 13:30",
  },
  {
    icon: DogIcon,
    name: "Horse Racing",
    location: "Brisbane (AUS) 21st Aug",
    dateTime: "21st Aug 14:00",
  },
];

export const items = [
  { name: "Home", position: "-1732px", path: "homepage" },
  { name: "In-Play", position: "-1634px", path: "inplay" },
  { name: "100 Cup Winner", position: "-1896px", path: "thehundredcup" },
  { name: "Cricket", position: "-349px", id: 4, path: "game/4" },
  { name: "Soccer", position: "-1099px", id: 1, path: "game/1" },
  { name: "Tennis", position: "-1174px", id: 2, path: "game/2" },
  { name: "Horse", position: "-722px", path: "game/7" },
  { name: "Grey Hound", position: "-672px", path: "game/4339" },
  { name: "Indian Pocker", position: "-924px", path: "royalcasino" },
  { name: "Indian Pocker ll", position: "-1865px", path: "Indianpoker" },
  {
    name: "Aviator",
    icon: "https://images.staticcontent.io/casino/banner/images/aviator-icon.svg",
    path: "spribe",
  },
  { name: "AE SEXY", position: "-924px", path: "casino3/aesexybcrt" },
  {
    name: "Evolution",
    icon: "https://images.staticcontent.io/casino/banner/images/casino-icon.svg",
    path: "evolution",
  },
  { name: "Live Casino", position: "-924px", path: "livecasino" },
  {
    name: "Vivo",
    icon: "https://images.staticcontent.io/casino/banner/images/casino-icon.svg",
    path: "vivo",
  },
  {
    name: "Betagames",
    icon: "https://images.staticcontent.io/casino/banner/images/casino-icon.svg",
    path: "betgames",
  },
  { name: "Casino lll", position: "-924px", path: "casino3" },
  { name: "Download APK", icon: FaMobileAlt },
];

export const userMenu = [
  {
    name: "Account Statement",
    icon: "https://images.staticcontent.io/casino/banner/images/Account-Statement.svg",
    path: "account-statement",
  },

  {
    name: "Profit Loss Report",
    icon: "https://images.staticcontent.io/casino/banner/images/profit-loss-report.svg",
    path: "profit-loss-report",
  },

  {
    name: "Bet History",
    icon: "https://images.staticcontent.io/casino/banner/images/bet-history.svg",
    path: "bet-history",
  },
  {
    name: "Unsettled Bets",
    icon: "https://images.staticcontent.io/casino/banner/images/unsettle-bet.svg",
    path: "unsettled-bets",
  },
  {
    name: "Set Button Value",
    icon: "https://images.staticcontent.io/casino/banner/images/set-button-value.svg",
    path: "set-button-value",
  },
  {
    name: "Rules",
    icon: "https://images.staticcontent.io/casino/banner/images/rules.svg",
    path: "rules",
  },
  {
    name: "Change Password",
    icon: "https://images.staticcontent.io/casino/banner/images/change-password.svg",
    path: "change-password",
  },
  {
    name: "Results",
    icon: "https://images.staticcontent.io/casino/banner/images/result.svg",
    path: "results",
  },
  {
    name: "Logout",
    icon: "https://images.staticcontent.io/casino/banner/images/log-out.svg",
    path: "logout",
  },
];
