import {NextUIProvider} from "@nextui-org/react";
import { RouterApp } from "./router/RouterApp";
import { Provider } from "react-redux";
import { store } from './store/store'

function ThreadsApp() {

  return (
    <NextUIProvider>
      <Provider store={store}>
        <RouterApp/>
      </Provider>
    </NextUIProvider>
  )
}

export default ThreadsApp
