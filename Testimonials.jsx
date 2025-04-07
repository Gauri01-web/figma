import React from 'react';

const Testimonials = () => {
  return (
    <section className="px-6 py-16 bg-[#191A23] text-white">
      <h2 className="text-3xl font-bold text-[#B9FF66] mb-8">Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#2a2b33] p-6 rounded-xl">"Great work and amazing team!"</div>
        <div className="bg-[#2a2b33] p-6 rounded-xl">"Highly recommend for digital strategy!"</div>
        <div className="bg-[#2a2b33] p-6 rounded-xl">"They helped us scale our campaigns fast."</div>
      </div>
    </section>
  );
};

export default Testimonials;