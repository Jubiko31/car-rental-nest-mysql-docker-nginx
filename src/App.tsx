import styled from 'styled-components';
import tw from 'twin.macro';
import { Home } from './app/components/Home/Home';

const AppContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
  `}
`
function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
