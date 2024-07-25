import { useAuth } from "@/Authorization/useAuth";
import { Button } from "@/components/ui/button";

export const About = () => {
  const { user } = useAuth();
  return (
    <div className="flex sm:flex-row flex-col">
      <div className="sm:w-3/5 text-xl flex flex-col gap-5 w-full">
        <section>
          <h1>
            Welcome
            {user ? ` ${user.username}, to our website` : ` to our website`}
          </h1>
          <h1 className="text-3xl text-red-600">We Are Here to Help! </h1>
          <p>
            If you are looking for a reliable business coach with whom you share
            your mind and get the best business advice you’ve been looking for,
            we are here. With 10 years of experience in helping businesses grow,
            we’ve mastered the skills of studying the market for you and helping
            you cope up with the latest trends that’ll take your business to the
            next level.
          </p>
        </section>
        <section>
          <h1 className="text-3xl text-red-600">Why Choose Us? </h1>
          <p>
            We are well-experienced business professionals with younger minds.
            Passion & Commitment Honesty & Openness Dedicated Team Practical
            Approach
          </p>
        </section>
        <div className="flex flex-row gap-4 mt-5">
          <a href="/contact">
            <Button
              type="submit"
              className="bg-green-600 rounded-xl text-xl  p-6"
            >
              Connect now
            </Button>
          </a>
          <a href="/service">
            <Button
              type="submit"
              className="bg-green-600 rounded-xl text-xl  p-6"
            >
              Learn more
            </Button>
          </a>
        </div>
      </div>
      <div className="sm:w-2/5 w-full">
        <img
          src="/images/about.png"
          alt="coding buddies "
          className="rounded-lg mt-5"
        />
      </div>
    </div>
  );
};
