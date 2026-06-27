import React from 'react'
import { contactInfo , footerLists , socialIcons} from '../constant/data'

const Footer = () => {
  return (
    <footer className='pt-14 pb-8 bg-white'>
      <div className="container">
        {/* Footer top */}
        <div className=''>
            {/* Footer brand */}
            <div className=''>
                {/* Footer Logo */}
                <div className=''>
                    <img src="/images/logo.png" alt="footer logo" width={150} height={150} />

                </div>
                {/* Links */}
                <div className=''>
                    {contactInfo.map((item) => (
                        <a href='#' key={item.id}>
                            {<item.icon/>}
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
            {/* Footer list */}
            {footerLists.map((item) => (
                <div key={item.id}>
                    <p>{item.title}</p>   
                    <ul className=''>
                        {item.items.map((link,index) => (
                            <li key={index}>  
                                <a href='#'>{link.label}</a>    
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        
            {/* Social Profile */}
            <div className=''>
                <p>Social Profiles</p>
                <div className=''>
                    {socialIcons.map((icon) => (
                       <button className=''>
                         <a href=''>
                            {icon.icon}
                        </a>
                       </button>
                    ))}
                </div>
            </div>

        </div>
        {/* Footer bottom */}
        <p>&copy; {new Date().getFullYear()} Skillbridge. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer