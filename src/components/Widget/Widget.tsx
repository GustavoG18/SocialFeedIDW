import { useEffect, useState } from "react";
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
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    function pullData() {
      const formData = new FormData();
      formData.append('limit', `${numberOfPost}`);
      if(tweets.length !== 0){
        formData.append('start_id', `${tweets[0]?.id}`);
      }
      axios({
        method: "post",
        url: feedUrl,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((response) => {
          console.log(response);
          setTweets(response.data.map((tweet: any) => {
            const {
              entity_id: id, 
              created_at: date, 
              user: {name: authorName}, 
              text: messageBody 
            } = tweet;
            return {
              id,
              date,
              authorName,
              messageBody,
            }
          }));
        })
        .catch((response) => {
          console.error(response);
        });
        clearInterval(interval);
      };
    if(tweets.length === 0){
      pullData();
    }else{
      interval = setInterval(pullData, updateInterval);
    }
  }, [feedUrl, numberOfPost, tweets, updateInterval]);

  return (
    <>
      <FlexContainer
        height="100%"
      >
        <TweetLists tweets={tweets}/>
      </FlexContainer>
    </>
  );
};

export default Widget;