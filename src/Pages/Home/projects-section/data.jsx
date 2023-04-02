import { FiGithub, FiLink } from "react-icons/fi";

const works = [
    {
        id: 1,
        img: 'https://i.ibb.co/ts2dRmJ/todo-profile.png',
        projectName: 'Task master',
        projectDescription: `This is a CRUD application which makes use of firebase as a backend. Users must login or signup to cre
        ate a task. When ticked as 'completed', that task will be saved in a completed tasks collection which shows the task, taskId
        start time and end time.There is also an xp system where each completed task grants 10 points which then unlocks awards if the needed 
        points are enough.`,
        tools: ['React', 'Sass', 'Framer', 'Firebase'],
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 2,
        img: 'https://i.ibb.co/tcx5LGm/middle-man.png',
        projectName: 'Middle man',
        projectDescription: `Middle man is a loan agreement generator that generates an agreement between two parites. The user needs to 
        fill in the required information and must select between two variations [mercy , wickedness] then an agreement will be generated based
        on the filled form. I learnt how to utilize localStorage and also how to make use of user's data collected through a form.`,
        tools: ['React', 'Sass'],
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 3,
        img: 'https://i.ibb.co/0GpvY8p/udemy.png',
        projectName: 'Udemy attempt',
        projectDescription: `This is my attempt on the udemy home page. I used alot of html 3861 lines to be precise which are mostly repeated.
        I hard coded 7 categories which has 8 items each and the 'student's are viewing section' which has 15 items when i would have just created the elements
        by manipulating the dom by feeding on the needed object data. Using react later on made this very clear to me.`,
        tools: ['Html', 'Css', 'JavaScript'],
        github: <FiGithub />,
        link: <FiLink />
    },
    {
        id: 4,
        img: 'https://i.ibb.co/c6pCN8K/e-mart.png',
        projectName: 'E-mart',
        projectDescription: `E-mart is an ecommerce. This project thought me the essence of lifting state up, state management using the context api, fetching 
        data from firebase and routing in react. The products are fetched from firebase instead of living in the client side`,
        tools: ['React', 'Sass', 'Firebase'],
        github: <FiGithub />,
        link: <FiLink />
    }
]

export default works