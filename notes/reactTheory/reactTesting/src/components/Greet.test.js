import { fireEvent, getByPlaceholderText, queryByRole, render, screen } from "@testing-library/react"
import Greet from "./Greet"
import Skills from "./Skills"
import Counter from "./Counter"
import user from "@testing-library/user-event"

// Greet should render the text hello and if a name is passed into the component
// It should render hello followed by the name
/* 
Q. have you worked on unit testing?
Q. what exactly you did in testing? 
   - smallest testable parts of an application like functions or methods, are tested in isolation from the rest of the codebase. 
   - Checking fields in multiple scenarios. like expecting output,
   - Can create mock function and data for checking.

   

 
*/
test("render greet currectly", () => {
    const { getByText } = render(<Greet />)
    expect(getByText('Hello')).toBeInTheDocument()
})

test("greet render with props when props available", () => {
    const { getByText } = render(<Greet name="Nilesh" />)
    expect(getByText("Hello Nilesh")).toBeInTheDocument()
})

test.skip("skipped test by adding skip", () => {
    const { getByText } = render(<Greet name="Nilesh" />)
    expect(getByText("Hello Nilesh")).toBeInTheDocument()
})

// test.only("only run test by adding only", () => {
//     const { getByText } = render(<Greet name="Nilesh" />)
//     expect(getByText("Hello Nilesh")).toBeInTheDocument()
// })


/*  DESCRIBE  */

describe("Greet", () => {
    test("render greet currectly", () => {
        const { getByText } = render(<Greet />)
        expect(getByText('Hello')).toBeInTheDocument()
    })

    describe("Nested", () => {
        test("greet render with props when props available", () => {
            const { getByText } = render(<Greet name="Nilesh" />)
            expect(getByText("Hello Nilesh")).toBeInTheDocument()
        })
    })
})
/* 
 test: It is used to write individual test case. "it" is alternative of test method.
 describe: It is used to organize test especially when you have to write multiple test cases for the same component.

What to test?
 1 Component render.
 2 Component render with props.
 3 Component render with different state.
 4 component events

 What not to test?
  1 implementation details.
  2 third party code.
  3 code that is not important from users point of view.

# "Testing playground" is chrome extension for testing.
   we can directly hover on element, then this extension suggest test case that we can copy and past in vs code.  

*/

/* Queries  */

/* 
1. GetByRole
   Sematic HTML content has multiple element we can access this by role like Button, checkbox, textbox,
   for element which do not have specific role we can use rol attribute to access.
*/

describe("Queries", () => {
    test("GetByRole", () => {
        const { getByRole } = render(<Greet />)
        expect(getByRole("textbox")).toBeInTheDocument()
        expect(getByRole("button")).toBeInTheDocument()
        expect(getByRole("textbox", { name: "UserName" })).toBeInTheDocument()
        expect(getByRole("heading", { name: "Job Application From" })).toBeInTheDocument() /* if we not given name then test will fail because of multiple headings */
        expect(getByRole("heading", { level: 1 })).toBeInTheDocument() /* l1 and l2 for h1 and h2 */
        expect(getByRole("heading", { level: 2 })).toBeInTheDocument()
    })

    test("getByPlaceholderText", () => {
        const { getByPlaceholderText } = render(<Greet />)
        expect(getByPlaceholderText("username")).toBeInTheDocument()
    })
    test("getByText", () => {
        const { getByText } = render(<Greet />)
        expect(getByText("Paragraph for getByText")).toBeInTheDocument()
    })

    test("getByDisplayValue", () => {
        const { getByDisplayValue } = render(<Greet />)
        expect(getByDisplayValue("Nilesh_S4540")).toBeInTheDocument()
    })
    test("getByAltText", () => {
        const { getByAltText } = render(<Greet />)
        expect(getByAltText("alt text")).toBeInTheDocument()
    })
    test("getByTitle", () => {
        const { getByTitle } = render(<Greet />)
        expect(getByTitle("spanTxt")).toBeInTheDocument()
    })
    test("getByTestId", () => {
        const { getByTestId } = render(<Greet />)
        expect(getByTestId("ID-getByTestId")).toBeInTheDocument() // have to add data-testid
    })

})

/* 

component testing

*/

describe("Skills", () => {
    let skills = ["ReactJs", "Javascript", "Html"]
    test("Checking for render correctly", () => {
        const { getByRole } = render(<Skills skills={skills} />)
        expect(getByRole('list')).toBeInTheDocument()

    })

    test("Checking for render list of skills", () => {
        const { getAllByRole } = render(<Skills skills={skills} />)
        expect(getAllByRole('listitem')).toHaveLength(skills.length)

    })
    /*
     query By:
     Returns the matching node for a query, and return null if no elements match.
     Useful for writing test cases for element which is not present.
     query is allowed for all queries like getByText and getAllByText
     */

    test("Checking start rendering Login button", () => {
        const { getByRole } = render(<Skills skills={skills} />)
        expect(getByRole("button", { name: "Login" })).toBeInTheDocument()
    })

    test("Checking start learning is not present", () => {
        const { queryByRole } = render(<Skills skills={skills} />)
        expect(queryByRole("button", { name: "Start learning" })).not.toBeInTheDocument()
    })
    /*
      findBy and findAllBy
      FindBy is used for access those element which will present after some time. eg after fetching data.
      use have added useEffect for this functionality.
    
    */
    test("Checking start learning is not present", async () => {
        const { findByRole } = render(<Skills skills={skills} />)
        expect(await findByRole("button", { name: "Start learning" }, { timeout: 2000 })).toBeInTheDocument()
    })

})

// Pointer Interaction:

describe("Counter", () => {
    describe("Pointer interaction", () => {
        test("check 0 present in dom ", () => {
            const { getByRole } = render(<Counter />)
            const value = Number(getByRole("heading", { name: /0/i }).textContent)
            expect(value).toEqual(0)
        })
        test("using getByTestId check 0 present in dom", () => {
            const { getByTestId } = render(<Counter />)
            expect(Number(getByTestId("count").textContent)).toEqual(0);
        })

        test("render Count 1 after clicking button", () => {

            const { getByRole } = render(<Counter />)
            const incrementButton = (getByRole("button", { name: "Increment" }))
            fireEvent.click(incrementButton)
            expect(Number(getByRole("heading", { name: "1" }).textContent)).toEqual(1)
        })

        test("render count of 10 after clicking set button", () => {
            const { getByTestId, getByText } = render(<Counter />)
            const userInput = getByTestId("inp")
            fireEvent.change(userInput, { target: { value: 10 } })
            const setButton = getByText("Set")
            fireEvent.click(setButton)
            expect(Number(getByTestId("count").textContent)).toEqual(10)
        })
    })
    describe("Mocking ", () => {
        test("Mocking Functions", () => {
            const restartFunction = jest.fn()
            const switchSignsFunction = jest.fn()
            const { getByText } = render(<Counter restart={restartFunction} switchSigns={switchSignsFunction} />)

            const resetBtn = getByText("Restart")
            const switchSignsBtn = getByText("Switch Signs")
            fireEvent.click(resetBtn)
            fireEvent.click(switchSignsBtn)

            expect(restartFunction).toHaveBeenCalledTimes(1)
            expect(switchSignsFunction).toHaveBeenCalledTimes(1)
        })

    })
})
/* 
 for http testing, do not used real apis, instated of this we use MSW i.e. mock service worker package.
 
*/

