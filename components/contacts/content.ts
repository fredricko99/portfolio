import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const profileImg = '/portrait.png'

const name = {
    name: "Fredrick Kibira",
    title: "FullStack Developer"
}

const social = [
    {
        icon: LinkedInIcon,
        name: 'linkdin',
        link:'https://www.linkedin.com/in/fredrick-kibira-a630b7ba?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BJ8wBM6LpSNGB1RJMVrYrUA%3D%3D',
        colour: '#1877F2',
        backgroundColour: 'rgba(0, 119, 181, 0.2)'
    },

    {
        icon: TwitterIcon,
        name: 'twitter',
        link: '',
        colour:'#1877F2',
        backgroundColour: 'rgba(0, 119, 181, 0.2)'
    },

    {
        icon: GitHubIcon,
        name: 'Github',
        link:'https://github.com/fredricko99?tab=overview&from=2023-08-01&to=2023-08-31',
        colour: 'black',
        backgroundColour: 'rgba(0, 119, 181, 0.2)'
    }

]

const contacts = [
    {
        title: 'Phone',
        icon: ContactPhoneIcon,
        value: +254172682958,
    },

    {
        title: 'Email',
        icon: EmailIcon,
        value: 'fredgichu@gmail.com',
    },

    {
        title: 'Location',
        icon: LocationOnIcon,
        value: 'Nairobi, Kenya',
    }, 
]

export {name, social, contacts, profileImg}