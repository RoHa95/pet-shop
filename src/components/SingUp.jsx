import React, { useState } from "react";
import { validEmail,validateForm } from "../helper/helper";
import { Link } from "react-router-dom";
function SingUp({ setStep }) {
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [repass, setRepass] = useState("");
  const [alert, setAlert] = useState({
    mobile: "",
    email: "",
    pass: "",
    repass: "",
  });
  const clickHandler = (e) => {
    e.preventDefault();
    setAlert(validateForm({mobile,email,pass,repass}));
    console.log(alert);
    return;
  };
 
  return (
    <>
      <form className=" w-fit py-6 px-8 bg-white rounded-3xl my-auto h-fit flex flex-col items-stretch justify-start">
        <div className="w-full flex justify-center cursor-pointer mb-4">
          <Link to="/home">
            <svg
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=" h-20 w-20 lg:h-20 lg:w-20"
            >
              <g clip-path="url(#clip0_1_2576)">
                <path
                  d="M28.4738 0.0203358C27.8417 0.0268436 27.2463 0.318069 26.8384 0.824867L0 34.0767L2.44952 36.054L28.5068 3.76397L55.5895 36.0752L57.9999 34.0539L30.123 0.794904C29.7065 0.295834 29.1003 0.0183021 28.4738 0.0203358Z"
                  fill="black"
                />
                <path
                  d="M28.9612 35.2098C29.1227 35.1555 29.3275 34.8904 29.3381 34.7223C29.575 30.6672 26.2266 25.2614 25.0207 23.4565C24.05 23.8435 23.1054 24.4689 22.2333 25.422C22.2333 25.422 20.4918 26.5907 19.874 32.2692C23.1313 36.4877 27.1787 35.7978 28.9612 35.2098Z"
                  fill="#F7763D"
                />
                <path
                  d="M41.8793 28.0122L36.543 26.7097C36.543 26.7097 36.3909 25.4222 34.8777 24.8932C33.7747 24.5066 29.9744 22.3224 26.2353 23.0939C27.6489 25.2457 30.7937 30.5497 30.5451 34.7921C30.5081 35.4592 29.9778 36.1483 29.3403 36.359C28.7275 36.5629 27.6277 36.8452 26.291 36.8452C24.3544 36.8452 21.9219 36.2496 19.7305 33.9598C19.6876 34.6875 19.663 35.4745 19.6587 36.3261C19.6341 40.7185 14.0548 44.8831 14.0548 44.8831L13.3116 46.4231C14.8284 49.7071 17.206 52.514 20.1579 54.5511C20.2917 52.4533 20.8178 50.8099 21.427 49.5749C22.581 47.2293 24.1993 45.9274 25.0251 45.3766C25.2027 40.5353 26.7741 39.1204 28.085 38.7969C28.2839 38.7475 28.4914 38.7431 28.6923 38.7841C28.8932 38.8251 29.0824 38.9104 29.2461 39.0337C29.6261 39.3174 29.8706 39.7855 29.8954 40.2881C29.9628 41.5894 30.7319 42.503 31.0966 42.8658C31.688 42.9208 32.2526 43.0145 32.784 43.1433L32.8328 42.6868L33.239 38.7425C33.3079 38.0768 33.9062 37.5157 34.5685 37.4208C37.0835 37.0544 42.6871 35.5647 43.0512 29.5109C43.0931 28.8432 42.5292 28.1716 41.8793 28.0122ZM33.5654 29.4184C33.1889 29.4184 32.8831 29.114 32.8831 28.7371C32.8831 28.3602 33.1889 28.0558 33.5654 28.0558C33.6549 28.0557 33.7436 28.0732 33.8263 28.1074C33.909 28.1416 33.9842 28.1918 34.0475 28.2551C34.1109 28.3183 34.1611 28.3935 34.1953 28.4762C34.2295 28.5589 34.247 28.6476 34.2469 28.7371C34.2456 29.1134 33.942 29.4184 33.5654 29.4184Z"
                  fill="#F7763D"
                />
                <path
                  d="M36.5445 47.4433C36.3428 45.727 33.9201 44.3128 30.7895 44.1119C30.7895 44.1119 29.1273 42.834 29.0158 40.6283C28.9974 40.2944 28.7478 39.9625 28.4237 40.0425C27.5871 40.2483 26.1668 41.3222 26.096 46.2269C26.096 46.2269 21.5462 48.5223 21.2175 55.1398C24.1339 56.8921 27.5325 57.9199 31.1601 57.9797L31.1194 57.0317C31.1044 56.6978 31.3466 56.3316 31.6592 56.2146L35.5346 54.7611C35.5346 54.7611 37.352 54.8631 38.108 53.4986C38.4908 52.8108 38.846 52.3302 39.1076 52.0205C39.3217 51.7658 39.3183 51.4016 39.0788 51.1688C38.287 50.4046 36.6953 48.7259 36.5445 47.4433ZM34.2456 49.1046C34.1562 49.1047 34.0676 49.0872 33.985 49.053C33.9023 49.0188 33.8272 48.9687 33.764 48.9054C33.7008 48.8422 33.6506 48.7671 33.6164 48.6845C33.5822 48.6019 33.5647 48.5133 33.5647 48.4239C33.5646 48.3343 33.582 48.2456 33.6162 48.1629C33.6503 48.0801 33.7004 48.0049 33.7637 47.9415C33.8269 47.8782 33.902 47.8279 33.9847 47.7936C34.0674 47.7593 34.1561 47.7416 34.2456 47.7416C34.3352 47.7415 34.424 47.759 34.5069 47.7933C34.5897 47.8275 34.665 47.8778 34.7283 47.9411C34.7917 48.0045 34.842 48.0798 34.8762 48.1626C34.9104 48.2455 34.928 48.3342 34.9279 48.4239C34.9279 48.5134 34.9103 48.6021 34.876 48.6848C34.8417 48.7675 34.7914 48.8426 34.7281 48.9059C34.6647 48.9691 34.5894 49.0192 34.5066 49.0533C34.4239 49.0874 34.3351 49.1049 34.2456 49.1046Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2576">
                  <rect width="58" height="58" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
        <div className=" w-full flex items-center justify-between">
          <div className="text-orange-500 font-bold text-2xl mb-3">ثبت نام</div>
          <div className="bg-orange-500 text-white rounded-sm px-2 pb-1 font-normal text-sm cursor-pointer mb-3">
            ورود
          </div>
        </div>

        <div className=" flex flex-col items-stretch mb-2">
          <label htmlFor="phone" className=" text-sm pb-1">
            شماره تلفن همراه
          </label>
          <input
            id="phone"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            type="number"
            placeholder="شماره تلفن همراه"
            className="p-2 border border-orange-500 rounded-md"
          />
          <div className="h-2">
          {alert.mobile && <p className="bg-red-100 text-red-400 text-[10px] py-0.5 px-1 rounded">{alert.mobile}</p>}
          </div>
        </div>
        <div className=" flex flex-col items-stretch  mb-2">
          <label htmlFor="email" className=" text-sm pb-1">
            ایمیل
          </label>
          <input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="ایمیل"
            className=" p-2 border border-orange-500 rounded-md"
          />
          <div className="h-2">
           {alert.email && <p className="bg-red-100 text-red-400 text-xs py-0.5 px-1 rounded">{alert.email}</p>}
           </div>
        </div>
        <div className=" flex flex-col items-stretch  mb-2">
          <label htmlFor="pass" className=" text-sm pb-1">
            رمز ورود
          </label>
          <input
            id="pass"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="رمز ورود"
            className=" p-2 border border-orange-500 rounded-md"
          />
          <div className="h-2">
           {alert.pass && <p className="bg-red-100 text-red-400 text-xs py-0.5 px-1 rounded">{alert.pass}</p>}
           </div>
        </div>
        <div className=" flex flex-col items-stretch  mb-2">
          <label htmlFor="repeatPass" className=" text-sm pb-1">
            تکرار رمز ورود
          </label>
          <input
            id="repeatPass"
            value={repass}
            onChange={(e) => setRepass(e.target.value)}
            type="password"
            placeholder="تکرار رمز ورود"
            className="p-2 border border-orange-500 rounded-md"
          />
          <div className="h-2">
           {alert.repass && <p className="bg-red-100 text-red-400 text-xs py-0.5 px-1 rounded">{alert.repass}</p>}
           </div>
        </div>

        <div
          onClick={clickHandler}
          className=" flex items-center justify-center w-full p-2 border text-white hover:bg-orange-200 hover:text-orange-500 bg-orange-500 border-orange-500 rounded-md my-4"
        >
          ثبت نام
        </div>
      </form>
    </>
  );
}

export default SingUp;
