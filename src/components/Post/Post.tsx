import { Container, Text } from '../../lib/common-styles';
import { ContainerPost } from './Post.styles';
import moment from 'moment';

type Props = {
  date: string;
  authorName : string;
  messageBody: string;
};

const Post = (props: Props) => {
  const { date, authorName, messageBody } = props;
  
  return (
    <>
      <ContainerPost>
        <Container borderRadius='8px' padding='1.563rem 1.875rem 0.625rem 1.875rem' background='white'>
          <Text textAlign='start' fontWeight={500} style={{width: 'auto'}}>{messageBody}</Text>
          <Text textAlign='start' margin='10x 0px' fontWeight={700} color='primary'>{`- ${authorName}`}</Text>
        </Container>
        <Container>
          <Text textAlign='start' margin='10px 0 0 0' lineHeight='l6' fontWeight={700} color='white'>{`Posted: ${moment(date).format('MMMM Do YYYY h:mm')}`}</Text>
        </Container>
      </ContainerPost>
    </>
  );
};

export default Post;