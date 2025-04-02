import { useState } from "react";

import bird from './assets/svg/bird.svg'
import dog from './assets/svg/bird.svg'
import cat from './assets/svg/bird.svg'
import cow from './assets/svg/bird.svg'
import gator from './assets/svg/bird.svg'
import heart from './assets/svg/bird.svg'
import horse from './assets/svg/bird.svg'

import './AnimalsShow.css'
import { use } from "react";

const svgMap = { 
    bird,
    dog,
    cat,
    cow,
    gator,
    horse
}

function AnimalsShow({type}){ 
    const [clicks, setClicks] = useState(0)

    const handleClick = () => { 
        setClicks(clicks + 1)
}

return(
    <div
       onClick={handleClick}
       className="animals-show"
>
       <img
          src={svgMap[type]}
          alt="animal"
          />
            <img
                src={heart}
                alt="heart"
                style={{ width: 10 + 10 * clicks + 'px'}}
                className="heart"
            />
        </div>    
    )
}