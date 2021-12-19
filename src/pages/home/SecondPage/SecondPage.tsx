import forbes from '../../../assets/forbes.svg';
import times from '../../../assets/times.svg';
import telegraph from '../../../assets/palagraph.svg';
import guardian from '../../../assets/guardian.svg';
import today from '../../../assets/today.svg';
import { ContainerImages, Image } from './SecondPage.styles';
import { FlexContainer } from '../../../lib/common-styles';
import Widget from '../../../components/Widget/Widget';

type CarouselProps = {
  images: string[];
}

const SecondPage = () => {
  return(
    <>
      <FlexContainer
        alignItems='center'
        justifyContent='center'
        margin='10px 0 0 0'
      >
        <Carousel images={[forbes, times, telegraph, guardian, today]}/>
        <Widget feedUrl='' updateInterval={0} numberOfPost={0}/>
      </FlexContainer>
    </>
  );
};

const Carousel = ({images}: CarouselProps) => {
  return(
    <>
      <ContainerImages>
          {
            images.map((image, index) => {
              return (
                <>
                  <Image key={`IMG${index}`}  src={image} alt="" />
                </>
              );
            })
          }
      </ContainerImages>
    </>
  );
}

export default SecondPage;