import AsidCard from "@/components/ui/cards/AsidCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design",
  description:
    "In this page we talk about designing and how we have best design",
};

const DesignPage = () => {
  return (
    <div className='min-h-screen p-5 md:p-10  pt-16 grid lg:grid-cols-3 grid-cols-1 md:gap-5'>
      <div className='py-5 col-span-2'>
        <div className='title'>
          <h2 className='md:text-5xl text-4xl tracking-tighter'>What is</h2>
          <h3 className='md:text-9xl text-7xl'>Design?</h3>
        </div>
        <div className='my-5 text-justify leading-7 flex flex-col gap-4'>
          <p>
            Suppose you want to announce or sell something, amuse or persuade
            someone, explain a complicated system or demonstrate a process. In
            other words, you have a message you want to communicate. How do you
            “send” it? You could tell people one by one or broadcast by radio or
            loudspeaker. That’s verbal communication. But if you use any visual
            medium at all—if you make a poster; type a letter; create a business
            logo, a magazine ad, or an album cover; even make a computer
            printout—you are using a form of visual communication called graphic
            design.
          </p>
          <p>
            Graphic designers work with drawn, painted, photographed, or
            computer-generated images (pictures), but they also design the
            letterforms that make up various typefaces found in movie credits
            and TV ads; in books, magazines, and menus; and even on computer
            screens. Designers create, choose, and organize these
            elements—typography, images, and the so-called “white space” around
            them—to communicate a message. Graphic design is a part of your
            daily life. From humble things like gum wrappers to huge things like
            billboards to the T-shirt you’re wearing, graphic design informs,
            persuades, organizes, stimulates, locates, identifies, attracts
            attention and provides pleasure. Graphic design is a creative
            process that combines art and technology to communicate ideas. The
            designer works with a variety of communication tools in order to
            convey a message from a client to a particular audience. The main
            tools are image and typography.
          </p>
          <hr />
          <h6 className='font-semibold text-xl'>Image-based design</h6>
          <p>
            Designers develop images to represent the ideas their clients want
            to communicate. Images can be incredibly powerful and compelling
            tools of communication, conveying not only information but also
            moods and emotions. People respond to images instinctively based on
            their personalities, associations, and previous experience. For
            example, you know that a chili pepper is hot, and this knowledge in
            combination with the image creates a visual pun. In the case of
            image-based design, the images must carry the entire message; there
            are few if any words to help. These images may be photographic,
            painted, drawn, or graphically rendered in many different ways.
            Image-based design is employed when the designer determines that, in
            a particular case, a picture is indeed worth a thousand words.
          </p>
          <hr />
          <h6 className='font-semibold text-xl'>Type-based design</h6>
          <p>
            Designers develop images to represent the ideas their clients want
            to communicate. Images can be incredibly powerful and compelling
            tools of communication, conveying not only information but also
            moods and emotions. People respond to images instinctively based on
            their personalities, associations, and previous experience. For
            example, you know that a chili pepper is hot, and this knowledge in
            combination with the image creates a visual pun. In the case of
            image-based design, the images must carry the entire message; there
            are few if any words to help. These images may be photographic,
            painted, drawn, or graphically rendered in many different ways.
            Image-based design is employed when the designer determines that, in
            a particular case, a picture is indeed worth a thousand words.
          </p>
          <hr />
          <h6 className='font-semibold text-xl'>Type-based design</h6>
          <p>
            In some cases, designers rely on words to convey a message, but they
            use words differently from the ways writers do. To designers, what
            the words look like is as important as their meaning. The visual
            forms, whether typography (communication designed by means of the
            printed word) or handmade lettering, perform many communication
            functions. Theycan arrest your attention on a poster, identify the
            product name on a package or a truck, and present running text as
            the typography in a book does. Designers are experts at presenting
            information in a visual form in print or on film, packaging, or
            signs.
          </p>
          <p>
            When you look at an “ordinary” printed page of running text, what is
            involved in designing such a seemingly simple page? Think about what
            you would do if you were asked to redesign the page. Would you
            change the typeface or type size? Would you divide the text into two
            narrower columns? What about the margins and the spacing between the
            paragraphs and lines? Would you indent the paragraphs or begin them
            with decorative lettering? What other kinds of treatment might you
            give the page number? Would you change the boldface terms, perhaps
            using italic or underlining? What other changes might you consider,
            and how would they affect the way the reader reacts to the content?
            Designers evaluate the message and the audience for type-based
            design in order to make these kinds of decisions.
          </p>
          <hr />
          <h6 className='font-semibold text-xl'>Image and type</h6>
          <p>
            Designers often combine images and typography to communicate a
            client’s message to an audience. They explore the creative
            possibilities presented by words (typography) and images
            (photography, illustration, and fine art). It is up to the designer
            not only to find or create appropriate letterforms and images but
            also to establish the best balance between them.
          </p>
          <p>
            Designers are the link between the client and the audience. On the
            one hand, a client is often too close to the message to understand
            various ways in which it can be presented. The audience, on the
            other hand, is often too broad to have any direct impact on how a
            communication is presented. What’s more, it is usually difficult to
            make the audience a part of the creative process. Unlike client and
            audience, graphic designers learn how to construct a message and how
            to present it successfully. They work with the client to understand
            the content and the purpose of the message. They often collaborate
            with market researchers and other specialists to understand the
            nature of the audience. Once a design concept is chosen, the
            designers work with illustrators and photographers as well as with
            typesetters and printers or other production specialists to create
            the final design product.
          </p>
          <hr />
          <h6 className='font-semibold text-xl'>
            Symbols, logos and logotypes?
          </h6>
          <p>
            Symbols and logos are special, highly condensed information forms or
            identifiers. Symbols are abstract representations of a particular
            idea or identity. The CBS “eye” and the active “television” are
            symbolic forms, which we learn to recognize as representing a
            particular concept or company. Logotypes are corporate
            identifications based on a special typographical word treatment.
            Some identifiers are hybrid, or combinations of symbol and logotype.
            In order to create these identifiers, the designer must have a clear
            vision of the corporation or idea to be represented and of the
            audience to which the message is directed.
          </p>
        </div>
      </div>

      <div className='col-span-1 gap-5 p-1 md:p-5 lg:p-10 grid lg:grid-cols-1 md:grid-cols-2'>
        <AsidCard />
        <AsidCard />
        <AsidCard />
        <AsidCard />
      </div>
    </div>
  );
};

export default DesignPage;
