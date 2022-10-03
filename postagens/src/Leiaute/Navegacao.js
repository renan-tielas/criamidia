import { useState } from 'react/cjs/react.development';

import Botao from'../Componentes/Botao';
import styles from '../styles/objetos.module.css'
// import { Heading, Flex } from '@chakra-ui/react'


// usar styled components para arranjar botoes, caso mudem de quantidade: de 6 pra 4 botoes..
// estado_botao= setState[0]/////
// assim fazer um "tema" pra inverter as cores do navegador, com a do botão acionado

let estado_botao = false;
// fazer mudança de cores usando estado useState 

const Navegacao = () => {



    return (
      
                <nav className={styles.navegacao} >
                   
                    <Botao conteudo='Escreva' endereco='paginas/CriacaoPostagens' ativo={estado_botao} />
                    <Botao conteudo='Embeleze'   endereco='paginas/Editor' ativo={estado_botao} />
                    <Botao conteudo='Exporte'   endereco='paginas/Javascript' ativo={estado_botao} />
                    <Botao conteudo='Página de Apresentação'   endereco='paginas/Outros' ativo={estado_botao} />
                </nav>
    )

}

export default Navegacao