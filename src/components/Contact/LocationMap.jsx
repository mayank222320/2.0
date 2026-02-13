import React from 'react';
import { MapPin, Navigation, Clock, Phone } from 'lucide-react';

export default function LocationMap() {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
     {/* Header */}
<div className="p-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
  <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
    
    {/* Left - Address */}
    <div className="flex items-start gap-3">
      <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
      <div>
        <h3 className="text-lg font-semibold mb-1">
          EyeQlytics Office Location
        </h3>
        <p className="text-blue-100 text-sm leading-relaxed">
          EyeQlytics Technologies<br />
          10/81, Near SJP Petrol Pump,<br />
          Bidkin, Chhatrapati Sambhaji Nagar,<br />
          Maharashtra, India - 431105
        </p>
      </div>
    </div>

    {/* Right - Status and Phone */}
    <div className="flex flex-col gap-2 text-sm text-blue-100 sm:items-end">
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-1" />
        <span>Open Now</span>
      </div>
      <div className="flex items-center">
        <Phone className="h-4 w-4 mr-1" />
        <span>+91-9970283329</span>
      </div>
    </div>
  </div>
</div>

      {/* Map */}
      <div className="h-96 bg-gray-100">
      <iframe
  title="EyeQlytics Technologies Office Location - Bidkin"
  src="https://www.openstreetmap.org/export/embed.html?bbox=75.29069%2C19.70348%2C75.31069%2C19.72348&layer=mapnik&marker=19.71348%2C75.30069"
  width="100%"
  height="100%"
  loading="lazy"
  style={{ border: 'none' }}
  className="rounded-b-xl"
></iframe>


      </div>

      {/* Footer */}
      {/* Footer */}
<div className="p-4 bg-gray-50 border-t border-gray-200">
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
    <div className="text-sm text-gray-600">
      <strong>Landmark:</strong> Near SJP Petrol Pump, Bidkin
    </div>
    <a
      href="https://www.google.com/maps/place/EyeQlytics+Technologies+Private+Limited/@19.71333,75.2995593,18z/data=!3m1!4b1!4m6!3m5!1s0x3bdb75000559d075:0x7666c35146bfc58b!8m2!3d19.71333!4d75.3006032!16s%2Fg%2F11wy761gcy!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDcwOS4wIKXMDSoASAFQAw%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
      style={{
        background: 'linear-gradient(to right, #0039a6, #04327b)',
      }}
    >
      <Navigation className="h-4 w-4 mr-2" />
      Get Directions
    </a>
  </div>
</div>

    </div>
  );
}
