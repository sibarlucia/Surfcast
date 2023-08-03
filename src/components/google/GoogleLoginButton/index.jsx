import { useGoogleLogin } from "@react-oauth/google"
// import { getGoogleUser } from "../../../services/google/getGoogleUser"

export const GoogleLoginButton = ({ onLogin  = () => {}, className = '', children }) => {
  
    const handleLogin = useGoogleLogin({
        onSuccess: (googleResponse) => {
            onLogin(googleResponse)
            // getGoogleUser({
            //     token: googleResponse.access_token
            // })
            //     .then(response => {
            //         onLogin(response.data)
            //     })
        },
        onError: (error) => console.error('loginFaild', error)
    })

    return (
        <button
            type="button"
            className={className}
            onClick={handleLogin}
        >
            {children}
        </button>
    ) 
}