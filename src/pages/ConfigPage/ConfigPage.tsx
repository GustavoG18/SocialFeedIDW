import { useState } from "react";
import { Button, Title } from "../../lib/common-styles";
import { Container, ContainerConfig, Input } from "./ConfigPage.styles";
import { useDispatch } from "react-redux";
import { numberOfPost, updateInterval } from '../../redux/configTweets';
import { useNavigate } from "react-router-dom";
import { useToasts } from 'react-toast-notifications';

const ConfigPage = () => {
  const [ interval, setInterval ] = useState('');
  const [ post, setPost ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const handleNavigation = () => {
    navigate('/');
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch(event.target.id){
      case 'interval':
        setInterval(event.target.value);
        break;
      case 'post':
        setPost(event.target.value);
        break;
    }
  };

  const handleOnKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!validationNumber(event.key)) {
      event.preventDefault();
    }
  }

  const handleOnClick = () => {
    dispatch(updateInterval(interval));
    dispatch(numberOfPost(post));
    addToast('Saved Successfully', { appearance: 'success', autoDismiss: true })
    handleNavigation();
  }

  const validationNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  }

  return(
    <>
      <Container>
        <ContainerConfig>
          <Title fontWeight={800} fontSize="t3" color="white">SETTINGS</Title>
          <Input 
            id="interval"
            onChange={handleOnChange}
            onKeyPress={handleOnKeyPress}
            placeholder="Interval in milliseconds"
          />
          <Input 
            id="post"
            onChange={handleOnChange} 
            onKeyPress={handleOnKeyPress}
            placeholder="Number of post"
          />
          <Button onClick={handleOnClick} color="white" background="secondary" margin="10px 0px 0px 0px">Update</Button>
          <Button onClick={handleNavigation} margin="10px 0px 0px 0px" width="115px">Back</Button>
        </ContainerConfig>
      </Container>
    </>
  );
}

export default ConfigPage;