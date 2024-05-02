import { ourTeamItems } from "./helpers";
import { Button } from "./ui/button";

export default function OurTeam() {
  return (
    <section>
      <div className="rc-container flex flex-col gap-10 md:flex-row duration-300">
        {/* CTA------------------------------------------------------------starts here */}
        <div className="flex flex-col gap-5 md:w-1/2">
          <h6 className="text-primary font-bold">OUR TEAM</h6>
          <h2 className="text-5xl font-bold">
            If you can laugh together, you can work together.
          </h2>
          <p className="">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            pariatur sit ex perspiciatis officiis plaxlceat quod libero
            voluptate laboriosam obcaecati!
          </p>
          <Button className="w-fit rounded-none">DISCOVER MORE</Button>
        </div>
        {/* CTA------------------------------------------------------------ends here */}

        {/* Cards------------------------------------------------------------starts here */}
        <div className="flex flex-col gap-5">
          {ourTeamItems.map((item) => (
            <div key={item.id} className="bg-card p-5 relative ml-7">
              <div className="w-14 h-14 bg-primary absolute top-1/2 -translate-y-1/2 -left-7"></div>
              <div className="ml-7">
                <h6 className="text-primary text-md font-bold">{item.title}</h6>
                <p className="text-white">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Cards------------------------------------------------------------ends here */}
      </div>
    </section>
  );
}
