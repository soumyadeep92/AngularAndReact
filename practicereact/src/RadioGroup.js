import React from 'react';
const RadioGroup=()=>{
    return(
        <form>
            <fieldset id="group1">
                <input type="radio" value="value1" name="group1"/>
                <input type="radio" value="value2" name="group1"/>
            </fieldset> 
            <fieldset id="group2">
                <input type="radio" value="value1" name="group2"/>
                <input type="radio" value="value2" name="group2"/>
                <input type="radio" value="value3" name="group2"/>
            </fieldset>
        </form>
    );
};
export default RadioGroup;