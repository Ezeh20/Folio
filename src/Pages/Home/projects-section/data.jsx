import { FiGithub, FiLink } from "react-icons/fi";

const works = [
    {
        id: 0,
        img: 'https://i.ibb.co/c8p15vz/edustipend.png',
        projectName: 'Edustipend',
        projectDescription: `Edustipend is an organization that provides learning resources to individuals. The team is made up of several persons who work in smaller teams.
        I worked on three sections of the landing page,
        was responsible for the stipend application process/account creation and also the user's dashboard. I got to write unit tests for the first time
        using jest and React testing library which was pretty stressfull at first but enjoyable later on.`,
        tools: ['React', 'Jest', 'React testing library', 'storybook', 'PWA', 'api'],
        liveLink: 'https://edustipend.org/',
        link: <FiLink />
    },
    {
        id: 1,
        img: 'https://i.ibb.co/gPZqkZx/spidey.png',
        projectName: 'Hubb',
        projectDescription: `Hubb is a web application that presents the data recived from TMDI api
        in a clean manner. I learnt how to make request from multiple endpoints, understood the
        basics and importance of typeScript.`,
        tools: ['React', 'Sass', 'Framer', 'TypeScript', 'axios'],
        githubLink: 'https://github.com/Ezeh20/movieHub',
        liveLink: 'https://hubb-a978d.web.app/',
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 2,
        img: 'https://i.ibb.co/pdZ1dmK/Screenshot-152.png',
        projectName: "drag n' drop",
        projectDescription: `drag n' drop is a gallery that displays 15 images and discriptions of greek mythology gods which can be dragged to rearrange. 
        I used Nextjs for the project so as to learn more about the server side of things such as authentication and database management system.`,
        tools: ['Nextjs', 'Scss', 'MongoDB', 'NextAuth'],
        githubLink: 'https://image-hng.vercel.app/',
        liveLink: 'https://github.com/Ezeh20/image-hng',
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 3,
        img: 'https://i.ibb.co/ts2dRmJ/todo-profile.png',
        projectName: 'Task master',
        projectDescription: `This is a CRUD application which makes use of firebase as a backend. Users must login or signup to cre
        ate a task. When ticked as 'completed', that task will be saved in a completed tasks collection which shows the task, taskId
        start time and end time.There is also an xp system where each completed task grants 10 points which then unlocks awards if the needed 
        points are enough.`,
        tools: ['React', 'Sass', 'Framer', 'Firebase'],
        githubLink: 'https://github.com/Ezeh20/Task-master',
        liveLink: 'https://task-master-02.netlify.app/',
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 4,
        img: 'https://i.ibb.co/tcx5LGm/middle-man.png',
        projectName: 'Middle man',
        projectDescription: `Middle man is a loan agreement generator that generates an agreement between two parites. The user needs to 
        fill in the required information and must select between two variations [mercy , wickedness] then an agreement will be generated based
        on the filled form. I learnt how to utilize localStorage and also how to make use of user's data collected through a form.`,
        tools: ['React', 'Sass'],
        githubLink: 'https://github.com/Ezeh20/Loan_agreement_generator',
        liveLink: 'https://ezeh20.github.io/Loan_agreement_generator/',
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 5,
        img: 'https://i.ibb.co/0GpvY8p/udemy.png',
        projectName: 'Udemy attempt',
        projectDescription: `This is my attempt on the udemy home page. I used alot of html 3861 lines to be precise which are mostly repeated.
        I hard coded 7 categories which has 8 items each and the 'student's are viewing section' which has 15 items when i would have just created the elements
        by manipulating the dom by feeding on the needed object data. Using react later on made this very clear to me.`,
        tools: ['Html', 'Css', 'JavaScript'],
        githubLink: 'https://github.com/Ezeh20/udemy--clone',
        liveLink: 'https://ezeh20.github.io/udemy--clone/',
        github: <FiGithub />,
        link: <FiLink />
    },
    // {
    //     id: 6,
    //     img: 'https://i.ibb.co/c6pCN8K/e-mart.png',
    //     projectName: 'E-mart',
    //     projectDescription: `E-mart is an ecommerce. This project thought me the essence of lifting state up, state management using the context api, fetching 
    //     data from firebase, routing in react and seeing everything as a component. The products are fetched from firebase instead of living in the client side.`,
    //     tools: ['React', 'Sass', 'Firebase'],
    //     githubLink: 'https://github.com/Ezeh20/udemy--clone',
    //     liveLink: 'https://ezeh20.github.io/udemy--clone/',
    //     githubLink: 'https://github.com/Ezeh20/E-mart',
    //     liveLink: 'https://ezeh20.github.io/E-mart/',
    //     github: <FiGithub />,
    //     link: <FiLink />
    // },
    {
        id: 7,
        img: 'https://i.ibb.co/C6X60nL/job-listing.png',
        projectName: 'Job board with filtering',
        projectDescription: `This job board filters in items based on selected tags. Each job posting has 1 or more tags which may also
        be found in other job postings, clicking a tag adds that tag in an array where the forEach array method loops through
        each element in that array then the looped element will finally be used to filter in job postings which have matching tags using the includes method. `,
        tools: ['React', 'Sass', 'Framer', 'JSON'],
        githubLink: 'https://github.com/Ezeh20/Job-listings-with-filtering',
        liveLink: 'https://jobs-listing.netlify.app/',
        github: <FiGithub />,
        link: <FiLink />
    },

    {
        id: 8,
        img: 'https://i.ibb.co/qBwY2SV/space-tourism.png',
        projectName: 'Space-tourism',
        projectDescription: `Space-tourism is a muilt page site, A figma file was provided and also the needed assets including a style guilde. `,
        tools: ['React', 'Sass', 'Framer'],
        githubLink: 'https://github.com/Ezeh20/space-tourism',
        liveLink: 'https://space-travel-97.netlify.app/',
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 9,
        img: 'https://i.ibb.co/vmpzxfm/Rest-country.png',
        projectName: 'REST country',
        projectDescription: `This project uses the REST countries api to display 250 countries data including their flags. I got to know about the
        ability to pass state using the useNavigate hook provided by react router 6 which made it possible to navigate between a country and it's borders.`,
        tools: ['React', 'Sass', 'API'],
        githubLink: 'https://github.com/Ezeh20/Rest-api-frontend-mentor',
        liveLink: 'https://ezeh-world-app.netlify.app/',
        github: <FiGithub />,
        link: <FiLink />
    }
]

export default works