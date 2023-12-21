/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Bitsmith Technologies Pvt. Ltd.',
    position: 'Full Stack Developer',
    url: 'https://bitsmith.tech',
    startDate: '2023-03-01',
    endDate: '2023-10-15',
    summary: 'Bitsmith Technologies is an edtech company that provides software solutions to educational institutes and helps in the complete management. From this position we were early to recognize the opportunity for digital education, and its specific application to large institutes for both online & offline plans.',
    highlights: [
      ' I served as a Full Stack Developer, responsible for both frontend and backend development',
      ' I utilized ReactJS to craft interactive and user-friendly web interfaces and ExpressJS for creating robust server-side solutions',
      ' This role allowed me to contribute to the end-to-end development of web applications, gaining expertise in both client and server technologies.',
    ],
  },
  {
    name: 'Bitsmith Technologies Pvt. Ltd.',
    position: ': Operations Head',
    url: 'https://bitsmith.tech',
    startDate: '2023-03-01',
    endDate: '2023-10-15',
    summary: 'Bitsmith Technologies is an edtech company that provides software solutions to educational institutes and helps in the complete management. From this position we were early to recognize the opportunity for digital education, and its specific application to large institutes for both online & offline plans.',
    highlights: [
      ' As Operations Head in our startup company, I was responsible for overseeing various operational aspects',
      " I managed and optimized internal processes, ensured efficient resource allocation, and played a crucial role in supporting the company's growth trajectory",
      " My role involved addressing logistical and organizational challenges to help streamline operations and achieve the company's objectives.",
    ],
  },
  {
    name: 'Bitsmith Technologies Pvt. Ltd.',
    position: 'Backend Developer Intern',
    url: 'https://bitsmith.tech',
    startDate: '2022-12-01',
    endDate: '2023-02-01',
    summary: 'Bitsmith Technologies is an edtech company that provides software solutions to educational institutes and helps in the complete management. From this position we were early to recognize the opportunity for digital education, and its specific application to large institutes for both online & offline plans.',
    highlights: [
      " As a Backend Developer Intern, I actively contributed to the development and maintenance of the company's server-side systems.",
      ' During my internship, I gained valuable experience in building and optimizing the backend infrastructure, ensuring efficient data management and system performance.',
    ],
  },
];

export default work;
