import Image from 'next/image'
import styles from './page.module.css'

import PersonalDetails from '@/components/contacts/personalDetails'

export default function Home() {
  return (
    <div>
      <div className='Home'>
        <PersonalDetails/>
      </div>
    </div>
  )
}
