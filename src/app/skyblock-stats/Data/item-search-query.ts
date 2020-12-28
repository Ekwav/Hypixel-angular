import { Enchantments } from "../enchantments.enum";
import { Reforges } from "../reforges.enum";

export class ItemSearchQuery {
    name: string;
    count?: number;
    price?: number;
    reforge?: Reforges;
    enchantments?: Enchantments[];
    normalized?: boolean;
    start?: number;
    end?: number;
}

