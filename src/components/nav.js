import { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div className="py-10">
        <div className="flex justify-between items-center">
          <div className="font-black text-5xl">
            <h1>Slog</h1>
          </div>
          <div className="text-sm text-gray-400">
            <Link to="/" className="hover:text-black">
              블로그 홈
            </Link>{" "}
            |{" "}
            <Link to="/" className="hover:text-black">
              글쓰기
            </Link>
          </div>
        </div>

        {/* • 글 쓰기/수정 • 글 목록/삭제 • 댓글 • UI디자인 • 관리자도구 •
          좋아요(option) • Trackback (option) • RSS (option) */}
      </div>
    );
  }
}

export default Nav;
