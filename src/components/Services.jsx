import { FaCode, FaLaptopCode, FaPalette, FaCogs, FaBug, FaLayerGroup } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      id: 1,
      icon: <FaCode className="text-blue-600 text-5xl mb-4" />,
      title: "Custom Website Development",
      description:
        "Build responsive and visually appealing websites tailored to client needs using HTML, CSS, JavaScript, and modern frameworks.",
    },
    {
      id: 2,
      icon: <FaLaptopCode className="text-blue-600 text-5xl mb-4" />,
      title: "Single Page Applications (SPAs)",
      description:
        "Develop dynamic SPAs using React.js to deliver seamless user experiences.",
    },
    {
      id: 3,
      icon: <FaPalette className="text-blue-600 text-5xl mb-4" />,
      title: "UI/UX Implementation",
      description:
        "Convert UI/UX designs into pixel-perfect, functional web interfaces using Tailwind CSS and Bootstrap.",
    },
    {
      id: 4,
      icon: <FaCogs className="text-blue-600 text-5xl mb-4" />,
      title: "Custom React Components Development",
      description:
        "Develop reusable and efficient React components to enhance application scalability.",
    },
    {
      id: 5,
      icon: <FaBug className="text-blue-600 text-5xl mb-4" />,
      title: "Frontend Debugging and Optimization",
      description:
        "Identify and fix UI bugs to ensure a smooth and high-performance user experience.",
    },
    {
      id: 6,
      icon: <FaLayerGroup className="text-blue-600 text-5xl mb-4" />,
      title: "Tailwind CSS and Bootstrap Theme Development",
      description:
        "Design and develop custom themes using Tailwind CSS and Bootstrap to meet branding needs.",
    },
  ];

  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          My Services
          <span className="block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded"></span>
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto mt-4 mb-12">
          I provide high-quality frontend development services to help businesses build fast, responsive, and user-friendly web applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white  flex flex-col items-center text-center rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {service.icon}
              <h3 className="sm:text-xl text-[14px] font-semibold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
