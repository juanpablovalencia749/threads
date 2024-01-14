import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostPage, ProfilePage, NavBar } from "../threads";
import { AuthPage } from "../auth";
import { useAppSelector } from "../store/hook";




export const RouterApp = () => {

  const { screen } = useAppSelector(status => status.auth)

  return (
    <BrowserRouter>
      <div className="mx-auto w-unit-9xl ">

      { screen === 'not-authenticated'
       ? 
       <>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/*" element = {<Navigate to="/auth"/> }/>
        </Routes>
      </>
        :
        <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:username" element={<ProfilePage />} />
            <Route path="/:username/post/:pid" element={<PostPage />} />
            <Route path="/*" element = {<Navigate to="/" />}/>
         </Routes>
        </>
      }
      </div>
    </BrowserRouter>
  )
}

