import React from 'react';
import { useBucket } from '../store/bucket';
import { Text, useCommand } from '@urban-bot/core';


export function Bucket() {
    const { addedProducts, removeProduct } = useBucket();
    const addedProductsArray = Array.from(addedProducts.values());

    const totalCount = addedProductsArray.reduce((totalCount, { count, price }) => totalCount + count * price, 0);

    useCommand(({ command }) => {
        const index = Number(command.slice(-1)) - 1;

        removeProduct(addedProductsArray[index]);
    }, /delete\d+/);

    if (addedProductsArray.length === 0) {  
        return <Text>Não há nada no carrinho!</Text>;
    }

    return (
        <Text>
            {addedProductsArray.map((product, index) => {
                return (
                    <React.Fragment key={product.id}>
                        <i>{product.name}</i> - <b>{product.count}</b> - <b>{Number(product.price).toFixed(2)}</b>$ /delete{index + 1}
                        <br />
                    </React.Fragment>
                );
            })}
            -----------------------------------
            <br />
            Preço final: <b>R${Number(totalCount).toFixed(2)}</b>
        </Text>
    );
}
