import { ScrollContainer } from './components/ScrollContainer';
import { AnimateOnShow } from './components/AnimateOnShow';

const options = {
  root:null,
  rootMargin:'0px 0px 0px 0px',
  threshold:.25,
}

function App() {
  return (
    <div className="App">
      <ScrollContainer style={{backgroundColor:"coral"}} >
        <AnimateOnShow preAnimation={["hidden-left"]} postAnimation={["show"]} ioOptions={options}>
          <h1>right</h1>
        </AnimateOnShow>
        </ScrollContainer>
      <ScrollContainer style={{backgroundColor:"turquoise"}} >
      <AnimateOnShow preAnimation={["hidden-right"]} postAnimation={["show"]} ioOptions={options}>
          <h1>left</h1>
        </AnimateOnShow>
      </ScrollContainer>
      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} >
        <AnimateOnShow preAnimation={["hidden-right"]} postAnimation={["show"]} ioOptions={options}>
          <div className='test-content-1'>
            <h1>Intersection Observers!</h1>
            <h2>And we can animate anything</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
          </div>
        </AnimateOnShow>
      </ScrollContainer>
    </div>
  );
};
export default App;
