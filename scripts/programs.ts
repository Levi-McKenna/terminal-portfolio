const programTable: Map<string, (args: string[], opts: string[]) => Result> = new Map([
    ["name", _name],
    ["projects", _projects]
]);

// Let it be known that within a template literal all white space matters in terms
// of terminal output, including tabs and trailing spaces.

function _name(args: string[], opts: string[]): Result {
    // program takes no arguments
    if (args[0]) {
        return {
            ok: "",
            err: `Invalid argument(s) for program "name". Use command "name -h" for more info. `
        };
    } 

    /*
     * All options:
     * h - (h)elp - prints usage explanations and suggestions
     * f - (f)irst name - returns just the first name 
     * l - (l)ast name - returns the last name
     */
    for (let o of opts) {
        switch (o) {
            case "h":
                return {
                    ok: 
                    `
Name Program (v0.0.3)

Usage:
name -h\t\t Show this message
name -f\t\t Prints the portfolio's first name`,
                    err: ""
                }
                break;
            case "f":
                return {
                    ok: 
                    `First Name: Levi`,
                    err: ""
                }
                break;
            default:
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "name". Use the -h option for more info on usage.`
                }
                break;
        }
    }

    // no options
    return {
        ok: 
`
First Name: Levi 
Last Name: McKenna
`,
        err: ""
    };
}

function _projects(args: string[], opts: string[]): Result {

    // no options
    return {
        ok: 
`
Projects Program v0.0.1

Some Projects
other project 
another project
`,
        err: ""
    }
}
