export const navData = {
    links: [
        {
            text: 'Skills',
            href: '#skills',
            target: '',
        },
        {
            text: 'Projects',
            href: '#projects',
            target: '',
        },
        {
            text: 'Contact',
            href: '#contact',
            target: '',
        },
    ],
};

import EmailIcon from '@/components/svgJsx/emailIcon/Index';
import LinkedinIcon from '@/components/svgJsx/linkedin/Index';
import GithubIcon from '@/components/svgJsx/github/Index';

export const footerData = {
    linkIconHeading: 'Socials',
    iconLinks: [
        {
            href: 'mailto:contactme@jdtully.com',
            icon: EmailIcon,
        },
        {
            href: 'https://www.linkedin.com/in/joshua-tully/',
            icon: LinkedinIcon,
        },
        {
            href: 'https://github.com/jtully97',
            icon: GithubIcon,
        },
    ],
};

export const landingPageData = {
    imageContent: {
        heading: 'Creative, Analytical, Passionate',
        body: '',
        img: {
            url: '/Josh_Tully.PNG',
            alt: '',
        },
    },
    showcase: {
        eyebrow: 'check out',
        heading: 'Some Of My Skills',
        cards: [
            {
                skill: 'Javascript',
                img: {
                    src: '/techIcons/javascript.svg',
                    alt: 'javascript icon',
                },
            },
            {
                skill: 'Node.js',
                img: {
                    src: '/techIcons/nodejs.svg',
                    alt: 'node.js icon',
                },
            },
            {
                skill: 'React.js',
                img: {
                    src: '/techIcons/react-2.svg',
                    alt: 'react.js icon',
                },
            },
            {
                skill: 'Next.js',
                img: {
                    src: '/techIcons/nextjs-13.svg',
                    alt: 'next.js icon',
                },
            },
            {
                skill: 'Styled Components',
                img: {
                    src: '/techIcons/styled-components-1.svg',
                    alt: 'styled components icon',
                },
            },
            {
                skill: 'Strapi',
                img: {
                    src: '/techIcons/strapi-2.svg',
                    alt: 'strapi icon',
                },
            },
            {
                skill: 'HTML',
                img: {
                    src: '/techIcons/html5.svg',
                    alt: '',
                },
            },

            {
                skill: 'SASS & SCSS',
                img: {
                    src: '/techIcons/sass.svg',
                    alt: 'sass icon',
                },
            },
            {
                skill: 'PHP',
                img: {
                    src: '/techIcons/php.svg',
                    alt: 'php icon',
                },
            },
            {
                skill: 'Python',
                img: {
                    src: '/techIcons/python.svg',
                    alt: 'python icon',
                },
            },
            {
                skill: 'Java',
                img: {
                    src: '/techIcons/java-4.svg',
                    alt: 'java icon',
                },
            },
            {
                skill: 'Postgresql',
                img: {
                    src: '/techIcons/postgresql.svg',
                    alt: 'postgresql icon',
                },
            },
            {
                skill: 'Mysql',
                img: {
                    src: '/techIcons/mysql.svg',
                    alt: 'mysql icon',
                },
            },
            {
                skill: 'Bash',
                img: {
                    src: '/techIcons/bash-1.svg',
                    alt: 'bash icon',
                },
            },

            {
                skill: 'npm',
                img: {
                    src: '/techIcons/npm.svg',
                    alt: 'npm icon',
                },
            },
        ],
    },
    projectShowcase: {
        //Images 1202 x 897px
        eyebrow: 'now showing',
        heading: 'Some of My Latest Projects',
        projects: [
            {
                heading: 'Beggars Pizza',
                subheading:
                    'React.js & Next.js, styled Components, Strapi CMS, Google Maps Javascript SDK, Google Geocoding',
                url: 'https://www.beggarspizza.com/',
                content: [
                    {
                        li: "visit website <a href='https://www.beggarspizza.com/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Modular design using React.js & Styled Components bound to Strapi CMS components',
                    },
                    {
                        li: 'Lightening fast page speeds and SEO friendly through Next.js static page generation',
                    },
                    {
                        li: 'Node.js Lifecycle hooks within the CMS for automating tasks like calculating geo codes on location inputs by reaching out to google geocoding api and populating the CMS with response data',
                    },
                    {
                        li: 'Custom built Google Maps component using google maps Javascript SDK and geocoding calculations for finding stores within user specified location inputs (Thousands of monthly users)',
                    },
                    { li: 'Media delivery through the use of Cloudinary CDN' },
                ],
                img: {
                    src: '/projects/beggars/beggars-poster.png',
                    alt: 'beggars pizza home page',
                },
                imgs: [
                    {
                        img: {
                            src: '/projects/beggars/carousel/img1.png',
                            alt: 'beggars pizza map',
                        },
                    },
                    {
                        img: {
                            src: '/projects/beggars/carousel/img2.png',
                            alt: 'beggars pizza white sox',
                        },
                    },
                    {
                        img: {
                            src: '/projects/beggars/carousel/img3.png',
                            alt: 'beggars pizza module',
                        },
                    },
                ],
            },
            {
                heading: 'Chicago Living Group',
                subheading:
                    'React.js & Next.js, styled Components, Strapi CMS, S3 Bucket media delivery',
                url: 'https://chicagolivinggroup.com/',
                content: [
                    {
                        li: "visit website <a href='https://chicagolivinggroup.com/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Utilizes a Modular Design: Employing React.js and Styled Components integrated with Strapi CMS components to create a modern design that allows for hundreds of different page combinations.',
                    },
                    {
                        li: 'Optimizes Page Speeds: Leveraging Next.js for static page generation, ensuring rapid load times while maintaining SEO-friendliness.',
                    },
                    {
                        li: 'Organizes Property Listings: Implements paginated property listing pages to streamline data delivery, enhancing the browsing experience.',
                    },
                    {
                        li: 'Crafts a Unique Brand Identity: Develops a comprehensive brand identity, including logo, type, colors, and more.',
                    },
                    {
                        li: 'Focuses on User-Centric Experience: Tailors the user experience to guide visitors seamlessly towards the contact page.',
                    },
                ],
                img: {
                    src: '/projects/chicago-living.png',
                    alt: 'Chicago Living Group home page',
                },
                imgs: [
                    {
                        img: {
                            src: '/projects/chicagoLivingGroup/carousel/img1.png',
                            alt: 'chicago living img1',
                        },
                    },
                    {
                        img: {
                            src: '/projects/chicagoLivingGroup/carousel/img2.png',
                            alt: 'chicago living img2',
                        },
                    },
                    {
                        img: {
                            src: '/projects/chicagoLivingGroup/carousel/img3.png',
                            alt: 'chicago living img3',
                        },
                    },
                    {
                        img: {
                            src: '/projects/chicagoLivingGroup/carousel/img4.png',
                            alt: 'chicago living img4',
                        },
                    },
                ],
            },
            {
                heading: 'Tulayna Limo Service',
                subheading:
                    'Freelance Project: React.js & Next.js, styled Components, Strapi CMS, S3 media delivery',
                url: 'https://www.tulaynalimoservice.com/',
                content: [
                    {
                        li: "visit website <a href='https://www.tulaynalimoservice.com/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Performant driven frontend utilizing Next.js static page generation for static CMS content',
                    },
                    {
                        li: 'Node.js backend with custom built services ie: data tracking on QR code scans within customers business cards ',
                    },
                    {
                        li: 'Google analytics tracking',
                    },
                    {
                        li: 'Custom made brand including but not limited to: logo, color scheme, type, etc.',
                    },
                ],
                img: {
                    src: '/projects/tulayna-limo-service.png',
                    alt: 'Tulayna Limo Service home page',
                },
                imgs: [],
            },
            {
                heading: 'MJ Schuetz Insurance',
                subheading:
                    'Custom built theme using php, SCSS/SASS, Wordpress CMS, Dynamic Animations',
                url: 'https://schuetzinsurance.com',
                content: [
                    {
                        li: "visit website <a href='https://schuetzinsurance.com/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Modular design using Advanced Custom Fields',
                    },
                    {
                        li: "Dynamic desktop page load animation <a href='https://schuetzinsurance.com/about/'>here</a>",
                    },
                    {
                        li: 'Reusable modules by utilizing flexible content',
                    },
                    {
                        li: 'Scroll animations provided through animate on scroll js library',
                    },
                ],
                img: {
                    src: '/projects/MJ-insurance-agency.png',
                    alt: 'MJ Schuetz Insurance home page',
                },
                imgs: [],
            },
            {
                heading: 'Arcoa',
                subheading:
                    'Custom built theme using PHP, HTML, SASS/SCSS, modular CMS, Lottie files',
                url: 'https://www.thinkarcoa.com/',
                content: [
                    {
                        li: "visit website <a href='https://www.thinkarcoa.com/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Developed a custom PHP theme, harnessing the capabilities of Advanced Custom Fields to create a unique web experience.',
                    },
                    {
                        li: 'Implemented dynamic page animations powered by JavaScript to enhance user engagement.',
                    },
                    {
                        li: 'Designed for modularity and extensive customization, both in the codebase and content management system, allowing for virtually limitless configurations.',
                    },
                    {
                        li: 'Improved online visibility through the adoption of SEO-friendly practices, including semantic markup and adherence to industry standards.',
                    },
                    {
                        li: 'Ensured web accessibility to create an inclusive and user-friendly experience for all site visitors.',
                    },
                ],
                img: {
                    src: '/projects/arcoa/arcoa-poster.png',
                    alt: 'arcoa home page',
                },
                imgs: [
                    {
                        img: {
                            src: '/projects/arcoa/arcoa-poster.png',
                            alt: 'arcoa home page',
                        },
                    },
                    {
                        img: {
                            src: '/projects/arcoa/carousel/arcoa-about-min.png',
                            alt: 'arcoa about page',
                        },
                    },
                    {
                        img: {
                            src: '/projects/arcoa/carousel/arcoa-blog-min.png',
                            alt: 'arcoa blog page',
                        },
                    },
                ],
            },
            {
                heading: 'C4 Chicago',
                subheading:
                    'Custom built theme using PHP, HTML, SASS/SCSS, modular CMS',
                url: 'https://www.c4chicago.org/',
                content: [
                    {
                        li: "visit website <a href='https://www.c4chicago.org/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Crafted a bespoke PHP theme utilizing the power of Advanced Custom Fields for a unique web experience.',
                    },
                    {
                        li: 'Elevated user engagement through the implementation of dynamic page animations powered by JavaScript.',
                    },
                    {
                        li: 'Achieved a modular and highly customizable design, both at the code level and within the content management system, enabling a virtually limitless array of configurations.',
                    },
                    {
                        li: 'Enhanced online visibility by adopting SEO-friendly practices, including semantic markup and industry best standards.',
                    },
                    {
                        li: 'Ensured web accessibility to make the site inclusive and user-friendly for all visitors.',
                    },
                ],
                img: {
                    src: '/projects/C4-Chi.png',
                    alt: 'C4 Chicago home page',
                },
                imgs: [],
            },
            {
                heading: 'SafeCare Corp',
                subheading:
                    'Custom built theme using PHP, HTML, SASS/SCSS, modular CMS',
                url: 'https://safecarecorp.com/',
                content: [
                    {
                        li: "visit website <a href='https://safecarecorp.com/' target='_blank'>here</a>",
                    },
                    {
                        li: 'Employed cutting-edge PHP development to create a custom theme, seamlessly integrating Advanced Custom Fields for a unique web presence.',
                    },
                    {
                        li: 'Elevated user interaction through the incorporation of dynamic page animations powered by JavaScript, delivering a captivating user experience.',
                    },
                    {
                        li: 'Enabled endless customization possibilities with a modular design approach, both at the code and content management system levels, offering unparalleled flexibility in website configuration.',
                    },
                    {
                        li: 'Maximized online visibility by implementing best practices for search engine optimization, embracing semantic markup to enhance search engine rankings.',
                    },
                    {
                        li: 'Ensured universal accessibility, providing an inclusive and user-friendly web experience for all site visitors.',
                    },
                ],
                img: {
                    src: '/projects/safecare-poster.png',
                    alt: 'safecare home page',
                },
                imgs: [],
            },
        ],
    },
    contact: {
        eyebrow: 'reach out',
        heading: 'Talk to me',
        email: 'cotactme@jdtully.com',
        successMessage:
            "Hey! Thanks for reaching out, your message wen't right to my personal inbox. I will get back to you as soon as possible!",
        failedMessage:
            'Oops, something happened during your form submission. Please reach out through one of my email links :)',
    },
};
