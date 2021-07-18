import styled from 'styled-components';

export const secaoFormulario = styled.section`
    width: 100%;
    height: 100vh;
    background: url(/image/fundo-amarelo.jpg);
    background-attachment: fixed;
    background-position: center;
    display:flex;
    align-items: center;
    justify-content: space-around;

    @media (max-width: 1024px) {
        flex-direction: column;
        height: auto;
    }
`;
export const ForcaVenda = styled.div`
    padding: 20px;
    width: 500px;
    display:flex;
    border-radius: 40px;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    color: #fff;
    box-shadow: #0006 3px 3px 20px 20px;
    background: rgb(0 0 0 / 75%);

    h3{
        padding: 10px 0;
        font-family: 'Galada', cursive;
        font-size:2rem;
        text-align: justify;
    }
    img {
        width: 350px;
        padding-left: 100px;
    }
    @media (max-width: 1024px) {
        margin: 35% 0 10% 0;
        width: 80%;
        img {
            width: 200px;
            padding-left: 50px;
        }
        h3{
            font-size:1.5rem;
        }
    }
`;
export const Formulario = styled.form`
    width: 18%;
    height: 15%;
    background: rgb(0 0 0 / 75%);
    border-radius:5%;
    padding: 100px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    color: #fff;
    box-shadow: #0006 3px 3px 20px 20px;

    h3 {
        font-family: 'Galada', cursive;
        font-size: 1.4rem;
        margin-bottom: 5px
    }

    input {
        width: 300px;
        font-size: 1rem;
        margin-bottom: 20px;
        border-radius: 30px;
        border: 0;
        padding: 10px;
        height: 30px;
        outline: none;
    }
    #btnEnviar {
        width: 320px;
        height: 50px;
        font-size: 1.3rem;
        padding: 5px 10px;
        border-radius: 30px;
        border: 0;
        background: #000;
        color: #fff;
        font-weight: 700;
    }

    @media (max-width: 1024px) {
        margin: 0 0 10% 0;
        width: 80%;
        padding: 20px;

        input {
            width: 85%;
        }
        #btnEnviar {
            width: 90%;
        }
    }
    
`;
export const ArrowUp = styled.a`
    .fa.fa-arrow-circle-o-up {
        position: absolute;
        right: 40px;
        font-size: 70px;
        color: #000;
        margin-top: 30px;
    }
`;
export const Mensagem = styled.p`
    font-size: 1rem;
`;