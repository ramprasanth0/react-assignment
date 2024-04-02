import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

/*
 * Temporary problems array schema
 */
const problems1 = [{
    index: "201",
    title: "Bitwise And of Numbers Range",
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
const problems2 = [{
    index: "205",
    title: "Numbers Range",
    difficulty: "Medium",
    acceptance: "42%"
}, {
    index: "206",
    title: "Reverse Array",
    difficulty: "Easy",
    acceptance: "41%"
},
{
    index: "207",
    title: "Sad Number",
    difficulty: "Easy",
    acceptance: "54.9%"
},
{
    index: "208",
    title: "Remove Duplicate Elements",
    difficulty: "Easy",
    acceptance: "42%"
}];

const problemDetail = [
    {
        index: "201",
        title: "Bitwise AND of Numbers Range",
        description: "asdhfsdfjksdhfjshdf",
        input: "5,2,3",
        output: "5,2,2"
    }, {
        index: "202",
        title: "Palindrome",
        description: "check if the given string is palindrome",
        input: "ababa",
        output: "True"
    }
]

const defaultCode = {
    "java": `class Solution {
        public int[] twoSum(int[] nums, int target) {
            
        }
    }`,
    "python": `class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        `
}
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
                <Route path="/problemset/all" Component={AllProblems} />
                <Route path="/problem/:index" Component={SingleProblem} />
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
function AllProblems() {
    const [page, setPage] = useState(problems1)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Title</th>
                        <th>Acceptance</th>
                        <th>Difficulty</th>
                    </tr>
                </thead>
                <tbody>
                    {page.map(problem => (
                        <ProblemStatement page="all" key={problem.index} index={problem.index} title={problem.title}
                            acceptance={problem.acceptance}
                            difficulty={problem.difficulty} />
                    ))}
                </tbody>
            </table>
            <button onClick={() => { setPage(page => problems1) }}>1</button>
            <button onClick={() => { setPage(page => problems2) }}>2</button>
        </>
    )
}

//slug component
function SingleProblem() {
    const [problemSlug, setProblemSlug] = useState("")
    let { index } = useParams();
    useEffect(() => setProblemSlug(problemSlug => index), [])
    let problem_details = problemDetail.find(problem => (problem.index == problemSlug));
    if (problem_details) {
        return (
            <ProblemPage index={problem_details.index}
                title={problem_details.title}
                description={problem_details.description}
                input={problem_details.input}
                output={problem_details.output}
            />
        )
    }
    else {
        return (
            <h1>NOT VALID INDEX</h1>
        )
    }
}

//seperate page for a problem
function ProblemPage(props) {

    const index = props.index;
    const title = props.title;
    const description = props.description;
    const input = props.input;
    const output = props.output;

    // const [language, setLanguage] = useState("java");
    // console.log("curr-val", language);

    const handleLanguageChange = (e) => {
        console.log("selected-value", e.target.value);
        setCodeChange(defaultCode[e.target.value]);
    }

    const [code, setCodeChange] = useState(defaultCode["java"]);
    const handleCodeChange = e => {
        // console.log(e.target.value);
        setCodeChange(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submmited code", e.target.elements.code.value);
    }

    return (
        <div className="page-container">
            <h1>{index} : {title}</h1>
            <p>{description}</p>
            <p>{input}</p>
            <p>{output}</p>
            <div className="code-editor">
                <form onSubmit={handleSubmit} >
                    <label>Choose your language : </label>
                    <select name="language" id="language" onChange={handleLanguageChange}>
                        <option value="java">java</option>
                        <option value="python">python</option>
                        <option value="c++">c++</option>
                    </select><br />
                    <textarea name="code" value={code} onChange={handleCodeChange}></textarea><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}


// A demo component(summary component)
function ProblemStatement(props) {
    const page = props.page;
    const index = props.index;
    const title = props.title;
    const acceptance = props.acceptance;
    const difficulty = props.difficulty;
    console.log(index)

    return (
        <tr>
            <td>{index}</td>
            <td>
                <a href={`/problem/${index}`} style={{ textDecoration: "None" }}>
                    {title}
                </a>
            </td>
            <td>{acceptance}</td>
            <td>{difficulty}</td>
        </tr>
    );
}
export default App
