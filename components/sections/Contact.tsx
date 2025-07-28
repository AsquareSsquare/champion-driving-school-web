import React from "react";
import ContactForm from "@/components/core/ContactForm";
import { contactOptions } from "@/constants/data";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="w-full max-w-7xl mx-auto px-6 xl:px-0 py-32">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent hover:from-slate-200 hover:to-slate-400 transition-all duration-300 cursor-default">
            Ready to Start Driving?
          </h1>
          <p className="text-xl text-slate-300 hover:text-white transition-colors duration-300 cursor-default">
            Book your first lesson today and take the first step towards
            independence
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6 mt-20">
          <div className="space-y-6">
            {contactOptions.map((contact, index) => (
              <div
                key={index}
                className="flex items-center group cursor-pointer hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${contact.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 group-hover:shadow-lg`}
                >
                  <contact.icon className="h-6 w-6 text-white group-hover:scale-110 transition-all duration-300" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors duration-300">
                    {contact.label}
                  </p>
                  <p className="text-white font-medium group-hover:text-slate-200 transition-colors duration-300">
                    {contact.value}
                  </p>
                </div>
              </div>
            ))}
            <div className="h-[280px] w-[350px] aspect-square rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.8810822668797!2d87.6673028!3d22.2445903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02b785b3e4d665%3A0x232b67515b96a325!2sChampion%20driving%20training%20school!5e0!3m2!1sen!2sin!4v1753703509532!5m2!1sen!2sin"
                width="350"
                height="280"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
