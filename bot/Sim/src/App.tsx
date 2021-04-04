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
import { Bucket } from './pages/Bucket';
import { Catalog } from './pages/Catalog';
import { ProductsProvider } from './store/products';
import { BucketProvider } from './store/bucket';


    

export function App() {
    const { chat } = useBotContext();

    return (
        <ProductsProvider>
            <BucketProvider>
                <ButtonGroup
                    title={`Bem vindo ${',' + chat.firstName ?? ''}! Escreva carrinho para ver o carrinho, ou catalogo para ver o catálogo'.`}
                    isReplyButtons
                    isResizedKeyboard
                >
                    <Button>carrinho</Button>
                    <Button>catalogo</Button>
                </ButtonGroup>
                <Router>
                    <Route path="carrinho">
                        <Bucket />
                    </Route>
                    <Route path="catalogo">
                        <Catalog />
                    </Route>
                </Router>
            </BucketProvider>
        </ProductsProvider>
    );
}

