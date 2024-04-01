import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

/*
 * Temporary problems array schema
 */
const problems = [{
    index: "201",
    title: "Bitwise AND of Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
}, {
    index: "202",
    title: "Palindrome",
    difficulty: "Medium",
    acceptance: "41%"
},
{
    index: "203",
    title: "Happy Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    index: "204",
    title: "Remove Linked List Elements",
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
                <Route path="/problemset/all" Component={AllProblem} />
                <Route path="/problem/:index" Component={ProblemPage} />
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
            <button><a href="/signup">SIGNUP</a></button>
        </>
    )
}

//login component
function Login() {
    return (
        <>
            <h1>Login</h1>
            <form action="/problemset/all">
                <label>Username</label>
                <input id="username"></input><br />
                <label>Password</label>
                <input id="password"></input><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

//signup component
function Signup() {
    return (
        <>
            <h1>Signup</h1>
            <form>
                <label>New Username :</label>
                <input id="username"></input><br />
                <label>New Password :</label>
                <input id="password"></input><br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

//all problem set
function AllProblem() {
    return (
        <table>
            {problems.map(problem => (
                <ProblemStatement page="all" index={problem.index} title={problem.title}
                    acceptance={problem.acceptance}
                    difficulty={problem.difficulty} />
            ))}
        </table>
    )
}

//slug component
function ProblemPage() {
    let { index } = useParams();
    let problem_statement = problems.find(problem => (problem.index == index));
    if (problem_statement) {
        return (
            <ProblemStatement page="single" index={problem_statement.index}
                title={problem_statement.title}
                acceptance={problem_statement.acceptance}
                difficulty={problem_statement.difficulty} />
        )
    }
    else {
        return (
            <h1>NOT VALID INDEX</h1>
        )
    }
}

// A demo component
function ProblemStatement(props) {
    const page = props.page;
    const index = props.index;
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    if (page == "all") {
        return <tr>
            <td>
                {index}
            </td>
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
    } else {
        return (
            <div class="problem single">
                <h2>{index} : {title}</h2>
                <ul>
                    <li>Acceptance : {acceptance}</li>
                    <li>Difficulty : {difficulty}</li>
                </ul>
            </div>
        )
    }
}
export default App
