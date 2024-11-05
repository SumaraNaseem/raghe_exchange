import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandingPage from "./pages/landing-page";
import PrivateLayout from "./layouts/private-layout";
import Inplay from "./pages/Inplay";
import PublicLayout from "./layouts/public-layout";
import Homepage from "./pages/homepage";
import Sports from "./pages/sports";
import BettingPlacement from "./pages/betting-placement";
import BettingList from "./components/inplay/betting-list";
import GameGrid from "./components/common/GridComponent";
import LiveCasino from "./pages/live-casino";
import AccountSettlement from "./pages/account-settlement";
import ProfitLoss from "./pages/profit-loss";
import BetHistory from "./pages/bet-history.jsx";
import UnsettledBet from "./pages/unsettled-bet.jsx";
import SetValueButton from "./pages/set-value-button.jsx";
import Rules from "./pages/rules.jsx";
import ChangedPassword from "./pages/change-password.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <LandingPage />,
          },
          {
            path: "/auth",
            element: <LandingPage />,
          },
        ],
      },
      {
        path: "/",
        element: <PrivateLayout />,
        children: [
          {
            path: "homepage",
            element: <Homepage />,
          },
          {
            path: "inplay",
            element: (
              <Inplay>
                <BettingList />
              </Inplay>
            ),
          },

          {
            path: "game/:id",
            element: <Sports />,
          },

          {
            path: "game/event/:id/:matchId",
            element: (
              <Inplay>
                <BettingPlacement />
              </Inplay>
            ),
          },
          {
            path: "livecasino",
            element: <LiveCasino />,
          },
          {
            path: "account-statement",
            element: <AccountSettlement />,
          },
          {
            path: "profit-loss-report",
            element: <ProfitLoss />,
          },
          {
            path: "bet-history",
            element: <BetHistory />,
          },
          {
            path: "unsettled-bets",
            element: <UnsettledBet />,
          },
          {
            path: "set-button-value",
            element: <SetValueButton />,
          },
          {
            path: "rules",
            element: <Rules />,
          },
          {
            path : "change-password",
            element : <ChangedPassword />

          },
          {
            path: "/:id",
            element: <GameGrid />,
          },

          {
            path: "/:id/:second-id",
            element: <GameGrid />,
          },
        ],
      },
    ],
  },
]);

export default router;
