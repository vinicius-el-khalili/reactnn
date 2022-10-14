import { ScrollContainer } from './components/ScrollContainer';
import { AnimateOnShow } from './components/AnimateOnShow';
import { Navbar } from './components/Navbar';

const options = {
  root:null,
  rootMargin:'0px 0px 0px 0px',
  threshold:.25,
}

function App() {
  
  // ===== scrollToId ===== //
  const scrollToId = (id:string)=>{
    document.querySelector(`#sc${id}`)?.scrollIntoView({block:"center",behavior:"smooth"})
  }

  return (
    <div className="App">
      
      <Navbar idList={["1","2","3"]} scrollToId={scrollToId}/>
      
      <ScrollContainer style={{backgroundColor:"coral"}} id={"sc1"}>
        <AnimateOnShow preAnimation={["hidden-left"]} postAnimation={["show"]} ioOptions={options}>
          <h1>Swap me</h1>
        </AnimateOnShow>
      </ScrollContainer>

      <ScrollContainer style={{backgroundColor:"turquoise"}} id={"sc2"}>
        <AnimateOnShow preAnimation={["hidden-right"]} postAnimation={["show"]} ioOptions={options}>
            <h1>Type</h1>
        </AnimateOnShow>
        <AnimateOnShow preAnimation={["hidden-left"]} postAnimation={["show"]} ioOptions={options}>
            <h1>Script</h1>
        </AnimateOnShow>        
      </ScrollContainer>

      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} id={"sc3"}>
        <AnimateOnShow preAnimation={["hidden-right"]} postAnimation={["show"]} ioOptions={options}>
          <div className='test-content-1'>
            <h1>Intersection Observers!</h1>
            <h2>Intersection observers are awesome</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
          </div>
        </AnimateOnShow>
      </ScrollContainer>

    </div>
  );
};
export default App;
