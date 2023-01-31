import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GameResult from '../pages/gameResult/GameResult';
import GameRoom from '../pages/gameRoom/GameRoom';
import Lobby from '../pages/lobby/Lobby';
import MyPage from '../pages/myPage/MyPage';
import Notice from '../pages/notice/Notice';
import Rank from '../pages/rank/Rank';
import Signin from '../pages/signin/Signin';
import Signup from '../pages/signup/Signup';
import WatingRoom from '../pages/watingRoom/WatingRoom';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/watingroom" element={<WatingRoom />} />
        <Route path="/gameroom" element={<GameRoom />} />
        <Route path="/gameresult" element={<GameResult />} />
        <Route path="/rank" element={<Rank />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/notice" element={<Notice />} />
      </Routes>
    </BrowserRouter>
  );
}
