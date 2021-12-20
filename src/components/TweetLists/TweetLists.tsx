import { FlexContainer } from "../../lib/common-styles";
import { Button } from "./TweetLists.styles";
import Post from "../Post/Post";
import { useNavigate } from "react-router-dom";
import settingIcon from '../../assets/icons8-ajustes.svg';

type Props = {
  tweets: {
    id: number;
    date: string;
    authorName : string;
    messageBody: string;
  }[];
};

const TweetLists = ({ tweets }: Props) => {
  const navigate = useNavigate();

  const handlerOnClick = () => {
    navigate('/config')
  }

  return (
    <>
      <FlexContainer
        width="100%"
        background="primary"
        height="100%"
        padding="1.875rem 0 1.875rem  0"
      >
        <Button color="black" background="white" margin="0px 4% 10px auto" onClick={handlerOnClick}>
          <img height="15px" width="15px" src={settingIcon} alt="settings icon"/>Settings
        </Button>
        {
          tweets.map(({id, ...rest}) => <Post key={id} {...rest}/>)
        }
      </FlexContainer>
    </>
  );
};

export default TweetLists;