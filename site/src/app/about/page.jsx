import PlainLayout from '@/components/PlainLayout';
import Toolbar from '@/components/Toolbar';

export default function About() {
  return (
    <PlainLayout>
      <section className='mt-12 bg-black text-white shadow-brandShadow border-b-2 border-b-gray-200'>
        <div className="container flex items-center justify-between py-2">
          <Toolbar />
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">About Us</h1>

        <section className="bg-brand-blue text-brand_bg py-12">
          <h2 className="text-2xl font-semibold text-center">Our Mission</h2>
          <p className="mt-4 text-center max-w-2xl mx-auto">
            Collaboratively administrate empowered markets via plug-and-play networks. Dynamically procrastinate B2C users after installed base benefits. Dramatically visualize customer-directed convergence without revolutionary ROI.
          </p>
        </section>

        <section className="bg-cover bg-center py-12" style={{ backgroundImage: "url('/path/to/vision-image.jpg')" }}>
          <h2 className="text-2xl font-semibold text-center text-brand-bg">Our Vision</h2>
          <p className="mt-4 text-center text-brand-bg max-w-2xl mx-auto">
            Efficiently unleash cross-media information without cross-media value. Quickly maximize timely deliverables for real-time schemas. Dramatically maintain clicks-and-mortar solutions without functional solutions.
          </p>
        </section>

        <section className="py-12">
          <h2 className="text-2xl font-semibold text-center">Our Values</h2>
          <ul className="mt-4 text-center max-w-2xl mx-auto list-disc list-inside">
            <li>Collaboratively administrate empowered markets via plug-and-play networks.</li>
            <li>Dynamically procrastinate B2C users after installed base benefits.</li>
            <li>Efficiently unleash cross-media information without cross-media value.</li>
            <li>Quickly maximize timely deliverables for real-time schemas.</li>
          </ul>
        </section>

        <section className="flex justify-center space-x-8 py-12">
          <div className="text-center">
            <img src="/assets/images/akay.jpg" alt="Team Member 1" className="rounded-full w-32 h-32 mx-auto" />
            <p className="text-2xl font-bold">Ashok Kumar</p>
            <p className="mt-4 font-semibold">Founder</p>
          </div>
        </section>
      </div>
    </PlainLayout>
  );
} 