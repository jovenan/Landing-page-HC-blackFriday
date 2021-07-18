import styled from 'styled-components';

export const Header = styled.header`
    width: calc(100% - 40px);
    height: auto;
    margin: 0 auto;
    display: flex;
    padding: 20px;
    align-items: center;
    position: absolute;

    img {
        width: 200px;
    }
    
    @media (max-width: 1024px) {
        justify-content: center;
        
        img {
            width: 150px;
        }
    }
`;