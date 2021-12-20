import { useEffect, useRef, useState } from "react";
import { FlexContainer } from "../../lib/common-styles";
import TweetLists from "../TweetLists/TweetLists";
import axios from "axios";

type Props = {
  feedUrl: string;
  numberOfPost: number;
  updateInterval: number;
}

const Widget = (props: Props) => {
  const { feedUrl, numberOfPost, updateInterval } = props;
  const [tweets, setTweets] = useState<any[]>([]);
  const interval = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    const pullData = async () => {
      const params = {
        limit: numberOfPost,
        start_id: tweets[0]?.id,
      }
      const { data } = await axios.get(feedUrl, { params });
      const dataTweets = data.map((tweet: any) => {
        const {
          entity_id: id, 
          created_at: date, 
          user: { name: authorName }, 
          text: messageBody 
        } = tweet;
        return {
          id,
          date,
          authorName,
          messageBody,
        }
      }); 
      setTweets(dataTweets);
    };
    
    if(!interval.current){
      pullData();
    }

    interval.current = setInterval(pullData, updateInterval);
    return () => { interval.current && clearInterval(interval.current)}

  }, [feedUrl, numberOfPost, tweets, updateInterval]);

  return (
    <>
      <FlexContainer
        height="100%"
        width="100%"
      >
        <TweetLists tweets={tweets}/>
      </FlexContainer>
    </>
  );
};

export default Widget;