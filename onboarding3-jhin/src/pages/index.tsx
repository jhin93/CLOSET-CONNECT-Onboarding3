import { useEffect, useState } from "react";
import ItemCard from "@/components/ItemCard";
import getItems from '@/features/getItems'

export default function Home() {
  const [itemList, setItemList] = useState([]);

  const fetchItemList = async () => {
    try {
      const result = await getItems();
      console.log("Item metadata list : ", result)
      setItemList(result);
    } catch (error) {
      console.error("Error fetching data in index : ", error);
    }
  }

  useEffect(() => {
    fetchItemList()
  }, []);

  return (
      <div>
        <p>Test page</p>
        {itemList.map((item) => (
            // <div key={item.metadata.id}> {item.metadata.name}</div>
            <ItemCard key={item.id} item={item} />
        ))}
      </div>
  )
}
