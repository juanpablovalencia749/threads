import {NextUIProvider} from "@nextui-org/react";
import { RouterApp } from "./router/RouterApp";


function ThreadsApp() {

  return (
    <NextUIProvider>
        <RouterApp/>
    </NextUIProvider>
  )
}

export default ThreadsApp
