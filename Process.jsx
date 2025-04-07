import React from 'react';

const Process = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="text-3xl font-bold text-[#B9FF66] mb-8">Our Working Process</h2>
      <div className="space-y-6">
        <div className="p-6 border border-gray-300 rounded-xl">
          <h3 className="text-xl font-semibold">01 Consultation</h3>
          <p>We gather insights and understand your business goals and target audience.</p>
        </div>
        <div className="p-6 border border-gray-300 rounded-xl">
          <h3 className="text-xl font-semibold">02 Research and Strategy Development</h3>
          <p>We research and develop a customized marketing strategy tailored to your needs.</p>
        </div>
      </div>
    </section>
  );
};

export default Process;