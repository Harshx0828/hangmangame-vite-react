function Textinput({label='Enter a word or a phrase',placeholder="placeholer",value,onchnagehandler ,inputype}){

    return(
<label htmlFor="">
    <span className="text-gray-700 ">{label}
    <input type={inputype} value={value} onChange={onchnagehandler} className="px-4 py-2 border border-gray-500 rounded-md w-full" placeholder={placeholder} />
    </span>
</label> 
    )
}
export default Textinput