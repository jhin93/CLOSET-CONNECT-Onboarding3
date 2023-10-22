import React from 'react'
import Link from "next/link";
import Image from 'next/image'
import styled from '@emotion/styled'

const ImageTitle = styled.div`
  width: 120px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function ItemCard({item}) {
    return (
        <div className="card">
            <Link href={`/product/${item.metadata.id}`}>
                <Image
                    src={item.metadata.image}
                    width={100}
                    height={100}
                    alt={item.metadata.name}
                    className="rounded shadow object-cover h-96 w-full"
                    loading={"lazy"}
                />
            </Link>
            <ImageTitle>
                <Link href={`/item/${item.metadata.id}`}>
                    <h2 className="text-lg">{item.metadata.name}</h2>
                </Link>
                <p className="mb-2">{item.brand}</p>
                {/*<p>${item.metadata.price}</p>*/}
            </ImageTitle>
        </div>
    )
}