import * as Styled from './styles';
import { Base } from '../Base';
import mockBase from '../Base/mock';

function Home() {
  return (
    <Styled.Wrapper>
      <Base {...mockBase} />
    </Styled.Wrapper>
  );
}

export default Home;
