import { FlexContainer } from "../../lib/common-styles";
import Post from "../Post/Post";

type Props = {
  tweets: {
    id: number;
    date: string;
    authorName : string;
    messageBody: string;
  }[];
};

const TweetLists = ({ tweets }: Props) => {
  return (
    <>
      <FlexContainer
        background="primary"
        height="100%"
        padding="1.875rem 0 1.875rem  0"
      >
        {
          tweets.map(({id, ...rest}) => <Post key={id} {...rest}/>)
        }
      </FlexContainer>
    </>
  );
};

export default TweetLists;