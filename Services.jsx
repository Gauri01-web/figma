import React from 'react';

const Services = () => {
  return (
    <section className="px-6 py-16 bg-[#F3F3F3]">
      <h2 className="text-3xl font-bold mb-8 text-[#B9FF66]">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Search engine optimization</h3>
          <p className="text-gray-700">Improve your visibility and rankings with our SEO strategies.</p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Pay-per-click advertising</h3>
          <p className="text-gray-700">Maximize ROI with targeted PPC campaigns tailored to your goals.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;