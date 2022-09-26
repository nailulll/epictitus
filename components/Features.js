import Image from "next/image";
import InfoPost from "./InfoPost";

const Features = () => {
  return (
    <article>
      <div className="-mx-6 flex">
        <div className="w-8/12 px-4">
          <Image
            src="https://source.unsplash.com/random/?computer"
            alt="Landscape picture"
            width={1000}
            height={450}
            className="rounded-xl object-cover"
          />
        </div>
        <div className="w-4/12 px-4">
          <InfoPost
            category="UI Design"
            date="July, 2022"
            title="Understanding Color Theory"
            shortDescription="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?"
            authorName="Lestie"
            authorJob="UI Designer"
            authorAvatar="https://source.unsplash.com/random/?people"
          />
        </div>
      </div>
    </article>
  );
};
export default Features;
