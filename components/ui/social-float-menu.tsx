'use client';

import { SiLinkedin, SiFacebook, SiInstagram } from 'react-icons/si';

export default function SocialFloatMenu() {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/c%C3%A9line-bardan-39897515b/',
      icon: SiLinkedin,
      color: 'hover:bg-[#0077b5]',
      bgColor: 'bg-[#0077b5]'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/people/CelassistPro/61585664695001/',
      icon: SiFacebook,
      color: 'hover:bg-[#1877f2]',
      bgColor: 'bg-[#1877f2]'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/celassistpro_?igsh=dW9paGtzM3Yza2oy',
      icon: SiInstagram,
      color: 'hover:bg-[#E4405F]',
      bgColor: 'bg-[#E4405F]'
    }
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
      {socialLinks.map((social) => {
        const Icon = social.icon;
        return (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`
              group relative flex items-center justify-center
              w-12 h-12 rounded-full shadow-lg
              text-white transition-all duration-300 ease-out
              ${social.bgColor}
              hover:scale-110 hover:shadow-xl
            `}
          >
            <Icon size={24} />

            {/* Tooltip */}
            <span className={`
              absolute right-14 px-3 py-1 rounded-md
              text-sm font-medium text-white whitespace-nowrap
              opacity-0 invisible group-hover:opacity-100 group-hover:visible
              transition-all duration-300 ease-out
              ${social.bgColor}
            `}>
              {social.name}
            </span>
          </a>
        );
      })}
    </div>
  );
}
