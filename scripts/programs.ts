const programTable: Map<string, (args: string[], opts: string[]) => Result> = new Map([
    ["name", name_]
]);

function name_(args: string[], opts: string[]): Result {
    // program takes no arguments
    if (args[0]) {
        return {
            ok: "",
            err: `Invalid argument(s) for program "name". Use command "help" for more info.`
        };
    } 

    opts.forEach((o) => {
        switch (opts) {
            // all control flows for different options
        }
    });

    // no options / default case
    return {
        ok: `
            First Name: Levi <br>
            Last Name: McKenna
        `,
        err: ""
    };
}
