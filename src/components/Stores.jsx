import waveEffectImage from "../assets/waveEffectImage.png";

function Stores() {
  return (
    <div className="intersect-once intersect:motion-preset-slide-up motion-delay-200">
      <div>
        <img
          src={waveEffectImage}
          className=" w-full h-[340px] -z-40  max-lg:object-cover"
          alt=""
        />
      </div>
      <div id="stores" className="bg-[#892bc7] py-5 -mt-1">
        <h1 className="text-5xl font-kalnia font-semibold text-center text-[#fefffc]">
          Find Us Near You!
        </h1>
        <div className=" grid grid-cols-2 gap-6 px-20 max-sm:px-10 py-32">
          <div className=" max-lg:col-span-2 w-full place-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.101628582912!2d74.84052718715819!3d13.0658531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba353ca0119a791%3A0xf3fbdb8acb8960ef!2sTHE%20CRIMSON%20BITES!5e0!3m2!1sen!2sin!4v1755535745787!5m2!1sen!2sin"
              className="rounded-xl w-11/12 max-md:w-full h-60"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" max-lg:col-span-2 w-full place-items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248818.66878033706!2d74.54516860074507!3d12.985170700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba3514d4f34a1ff%3A0x46ddfbfcf97702c8!2sTHE%20CRIMSON%20BITES!5e0!3m2!1sen!2sin!4v1755536202372!5m2!1sen!2sin"
              className="rounded-xl w-11/12 max-md:w-full h-60"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stores;
