/*
Bot tasks:
  - receber codigo e devolver catalogo (lista) -> integrar na API do vtex
  - montar o carrinho ( adicionar/ remover)
  - mais detalhes -> enviar foto e descricao
  - fechar a compra -> lista os itens no carrinho e o valor total, integra na plataforma da VTEX
       - envia codigo/QR do pix
  - envia comprovante de pagamento

*/

import React, { useState } from 'react';
import fs from 'fs';
import { Route, Router, Text, ButtonGroup, Button, useText, Image, useBotContext } from '@urban-bot/core';
import logo from './assets/logo.png';
import felipe from './assets/felipe.jpeg';
import { Bucket } from './pages/Bucket';
import { Catalog } from './pages/Catalog';
import { ProductsProvider } from './store/products';
import { BucketProvider } from './store/bucket';
import { useBucket } from './store/bucket';



function FechaCompra(){
    const { addedProducts, removeProduct } = useBucket();
    const addedProductsArray = Array.from(addedProducts.values());
    if (addedProductsArray.length === 0) {  
        return <Text>Impossível concluir a compra, não há nada no carrinho!</Text>;
    }

    const geraPix = () => {
        setTitle('Compra confirmada: LinkPIX');
        setConfirmed(felipe);
        setButton((
            <ButtonGroup>
            </ButtonGroup>
        ));
    };
    const [title, setTitle] = useState('');

    const [confirmed, setConfirmed] = useState(logo);
    const [button, setButton] = useState((
                    <ButtonGroup>
                        <Button onClick={geraPix}>Confirmar compra?</Button>
                    </ButtonGroup>
    ));
   
    return (
        <Image
            title={title}
            file={fs.createReadStream(confirmed)}
            buttons={button}    
        />
        );
}

export function App() {
    const { chat } = useBotContext();

    return (
        <ProductsProvider>
            <BucketProvider>
                <ButtonGroup
                    title={`Bem vindo(a)${', ' + chat.firstName ?? ''}! Escreva carrinho para ver o carrinho, ou catalogo para ver o catálogo'.`}
                    isReplyButtons
                    isResizedKeyboard
                >
                    <Button>carrinho</Button>
                    <Button>catalogo</Button>
                    <Button>finalizar compra</Button>
                </ButtonGroup>
                <Router>
                    <Route path="carrinho">
                        <Bucket /> 
                    </Route>
                    <Route path="catalogo">
                        <Catalog />
                    </Route>
                    <Route path="finalizar compra">
                        <FechaCompra/>
                    </Route>
                </Router>
            </BucketProvider>
        </ProductsProvider>
    );
}

