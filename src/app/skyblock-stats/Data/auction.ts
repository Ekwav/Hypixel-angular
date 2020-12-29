
import { Enchantments } from "../enchantments.enum";
import { Reforges } from "../reforges.enum";
import { Bid } from "./bid";
import { Enchantment } from "./enchantment";
export class Auction {
    uuid: string;
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
    enchantments: Enchantment[];
    nbtData: any;
    itemCreatedAt: Date;
    reforge: Reforges;
    //category: Category;
    //tier: Tier;
    bin: boolean;
}
