import styled from 'styled-components';

export const Container = styled.div`
    display:grid;
    justify-contents:center;
    align-items:center;
    width:400px;
    margin:40px auto;
    grid-template-column :repeat(4,100px);
    grid-template-rows:minmax(100px,auto) repeat(3,90px);
    box-shadow:2px 2px 10px #333;
    border-radius:30px;
    background-color: #1c0404;
`