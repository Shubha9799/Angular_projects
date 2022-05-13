import contact from './contact';
import Address from './address';
import logo from './logo.svg';
function Contact()
{
    return(
        <p>
         <span>I am in contact component</span>
         <img src={logo} width="50" height="50"></img>
        <br></br>
        <pre>--------------------------------</pre>
         
         {/* adding input property to address component */}
          <Address time="Monday to Friday"></Address>
       
        </p>
    );
}
export default Contact;
