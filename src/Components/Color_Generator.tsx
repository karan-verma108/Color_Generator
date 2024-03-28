import { useState } from 'react';

const Color_Generator = () => {

    const [red,setRed] = useState<number>(0);
    const [green,setGreen] = useState<number>(0);
    const [blue,setBlue] = useState<number>(0);
    const [display, setDisplay] = useState<boolean>(false);

    const handleEvent = () =>{
        setRed(Math.round(Math.random()*255));
        setGreen(Math.round(Math.random()*255));
        setBlue(Math.round(Math.random()*255));
        setDisplay(true);
    }

    const colorObject = {
        width : '100%',
        height : '100vh',
        backgroundColor : `rgb(${red},${green},${blue})`,
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        gap:'1rem'
    } as const

  return (
    <div style={colorObject}>
    <button style={{fontSize:'1.5rem', padding:'0.7rem', borderRadius:'0.4rem', border:'none', fontFamily:'cursive', cursor:'pointer'}} onClick={handleEvent}>pick color</button>
    <p style={{textShadow:'1px 0px 1px white', fontSize:'1.4rem', fontFamily:'sans-serif', display: display? 'block':'none', boxShadow:'white 3px 3px 11px 7px', padding:'0.9rem 0.5rem', borderRadius:'0.4rem' }}>You picked RGB : (<span style={{color:'red'}}>{red}</span>,<span style={{color:'green'}}>{green}</span>,<span style={{color:'blue'}}>{blue}</span>)</p>
    </div>
  )
}

export default Color_Generator;