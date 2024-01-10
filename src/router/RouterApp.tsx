import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostPage, ProfilePage, Navbar } from "../threads";


export const RouterApp = () => {
  return (
    <BrowserRouter>
      <div className="mx-auto w-unit-9xl bg-orange-700 ">

      <Navbar/>
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

