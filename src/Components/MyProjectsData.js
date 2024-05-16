import templateCarouselImg from '../Images/Projects/template-w-carouse.jpg';
import watchProductsImg from '../Images/Projects/watch-products.jpg';
import basicCalculatorImg from '../Images/Projects/basic-calculator.png';
import currencyExchangeImg from '../Images/Projects/currency-exchange.jpg';
import caraShopingImg from '../Images/Projects/cara-shoping.jpg';
import lusionShoppingImg from '../Images/Projects/react-lusion.jpg';
import simpleMoviesImg from '../Images/Projects/Simple Movies-full.jpg';
import simpleMoviesReduxImg from '../Images/Projects/simple-movies-redux-full.jpg';
import Tamplate101DesignImg from '../Images/Projects/Tamplate-101-full.jpg';
import Tamplate102RocherImg from '../Images/Projects/Tamplate-102-Rocher-Furniture-full.jpg';
import coffeeKingImg from '../Images/Projects/Tamplate-103-CoffeeKing-Bootstrap-full.jpg';
import devitaWatchsImg from '../Images/Projects/devita-watchs-full.jpg';
import {
	FaBootstrap,
	FaCss3Alt,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaLaptopCode,
	FaNode,
	FaReact,
	FaRegHospital,
	FaSass,
	FaToolbox,
} from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import {
	SiAutodesk,
	SiExpress,
	SiMaterialui,
	SiMongodb,
	SiNextdotjs,
	SiRedux,
} from 'react-icons/si';
import { GiOpenBook } from 'react-icons/gi';

export const startLink = '';

export const myPersonalInfo = [
	{ id: 201, title: 'First Name: ', info: 'Mustafa' },
	{ id: 202, title: 'Last Name: ', info: 'Abutabl' },
	// { id: 203, title: 'Birthdate: ', info: '19 Oct 1989' },
	{ id: 204, title: 'Nationality: ', info: 'Egyption' },
	{ id: 205, title: 'Military Service: ', info: ' Finshed' },
	{ id: 206, title: 'Languages: ', info: 'Arabic, English' },
	{ id: 208, title: 'Phone: ', info: '+20 111 970 6667' },
	{ id: 207, title: 'Email: ', info: 'eng.mustafa@hotmail.com' },
	{ id: 209, title: 'Freelance: ', info: 'Available', color: '#01ef92' },
];

export const skills = [
	{ id: 201, title: 'HTML', icon: <FaHtml5 />, color: '#e56229' },
	{ id: 202, title: 'CSS', icon: <FaCss3Alt />, color: '#007FFF' },
	{ id: 203, title: 'JavaScript', icon: <DiJavascript1 />, color: '#EAD41C' },
	{ id: 204, title: 'React', icon: <FaReact />, color: '#00CEF2' },
	{ id: 205, title: 'Next', icon: <SiNextdotjs /> },
	{ id: 206, title: 'Node.js', icon: <FaNode />, color: '#5CA74B' },
	{ id: 207, title: 'Express', icon: <SiExpress /> },
	{ id: 208, title: 'MongoDB', icon: <SiMongodb />, color: '#4E9E42' },
];

export const skills2 = [
	{ id: 209, title: 'Bootstrap', icon: <FaBootstrap />, color: '#723DBE' },
	{ id: 210, title: 'Material UI', icon: <SiMaterialui />, color: '#007FFF' },
	{ id: 211, title: 'Github', icon: <FaGithub /> },
	{ id: 212, title: 'Git', icon: <FaGitAlt />, color: '#DE4C36' },
	{ id: 213, title: 'Redux', icon: <SiRedux />, color: '#764ABC' },
	{ id: 214, title: 'SASS', icon: <FaSass />, color: '#c76494' },
];

export const timelineData = [
	{
		date: 'Dec/2022 - Sep/2023',
		title: 'Front/Back-end Developer Diploma',
		organization: 'SEF Future',
		icon: <FaLaptopCode />,
	},
	{
		date: 'Feb/2022 - Aug/2022',
		title: 'Front-end Developer Diploma',
		organization: 'Pepo.Teck',
		icon: <FaLaptopCode />,
	},
	{
		date: 'Nov/2018 - Present',
		title: '3D VISUALIZER',
		organization: 'Freelancer',
		icon: <SiAutodesk />,
	},
	{
		date: 'Jul/2016 - Sep/2018',
		title: 'Biomedical Engineer',
		organization: 'Smama Group, Jeddah',
		icon: <FaToolbox />,
	},
	{
		date: 'Feb/2014 - Jul/2016',
		title: 'Biomedical Engineer',
		organization: 'Saad Ahmed Saad EST, Jeddah',
		icon: <FaToolbox />,
	},
	{
		date: 'Mar/2013 - Dec/2013',
		title: 'Biomedical Engineer Trainee and Volunteer',
		organization: 'International Medical Center, Jeddah',
		icon: <FaRegHospital />,
	},
	{
		date: '2007 - 2012',
		title: 'Medical Equipment Engineering',
		organization: 'Bachelor Degree',
		icon: <GiOpenBook />,
	},
];

export const myProjects = [
	{
		id: 113,
		title: 'Devita Watchs',
		img: devitaWatchsImg,
		link: 'https://devita-watchs.vercel.app/',
		githubLink: 'https://github.com/e-mustafa/devita-watchs',
		Language: ['HTML', 'CSS', 'Material Ui', 'Javascript', 'React', 'Next'],
		description:
			'Online store for selling wristwatches, Developed using Next js 13 app dirctory, static & dynamic metadata, shopping cart, favorite list, With notifications toast.',
	},
	// {
	// 	id: 112,
	// 	title: "Mustafa Abutabl Portfolio",
	// 	img: coffeeKingImg,
	// 	link: "https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap",
	// 	githubLink:
	// 		"https://github.com/e-mustafa/Tamplate-103-CoffeeKing-Bootstrap",
	// 	Language: ["HTML", "CSS", "Bootstrap", "Javascript"],
	// 	description:
	// 		"Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list.",
	// },
	{
		id: 111,
		title: 'Coffee shop template',
		img: coffeeKingImg,
		link: 'https://e-mustafa.github.io/Tamplate-103-CoffeeKing-Bootstrap',
		githubLink: 'https://github.com/e-mustafa/Tamplate-103-CoffeeKing-Bootstrap',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'Coffee shop template with edit bootstrap default colors and JavaScript shopping cart, favorite list, register and sign in with validate. With notifications toast. You need to register and sign in to checkout and add items to favorite list.',
	},
	{
		id: 110,
		title: 'Rocher-Furniture Tamplate',
		img: Tamplate102RocherImg,
		link: 'https://e-mustafa.github.io/Tamplate-102-Rocher-Furniture',
		githubLink: 'https://github.com/e-mustafa/Tamplate-102-Rocher-Furniture',
		Language: ['HTML5', 'CSS3'],
		description: 'Rocher-Furniture Tamplate html and some css3.',
	},
	{
		id: 109,
		title: 'Architectural Design Template',
		img: Tamplate101DesignImg,
		link: 'https://e-mustafa.github.io/Tamplate-101/',
		githubLink: 'https://github.com/e-mustafa/Tamplate-101',
		Language: ['HTML', 'CSS'],
		description: 'Architectur Design template html & css only.',
	},
	{
		id: 108,
		title: 'Simple Movies with Redux',
		img: simpleMoviesReduxImg,
		link: 'https://simplemovies-redux.netlify.app',
		githubLink: 'https://github.com/e-mustafa/moviesApp-redux',
		Language: ['HTML', 'CSS', 'Material Ui', 'Javascript', 'React', 'Redux'],
		description:
			'Simple movies website to discover popular movies, and add to favorite list, with using Redux.',
	},
	{
		id: 107,
		title: 'Simple Movies',
		img: simpleMoviesImg,
		link: 'https://simplemovies-app.netlify.app',
		githubLink: 'https://github.com/e-mustafa/sempleMoviesApp',
		Language: ['HTML', 'CSS', 'Material Ui', 'Javascript', 'React'],
		description:
			'Simple movies website to discover popular movies, and add to favorite list.',
	},
	{
		id: 106,
		title: 'Lusion Shopping',
		img: lusionShoppingImg,
		link: 'https://react-lusion-app.netlify.app',
		githubLink: 'https://github.com/e-mustafa/React-Lusion-App',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript', 'React'],
		description:
			'Lustion ecommerce web responsive with many pages and form validation.',
	},
	{
		id: 105,
		title: 'Cara Shoping',
		img: caraShopingImg,
		link: 'https://cara-shoping.vercel.app',
		githubLink: 'https://github.com/e-mustafa/Cara-Shoping',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'responsive ecommerce website main page, sign up and sign in made with js.',
	},
	{
		id: 104,
		title: 'Currency Exchange',
		img: currencyExchangeImg,
		link: 'https://currency-exchange-mu.vercel.app',
		githubLink: 'https://github.com/e-mustafa/currencyExchange',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'This is a simple Currency Converter application, I took help from this website, "exchangerate-api" to create an API connection.',
	},
	{
		id: 103,
		title: 'Basic Calculator',
		img: basicCalculatorImg,
		link: 'https://basic-calculator-self.vercel.app',
		githubLink: 'https://github.com/e-mustafa/basic-Calculator',
		Language: ['HTML', 'CSS', 'Bootstrap', 'Javascript'],
		description:
			'Basic Calculator for doing simple mathematical operations: addition, subtraction, multiplication, division. This is a simplified version of the online.',
	},
	{
		id: 102,
		title: 'Watch Products',
		img: watchProductsImg,
		link: 'https://watch-products.vercel.app',
		githubLink: 'https://github.com/e-mustafa/Watch-Products',
		Language: ['HTML', 'CSS', 'Bootstrap'],
		description: 'single page responsive website.',
	},
	{
		id: 101,
		title: 'Template W Carousel',
		img: templateCarouselImg,
		link: 'https://template-w-carousel.vercel.app',
		githubLink: 'https://github.com/e-mustafa/template-w-carousel',
		Language: ['HTML', 'CSS', 'Bootstrap'],
		description: 'single page responsive website.',
	},
];
