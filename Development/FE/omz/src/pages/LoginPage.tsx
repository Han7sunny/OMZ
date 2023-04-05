import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { images } from "../assets/images";
import LoginBtn from "../components/login/LoginBtn";
import { userStatus } from "../recoil/userAtom";

export default function LoginPage() {
  const isLogin = useRecoilValue(userStatus).id !== null;
  const navigate = useNavigate();
  useEffect(() => {
    isLogin && navigate("/main");
  });
  return (
    <div className="w-full h-screen flex flex-col justify-start items-center">
      <div className="mt-48">
        <img src={images.main_logo} alt="" className="w-52" />
        <img src={images.sub_logo} alt="" className="w-56" />
      </div>
      <LoginBtn />
    </div>
  );
}
