
// News Template Handlebars
// Handlebarsjs.com, 'Handlebars Reference', 2022. [Online]. Available: http://handlebarsjs.com/reference.html. [Accessed: 20- Aug- 2022].
//  
var newsdata = {
    
    news: [
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/BelgianGP/Friday/GettyImages-1054329156.jpg.transform/9col/image.jpg",
        header: "Latest",
        title: "Perez and Vettel back Ricciardo to ‘find his mojo again’ after McLaren separation ",
        link: "/articles/article-1.html",
        content: "Red Bull Team Principal Christian Horner has backed his former driver Daniel Ricciardo to “find his mojo again” after it was announced that the Australian and current team McLaren will part ways at the end of the 2022 season. Sergio Perez and Sebastian Vettel also offered their support, the latter having said Ricciardo's qualities will shine through."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022SummerBreak/Leclerc%20Bahrain.jpg.transform/9col/image.jpg",
        header: "Trending",
        title: "BARRETTO: Leclerc has the mentality to be world champion – but he'll need more than that to overhaul Verstappen ",
        link: "/articles/article-2.html",
        content: "“I will believe in the championship until the very end.” As Charles Leclerc left Budapest after another emotional weekend that has characterised his and his Ferrari team’s first half of the 2022 F1 campaign, the young Monegasque remained bullishly and refreshingly optimistic."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/sutton/2022/Belgium/Saturday/1418426994.jpg.transform/9col/image.jpg",
        header: "News",
        title: "‘A shot of adrenalin for 90 seconds’ – F1 drivers on what it feels like when the visor goes down for qualifying ",
        link: "/articles/article-3.html",
        content: "Race day may be when the points are handed out, but nailing a qualifying lap is arguably the single most high-pressure situation Formula 1 drivers face at every Grand Prix."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/BelgianGP/Friday/GettyImages-1241701669.jpg.transform/9col/image.jpg",
        header: "Latest",
        title: "Verstappen, Leclerc and more set for Belgian Grand Prix grid penalties after power unit changes ",
        link: "/articles/article-4.html",
        content: "A host of drivers, including title rivals Max Verstappen and Charles Leclerc, are set to start the Belgian Grand Prix from the back of the grid following power unit element changes on their cars."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/BelgianGP/Audi/Audi%20Speed83758-11.jpg.transform/9col/image.jpg",
        header: "Gallery",
        title: "GALLERY: Check out Audi’s stunning livery as German manufacturer announces F1 entry for 2026",
        link: "/articles/article-5.html",
        content: "It's official: Audi will join Formula 1 as engine suppliers from the 2026 season. Here's the team's official show car."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/BelgianGP/Friday/GettyImages-1242729355.jpg.transform/9col/image.jpg",
        header: "News",
        title: "Russell and Hamilton concerned by 'extravagant' gap to Verstappen and Ferrari after day one in Spa ",
        link: "/articles/article-6.html",
        content: "George Russell and Lewis Hamilton were left to reflect on another tough Friday this season after finding themselves off the pace of the leaders on day one of running in Spa. And while both believe they can improve heading into the weekend, they where left concerned by the W13’s pace."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022Races/BelgianGP/Saturday/GettyImages-1418502764.jpg.transform/9col/image.jpg",
        header: "Latest",
        title: "Hamilton calls 1.8s gap in qualifying 'a kick in the teeth' as Russell predicts Verstappen will win Belgian GP ",
        link: "/articles/article-7.html",
        content: "The deflated Mercedes pair of Lewis Hamilton and George Russell ended up seventh and eighth fastest respectively in Spa qualifying, forcing them to reflect on a tough day in the office – with Hamilton calling the gap to pace-setter Verstappen “a kick in the teeth”."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/sutton/2022/Belgium/Saturday/1418419939.jpg.transform/9col/image.jpg",
        header: "Latest",
        title: "Tsunoda to start Belgian Grand Prix from pit lane after power unit changes ",
        link: "/articles/article-8.html",
        content: "Yuki Tsunoda will cede his 13th place on the grid for today’s Belgian Grand Prix, after the AlphaTauri driver made a host of power unit component changes overnight without the approval of the FIA Technical Delegate."
        },
        {url: "https://www.formula1.com/content/dam/fom-website/manual/Misc/2022manual/2022SummerBreak/GettyImages-1412001675.jpg.transform/9col/image.jpg",
        header: "Exclusive",
        title: "FIA World Motor Sport Council approves power unit regulations for 2026",
        link: "/articles/article-9.html",
        content: "The FIA World Motor Sport Council has today approved power unit regulations set to come into effect for the 2026 season – with increased electrical power and 100% sustainable fuels two of the key aspects of the newly-approved rules."
        }
        
    ]
};

// compiling the html template
var newstemplate = Handlebars.compile(document.getElementById("news-template").innerHTML)
// rendering data to the html template
var newsrendered = newstemplate(newsdata);
// change inner html in target htmll
document.getElementById("news-target").innerHTML = newsrendered;


// Driver Template Handlebars

var driverdata = {
    driver: [
        {drivername:"Max Verstappen " + "<b>[1]</b>"},
        {drivername:"Charles Leclerc " + "<b>[2]</b>"},
        {drivername: "Sergio Perez " + "<b>[3]</b>"},
        {drivername: "George Russell " + "<b>[4]</b>"},
        {drivername: "Carlos Sainz " + "<b>[5]</b>"},
        {drivername: "Lewis Hamilton " + "<b>[6]</b>"},
        {drivername: "Lando Norris " + "<b>[7]</b>"},
        {drivername: "Esteban Ocon " + "<b>[8]</b>"},
        {drivername: "Valtteri Bottas " + "<b>[9]</b>"},
        {drivername: "Fernando Alonso " + "<b>[10]</b>"},
        {drivername: "Kevin Magnussen " + "<b>[11]</b>"},
        {drivername: "Daniel Ricciardo " + "<b>[12]</b>"},
        {drivername: "Pierre Gasly " + "<b>[13]</b>"},
        {drivername: "Sebastian Vettel " + "<b>[14]</b>"},
        {drivername: "Mick Schumacher " + "<b>[15]</b>"},
        {drivername: "Yuki Tsunoda " + "<b>[16]</b>"},
        {drivername: "Zhou Guanyu " + "<b>[17]</b>"},
        {drivername: "Lance Stroll " + "<b>[18]</b>"},
        {drivername: "Alexander Albon " + "<b>[19]</b>"},
        {drivername: "Nicholas Latifi " + "<b>[20]</b>"},

        
    ]
};

var drivertemplate = Handlebars.compile(document.getElementById("driver-template").innerHTML)
var driverrendered = drivertemplate(driverdata);
document.getElementById("driver-target").innerHTML = driverrendered;

