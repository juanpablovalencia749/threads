import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostPage, ProfilePage, NavBar } from "../threads";
import { AuthPage } from "../auth";


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto w-unit-9xl ">
      {/* <div className="md:container md:mx-auto"> */}

      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />

        <Route path="/:username" element={<ProfilePage />} />
        <Route path="/:username/post/:pid" element={<PostPage />} />

        <Route path="/*" element = {<Navigate to="/" />}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

