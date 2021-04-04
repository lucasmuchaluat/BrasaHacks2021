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
import { Route, Router, Text, ButtonGroup, Button, useText, Image } from '@urban-bot/core';
import logo from './assets/logo.png';

function ConsultaCodigo(codigo: string){
    //Consulta o back (?? Consulta estoques??) e devolve o json do catalogo
    return;
}

function RecebeCodigo() {
    const [codigo, setText] = useState('Envie o código do catálogo que quer consultar');

    useText(({ text }) => {
        setText(text);
    });

    //var json = ConsultaCodigo(codigo);

    return (
        <Text>
            <i>{codigo}</i>
        </Text>
    );
}
function MontaCarrinho(){
    var loop = true;
    while(loop){
        const [entrada, setText] = useState('Para adicionar um item ao seu carrinho, envie seu número,\
        para removê-lo, envie um R+número, exemplo R3 ou R23. Caso queira finalizar a compra, envie "fim"');
        
        useText(({ text }) => {
            setText(text);
            });

        //if (entrada)
    }
    
    
}
function Logo() {
    const [title, setTitle] = useState('Urban Bot');

    const addRobot = () => {
        setTitle(title + '🤖');
    };

    return (
        <Image
            title={title}
            file={fs.createReadStream(logo)}
            buttons={
                <ButtonGroup>
                    <Button onClick={addRobot}>Add robot</Button>
                </ButtonGroup>
            }
        />
    );
}

export function App() {
    return (
        <>
            <Router>
                <Route path="/start">
                    <RecebeCodigo />
                </Route>
                <Route path="/logo">
                    <Logo />
                </Route>
            </Router>
        </>
    );
}
