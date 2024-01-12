import { TimelineItemDescription } from "@/components/ui/TimelineItemDescription";

const items = [
  {
    title: "Full Stack Developer",
    children: (
      <>
        <TimelineItemDescription>Venedicto Team</TimelineItemDescription>
        <TimelineItemDescription>2023 - 2024</TimelineItemDescription>
        <ul>
          <li>
            ● Improved system performance by introducing Redis as a high-speed
            caching solution.
          </li>
          <li>
            ● Developed a routing system with differentiated roles and advanced
            access controls.
          </li>
          <li>
            ● Implemented intelligent server-side pagination, optimizing
            response time and network efficiency.
          </li>
          <li>
            ● Deployed on Railway to ensure high availability and scalability of
            the system.
          </li>
          <li>
            ● Enhanced security with measures such as CORS and request limits
            per IP.
          </li>
          <li>
            ● Added middleware encrypting all HTTP requests, including GET and
            POST methods.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Full Stack Developer",
    children: (
      <>
        <TimelineItemDescription>Soluciones Digitales</TimelineItemDescription>
        <TimelineItemDescription>2020 - 2023</TimelineItemDescription>
        <ul>
          <li>
            ● Rebuilt a system using MongoDB to improve scalability and
            optimized over 200,000 documents.
          </li>
          <li>
            ● Resolved system load issues by reducing from 5 servers to 3
            through the implementation of a load balancing system with Nginx.
          </li>
          <li>
            ● Developed a backend system using Node.js and Express, allowing
            better traffic scaling and enhanced company security.
          </li>
          <li>
            ● Implemented a CDN on a website, increasing loading speed by 43%.
          </li>
          <li>
            ● Developed and maintained web and mobile applications using Java
            (Android), JavaScript, and Firebase.
          </li>
          <li>● Optimized MongoDB queries, reducing response times by 20%.</li>
          <li>
            ● Assisted in the configuration and administration of Nginx servers,
            resulting in a 15% decrease in site downtime.
          </li>
          <li>
            ● Developed an administration panel using Next.js, React, Node.js,
            Express, and MongoDB.
          </li>
          <li>
            ● Implemented Firebase for authentication management and push
            notifications, improving user experience and platform security by at
            least 30%.
          </li>
        </ul>
      </>
    ),
  },
];

export default items;
