import { posts } from "@/constants/data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Form",
  description: "You should contact with us with bellow form",
};

const ContactPage = () => {
  return (
    <div className='min-h-screen pt-20 px-20'>
      {posts.map((post) => (
        <div className='p-10 my-5 shadow' key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.description}</p>
          {post.title1 && <h5 className="border-t py-5">{post.title1}</h5>}
          {post.subDesc && <p>{post.subDesc}</p>}
        </div>
      ))}
    </div>
  );
};

export default ContactPage;
