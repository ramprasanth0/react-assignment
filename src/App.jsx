import { BrowserRouter, Routes, Route } from "react-router-dom";

/*
 * Temporary problems array schema
 */
const problems = [{
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
}, {
    title: "201. Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "412%"
},
{
    title: "202. Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    title: "203. Remove Linked List Elements",
    difficulty: "Hard",
    acceptance: "42%"
}];


function App() {
    return (

        /* Add routing here, routes look like -
           /login - Login page
           /signup - Signup page
           /problemset/all/ - All problems (see problems array above)
           /problems/:problem_slug - A single problem page
         */

        // return (
        //     <div>
        //         Finish the assignment! Look at the comments in App.jsx as a starting point
        //     </div>
        // )
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/login" Component={Login} />
                <Route path="/signup" Component={Signup} />
            </Routes>
        </BrowserRouter>
    )
}

//home component
function Home() {
    return (
        <>
            <h1>Home</h1>
            <button><a href="/login">LOGIN</a></button>
            <button><a href="/signup">LOGIN</a></button>
        </>
    );
};

//login component
function Login() {
    return (
        <h1>Login</h1>
    )
}

//signup component
function Signup() {
    return (
        <h1>Signup</h1>
    )
}


// A demo component
function ProblemStatement(props) {
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;

    return <tr>
        <td>
            {title}
        </td>
        <td>
            {acceptance}
        </td>
        <td>
            {difficulty}
        </td>
    </tr>
}
export default App
