import logo from "./logo.svg";
import "./App.css";
import KakaoLogin from "react-kakao-login";
import axios from "axios";

const App = () => {
  const KakaoLoginHandler = (userinfo) => {
    console.log("1");
    const { id } = userinfo.profile;
    const { email } = userinfo.profile.kakao_account;

    axios
      .post("http://localhost:8081/kakaologin", {
        oAuthId: id,
        email: email,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    /*
    fetch("http://localhost:8081/kakaologin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        oAuthId: id,
        email: email,
      }),
    })
      .then((res) => {
        console.log(res.body);
      })
      .catch((err) => {
        console.log(err);
      });
      */
  };

  return (
    <div className="App">
      <KakaoLogin
        token={"b527b6029f3d77cf27846e4597df0f2b"}
        buttonText="kakao"
        onSuccess={KakaoLoginHandler}
        onFail={console.error}
        onLogout={console.info}
        getProfile={true}
      >
        <h3>카카오 계정으로 시작하기</h3>
      </KakaoLogin>
    </div>
  );
};

export default App;
