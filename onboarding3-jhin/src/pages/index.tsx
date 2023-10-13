import axios from "axios"

export default function Home() {
  async function getItems() {
    const localURL = "http://localhost:3001";
    const rawData = await axios.get( localURL +'/api/items')
    let itemList = rawData.data.listings
    console.log("itemList : ", itemList)
  }
  getItems().then()
  return (
    <div>
      test page
    </div>
  )
}
