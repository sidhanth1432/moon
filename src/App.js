import moon from './moon.png';
import mountains_behind from './mountains_behind.png';
import mountains_front from './mountains_front.png';
import stars from './stars.png';
import {useEffect} from 'react'


import './App.css';


function App() {
  useEffect(
    () => {
    const onScroll = () => {    
      console.log(window.scrollY);
  let value=window.scrollY;
  if(value<900){
  let text=document.getElementById('text');
  text.style.marginRight=value*4+'px';
  let moon1=document.getElementById('moon');
  
  moon1.style.top=value*1.05+'px';

  let star1=document.getElementById('stars');
  star1.style.left=value*0.25+'px';
  // text.style.marginTop=value*1.5+'px';
}
}
    // clean up code
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // const handleScroll=(event)=>{
  //   const { scrollTop, scrollHeight, clientHeight } = event.target;
  //   console.log(event.target);
 
  // }
  return (
    <>
     <header>
      <a href="#" className="logo">LOGO</a>
      <ul>
        <li><a href="#" className='active'>Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Work</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      </header> 
      <section>
        <img src={stars} id="stars"></img>
        <img src={moon} id="moon"></img>
        <img src={mountains_behind} id="mountains_behind"></img>
        <h1 id="text">Moon Light</h1>
        {/* <a href="#sec" id="btn">Explore</a> */}
        <img src={mountains_front} id="mountains_front"></img>
      </section>
<div className="sec" id="sec">
  <h2>Hii There!</h2>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<br></br>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<br></br>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
<br></br>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

</div>

    </>
  );
}

export default App;
