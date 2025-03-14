import '@fortawesome/fontawesome-free/css/all.min.css';

const SocialLinks = () => {
  const socialLinks = [
    { href: 'https://github.com/AbdurRahman-202416?tab=repositories0', icon: 'github' },
    { href: 'https://www.linkedin.com/in/abdur-rahman-8635b9290', icon: 'linkedin' },
    { href: 'https://www.facebook.com/shak.santo.7/', icon: 'facebook' },
    { href: 'https://www.instagram.com/sajjad_hossen_santo', icon: 'instagram' }
  ];

  return (
    <div className="flex justify-center mt-5 sm:mt-4 gap-4 ">
      {socialLinks.map(({ href, icon }) => (
        <a
          key={icon}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="sm:w-12 w-8 h-8 sm:h-12 flex items-center justify-center rounded-full border sm:border-2 border-blue-600 text-black transition-transform duration-300 ease-in-out hover:bg-blue-600 hover:text-white hover:scale-110 shadow-lg"
        >
          <i className={`fab fa-${icon} text-2xl`} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
