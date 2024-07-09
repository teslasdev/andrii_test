import Logo from "../assets/svgs/Logo.svg";
import Logo2 from "../assets/svgs/Logo2.svg";
import Illustration from "../assets/svgs/Illustration.svg";
import email from "../assets/svgs/email.svg";
import lock from "../assets/svgs/lock.svg";
import eye from "../assets/svgs/eye.svg";
import google from "../assets/svgs/google.svg";
import facebook from "../assets/svgs/facebook.svg";
import { PrimaryInputs } from "../components/Inputs";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
const Login = () => {
  return (
    <div className="bg-primary-bg flex justify-center items-center w-full h-screen">
      <div className="sm:w-[70%] w-full rounded-[24px] flex sm:h-[743px] h-full shadow-[#E6E9FA]">
        <div className="bg-[#3949AB] rounded-l-[24px]  sm:w-[60%] sm:block hidden h-full p-12">
          {/* Logo Display */}
          <div className="w-[49.23px] h-[49px]">
            <img src={Logo} alt="" className="w-full h-full" />
          </div>

          <div className="w-full py-12 flex justify-center items-center flex-col">
            <div className="w-[357px] h-[357px]">
              <img src={Illustration} alt="" className="w-full h-full" />
            </div>

            <div className="text-white">
              <h2 className="text-center font-[600] text-[24px]">
                Welcome aboard my friend
              </h2>
              <p className="text-center font-[400] text-[14px]">
                just a couple of clicks and we start
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffff] flex flex-col justify-center items-center sm:rounded-r-[24px] sm:w-[40%] w-full h-full px-6 sm:py-12">
           {/* Logo Display */}
           <div className="w-[49.23px] h-[49px] sm:hidden block">
            <img src={Logo2} alt="" className="w-full h-full" />
          </div>
          <h4 className="font-[600] text-[#3949AB] text-[20px] my-5">Log in</h4>
          <div className="flex flex-col gap-6 py-12">
            <div className="w-[358px]">
              <PrimaryInputs
                placeholder="Email"
                iconRight={""}
                type={"text"}
                iconLeft={email}
              />
            </div>

            <div className="w-[358px]">
              <PrimaryInputs
                placeholder="Password"
                iconRight={eye}
                type={"password"}
                iconLeft={lock}
              />
            </div>

            <div className="flex items-center justify-end">
              <span className="text-[#3949AB] font-[600] text-[14px]">
                <Link to={""}>Forget Password</Link>
              </span>
            </div>

            <div
              className={`w-[358px] h-[40px] text-[14px] font-[400] bg-[#3949AB] opacity-60 text-white flex justify-center items-center rounded-[40px]`}
            >
              <PrimaryButton label="Log In" />
            </div>

            <div className="flex items-center gap-3 justify-center">
              <div className="w-[93.5px] h-[1px] bg-[#E6E9FA]"></div>
              <span className="text-[#7B7B7B] font-[600] text-[14px]">Or</span>
              <div className="w-[93.5px] h-[1px] bg-[#E6E9FA]"></div>
            </div>

            <div className="flex gap-3 items-center">
              <div className="w-[175px] h-[40px]">
                <img src={google} alt="" className="w-full h-full" />
              </div>
              <div className="w-[175px] h-[40px]">
                <img src={facebook} alt="" className="w-full h-full" />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <span className="text-[#7B7B7B] font-[600] text-[14px]">
                Have no account yet?
              </span>
            </div>

            <div
              className={`w-[358px] h-[40px] text-[14px] font-[400] border hover:bg-[#3949AB] hover:text-white border-[#3949AB] text-[#3949AB] flex justify-center items-center rounded-[40px] cursor-pointer`}
            >
              <Link to={'/register'} className="w-full h-full">
                <PrimaryButton label="Register" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
