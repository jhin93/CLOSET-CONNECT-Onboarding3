import axios from "axios"
import itemList from "../types/itemMetadata"
let itemMetadataArr: itemList[] = [];
let itemDataList;

const getItems = async() =>  {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/items');
        itemDataList = rawData.data.listings
        itemDataList.map((item) => (itemMetadataArr.push(item.metadata)))
        console.log("(getItems.ts)itemMetadataArr : ", itemMetadataArr)
        return itemMetadataArr;
    } catch (error) {
        console.error("Error fetching data from getItems.ts :", error);
    }
}

export default getItems;