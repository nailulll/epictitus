import { useState } from "react";
import NavBar from "../components/NavBar";
import Features from "../components/Features";
import CardPost from "components/CardPost";
import Footer from "components/Footer";
import Container from "../components/Container";

export default function Home() {
  const [post, setPost] = useState([
    {
      thumbnail: "https://source.unsplash.com/random/?tech",
      category: "Internet",
      date: "Aug, 2022",
      title: "How To Create Internet",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?",
      authorAvatar: "https://source.unsplash.com/random/?people",
      authorJob: "Web Developer",
      authorName: "Saya Sendiri",
    },
    {
      thumbnail: "https://source.unsplash.com/random/?hack",
      category: "Hack",
      date: "Jun, 2022",
      title: "Hacking",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?",
      authorAvatar: "https://source.unsplash.com/random/?Anonymous",
      authorJob: "Cycber Security",
      authorName: "Anonymous",
    },
    {
      thumbnail: "https://source.unsplash.com/random/?Health",
      category: "Health",
      date: "Janu, 2022",
      title: "Dont Stress",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?",
      authorAvatar: "https://source.unsplash.com/random/?doctor",
      authorJob: "Web Developer",
      authorName: "Doc. Alice",
    },
    {
      thumbnail: "https://source.unsplash.com/random/?eco",
      category: "ECO",
      date: "May, 2022",
      title: "How To Create Tree",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?",
      authorAvatar: "https://source.unsplash.com/random/?farmer",
      authorJob: "Web Developer",
      authorName: "Digi",
    },
    {
      thumbnail: "https://source.unsplash.com/random/?Hospital",
      category: "Health",
      date: "Dec, 2022",
      title: "Dont Stress, Follow My Intruction",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?",
      authorAvatar: "https://source.unsplash.com/random/?doctor",
      authorJob: "Web Developer",
      authorName: "Doc. Alice",
    },
    {
      thumbnail: "https://source.unsplash.com/random/?earth",
      category: "ECO",
      date: "July, 2019",
      title: "How To Create Tree",
      shortDescription:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam repellat ad, harum deleniti, adipisci ducimus perspiciatis hic omnis sunt ea, nostrum fugit cupiditate maxime fuga quis placeat corrupti vero voluptate?",
      authorAvatar: "https://source.unsplash.com/random/?farmer",
      authorJob: "Web Developer",
      authorName: "Digi",
    },
  ]);
  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-b from-gray-600 to-gray-900 text-white">
      <NavBar />
      <Container>
        <Features />
        <div className="-mx-6 flex flex-wrap py-5">
          {post.map((post) => (
            <div className="w-4/12 px-4" key={post.date}>
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
      <Footer />
    </div>
  );
}
