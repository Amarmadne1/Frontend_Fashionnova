import React from 'react';

 

const AboutUsPage = () => {

  return (

    <div className="bg-gray-100 py-10">

      <div className="container mx-auto p-6 bg-white rounded-lg shadow-lg border">

        <h1 className="text-3xl font-bold text-gray-800 mb-4">About FashionNova</h1>

        <p className="text-gray-600 mb-4">

          Welcome to FashionNova, your premier online destination for fashion enthusiasts. We pride ourselves on offering a wide variety of clothing options for both men and women, blending traditional and modern styles seamlessly. Our diverse collection includes:

        </p>

        <ul className="list-disc ml-8 mb-4 px-10">

          <li>Kurtas for men and women</li>

          <li>Stylish Jeans for all occasions</li>

          <li>Shirts with the latest trends</li>

          <li>Elegant Lehengas for special moments</li>

          {/* Add more items as needed */}

        </ul>

        <p className="text-gray-600 mb-4">

          At FashionNova, fashion is our passion, and our commitment is to provide you with the latest trends and top-notch quality. We understand that your clothing choices are a reflection of your personality, and we're here to help you express yourself with confidence.

        </p>

        <p className="text-gray-600 mb-4">

          Our team of dedicated designers and fashion experts curate our collection to ensure you stay ahead in style. Whether you're shopping for everyday wear or for those memorable events, we've got you covered.

        </p>

        <p className="text-gray-600">

          Thank you for choosing FashionNova as your fashion destination. Join us on this style journey and make every day a fashion statement.

        </p>

      </div>

    </div>

  );

};

 

export default AboutUsPage;