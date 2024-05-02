import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ourValueItems } from "./helpers";

export default function OurValue() {
  return (
    <section>
      {/* Title------------------------------------------------------------starts here */}
      <div className="bg-[url('https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/white-arrow-on-asphalt-road-traffic-sign-e1697705634143.jpg')] bg-no-repeat bg-cover">
        <div className="bg-blue-950/70">
          <div className="rc-container flex w-full justify-center">
            <div className="max-w-xl flex flex-col gap-4 justify-center items-center text-center mb-10">
              <h6 className="text-primary font-bold">OUR VALUE</h6>
              <h3 className="text-4xl text-white font-bold">
                A little care for your great problems
              </h3>
              <p className="text-white">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
                pariatur sit ex perspiciatis officiis plaxlceat quod libero
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Title------------------------------------------------------------ends here */}

      <div className="rc-container !py-0 -mt-20">
        <div className="bg-card text-card-foreground flex flex-col md:flex-row items-center duration-300">
          {/* Accordion------------------------------------------------------------starts here */}
          <div className="flex flex-col gap-4 p-10">
            <h4 className="text-3xl">
              We talk a lot about hope helping and teamwork.
            </h4>
            <p className="text-card-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Distinctio, aliquam!
            </p>

            <Accordion type="single" collapsible>
              {ourValueItems.map((value) => (
                <AccordionItem key={value.id} value={`item-${value.id}`}>
                  <AccordionTrigger className="text-primary">
                    {value.title}
                  </AccordionTrigger>
                  <AccordionContent>{value.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Accordion------------------------------------------------------------ends here */}

          {/* Image------------------------------------------------------------starts here */}
          <div className="w-full md:w-1/2 duration-300">
            <img
              className="h-full w-full"
              src="https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/shipping-brand-new-car-to-dealership-e1697119727587.jpg"
              alt="A man repairing car"
            />
          </div>
          {/* Image------------------------------------------------------------ends here */}
        </div>
      </div>
    </section>
  );
}
