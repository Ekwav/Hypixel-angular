
import { Enchantments } from "../enchantments.enum";
import { Reforges } from "../reforges.enum";
import { Bid } from "./bid";
export class Auction {
    id: number;
    claimed: boolean;
    count: number;
    startingBid: number;
    tag: string;
    itemName: string;
    start: Date;
    end: Date;
    auctioneerId: string;
    profileId: string;
    highestBidAmount: number;
    bids: Bid[];
    anvilUses: number;
    enchantments: Enchantments[];
    nbtData: any;
    itemCreatedAt: Date;
    reforge: Reforges;
    //category: Category;
    //tier: Tier;
    bin: boolean;
}
