import axios from "axios"

export default async function getItems() {
    const localURL = "http://localhost:3000";
    try {
        const rawData = await axios.get(localURL + '/api/items');
        const itemData = rawData.data.listings
        console.log("=== itemData === : ", itemData)
        return itemData;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}