import { useEffect } from "react";
import { useSocket } from "../layouts/socket-provider";

const useSockets = (sockets) => {
  const { connectSocket } = useSocket();

  useEffect(() => {
    const cleanups = sockets.map(({ sportsid, match }) =>
      connectSocket(sportsid, match)
    );

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [connectSocket, sockets]);
};

export default useSockets;
