import React from 'react'

function Greet(props) {
    const { name } = props
    return (<>
        <div>Hello {name}</div>
        <h1>Job Application From</h1>
        <h2>Subheading</h2>
        <p>Paragraph for getByText</p>
        <form>
            <div>
                <label htmlFor="name">UserName</label>
                <input type="text" id="name" placeholder='username' value="Nilesh_S4540" onChange={() => { }} />
            </div>
            <div>
                <label htmlFor="job-location">Job location</label>
                <select id="job-location">
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="GB">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="AU"> Australia</option>
                </select>
            </div>
            <img src='' alt='alt text' />
            <span data-testid="ID-getByTestId" title="spanTxt">Get by span text</span>

            <label>
                <input type="checkbox" id="terms" /> I agree to the terms and
                conditions
            </label>
        </form>

        <button>Submit</button>
    </>
    )
}

export default Greet