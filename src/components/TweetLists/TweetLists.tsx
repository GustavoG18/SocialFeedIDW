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
  
  // const { feedUrl, numberOfPost, updateInterval } = props;
  return (
    <>
      <FlexContainer
        background="primary"
        height="auto"
        padding="30px"
      >
        {
          tweets.map(({id, ...rest}) => <Post key={id} {...rest}/>)
        }
      </FlexContainer>
    </>
  );
};

export default TweetLists;