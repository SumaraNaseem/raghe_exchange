import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Outlet } from "react-router-dom";
import { SocketProvider } from "./layouts/socket-provider";
import { Provider } from 'react-redux';
import {store} from './Redux/store'


function App() {
  return (
    <div className="overflow-x-hidden h-screen bg-text">
      {/* <Provider store={store}>
      <Outlet />
     </Provider> */}
      <SocketProvider store={store}>
        <Outlet />
      </SocketProvider>
    </div>
  );
}

export default App;
