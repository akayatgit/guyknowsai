import PlainLayout from '@/components/PlainLayout';
import Toolbar from '@/components/Toolbar';

export default function Downloads() {
  return (
    <PlainLayout>
      <section className='mt-12 bg-black text-white shadow-brandShadow border-b-2 border-b-gray-200'>
        <div className="container flex items-center justify-between py-2">
          <Toolbar />
        </div>
      </section>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Downloads</h1>
        {/* Add specific content for the Downloads page here */}
      </div>
    </PlainLayout>
  );
} 