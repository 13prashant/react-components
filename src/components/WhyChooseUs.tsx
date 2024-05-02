import { Button } from "./ui/button";
import { detailedCards } from "./helpers";

export default function WhyChooseUs() {
  return (
    <section className="bg-[url('https://kit.creativemox.com/stockytow/wp-content/uploads/sites/6/2023/10/road-top-view-e1697655167718.jpg')] bg-no-repeat bg-cover">
      <div className="bg-blue-950/70">
        <div className="rc-container flex flex-col gap-10 xl:flex-row xl:justify-between xl:items-center duration-300">
          <div className="flex flex-col gap-5">
            <h6 className="text-primary font-bold">WHY CHOOSE US</h6>
            <h2 className="text-5xl text-white font-bold">
              Call us for the best moving experience.
            </h2>
            <p className="text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
              pariatur sit ex perspiciatis officiis plaxlceat quod libero
              voluptate laboriosam obcaecati!
            </p>
            <Button className="w-fit rounded-none">DISCOVER MORE</Button>
          </div>
          <div className="flex flex-wrap gap-8">
            {detailedCards.map((card) => (
              <div
                key={card.id}
                className="bg-card py-10 px-4 flex flex-col items-center gap-2 w-full xl:max-w-xs group hover:bg-primary duration-300"
              >
                <div className="w-14 h-14 bg-primary group-hover:bg-white duration-300"></div>
                <h4 className="text-primary group-hover:text-white duration-300">
                  {card.title}
                </h4>
                <p className="text-white text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}