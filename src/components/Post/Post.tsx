import { FlexContainer } from '../../lib/common-styles';

type Props = {
  date: string;
  authorName : string;
  messageBody: string;
};

const Post = (props: Props) => {
  const { date, authorName, messageBody } = props;
  return (
    <>
      <FlexContainer
        height='auto'
        margin="30px 30px 70px 30px"
      >
        <FlexContainer
          background='white'
          height='auto'
          padding='30px'
        >
          <p>{messageBody}</p>
          <span>{authorName}</span>
        </FlexContainer>
        <FlexContainer
          margin="10px 0 0 0"
          height='auto'
        >
          <p>{`Posted: ${date}`}</p>
        </FlexContainer>
      </FlexContainer>
    </>
  );
};

export default Post;