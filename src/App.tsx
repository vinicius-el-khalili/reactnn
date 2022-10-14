import { ScrollContainer } from './components/ScrollContainer';
import { AnimateOnShow } from './components/AnimateOnShow';
import { Navbar } from './components/Navbar';
import { useState } from 'react';

const options = {
  root:null,
  rootMargin:'0px 0px 0px 0px',
  threshold:.25,
}

function App() {
  
  // ===== scrollToId ===== //
  const [scrollPage,setScrollPage]=useState("1");
  const scrollToId = (id:string)=>{
    document.querySelector(`#sc${id}`)?.scrollIntoView({block:"center",behavior:"smooth"});
    setScrollPage(id)
  }
  return (
    <div className="App">
      
      <Navbar idList={["1","2","3"]} scrollToId={scrollToId} scrollPage={scrollPage}/>

      <ScrollContainer style={{backgroundColor:"coral"}} id={"sc1"} setScrollPage={setScrollPage}>
        <AnimateOnShow preAnimation={["hidden-left"]} postAnimation={["show"]} ioOptions={options}>
        <div className='test-content-1'>
            <h1>Intersection Observers!</h1>
            <h2>Intersection observers are awesome</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
          </div>
        </AnimateOnShow>
      </ScrollContainer>

      <ScrollContainer style={{backgroundColor:"turquoise"}} id={"sc2"} setScrollPage={setScrollPage}>
        <div className='DoubleContainer-V'>
          <AnimateOnShow preAnimation={["hidden-right"]} postAnimation={["show"]} ioOptions={options}>
              <div className='test-content-1'>
                <h1>Intersection Observers!</h1>
                <h2>Intersection observers are awesome</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
              </div>
          </AnimateOnShow>
          <AnimateOnShow preAnimation={["hidden-left"]} postAnimation={["show"]} ioOptions={options}>
              <div className='test-content-1'>
                <h1>Intersection Observers!</h1>
                <h2>Intersection observers are awesome</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
              </div>
          </AnimateOnShow>        
        </div>
      </ScrollContainer>

      <ScrollContainer style={{backgroundColor:"cornflowerblue"}} id={"sc3"} setScrollPage={setScrollPage}>
        <div className='DoubleContainer-H'>
          <AnimateOnShow preAnimation={["hidden-right"]} postAnimation={["show"]} ioOptions={options}>
            <div className='test-content-1'>
              <h1>Intersection</h1>
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
            </div>
          </AnimateOnShow>
          <AnimateOnShow preAnimation={["hidden-left"]} postAnimation={["show"]} ioOptions={options}>
            <div className='test-content-1'>
              <h1>Observers</h1>
              <h2>Lorem, ipsum.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae voluptatem nesciunt excepturi soluta, itaque, pariatur in odio tempore voluptate quis optio voluptas corrupti eaque reprehenderit quibusdam enim sequi porro. Aliquam, itaque quam.</p>
            </div>
          </AnimateOnShow>
        </div>
      </ScrollContainer>

    </div>
  );
};
export default App;
