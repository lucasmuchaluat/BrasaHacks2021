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
import { Route, Router, Text, ButtonGroup, Button, useText, Image, useBotContext, useRouter} from '@urban-bot/core';
import qr from './assets/download.png';
import checkout from './assets/checkout.png';
import { Bucket } from './pages/Bucket';
import { Catalog } from './pages/Catalog';
import { ProductsProvider } from './store/products';
import { BucketProvider } from './store/bucket';
import { useBucket } from './store/bucket';
import axios from 'axios';
import { JsonCerto } from './jsonConverter';

async function ConsultaCodigo(codigo: string) {
    //Consulta o back (?? Consulta estoques??) e devolve o json do catalogo

    console.log(process.env.BACKURL + "/catalogs/" + codigo)

    var objectJson = await axios.get(process.env.BACKURL + "/catalogs/" + codigo,
        {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'application/json'
            }
        })

    console.log(objectJson.data);
    
    
    var ar = Array<JsonCerto>();

    for( var e of objectJson.data.products){
        var nome = new JsonCerto();
        nome.name = e.name;
        nome.id = e.productId;
        nome.images = [e.image];
        nome.price = Number(e.price);
        ar.push(nome);
    }
    console.log(JSON.stringify(ar));

    fs.writeFile ('./src/api/products.json', JSON.stringify(ar), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );
}


function RecebeCodigo(){
    const [codigo, setCodigo] = useState('Envie o código do catálogo que quer consultar. Em seguida, utilize os botoes para comprar!');
    const { navigate } = useRouter();
    useText(({ text }) => {
        ConsultaCodigo(text);
        console.log("SET CODIGO FEITO");
        console.log(codigo);
        navigate('init');
    });

    return (
        <Text>
            {codigo}
        </Text>
    );
}

function FechaCompra(){
    const { addedProducts, removeProduct } = useBucket();
    const addedProductsArray = Array.from(addedProducts.values());
    if (addedProductsArray.length === 0) {  
        return <Text>Impossível concluir a compra, não há nada no carrinho!</Text>;
    }

    const geraPix = () => {
        setTitle('Compra confirmada, pague em: https://bit.ly/3ukJxJb');
        setConfirmed(qr);
        setButton((
            <ButtonGroup>
            </ButtonGroup>
        ));
    };
    const [title, setTitle] = useState('');

    const [confirmed, setConfirmed] = useState(checkout);
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
                    title={`Bem vindo(a)${', ' + chat.firstName ?? ''}!`}
                    isReplyButtons
                    isResizedKeyboard
                >
                    <Button>carrinho</Button>
                    <Button>catalogo</Button>
                    <Button>finalizar compra</Button>
                </ButtonGroup>
                <Router>
                    <Route path="/start">
                        <RecebeCodigo />
                    </Route>
                    <Route path="carrinho">
                        <Bucket /> 
                    </Route>
                    <Route path="catalogo">
                        <Catalog />
                    </Route>
                    <Route path="finalizar compra">
                        <Bucket/>
                        <FechaCompra/>
                    </Route>
                </Router>
            </BucketProvider>
        </ProductsProvider>
    );
}

