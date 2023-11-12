
import { LiaArrowRightSolid} from "react-icons/lia";

const Button = (props) => {
  return (
    <button className=' flex items-center space-x-4
     border border-yellow-500 bg-yellow-500 px-5 py-2 text-white rounded-md shadow-sm'>
       {props.name}
       <LiaArrowRightSolid size={30}/>
    </button>
    
  )
}

export default Button