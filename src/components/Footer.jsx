import React from 'react'
import { contactInfo, footerLists, socialIcons } from '../constant/data'

const Footer = () => {
  return (
    <footer className='pt-14 pb-8 bg-white'>
      <div className='container'>
        {/* Footer top */}
        <div className='grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]'>
          {/* Footer brand */}
          <div>
            {/* Footer Logo */}
            <div>
              <img
                src='/images/logo.png'
                alt='footer logo'
                width={150}
                height={150}
              />
            </div>
            {/* Links */}
            <div className='mt-8 space-y-4'>
              {contactInfo.map((item) => (
                <a
                  href='#'
                  key={item.id}
                  className='flex items-center gap-1.5 hover:text-orange-50 hover:underline transition-colors'
                >
                  {<item.icon />}
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          {/* Footer list */}
          {footerLists.map((item) => (
            <div key={item.id} className='space-y-3'>
              <p className='text-lg font-semibold'>{item.title}</p>
              <ul className='space-y-2.5'>
                {item.links.map((links, index) => (
                  <li key={index}>
                    <a
                      href='#'
                      className='hover:text-orange-50 transition-colors'
                    >
                      {links.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Profile */}
          <div className=''>
            <p className='text-lg font-semibold'>Social Profiles</p>
            <div className='flex gap-5 mt-3'>
              {socialIcons.map((icon) => (
                <button
                  key={icon.id}
                  className='secondary-btn p-3.5 bg-white-97 hover:bg-white-99 hover:shadow-md
                        transition-all'
                >
                  <a href='#'>{<icon.icon />}</a>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Footer bottom */}
        <p className='mt-16 text-center lg:mt-20'>
          &copy; {new Date().getFullYear()} Skillbridge. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
