import React from "react";
import { Calendar, Check, Package, Truck, Gift } from "lucide-react";

export default function WorkIt() {
  const sections = [
    {
      id: 1,
      icon: Calendar,
      title: "Schedule Your Pickup",
      video: "./lundaryVideo.mp4",
      aos: "fade-up-right",
      description:
        "Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.",
      features: [
        "24/7 booking availability",
        "Recurring pickup scheduling available",
      ],
    },
    {
      id: 2,
      icon: Package,
      title: "Professional Collection",
      video: "./lundaryVideo.mp4",
      aos: "zoom-in-left",
      description:
        "Our uniformed valets arrive in discreet luxury vehicles with garment bags.",
      features: ["Contactless pickup available", "Digital receipt provided"],
    },
    {
      id: 3,
      icon: Truck,
      title: "Expert Processing",
      video: "./lundaryVideo.mp4",
      aos: "flip-up",
      description:
        "Your garments receive specialized care at our state-of-the-art facility",
      features: [
        "Individual garment tracking",
        "Quality control at every stage",
      ],
    },
    {
      id: 4,
      icon: Gift,
      title: "Luxury Delivery",
      video: "./lundaryVideo.mp4",
      aos: "fade-left",
      description:
        "Impeccably packaged garments returned at your preferred time.",
      features: [
        "Same-day delivery available",
        "Hanger-ready with protective covers",
      ],
    },
  ];

  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="min-h-screen bg-[#faf9f7] py-16 px-4 mt-16 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3">
            How It Works
          </h2>
          <div className="flex items-center justify-center mb-4">
            <div className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent flex-1 max-w-28"></div>
            <h2 className="mx-8 text-lg md:text-base font-medium tracking-widest text-[#D4AF37] uppercase">
              Seamless Pickup Process
            </h2>
            <div className="h-px bg-gradient-to-r from-[#D4AF37] to-transparent flex-1 max-w-28"></div>
          </div>
        </div>

        <div className="relative">
          {/* Vertical center line for large screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-[#D4AF37] z-10"></div>

          {sections.map((section, index) => (
            <div key={section.id} className="mb-20 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Alternating layout */}
                {(index % 2 === 0) ? (
                  <>
                    {/* Video Left */}
                    <div data-aos={section.aos} className="relative">
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                        <video
                          src={section.video}
                          controls
                          muted
                          autoPlay
                          loop
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20">
                        <span className="text-white font-bold text-2xl">
                          {section.id}
                        </span>
                      </div>
                    </div>

                    {/* Text Right */}
                    <div data-aos={section.aos} className="lg:pl-8 mt-6">
                      <div className="bg-white rounded-2xl h-64 p-6 shadow-xl border border-gray-100">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                            <section.icon className="w-8 h-8 text-[#D4AF37]" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-medium text-black-900">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-black-600 text-medium leading-relaxed mb-4">
                          {section.description}
                        </p>
                        <div className="w-full h-px bg-gray-300 mb-4" />
                        <div className="space-y-4">
                          {section.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <Check className="w-4 h-4 text-[#D4AF37] mr-4" />
                              <span className="text-black-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text Left */}
                    <div data-aos={section.aos} className="lg:pr-8 mt-6">
                      <div className="bg-white rounded-2xl h-64 p-6 shadow-xl border border-gray-100">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                            <section.icon className="w-8 h-8 text-[#D4AF37]" />
                          </div>
                          <h3 className="text-xl md:text-2xl font-medium text-black-900">
                            {section.title}
                          </h3>
                        </div>
                        <p className="text-black-600 text-medium leading-relaxed mb-4">
                          {section.description}
                        </p>
                        <div className="w-full h-px bg-gray-300 mb-4" />
                        <div className="space-y-4">
                          {section.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <Check className="w-4 h-4 text-[#D4AF37] mr-4" />
                              <span className="text-black-700 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Video Right */}
                    <div data-aos={section.aos} className="relative">
                      <div className="relative rounded-2xl overflow-hidden shadow-xl">
                        <video
                          src={section.video}
                          muted
                          autoPlay
                          loop
                          className="w-full h-80 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-14 h-14 bg-[#D4AF37] rounded-full flex items-center justify-center shadow-xl border-4 border-white z-20">
                        <span className="text-white font-bold text-2xl">
                          {section.id}
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative background blobs */}
        <div className="fixed top-20 left-20 w-32 h-32 text-[#D4AF37] rounded-full opacity-10 blur-3xl -z-10" />
        <div className="fixed bottom-40 right-32 w-40 h-40 bg-blue-200 rounded-full opacity-10 blur-3xl -z-10" />

        {/* CTA Button */}
        <button
          data-aos="flip-left"
          className="px-8 py-4 bg-[#080808] text-white rounded-full font-medium flex items-center mx-auto gap-3 text-sm tracking-wider mt-12"
        >
          Schedule Your Pickup +
        </button>
      </div>
    </div>
  );
}
