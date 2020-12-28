import { PlayerAuctionsResponse } from "./player-auctions-response";

export class PlayerBidsResponse extends PlayerAuctionsResponse {
    public highestOwn: number;
}
