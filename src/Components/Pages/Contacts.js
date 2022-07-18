import { FiGithub} from 'react-icons/fi'
import { AiOutlineLinkedin} from 'react-icons/ai'
import { HiOutlineMail} from 'react-icons/hi'
import Button from 'react-bootstrap/Button';




const Contact =()=>{

    return(
       <div class="buttonContainer">
            {/* <form class="logo" id="LinkedIn" action="https://www.linkedin.com/in/elle-davis/" method="get" target="_blank">
            <Button  variant="success" type="submit">< AiOutlineLinkedin class="icon"/></Button>
            </form>
            
            <form class="logo" id="Github"action="https://github.com/ElleDavis" method="get" target="_blank">
            <Button  variant="success" type="submit">< FiGithub class="icon"/></Button>
            </form>
            
            <form  class="logo" id="Email" action="" method="get" target="_blank">
            <Button variant="success" href = "mailto: ShanitriceDavis@gmail.com">< HiOutlineMail class="icon"/></Button> 
            </form> */}

            <form>
            <Button  id="LinkedIn" action="https://www.linkedin.com/in/elle-davis/" method="get" target="_blank" variant="success" type="submit">< AiOutlineLinkedin class="icon"/></Button>
            <Button  id="Github" action="https://github.com/ElleDavis" method="get" target="_blank" variant="success" type="submit">< FiGithub class="icon"/></Button>
            <Button id="Email" action="" method="get" target="_blank"variant="success" href = "mailto: ShanitriceDavis@gmail.com">< HiOutlineMail class="icon"/></Button> 
            </form>
            
       </div>
    )
}
export default Contact