import React from 'react';

// ✅ Correct image paths
import photo8 from '../../../assets/photo8.webp';
import sana from '../../../assets/sana.webp';
import photo1 from '../../../assets/photo1.webp';

const Meet = () => {
  const team = [
    {
      name: "Ahmed Al-Mansoori",
      title: "Head of Couture Care",
      desc: "20+ years in luxury garment care",
      img: photo8,
    },
    {
      name: "Layla Hassan",
      title: "Fabric Technology Expert",
      desc: "Fabric scientist and preservation expert",
      img: sana,
    },
    {
      name: "Yousef Ibrahim",
      title: "Operations Director",
      desc: "Ensuring seamless service delivery",
      img: photo1,
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      <div className="text-center mb-10" data-aos="zoom-in-up">
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Meet Our Fabric Specialists
        </h2>
        <div className="h-0.5 w-16 bg-[#D4AF37] mx-auto my-4"></div>
        <p className="text-[#2C2C2C] max-w-2xl mx-auto mb-12">
          Our team of garment care experts brings decades of combined experience in handling luxury fabrics
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#FBF8F3] rounded-xl text-center p-6 shadow-sm"
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="w-28 h-28 mx-auto mb-4 rounded-full border-4 border-[#D4AF37] overflow-hidden">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="text-1xl font-medium">{member.name}</h4>
            <p className="text-[#D4AF37] mb-4">{member.title}</p>
            <p className="text-[#2C2C2C] text-sm">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meet;
