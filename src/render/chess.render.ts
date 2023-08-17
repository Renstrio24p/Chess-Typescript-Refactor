
import UniqueHash from "../security/hashes";
import { Rank1, Rank2, Rank3, Rank4, Rank5, Rank6, Rank7, Rank8 } from "../ts/components/ranks";

export default function Chess_Render() {
  // Get Render's ID
    const rank8 = document.getElementById('rank8') as HTMLDivElement | null,
          rank7 = document.getElementById('rank7') as HTMLDivElement | null,
          rank6 = document.getElementById('rank6') as HTMLDivElement | null,
          rank5 = document.getElementById('rank5') as HTMLDivElement | null,
          rank4 = document.getElementById('rank4') as HTMLDivElement | null,
          rank3 = document.getElementById('rank3') as HTMLDivElement | null,
          rank2 = document.getElementById('rank2') as HTMLDivElement | null,
          rank1 = document.getElementById('rank1') as HTMLDivElement | null;


  // Hash Applied
  window.addEventListener('DOMContentLoaded', () => {


  });

  // Render the JS Component

  {rank8 && Rank8(rank8)}
  {rank7 && Rank7(rank7)}
  {rank6 && Rank6(rank6)}
  {rank5 && Rank5(rank5)}
  {rank4 && Rank4(rank4)}
  {rank3 && Rank3(rank3)}
  {rank2 && Rank2(rank2)}
  {rank1 && Rank1(rank1)}

}
