function About() {
  return (
    <section className="container mx-auto">
      <article className="">
       <h1>My Name is Gabriel, Nice to meet you</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
          iste? Omnis labore maiores, esse fuga dolorum doloremque quae
          inventore nesciunt?
        </p>

        <img src="" alt="" />
      </article>

      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sequi
        excepturi quos velit sint nemo perferendis. Corrupti eos excepturi ipsum
        cum neque ex voluptatibus voluptates, quae laudantium tempora harum hic
        amet aperiam modi nisi assumenda deserunt quo dolorem labore est
        consequuntur similique eveniet aliquam aspernatur. Id temporibus nisi
        exercitationem veniam!
      </main>

      <TechStack />
    </section>
  );
}

export default About;

import AzureImage from "../assets/AZURE.png";
import CSSImage from "../assets/CSS.png";
import GITImage from "../assets/GIT.png";
import HTMLImage from "../assets/HTML.png";
import NodeImage from "../assets/NODE.png";
import ReactImage from "../assets/REACT.png";
import TailwindImage from "../assets/TAILWIND.png";
import VueImage from "../assets/VUE.png";

function TechStack() {
  const images = [
    { Name: "Azure", Img: AzureImage },
    { Name: "CSS", Img: CSSImage },
    { Name: "GIT", Img: GITImage },
    { Name: "HTML", Img: HTMLImage },
    { Name: "Node", Img: NodeImage },
    { Name: "React", Img: ReactImage },
    {
      Name: "Tailwind",
      Img: TailwindImage,
    },
    { Name: "Vue", Img: VueImage },
  ];

  return (
    <div className="techstack-container bg-violet-500 flex flex-col items-center rounded-lg">
      <h1 className="text-3xl font-bold mb-4">My Techstack</h1>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div
            className="card mx-4 my-4 flex flex-col items-center"
            key={index}
            style={{ width: "calc(100% / 4 - 2rem)" }}
          >
            <div className="image-container bg-gray-500 w-32 h-32 flex items-center justify-center rounded-md">
              <img className="w-24 h-24" src={image.Img} alt={image.Name} />
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}
