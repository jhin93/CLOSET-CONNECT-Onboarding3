import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link";
import Image from 'next/image';
import styled from '@emotion/styled';
import itemMetadata from '../types/itemMetadata';
import { fetchItems } from '../../actions/itemsActions'; // 액션 생성자 함수

const ImageTitle = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: large;
`;

export default function ItemCard({ item }: itemMetadata[]) {
    // const dispatch = useDispatch(); // Redux 액션을 dispatch 하여 Redux 스토어의 상태를 업데이트할 수 있다.
    // const items = useSelector((state) => state); // Redux 스토어에서 state를 읽고, 해당 상태를 컴포넌트에서 사용할 수 있도록 함. 해당 state를 컴포넌트의
    //
    // useEffect(() => {
    //     if (items === 0) {
    //         // Redux 스토어에 아이템 목록이 없을 때만 데이터를 가져옴
    //         dispatch(fetchItems());
    //     }
    // }, [dispatch, items]);

    return (
        <div className="card">
            <Link href={`/item/${item.id}`}>
                <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.name}
                    className="rounded shadow object-cover h-96 w-full"
                    loading={"lazy"}
                />
            </Link>
            <ImageTitle>
                <ItemName className="text-lg">{item.name}</ItemName>
            </ImageTitle>
        </div>
    );
}
