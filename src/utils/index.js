import Tvicon from "../assets/tv.svg";
import BmIcon from "../assets/bm-icon.svg";
import FancyIcon from "../assets/fancy-icon.svg";

export const transformData = (inputData) => {
  return inputData.map((match) => {
    const dateObj = new Date(match.openDate);
    const date = dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    const time = dateObj.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const status =
      match.inPlay && match.status === "SUSPENDED"
        ? "Suspended"
        : match.inPlay && match.status !== "SUSPENDED"
        ? "Live Now"
        :  match.status

    const oddsBack = match?.odds?.availableToBack;
    const oddsLay = match?.odds?.availableToLay;

    const scores = [
      { home: oddsBack?.[2]?.price || "", away: oddsLay?.[2]?.price || "" },
      { home: oddsBack?.[1]?.price || "", away: oddsLay?.[1]?.price || "" },
      { home: oddsBack?.[0]?.price || "", away: oddsLay?.[0]?.price || "" },
    ];

    return {
      date: `${date} ${time}`,
      isSelected: match?.isSelected || false,
      matchId: match.matchId,
      match: match.matchName,
      seriesName: match?.serieseName ?? "",
      status,
      icons: [
        { src: Tvicon, alt: "tv" },
        { src: BmIcon, alt: "bm-icon" },
        { src: FancyIcon, alt: "fancy-icon" },
      ],
      scores,
    };
  });
};
