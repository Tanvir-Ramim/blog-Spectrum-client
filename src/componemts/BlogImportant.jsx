import { motion } from "framer-motion";
const BlogImportant = () => {

    return (
        < div className="grid lg:grid-cols-2 items-center  lg:mt-20 md:mt-14 mt-8    max-w-[1350px] md:p-0 p-3   m-auto ">
        <motion.div  animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: 0.3,
        repeatDelay: 1
      }} className=" flex justify-center lg:justify-start"    >
         <img  className="w-11/12 rounded-lg" src="https://i.ibb.co/Gt2MbP4/technology-communication-icons-symbols-concept.jpg" alt="" />
        </motion.div>
        
        <div className=" flex flex-col lg:items-start items-center lg:text-left text-center " >
         <h1 className="text-5xl font-semibold"> Why Important <span className="text-green-400"> Blog?</span> </h1>
         <p className="md:mt-4 md:p-0 p-1 mt-4 font-medium lg:mb-8 bt-5 ">Blogs are important for several reasons. They are a valuable platform for sharing information, knowledge, and ideas across a wide range of topics, making them powerful educational resources and tools for staying updated on various subjects. Blogging also allows individuals and businesses to establish themselves as experts in their respective fields, fostering trust and authority. In the realm of marketing, blogs are instrumental for promoting products, services, and personal brands, contributing to content marketing efforts, attracting organic traffic, and engaging with target audiences. Additionally, search engines favor websites with regularly updated content, enhancing their visibility and search engine rankings. Blogs also create opportunities for engagement and community building, as they enable two-way communication with readers through comments and social media. They serve as platforms for networking, fostering valuable connections with like-minded individuals or businesses. Some bloggers can monetize their content, turning their passion for writing into a source of income through advertising, affiliate marketing, sponsored content, and product sales. Blogging can also be a means of personal development, boosting writing skills, creativity, and self-esteem. Moreover, blogs serve as digital archives, documenting thoughts, experiences, and achievements over time. Overall, blogs offer a versatile and impactful means of communication and expression for individuals and businesses alike.</p>
        </div>
     </div>
    );
};

export default BlogImportant;