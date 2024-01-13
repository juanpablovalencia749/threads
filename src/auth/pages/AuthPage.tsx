import { Login, SingUp } from ".."
import {  useAppSelector } from "../../store/hook"


export const AuthPage = () => {


  const authScreen = useAppSelector((state) => state.auth.value)
  // const dispath = useAppDispatch()
  

  return (
    <>
    {authScreen ? <Login/> : <SingUp/>}
      
    </>
  )
}
