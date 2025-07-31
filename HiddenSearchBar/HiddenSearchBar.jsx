
import { FaSearch } from "react-icons/fa"
import "./css/style.css"
import { useState } from "react"

const HiddenSearchBar = () => {
    const[showInput,setShowInput]=useState(false);
    const [byColor, setByColor]=useState('white');

    const handleClick=(e)=>{
        setByColor("#1a1a1a")

        if(e.target.className==='container'){
            setShowInput(false)
            setByColor("#fff")
        }
    }



  return (
    <section className="container" style={{backgroundColor:byColor}} onClick={handleClick}>
        {showInput  ?  (
            <input type="text" placeholder="Search...." />
        ):(
            <FaSearch onClick={()=>setShowInput(true)}/>
        )}

    </section>
  )
}

export default HiddenSearchBar