import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative">
        <div
          className="h-[500px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/3421920/pexels-photo-3421920.jpeg?auto=compress&cs=tinysrgb&w=800)`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold">Sumoki</h1>
              <p className="mt-4 text-lg">
                Experience authentic Japanese cuisine and vibrant flavors
              </p>
              <a href="https://www.opentable.ca/restref/client/?restref=1369162&lang=en-CA&ot_source=Restaurant%20website&corrid=5bf72732-61ae-4212-819f-e4966c7fa423">
                <button className="mt-6 px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
                  Reserve a Table
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Welcome to Sumoki
        </h2>
        <p className="text-center max-w-2xl mx-auto text-lg">
          At Sumoki Yakitori, we bring the authentic taste of Japanese yakitori
          and traditional dishes to life. Enjoy our cozy atmosphere, perfect for
          gatherings, celebrations, or a quiet night out.
        </p>
      </section>

      {/* Menu Highlights Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Our Menu Highlights
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/8472632/pexels-photo-8472632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Signature Dish"
              className="object-cover h-48 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Sushi Platter</h3>
              <p className="text-gray-600 mt-2">
                Freshly crafted sushi with premium ingredients.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/17593640/pexels-photo-17593640/free-photo-of-soup-with-egg.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Signature Dish"
              className="object-cover h-48 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Ramen Bowl</h3>
              <p className="text-gray-600 mt-2">
                Hearty ramen with rich broth and fresh toppings.
              </p>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/17692192/pexels-photo-17692192/free-photo-of-stir-fired-meat-on-stick.png?auto=compress&cs=tinysrgb&w=800"
              alt="Signature Dish"
              className="object-cover h-48 w-full"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold">Yakitori Skewers</h3>
              <p className="text-gray-600 mt-2">
                Grilled chicken skewers with a savory glaze.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic">
              "The best Japanese food I've ever tasted! Highly recommend the
              sushi platter."
            </p>
            <h4 className="mt-4 font-bold text-right">- John Doe</h4>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic">
              "Sumoki has an amazing atmosphere and the staff are incredibly
              friendly."
            </p>
            <h4 className="mt-4 font-bold text-right">- Jane Smith</h4>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <p className="text-gray-600 italic">
              "The yakitori skewers are to die for. Will definitely be coming
              back!"
            </p>
            <h4 className="mt-4 font-bold text-right">- Alex Brown</h4>
          </div>
        </div>
      </section>

      {/* Events & Offers Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Events & Special Offers
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">Sake Tasting Night</h3>
            <p className="text-gray-600 mt-2">
              Join us on the first Friday of every month for a curated sake
              tasting experience.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold">Happy Hour</h3>
            <p className="text-gray-600 mt-2">
              Enjoy 50% off on select drinks every Tuesday and Thursday from 5
              PM to 7 PM.
            </p>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">Gallery</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-6 max-w-6xl mx-auto">
          <img
            src="https://images.pexels.com/photos/7508611/pexels-photo-7508611.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image"
            className="rounded-lg shadow-lg object-cover h-[300px] w-full"
          />
          <img
            src="https://images.pexels.com/photos/941193/pexels-photo-941193.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image"
            className="rounded-lg shadow-lg object-cover h-[300px] w-full"
          />
          <img
            src="https://images.pexels.com/photos/20344623/pexels-photo-20344623/free-photo-of-top-view-of-soup.png?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image"
            className="rounded-lg shadow-lg object-cover h-[300px] w-full"
          />
          <img
            src="https://images.pexels.com/photos/5761694/pexels-photo-5761694.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image"
            className="rounded-lg shadow-lg object-cover h-[300px] w-full"
          />
          <img
            src="https://images.pexels.com/photos/15641522/pexels-photo-15641522/free-photo-of-people-eating-in-a-small-japanese-restaurant.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image"
            className="rounded-lg shadow-lg object-cover h-[300px] w-full"
          />
          <img
            src="https://images.pexels.com/photos/5779238/pexels-photo-5779238.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Gallery Image"
            className="rounded-lg shadow-lg object-cover h-[300px] w-full"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Contact & Business Hours
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Contact Details</h3>
            <p>
              <strong>Phone:</strong> +1(905)944-9556
            </p>
            <p>
              <strong>Email:</strong> sumokicorp@gmail.com
            </p>
            <p>
              <strong>Address:</strong> 9-18 Fred Varley Drive, Unionville,
              Ontario L3R 1S3, Canada
            </p>
          </div>

          {/* Business Hours */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-bold mb-3">Business Hours</h3>
            <ul>
              <li>Monday: Closed</li>
              <li>Tuesday - Friday: 05:00 PM - 11:00 PM</li>
              <li>Saturday - Sunday: 12:00 PM - 11:00 PM</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Find Us Here
        </h2>
        <div className="max-w-4xl mx-auto">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2876.5567982229386!2d-79.31507412381201!3d43.865014071092794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d5ca01a1ac55%3A0xa9c427c4a189500!2s18%20Fred%20Varley%20Dr%20Unit%209%2C%20Unionville%2C%20ON%20L3R%201S3%2C%20Canada!5e0!3m2!1sen!2sus!4v1732588281674!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Home;
