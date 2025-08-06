import React from "react";
import { Car } from "lucide-react";
import FooterNavItems from "@/components/common/FooterNavItems";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-700 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold text-white">
                Champion Driving
              </span>
            </div>
            <p className="text-slate-400">
              Your trusted partner in learning to drive safely and confidently.
              Join thousands of satisfied students who&apos;ve earned their
              license with us.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <FooterNavItems />
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Business Hours
            </h4>
            <div className="space-y-2 text-slate-400">
              <p>Monday - Friday: 7AM - 9PM</p>
              <p>Saturday - Sunday: 8AM - 7PM</p>
              <p className="text-slate-300 font-medium">
                Call for emergency lessons
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">
            © 2025 Champion Driving School. All rights reserved. | Licensed by
            the State Department of Motor Vehicles
          </p>
          <p className="mt-4">
            Developed by{" "}
            <span className="text-blue-500 cursor-pointer">
              A<sup>2</sup>S<sup>2</sup>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
