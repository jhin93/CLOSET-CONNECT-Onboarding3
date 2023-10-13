import axios from "axios"
import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";

export default function Home() {
  const [itemList, setItemList] = useState([]);

  async function getItems() {
    const localURL = "http://localhost:3001";
    try {
      const rawData = await axios.get(localURL + '/api/items');
      setItemList(rawData.data.listings);
      console.log("=== itemList === : ", itemList)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
      <div>
        <p>Test page</p>
        {itemList.map((item) => (
            // <div key={item.metadata.id}> {item.metadata.name}</div>
            <ItemCard key={item.metadata.id} item={item} />
        ))}
      </div>
  )
}
