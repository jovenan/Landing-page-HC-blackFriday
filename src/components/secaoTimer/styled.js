import styled from 'styled-components';

export const Timer = styled.div`
    height: 220px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    box-shadow: #76767675 3px 3px 60px 30px;
    position: relative;
    padding-top: 40px;

    .dashp { 
        border:1px solid #fff;
        float:left;
        margin: 0 10px 0 0;
        width:150px;
        height: 130px;
        padding:10px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        box-shadow: rgb(195 156 44 / 37%) 3px 3px 40px 21px;
    }
    p { 
        font-size:60px;
        font-weight:bold;
        color: red;
        margin: 0px;
        text-align:
        center;
    }
    .dashtitle {
        font-size:2rem;
        color:#fff;
        clear:both;
        display:block;
    }
    #Encerramento {
        margin-left: 50px;
    }
    h3 {
        color: #fff;
        position: absolute;
        top: 20px;
        font-family: 'Galada', cursive;
        font-size: 1.5rem
    }

    @media (max-width: 1024px) {
        height: 150px;
        padding: 5% 0;

        .dashp { 
            width:100px;
            height: 80px;
        }
        .dashtitle {
            font-size:1rem;
            color:#fff;
            clear:both;
            display:block;
        }
        p { 
            font-size:40px;
            font-weight:bold;
            color: red;
            margin: 0px;
            text-align:
            center;
        }
    }
    @media (max-width: 500px) {
        flex-direction:column;
        height: auto;
        padding: 70px 0 30px 0;

        .dashp { 
            width:130px;
            height: 110px;
            margin-bottom: 20px
        }
        #Encerramento {
            margin-left: 0;
        }
        h3 {
            font-size: 1rem;
        }
    }
`;