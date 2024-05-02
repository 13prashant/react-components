import { Separator } from "./ui/separator";
import { whoWeAreItems } from "./helpers";
import { CONTACT_NUMBER } from "../lib/constants";

export default function WhoWeAre() {
  return (
    <section>
      <div className="rc-container flex flex-col md:flex-row gap-10 duration-300">
        {/* CTA------------------------------------------------------------starts here */}
        <div className="flex flex-col gap-5 md:w-1/2">
          <h6 className="text-primary font-bold">WHO WE ARE</h6>
          <h2 className="text-5xl font-bold">
            A little care for your great problems.
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            pariatur sit ex perspiciatis officiis plaxlceat quod libero
            voluptate laboriosam obcaecati!
          </p>
          <div className="grid grid-cols-2">
            {whoWeAreItems.map((item, index) => (
              <div key={index} className="flex gap-3 items-center">
                <span className="bg-primary h-4 w-4 rounded-full"></span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex gap-3 items-center">
            <span className="bg-primary h-14 w-14"></span>
            <div>
              <p className="font-semibold text-muted-foreground">
                24/7 Emergency Towing
              </p>
              <h3 className="text-blue-700 text-2xl">{CONTACT_NUMBER}</h3>
            </div>
          </div>
        </div>
        {/* CTA------------------------------------------------------------ends here */}

        {/* Image------------------------------------------------------------starts here */}
        <div className="w-full md:w-1/2 duration-300 relative mt-4 ml-4">
          <div className="bg-background p-1 absolute -top-5 -left-5">
            <div className="bg-card text-card-foreground w-fit p-5 text-center">
              <h2 className="text-3xl text-primary font-bold">25 +</h2>
              <p>YEARS OF EXPERIENCE</p>
            </div>
          </div>
          <img
            className="h-full w-full object-cover bg-center"
            src="https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/towing-truck-driver-staying-next-to-his-vehicle-e1697119891389.jpg"
            alt="A man repairing car"
          />
        </div>
        {/* Image------------------------------------------------------------ends here */}
      </div>
    </section>
  );
}
