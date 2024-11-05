import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useRef,
} from "react";

import { io } from "socket.io-client";
import throttle from "lodash.throttle";

const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext);

export const SocketProvider = ({ children }) => {
  const [connections, setConnections] = useState({});
  const [error, setError] = useState(null);
  const socketsRef = useRef({});
  const [loading, setLoading] = useState(true);

  const throttledSetConnections = useCallback(
    throttle((response) => {
      setConnections((prevConnections) => ({
        ...prevConnections,
        ...response,
      }));
      setLoading(false);
    }, 1000),
    []
  );
  // let id = 1;

  const connectSocket = useCallback(
    (sportsid, matchid) => {
      setLoading(true);
      try {
        var socket = io.connect("https://socket.hattricks.games", {
          query: "key=vicky",
        });
        sendData(socket, sportsid, matchid);
      } catch (err) {
        setLoading(false); // Ensure loading is false on error

        alert("ERROR: socket.io encountered a problem:\n\n" + err);
      }
      function sendData(socketIo, sportsid, matchid) {
        let event_type = sportsid + "H" + matchid;
        let sendOb = { sportsTypeId: sportsid, mid: matchid };
        sendOb = JSON.stringify(sendOb);
        socketIo.emit("sendReuestTosocket", sendOb);
        socketIo.on(event_type, function (resp) {
          throttledSetConnections(resp);
        });
      }
      // socketsRef.current[id] = socket;

      // const sendOb = JSON.stringify({
      //   getDataType: marketname,
      //   sportsTypeId: sportsid,
      //   mid: matchid,
      // });

      // socket.emit(marketname, sendOb);

      // socket.on(event_type, async (resp) => {
      //   throttledSetConnections(id, resp);
      // });

      // socket.on('connect_error', (err) => {
      //   console.error('Socket connection error: ', err);
      //   setError(err.message);
      // });

      return () => {
        socket.disconnect();
        // delete socketsRef.current[id];
        // setConnections((prevConnections) => {
        //   const { [id]: _, ...rest } = prevConnections;
        //   return rest;
        // });
      };
    },
    [throttledSetConnections]
  );

  const contextValue = useMemo(
    () => ({
      connections,
      error,
      connectSocket,
      loading,
    }),
    [connections, error, connectSocket, loading]
  );

  return (
    <SocketContext.Provider value={contextValue}>
      {children}
    </SocketContext.Provider>
  );
};
