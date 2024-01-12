import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostPage, ProfilePage, NavBar } from "../threads";


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto w-unit-9xl ">

      <NavBar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage/>} />
        <Route path="/post/:post" element={<PostPage />} />

        <Route path="/*" element = {<Navigate to="/" />}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

