const programTable: Map<string, (args: string[], opts: string[]) => Result> = new Map([
    ["name", name_]
]);

// Let it be known that within a string literal all white space matters in terms
// of terminal output, including tabs and trailing spaces.

function name_(args: string[], opts: string[]): Result {
    // program takes no arguments
    if (args[0]) {
        return {
            ok: "",
            err: `Invalid argument(s) for program "name". Use command "help" for more info. `
        };
    } 

    /*
     * All options:
     * h - (h)elp - prints usage explanations and suggestions
     * f - (f)irst name - returns just the first name 
     */
    for (let o of opts) {
        switch (o) {
            case "h":
                return {
                    ok: 
                    `
Name Program (v.25.19.3)

Usage:
name -h\t\t Show this message
name -f\t\t Prints the portfolio's first name`,
                    err: ""
                }
                break;
            case "f":
                return {
                    ok: 
                    `   First Name: Levi`,
                    err: ""
                }
                break;
        }
    }

    // no options / default case
    return {
        ok: 
`        First Name: Levi 
        Last Name: McKenna`,
        err: ""
    };
}
