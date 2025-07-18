"use strict";
const programTable = new Map([
    ["name", _name],
    ["projects", _projects],
    ["experience", _experience],
]);
// Let it be known that within a template literal all white space matters in terms
// of terminal output, including tabs and trailing spaces.
function _name(args, opts) {
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
            case 'h': {
                return {
                    ok: `
Name Program (v1.0)

Usage:
name -h\t\t Show this message
name -f\t\t Prints the portfolio's first name
`,
                    err: ""
                };
                break;
            }
            case 'f': {
                return {
                    ok: `
First Name: Levi
`,
                    err: ""
                };
                break;
            }
            default: {
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "name". Use the -h option for more info on usage.`
                };
                break;
            }
        }
    }
    // no options
    return {
        ok: `
First Name: Levi 
Last Name: McKenna
`,
        err: ""
    };
}
function _projects(args, opts) {
    const projectsTag = "Projects Program (v1.0)";
    const projectStrings = [
        `
Bass-Master
2023 - 2024
-----------

Bass-Master is a an alternate controller
rhythm game project submitted to the SkillsUSA
West Virginia state championship. My "team",
(consisting of one other person! ha), won
the state level competition and ended up
moving to nationals. The project was really
great fun, and I got to learn a lot. My
teammate and I had a pretty tight deadline
and that was invigorating; it was one of
those projects that, at the time, felt like
you could devote your entire life to.

Technologies/Skills - rust, bevy-engine, music theory, bass, pitch detection
----------------------------------------------------------------------------
`,
        `
Terminal-Portfolio v1.0
2025
-----------------------


This is currently version 1.0 of my
terminal-based portfolio (which you see in
front of you!). As an aspiring 
low-level developer, it was hard for me
to think of a way to present myself 
that I found would truly represent me as a
developer. I wanted to prove that I could
problem-solve in a lower-level systems environment and
also make a decent looking, functional
web page. Being a terminal-junkie, I
thought: "what if I just make my own web-based
command-line interpreter, take my portfolio
and then just mash 'em together".                                


This page was originally only meant to have the terminal
as an interface, but I realize that not
everyone has the time or the patience to learn
to use the interpreter, so I also added the
more friendly port you might be reading now!

Technologies/Skills - typescript, html5, css3, javascript
---------------------------------------------------------
`,
        `
Text-Based Zombies
2024
------------------


This project was made as my final skills
project for my intro to programming class.
It was quite rushed, so there are
probably quite a few concurrency bugs. 


It was a little funny because I ended up
doing too much on this project. The
professors were annoyed (putting it lightly) 
to have to grade it, but it was definitely worth 
it. I got to have fun building something that I'm
actually somewhat proud of, and that's all I
can ask for.


I don't currently see myself revisiting this 
project. I may try to rewrite some parts of 
the application to be more single-threaded 
oriented because it's what I had originally 
planned for the game. The only current 
release of the game has only two levels:
my test files. But, the current source code houses 4.

Technologies/Skills - java, maven, serde, jdk23
-----------------------------------------------------
`
    ];
    for (let o of opts) {
        switch (o) {
            case 'h': {
                if (args.length > 0) {
                    return {
                        ok: "",
                        err: "No arguments should be passed to option of -" + o + "."
                    };
                }
                return {
                    ok: `
${projectsTag}

Prints information of my previous or current projects.

Usages:
projects -h\t\t prints this page
projects -i index\t index into the list of projects
projects -s sstring\t search for projects via string matching or regular expressions
`,
                    err: ""
                };
                break;
            }
            case 'i': {
                if (args.length < 1) {
                    return {
                        ok: "",
                        err: "Must supply positive numerical argument(s) to option -i."
                    };
                }
                let out = "";
                // sanitize the input and create output string
                for (const a of args) {
                    const idx = parseInt(a);
                    if (isNaN(idx)) {
                        return {
                            ok: "",
                            err: "Argument(s) must be a number."
                        };
                    }
                    else if (idx < 1 || idx > projectStrings.length) {
                        return {
                            ok: "",
                            err: "Argument(s) must be within the bounds of the number of projects."
                        };
                    }
                    out = out.concat(projectStrings[idx - 1]);
                }
                return {
                    ok: `
${projectsTag}

${out}
`,
                    err: ""
                };
                break;
            }
            case 's': {
                if (args.length < 1 || args.length > 1) {
                    return {
                        ok: "",
                        err: "Must supply a single argument to option -s."
                    };
                }
                const regex = new RegExp(args[0]);
                let out = "";
                for (const proj of projectStrings) {
                    if (regex.test(proj)) {
                        out = out.concat(proj);
                    }
                }
                return {
                    ok: `
${projectsTag}

${out}
`,
                    err: ""
                };
                break;
            }
            default: {
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "projects". Use the -h option for more info on usage.`
                };
                break;
            }
        }
    }
    // no options
    return {
        ok: `
${projectsTag}

${projectStrings.join('')}
`,
        err: ""
    };
}
function _experience(args, opts) {
    const experienceTag = "Experience Program (v1.0)";
    const experienceStrings = [
        `
Labtech at WVUP
2024 - Present
-----------------------------------------------------------------

Worked with team members, students and staff to resolve technical 
issues in works to better students' experiences. Also, helped 
to perform large scale move, lab, and network configuration of new college building.

Technologies/Skills - ticketing software, teamwork, communications
__________________________________________________________________
`,
    ];
    for (const o of opts) {
        switch (o) {
            case 'h': {
                if (args.length > 0) {
                    return {
                        ok: "",
                        err: "Invalid arguments passed to option of -" + o + "."
                    };
                }
                return {
                    ok: `
${experienceTag}

Prints information of my previous and current experience.

Usages: 
experience -h\t\t prints this page
experience -i index\t index into the list of my experience
experience -s sstring\t search for experience via string matching or regular expressions
`,
                    err: ""
                };
                break;
            }
            case 'i': {
                if (args.length < 1) {
                    return {
                        ok: "",
                        err: "Must supply positive numerical argument(s) to option -i."
                    };
                }
                let out = "";
                for (const a of args) {
                    const idx = parseInt(a);
                    if (isNaN(idx)) {
                        return {
                            ok: "",
                            err: "Argument(s) must be a number."
                        };
                    }
                    if (idx < 1 || idx > experienceStrings.length) {
                        return {
                            ok: "",
                            err: "Argument(s) must be within the bounds of the number of projects."
                        };
                    }
                    out = out.concat(experienceStrings[idx - 1]);
                }
                return {
                    ok: `
${experienceTag}

${out}
`,
                    err: ""
                };
                break;
            }
            case 's': {
                if (args.length < 0 || args.length > 1) {
                    return {
                        ok: "",
                        err: "Must supply a single argument to option -s."
                    };
                }
                const regex = new RegExp(args[0]);
                let out = "";
                for (const es of experienceStrings) {
                    if (regex.test(es)) {
                        out = out.concat(es);
                    }
                }
                return {
                    ok: `
${experienceTag}

${out}
`,
                    err: ""
                };
                break;
            }
            default: {
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "exprience". Use the -h option for more info on usage.`
                };
                break;
            }
        }
    }
    return {
        ok: `
${experienceTag}

${experienceStrings.join('')}
`,
        err: ""
    };
}
