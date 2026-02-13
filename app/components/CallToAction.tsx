'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="bg-red-700 text-white py-20 text-center px-6 sm:px-8 lg:px-12">
      <h2 className="text-3xl font-bold mb-6">How You Can Help</h2>
      <p className="mb-10 text-lg max-w-2xl mx-auto">
        Whether through donations, volunteering, or spreading awareness, your support matters. Be part of the change.
      </p>
      <Link
        href="/get-involved"
        className="bg-white text-red-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition"
      >
        Get Involved
      </Link>
    </section>
  );
}
