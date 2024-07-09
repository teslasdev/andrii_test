import Logo from "../assets/svgs/Logo.svg";
import Logo2 from "../assets/svgs/Logo2.svg";
import Illustration from "../assets/svgs/Illustration.svg";
import email from "../assets/svgs/email.svg";
import lock from "../assets/svgs/lock.svg";
import eye from "../assets/svgs/eye.svg";
import google from "../assets/svgs/google.svg";
import facebook from "../assets/svgs/facebook.svg";
import { PrimaryInputs } from "../components/Inputs";
import { Link, useNavigate } from "react-router-dom";
import { PrimaryButton } from "../components/Buttons";
import { useState } from "react";
import { Formik, ErrorMessage, FormikHelpers, Form } from "formik";
import * as Yup from "yup";
import axios, { AxiosError } from "axios";

// Define the types for your form values
interface FormValues {
  name : string
  email: string;
  password: string;
}

const Register = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email address"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const onSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://andrii-server.onrender.com/api/register",
        values
      );
      setLoading(false);
      if (response.data.message) {
        if (response.data.message) {
          const res = axios.post('https://andrii-server-1.onrender.com/api/random-text' , {
            email : values.email
          })
  
          if(await res) {
            alert("Check Email for generated text")
          }
        } else {
          alert(response.data.error || "Unknown error occurred"); // Display error message
        }
        navigate('/home')
      } else {
        alert(response.data.error || "Unknown error occurred"); // Display error message
      }
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError;
        alert(error?.response?.data.error || "Error occurred"); // Display error message
        console.error("Error:", axiosError);
      } else {
        alert("Unexpected error occurred"); // Handle unexpected errors
        console.error("Error:", error);
      }
    }
    resetForm();
  };
  return (
    <div className="bg-primary-bg flex justify-center items-center w-full h-screen">
      <div className="lg:w-[70%] sm:w-[95%] w-full rounded-[24px] flex sm:h-[743px] h-full shadow-[#E6E9FA]">
        <div className="bg-[#3949AB] rounded-l-[24px]  lg:w-[60%] sm:w-[50%] sm:block hidden h-full p-12">
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
        <div className="bg-[#ffffff] flex flex-col justify-center items-center sm:rounded-r-[24px] lg:w-[40%]  sm:w-[50%] w-full h-full px-6 sm:py-12">
          {/* Logo Display */}
          <div className="w-[49.23px] h-[49px] sm:hidden block">
            <img src={Logo2} alt="" className="w-full h-full" />
          </div>
          <h4 className="font-[600] text-[#3949AB] text-[20px] my-5">Create Account</h4>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={true}
          >
            {({ isValid }) => (
              <Form>
                <div className="flex flex-col gap-6 py-12">
                  <div className="w-[358px]">
                    <PrimaryInputs
                      name="name"
                      placeholder="Full Name"
                      iconRight={""}
                      type={"text"}
                      iconLeft={email}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="w-[358px]">
                    <PrimaryInputs
                      name="email"
                      placeholder="Email"
                      iconRight={""}
                      type={"text"}
                      iconLeft={email}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="w-[358px]">
                    <PrimaryInputs
                      name="password"
                      placeholder="Password"
                      iconRight={eye}
                      type={"password"}
                      iconLeft={lock}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>

                  <div className="flex items-center justify-end">
                    <span className="text-[#3949AB] font-[600] text-[14px]">
                      <Link to={""}>Forget Password</Link>
                    </span>
                  </div>

                  <button
                    type="submit"
                    className={`w-[358px] h-[40px] text-[14px] font-[400] bg-[#3949AB] ${
                      !isValid ? "opacity-50" : "opacity-1"
                    } text-white flex justify-center items-center rounded-[40px]`}
                    disabled={!isValid}
                  >
                    <PrimaryButton
                      label={
                        loading ? (
                          <svg
                            className="animate-spin h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8v4l-4-4 4-4v4A8 8 0 1012 20V12z"
                            ></path>
                          </svg>
                        ) : (
                          "Sign Up"
                        )
                      }
                    />
                  </button>

                  <div className="flex items-center gap-3 justify-center">
                    <div className="w-[93.5px] h-[1px] bg-[#E6E9FA]"></div>
                    <span className="text-[#7B7B7B] font-[600] text-[14px]">
                      Or
                    </span>
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
                      Have  account already?
                    </span>
                  </div>

                  <div
                    className={`w-[358px] h-[40px] text-[14px] font-[400] border hover:bg-[#3949AB] hover:text-white border-[#3949AB] text-[#3949AB] flex justify-center items-center rounded-[40px] cursor-pointer`}
                  >
                    <Link to={"/"} className="w-full h-full">
                      <PrimaryButton label="Login" />
                    </Link>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
