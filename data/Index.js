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
                    src: '/techIcons/react.svg',
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
        heading: 'Some of My Projects',
        projects: [
            {
                heading: 'Beggars Pizza',
                subheading:
                    'React.js & Next.js, styled Components, Strapi CMS, Google Maps Javascript SDK, Google Geocoding',
                url: 'https://www.beggarspizza.com/',
                content: [
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
                        li: 'Utilizes a Modular Design: Employing React.js and Styled Components integrated with Strapi CMS components to create a modern design.',
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
                    'React.js & Next.js, styled Components, Strapi CMS, S3 media delivery',
                url: 'https://www.beggarspizza.com/',
                content: [
                    {
                        li: 'Optimizes Page Speeds: Achieving remarkable speed and SEO friendliness through Next.js static page generation.',
                    },
                    {
                        li: 'Custom Google Maps Component: Develops a custom Google Maps component using the Google Maps JavaScript SDK, incorporating geocoding calculations for locating stores within user-specified locations (serving thousands of monthly users).',
                    },
                    {
                        li: 'Efficient Automation with Node.js: Implements Node.js Lifecycle hooks within the CMS for automating tasks, such as geocoding location inputs using the Google Geocoding API and updating the CMS with response data.',
                    },
                    {
                        li: 'Optimal Media Delivery: Ensures smooth media delivery through the use of the Cloudinary CDN.',
                    },
                    {
                        li: 'Utilizes a Modular Design: Leveraging React.js and Styled Components, tightly integrated with Strapi CMS components.',
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
                heading: 'C4 Chicago',
                subheading:
                    'React.js & Next.js, styled Components, Strapi CMS, Google Maps Javascript SDK, Google Geocoding',
                url: 'https://www.beggarspizza.com/',
                content: [
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
                    src: '/projects/C4-Chi.png',
                    alt: 'C4 Chicago home page',
                },
                imgs: [],
            },
            {
                heading: 'SafeCare Corp',
                subheading:
                    'React.js & Next.js, styled Components, Strapi CMS, Google Maps Javascript SDK, Google Geocoding',
                url: 'https://www.beggarspizza.com/',
                content: [
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
                    src: '/projects/safecare-poster.png',
                    alt: 'safecare home page',
                },
                imgs: [],
            },

            {
                heading: 'Townsend Tree Services',
                subheading:
                    'React.js & Next.js, styled Components, Strapi CMS, Google Maps Javascript SDK, Google Geocoding',
                url: 'https://www.beggarspizza.com/',
                content: [
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
                    src: '/projects/townsend-tree-services.png',
                    alt: 'Townsend Tree Services home page',
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
