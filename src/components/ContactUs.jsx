import React from "react";

function ContactUs() {
  return (
    <div>
      <div id="contact-us" className=" bg-[#eeeeee] pt-20 ">
        <div className=" bg-[#571b7e] p-8 w-[90%] flex flex-col justify-self-center rounded-t-4xl intersect:motion-preset-slide-up motion-delay-0 ">
          <h1 className="text-5xl font-kalnia font-semibold text-center text-[#fefffc] pt-20">
            Get in Touch, Anytime
          </h1>
          <div className="flex max-md:flex-col max-md:items-center justify-center gap-10 pt-20 pb-10">
            <div className="flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#010101"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLineJoin="round"
                  className="lucide lucide-instagram-icon lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </span>
              <a
                className=" text-gray-300 font-jost text-xl hover:text-gray-400 transition-all ease-linear "
                href="https://www.instagram.com/the_crimson_bites?igsh=cTJpYXQ5emYwdWsz"
                target="_blank"
              >
                @the_crimson_bites
              </a>
            </div>
            <div className=" flex gap-3">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#010101"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  class="lucide lucide-phone-icon lucide-phone"
                >
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                </svg>
              </span>
              <span className=" text-gray-300 text-xl font-jost" href="">
                +91 9353172127
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
