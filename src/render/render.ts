
import UniqueHash from "../security/hashes";
import ChessBoard from "../ts/ChessBoard";
import Navbar from "../ts/components/Navbar";

export default function Render() {
  // Get Render's ID
  const Chess = document.getElementById('chessboard') as HTMLDivElement | null,
        Nav = document.getElementById('navbar') as HTMLDivElement | null;

  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {

  });

  // Render the JS Component
    {Nav && Navbar(Nav)}
    {Chess && ChessBoard(Chess)}
}
