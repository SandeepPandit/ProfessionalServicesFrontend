import { Button } from "@/components/ui/button";

export const Admin = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="sm:flex sm:flex-row flex flex-col">
        <div className="sm:w-2/3 sm:p-10 w-full">
          <h1 className="text-4xl font-mono font-bold tracking-tight text-red-600">
            Take Control of Your
          </h1>
          <h1 className="text-4xl font-mono font-bold tracking-tight text-red-600">
            {" "}
            Business with Our
          </h1>
          <h1 className="text-4xl font-mono font-bold tracking-tight text-red-600">
            World-Class Coaching
          </h1>
          <p className="text-xl font-sans">
            Are you ready to elevate your business to new heights? Our
            world-class coaching program is designed to empower you with the
            skills, knowledge, and strategies you need to succeed in
            today&apos;s competitive market. Whether you&apos;re a seasoned
            entrepreneur or just starting out, our expert coaches will provide
            personalized guidance tailored to your unique goals and challenges.
            With our support, you can streamline your operations, enhance your
            leadership abilities, and achieve sustainable growth. Don&apos;t let
            obstacles hold you back—take control of your business journey and
            unlock your full potential with our unparalleled coaching services.
            Join us today and start transforming your business vision into
            reality!
          </p>
          <div className="flex flex-row sm:gap-4 mt-5 gap-3 mb-5">
            <a href="/contact">
              <Button
                type="submit"
                className="bg-green-600 rounded-xl text-xl  p-6"
              >
                connect now
              </Button>
            </a>
            <a href="/service">
              <Button
                type="submit"
                className="bg-green-600 rounded-xl text-xl  p-6"
              >
                learn more
              </Button>
            </a>
          </div>
        </div>

        <div className="sm:w-1/3 p-2 w-full">
          <img
            src="/images/home.png"
            alt="coding together"
            width="400"
            height="500"
          />
        </div>
      </div>

      <div className="flex sm:flex-row mt-20 flex-col-reverse">
        <div className="sm:w-2/5 p-2 w-full">
          <img
            src="/images/design.png"
            alt="coding together"
            width="400"
            height="500"
          />
        </div>

        <div className="sm:w-3/5 sm:p-10 w-full">
          <h1 className="text-4xl font-mono font-bold tracking-tight text-red-600">
            We help teams build a business of their dreams with our services.
          </h1>
          <p className="text-xl font-sans">
            Identify Goals We work closely with you to understand and identify
            your business goals that can be converted into an actionable plan.
          </p>
          <p className="text-xl font-sans">
            Bring Ideas to Life The ideas and plans that we’ve jotted will then
            be brought to life. We help and guide you to take the first step and
            set things up.
          </p>
          <p className="text-xl font-sans">
            Business Expansion Setting up a business is not enough. We help you
            think ahead and encourage you to expand your business with a
            full-proof plan.
          </p>
        </div>
      </div>
    </div>
  );
};
