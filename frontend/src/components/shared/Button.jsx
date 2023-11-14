
import { LiaArrowRightSolid} from "react-icons/lia";

const Button = (props) => {
  return (
    <button className=' flex items-center space-x-4
     border border-yellow-500 bg-primary px-5 py-3 text-white rounded-md shadow-sm'>
       {props.name}
        <LiaArrowRightSolid size={20}/> 
    </button>
    
  )
}

export default Button