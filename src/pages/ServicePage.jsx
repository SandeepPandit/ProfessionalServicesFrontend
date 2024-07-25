import { useAuth } from "@/Authorization/useAuth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Service = () => {
  const { services } = useAuth();

  return (
    <div className="flex flex-col">
      <div className="p-10">
        <h1 className="font-bold text-4xl">Services Provided By Us</h1>
      </div>

      <div className="flex flex-col gap-4">
        {services.map((curElem, index) => {
          const { price, description, provider, service, image } = curElem;

          return (
            <Card key={index} className="bg-purple-600 flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-white">{service}</CardTitle>
                <CardDescription className="text-xl text-white">
                  By {provider}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? "animate__animated animate__rubberBand" : ""
                      }
                    >
                      <img
                        src={image}
                        alt="our services info"
                        className="w-full aspect-video"
                      />
                    </div>
                  )}
                </TrackVisibility>
              </CardContent>
              <CardDescription className="text-xl text-white p-4">
                {description}
              </CardDescription>
              <CardFooter className="text-2xl text-white">{price}</CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
