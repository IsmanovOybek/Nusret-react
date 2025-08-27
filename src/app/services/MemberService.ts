import axios from "axios";
import { serverApi } from "../../libs/config";
import { Member } from "../../libs/types/member";
class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async readerRankings(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("readerRankings:", result);

      return result.data;
    } catch (err) {
      console.log("Error, readerRankings:", err);
      throw err;
    }
  }
  public async getLibruary(): Promise<Member> {
    try {
      const url = this.path + "/member/libruary";
      const result = await axios.get(url);
      console.log("getLibruary:", result);

      const restaurant: Member = result.data;
      return restaurant;
    } catch (err) {
      console.log("Error, getLibruary:", err);
      throw err;
    }
  }
}

export default MemberService;
