import styled from 'styled-components';
import "./assets/css/style.css"
import Layout from './components/Layout';
import Close from './assets/images/close.png'

function App() {
  return (
    <Cover>
      <CloseContainer>
        <span>
          <img src={Close}/>
        </span>
      </CloseContainer>
      <Layout/>
    </Cover>
  );
}

export default App;

const Cover = styled.div`
  background: #000;
  color: #fff;
`;

const CloseContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
  padding-top: 30px;
  
  span {
    transition: 0.4s ease;
    cursor: pointer;
    &:hover {
      transform: rotate(180deg);
      transition: 0.4s ease;
      transform-origin: center;
    }
  }
`;