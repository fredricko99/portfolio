import {name, social, contacts, profileImg} from './content'

import './personalDetails.css'

import Image from "next/image"
import Link from "next/link";

interface Personal{
    email?: string,
    image?:any,
    contact?: number,
    location?: string
    name?: string

}

const PersonalDetails = () =>{
    return(
        <div className="Personal">

            <Image src={profileImg} alt={""} width={150} height={150}/>

            <div className="profile-name">
                <text style={{fontFamily: 'Arial, sans-serif', fontSize : '30px', color: 'black'}}>{name.name} </text>
                <text style={{fontFamily: 'Arial, sans-serif', fontSize : '16px', color: 'black'}}> {name.title}</text>
            </div>

            <div className="all-socials">
                {social.map((content)=>(
                    <Link
                    href={content.link}
                    key={content.link}
                    className="Social-icons">
                        <div className="media-icons">
                            {<content.icon sx={{ 
                                color: content.colour}}/>}
                        </div>
                    </Link>
                ))}
            </div>

            <div className='contacts'>
                {contacts.map((content)=>(
                    <div className='contact-content'>
                        <content.icon/>
                        <div className='contact-subcontent'>
                            <text>{content.title} </text> 
                            <text>{content.value}</text>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PersonalDetails;


