import { useEffect } from 'react';
import ItemCard from "@/components/ItemCard";
import { setItems } from '../features/actions/itemsActions'; // 액션 생성자 함수
import { useDispatch, useSelector } from 'react-redux';
import {selectItemsList} from "../features/reducers/itemsReducer";

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector(selectItemsList)

  useEffect(() => {
    if (items.length === 0) { // Redux 스토어에 아이템 목록이 없을 때만 데이터를 가져옴
      dispatch(setItems(items));
    }
  }, []);

  return (
      <div>
        <p>Test page</p>
        {items.length === 0 ? (
            <div>Loading...</div>
        ) : (
            items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))
        )}
      </div>
  )
}
