//TODO - throw errors when args are passed to empty opts

const programTable: Map<string, (args: string[], opts: string[]) => Result> = new Map([
    ["whoami", _whoami],
    ["name", _name],
    ["projects", _projects],
    ["experience", _experience],
]);

function _whoami(args: string[], opts: string[]): Result {
    const whoamiTag = "Whoami Program (v1.0)";

    if (args.length > 0) {
        return {
            ok: "",
            err: `Invalid argument(s) for program "whoami". Use command "whoami -h" for more info.`
        }
    }

    for (const o of opts) {
        switch (o) {
            case 'h': {
                return {
                    ok: 
`
${whoamiTag}

Prints my about-me and other info.

Usages:
whoami   \t\t Prints all about-me info
whoami -h\t\t Shows this message
whoami -s\t\t Prints about-me synopsis
whoami -n\t\t Prints name
whoami -o\t\t Prints occupation
`,
                    err: ""
                }
            }
            case 's': {
                return {
                    ok: 
`
${whoamiTag}

I'm a developer passionate about building optimized,
well-written, and interesting applications. Thought \
provoking engineering problems and tough \
architectural designs are my jam.  I love being an \
integral part of projects and showing off my skills \
with other team members.


Currently, I work at West Virginia \
University at Parkersburg as a help desk technician \
where I work to provide solutions to techincal \
issues to students and faculty alike. It's definitely not the most \
difficult of work, but I am constantly searching \
for a place to really prove myself and learn new \
things.


I've grown up in a smaller area \
than most and around here there isn't a lot to latch \
onto as a hobby. Only when the world of software and \
electronics were introduced to me in my early teens \
did I really find true passion in anything. For \
that, I hope to do great things in this field as an \
engineer, researcher or inventor.


In my free time, I frequent the gym, play \
games with friends, meddle with my NeoVim config, \
read books on physics; systems development; \
mathematics and other forms of engineering, and, on \
occasion, I like to go bouldering.
`,
                    err: ""
                }
            }
            case 'n': {
                return {
                    ok: 
`
${whoamiTag}

Name
------------
Levi McKenna
`,
                    err: ""
                }
            }
            case 'o': {
                return {
                    ok: 
`
${whoamiTag}

Low-level | Full-Stack Engineer
---------------------

I specialize in writing low-abstraction application \
code and fully-fledged websites.
`,
                    err: ""
                }
            }
        }
    }

    return {
        ok: 
`
${whoamiTag}

Name
------------
Levi McKenna

Low-level | Full-Stack Engineer
---------------------

I specialize in writing low-abstraction application \
code and fully-fledged websites. \

I'm a developer passionate about building optimized, \
well-written, and interesting applications. Thought \
provoking engineering problems and tough \
architectural designs are my jam.  I love being an \
integral part of projects and showing off my skills \
with other team members. \


Currently, I work at West Virginia \
University at Parkersburg as a help desk technician \
where I work to provide solutions to techincal \
issues to students and faculty alike. It's definitely not the most \
difficult of work, but I am constantly searching \
for a place to really prove myself and learn new \
things. \


I've grown up in a smaller area \
than most and around here there isn't a lot to latch \
onto as a hobby. Only when the world of software and \
electronics were introduced to me in my early teens \
did I really find true passion in anything. For \
that, I hope to do great things in this field as an \
engineer, researcher or inventor. \


In my free time, I frequent the gym, play \
games with friends, meddle with my NeoVim config, \
read books on physics; systems development; \
mathematics and other forms of engineering, and, on \
occasion, I like to go bouldering.
`,
        err: ""
    }
}

function _name(args: string[], opts: string[]): Result {
    // program takes no arguments
    if (args.length > 0) {
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
    for (const o of opts) {
        switch (o) {
            case 'h': {
                return {
                    ok: 
                    `
Name Program (v1.0)

Usages:
name   \t\t Prints full-name
name -h\t\t Show this message
name -f\t\t Prints the portfolio's first name
`,
                    err: ""
                }
                break;
            }
            case 'f': {
                return {
                    ok: 
                    `
First Name: Levi
`,
                    err: ""
                }
                break;
            }
            default: {
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "name". Use the -h option for more info on usage.`
                }
                break;
            }
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
    const projectsTag = "Projects Program (v1.0)";
    const projectStrings: string[] = 
        [
            `
Bass-Master
2023 - 2024
-----------

Bass-Master is a an alternate controller \
rhythm game project submitted to the SkillsUSA \
West Virginia state championship. My "team", \
(consisting of one other person! ha), won \
the state level competition and ended up \
moving to nationals. The project was really \
great fun, and I got to learn a lot. My \
teammate and I had a pretty tight deadline \
and that was invigorating; it was one of \
those projects that, at the time, felt like \
you could devote your entire life to.

Technologies/Skills - rust, bevy-engine, music theory, bass, pitch detection
----------------------------------------------------------------------------
`,
            `
Terminal-Portfolio v1.0
2025
-----------------------


This is currently version 1.0 of my \
terminal-based portfolio (which you see in \
front of you!). As an aspiring  \
low-level developer, it was hard for me \
to think of a way to present myself  \
that I found would truly represent me as a \
developer. I wanted to prove that I could \
problem-solve in a lower-level systems environment and \
also make a decent looking, functional \
web page. Being a terminal-junkie, I \
thought: "what if I just make my own web-based \
command-line interpreter, take my portfolio \
and then just mash 'em together".


This page was originally only meant to have the terminal \
as an interface, but I realize that not \
everyone has the time or the patience to learn \
to use the interpreter, so I also added the \
more friendly port you might be reading now!

Technologies/Skills - typescript, html5, css3, javascript
---------------------------------------------------------
`,
            `
Text-Based Zombies
2024
------------------


This project was made as my final skills \
project for my intro to programming class. \
It was quite rushed, so there are \
probably quite a few concurrency bugs. 


It was a little funny because I ended up \
doing too much on this project. The \
professors were annoyed (putting it lightly)  \
to have to grade it, but it was definitely worth  \
it. I got to have fun building something that I'm \
actually somewhat proud of, and that's all I \
can ask for.


I don't currently see myself revisiting this  \
project. I may try to rewrite some parts of  \
the application to be more single-threaded  \
oriented because it's what I had originally  \
planned for the game. The only current  \
release of the game has only two levels: \
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
                    }
                }

                return {
                    ok:
`
${projectsTag}

Prints information of my previous or current projects.

Usages:
projects   \t\t Prints all projects and their descriptions
projects -h\t\t Prints this page
projects -i index\t Index into the list of projects
projects -s sstring\t Search for projects via string matching or regular expressions
`,
                    err: ""
                };
                break;
            }
            case 'i': {
                if (args.length < 1) {
                    return {
                        ok: 
`
${projectsTag}

# of Projects: ${projectStrings.length}
`,
                        err: ""
                    };
                } 

                let out: string = "";
                // sanitize the input and create output string
                for (const a of args) {
                    const idx = parseInt(a);
                    if (isNaN(idx)) {
                        return {
                            ok: "",
                            err: "Argument(s) must be a number."
                        };
                    } else if (idx < 1 || idx > projectStrings.length) {
                        return {
                            ok: "",
                            err: "Argument(s) must be within the bounds of the number of projects."
                        }
                    }
                    out = out.concat(projectStrings[idx - 1]);
                }

                return {
                    ok: 
`
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
                let out: string = "";
                for (const proj of projectStrings) {
                    if (regex.test(proj)) {
                        out = out.concat(proj);
                    }
                }

                return {
                    ok: 
`
${projectsTag}

${out}
`,
                    err: ""
                }
                break;
            }
            default: {
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "projects". Use the -h option for more info on usage.`
                }
                break;
            }
        }
    }

    // no options
    return {
        ok: 
        `
${projectsTag}

${projectStrings.join('')}
`,
        err: ""
    }
}

function _experience(args: string[], opts: string[]): Result {
    const experienceTag = "Experience Program (v1.0)";
    const experienceStrings: string[] = 
        [ 
            `
Labtech at WVUP
2024 - Present
-----------------------------------------------------------------

Worked with team members, students and staff to resolve technical  \
issues in works to better students' experiences. Also, helped  \
to perform large scale move, lab, and network configuration of new college building.

Technologies/Skills - ticketing software, teamwork, communications
__________________________________________________________________
`,
        ]

    for (const o of opts) {
        switch (o) {
            case 'h': {
                if (args.length > 0) {
                    return {
                        ok: "",
                        err: "Invalid arguments passed to option of -" + o + "."
                    }
                }

                return {
                    ok:
`
${experienceTag}

Prints information of my previous and current experience.

Usages: 
experience   \t\t Prints all experience and their descriptions
experience -h\t\t Prints this page
experience -i index\t Index into the list of my experience
experience -s sstring\t Search for experience via string matching or regular expressions
`,
                    err: ""
                }
                break;
            }
            case 'i': {
                if (args.length < 1) {
                    return {
                        ok: 
`
${experienceTag}

# of Experiences: ${experienceStrings.length}
`,
                        err: ""
                    }
                }

                let out: string = "";
                for (const a of args) {
                    const idx: number = parseInt(a);
                    if (isNaN(idx)) {
                        return {
                            ok: "",
                            err: "Argument(s) must be a number."
                        }
                    }
                    if (idx < 1 || idx > experienceStrings.length) {
                        return {
                            ok: "",
                            err: "Argument(s) must be within the bounds of the number of projects."
                        }
                    }
                    out = out.concat(experienceStrings[idx - 1]);
                }

                return {
                    ok:
`
${experienceTag}

${out}
`,
                    err: ""
                }
                break;
            }
            case 's': {
                if (args.length < 0 || args.length > 1) {
                    return {
                        ok: "",
                        err: "Must supply a single argument to option -s."
                    }
                }

                const regex = new RegExp(args[0]);
                let out: string = "";
                for (const es of experienceStrings) {
                    if (regex.test(es)) {
                        out = out.concat(es);
                    }
                }

                return {
                    ok: 
`
${experienceTag}

${out}
`,
                    err: ""
                }
                break;
            }
            default: {
                return {
                    ok: "",
                    err: `Invalid option(s) -${o} for program "exprience". Use the -h option for more info on usage.`
                }
                break;
            }

        }
    }

    return {
        ok:
`
${experienceTag}

${experienceStrings.join('')}
`,
        err: ""
    }
}
