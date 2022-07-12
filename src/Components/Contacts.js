import { FiGithub} from 'react-icons/fi'
import { AiOutlineLinkedin} from 'react-icons/ai'
import { HiOutlineMail} from 'react-icons/hi'



const Contact =()=>{

    return(
       <div class="buttonContainer">
            <form class="logo" id="LinkedIn" action="https://www.linkedin.com/in/elle-davis/" method="get" target="_blank">
            <button class="button-17"  type="submit">< AiOutlineLinkedin class="icon"/></button>
            </form>
            
            <form class="logo" id="Github"action="https://github.com/ElleDavis" method="get" target="_blank">
            <button class="button-17" type="submit">< FiGithub class="icon"/></button>
            </form>
            

            <form  class="logo" id="Email" action="" method="get" target="_blank">
            <a  class="button-17" type="button" href = "mailto: ShanitriceDavis@gmail.com">< HiOutlineMail class="icon"/></a>
            </form>
            
       </div>
    )
}
export default Contact