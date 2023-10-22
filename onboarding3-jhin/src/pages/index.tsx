import axios from "axios"
import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";
import getItems from '@/features/getItems'

export default function Home() {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    getItems().then((result) => {
      setItemList(result);
    }).catch((error) => {
      console.error("Error fetching data from getItems.ts:", error);
    });
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
