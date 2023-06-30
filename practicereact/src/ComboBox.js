import React from 'react';
function combo(thelist, theinput) {
    theinput = document.getElementById(theinput);
    let arr={'one':1,'two':2,'three':3};
    var content = arr[thelist];
    theinput.value = content;
}
function handleChange(e,id)
{
    combo(e.target.value,id);
}
const ComboBox=()=>{
    return (
        <div>
            <input type="text" id="theinput" name="theinput" />
            <select name="thelist" onChange={(e)=>handleChange(e,"theinput")}>
                <option>one</option>
                <option>two</option>
                <option>three</option>
            </select>
        </div>
    );
};
export default ComboBox;