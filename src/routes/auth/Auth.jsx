import { Outlet } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google';


const Auth = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="p-[24px] max-w-[350px] w-full rounded-[8px] shadow-custom">
        <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
          <Outlet />
        </GoogleOAuthProvider>
      </div>
    </div>
  )
}

export default Auth
