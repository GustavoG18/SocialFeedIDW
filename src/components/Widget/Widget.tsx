import { FlexContainer } from "../../lib/common-styles";
import TweetLists from "../TweetLists/TweetLists";

type Props = {
  feedUrl: string;
  numberOfPost: number;
  messageBody: string;
}

const mock = [{
  id: 1,
  messageBody: "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes. Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg",
  authorName: "Gustavo Guerrero",
  date: "Fri Dec 29 19:15:04"
},{
  id: 2,
  messageBody: "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes. Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg",
  authorName: "Gustavo Guerrero",
  date: "Fri Dec 29 19:15:04"
},{
  id: 3,
  messageBody: "Hi new tweeps & old. Hope you're having fun Love the SO, RTs, and likes. Visit my #kindle #author  ebsite:… https://t.co/VZpaywm8eg",
  authorName: "Gustavo Guerrero",
  date: "Fri Dec 29 19:15:04"
}];

const Widget = (props: Props) => {
  return (
    <>
      <FlexContainer
        height="100%"
      >
        <TweetLists tweets={mock}/>
      </FlexContainer>
    </>
  );
};

export default Widget;