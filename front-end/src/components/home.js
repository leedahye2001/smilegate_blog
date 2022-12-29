import { Component } from "react";
import Profile from "../img/profile.JPEG";
import BoardList from "./boardlist";

class Home extends Component {
  render() {
    return (
      <div className="flex gap-10">
        <div className="border w-[70%]">
          <BoardList />
        </div>
        <div className="border w-[30%]">
          <div className="grid grid-cols-2 items-center">
            <div>
              <img src={Profile} className="w-20" alt="profile" />
            </div>
            <div className="w-40 flex grid grid-2 items-center">
              <div>
                <h1 className="font-semibold">이다혜 님</h1>
              </div>
              <div>
                <button className="bg-gray-400 hover:bg-gray-300 text-white font-bold py-2 px-4 rounded-full text-sm">
                  로그아웃
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 bg-orange-400 text-center">
            <div>내 블로그</div>
            <div>글쓰기</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
