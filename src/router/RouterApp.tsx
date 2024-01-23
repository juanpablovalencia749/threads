import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { HomePage, PostPage, ProfilePage, NavBar } from "../threads";
import { AuthPage } from "../auth";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { useEffect } from "react";
import { onLogin, onLogout } from "../store/auth/authSlice";
import threadApi from "../api/threadsApi";




export const RouterApp = () => {

  const dispatch = useAppDispatch()
  const { screen } = useAppSelector(status => status.auth)

  const checkAuthToken = async() => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch( onLogout() );
    
    try {
      const { data } = await threadApi.get('/users/renew');
      localStorage.setItem('token', data.token)
      // localStorage.setItem('token-init-date',new Date().getTime() );
      dispatch( onLogin());
       
    } catch (error) {
      localStorage.clear();
      dispatch( onLogout() );
    }
  }


  useEffect(() => {
    checkAuthToken()
  }, [])
  
  


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

