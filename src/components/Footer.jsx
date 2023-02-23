import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="section-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-sm uppercase items-center">
          <div>
            <h2 className="font-semibold">支援功能</h2>
            <ul>
              <li className="text-sm py-2">服務中心</li>
              <li className="text-sm py-2">聯絡我們</li>
              <li className="text-sm py-2">貨幣 API</li>
              <li className="text-sm py-2">貨幣文件</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold">網站資訊</h2>
            <ul>
              <li className="text-sm py-2">關於我們</li>
              <li className="text-sm py-2">徵才資訊</li>
              <li className="text-sm py-2">投資規劃</li>
              <li className="text-sm py-2">法律諮詢</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:max-w-sm py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">得到最新消息</p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-4 w-full shadow-xl rounded-md md:w-auto"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="filled-button shadow-md  md:w-auto my-2">
                    註冊
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <AiOutlineInstagram />
                <FaTiktok />
                <FaTwitter />
                <FaFacebookF />
                <FaGithub />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4 ">
        API由 <span className="text-accent">Coin Gecko </span> 所供應
      </p>
    </div>
  );
};

export default Footer;
