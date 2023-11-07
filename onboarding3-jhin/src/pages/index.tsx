import { useEffect } from 'react';
import ItemCard from "@/components/ItemCard";
import { setItems } from '../../actions/itemsActions'; // 액션 생성자 함수
import { useDispatch, useSelector } from 'react-redux';

export default function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state).items.items

  console.log("(index.tsx)items : ", items);
  console.log("(index.tsx)length of  items : ", items.length);
  console.log("(index.tsx)typeof of  items : ", typeof(items));
  // 추가: Redux를 사용한 비동기 데이터 가져오기
  useEffect(() => {
    console.log("(index.tsx)inside useEffect : ", items);
    if (items.length === 0) {
      // Redux 스토어에 아이템 목록이 없을 때만 데이터를 가져옴
      dispatch(setItems(items));
    }
  }, [dispatch, items]); // dispatch와 items를 의존성으로 지정
  console.log("(index.tsx)after useEffect : ", items);

  return (
      <div>
        <p>Test page</p>
        {/*{items.length === 0 ? (*/}
        {/*    <div>Loading...</div>*/}
        {/*) : (*/}
        {/*    items.map((item) => (*/}
        {/*        <ItemCard key={item.id} item={item} />*/}
        {/*    ))*/}
        {/*)}*/}
      </div>
  )
}
