import Textinput from "../input/Textinput";
import Button from "../Button";
function Textinputform( {submithandle,onclickhandler,inputype,text,onchnagehandler,onsubmithandle}){
return(
<form onSubmit={onsubmithandle}>
    <div>
        <Textinput inputype={inputype}  onchnagehandler={onchnagehandler} placeholder='enter the word or phrase'/>
    </div>
    
    <div>
        <Button   text={text} style="warning" onclickhandler={onclickhandler} />
    </div>
    <div>
        <Button text='SUBMIT' type="submit"   />
    </div>
</form>
)
}
export default Textinputform;