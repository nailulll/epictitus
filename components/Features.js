import Image from "next/image";

const Features = () => {
  return (
    <article>
      <div className="flex -mx-6">
        <div className="px-4 w-8/12">
          <Image
            src="https://source.unsplash.com/random/?computer"
            alt="Landscape picture"
            width={1000}
            height={450}
            className="rounded-xl"
          />
        </div>
        <div className="px-4 w-4/12">
          <div className="flex items-center text-white/60 space-x-4">
            <div className="uppercase">UI Design</div>
            <span>&bull;</span>
            <div>july, 2022</div>
          </div>
          <h2 className="text-2xl mt-6">Understanding Color Theory</h2>
          <p className="text-white/60 mt-4 w-10/12">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla illum molestias quod vel saepe ipsum quaerat nam nihil magni, aliquam minima laboriosam earum, blanditiis non, harum nesciunt doloribus iure illo?</p>
          <div className="flex items-center mt-4">
            <Image src="https://source.unsplash.com/random/?people" alt="people" width={50} height={50} className="rounded-full object-cover" />
            <div className="ml-6">
              <h3>lestie</h3>
              <p className="text-white/60 text-sm">UI Designer</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
export default Features;
