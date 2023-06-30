export const Application=()=>{
    return(
        <>
        <h1>Job Application Form</h1>
        <h2>Section 1</h2>
        <p>All fields are mandatory</p>
        <img src="https://via.placeholder.com/150" alt="Image 1"></img>
        <span title="close">X</span>
        <div data-testid="custom-element">Custom HTML element</div>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="fullname" id="name" value="Soumya" onChange={()=>{}}/>
            </div>
            <div>
                <label htmlFor="bio">Bio</label>
                <textarea id="bio" name="bio"/>
            </div>
            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">Great Britain</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU">Australia</option>
                </select>
            </div>
            <div>
                <label>
                    <input type="checkbox" id="items"/>I agree to the terms and conditions
                </label>
            </div>
            <button>Submit</button>
        </form>
        </>
    );
}