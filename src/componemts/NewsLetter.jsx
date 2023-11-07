import Swal from "sweetalert2";


const NewsLetter = () => {
     const handleNewLetter=(e)=>{
            e.preventDefault()
            const form=e.target

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Thank you for subscribing to our Newsletter",
                showConfirmButton: false,
                timer: 1500
              });

         
            form.reset()
     }
    return (
        <div  className="max-w-[1200px] lg:p-0 p-3 lg:mb-20 mb-12 md:mt-14 lg:mt-20 m-auto">
            <div className="flex md:flex-row flex-col  gap-8">
            <div className="md:w-3/5">
              <h1 className="text-3xl mb-3 font-medium "><span className="text-green-500">Subscribe</span> to Our Newsletter</h1>
              <p>Blog Spectrum Church partners with you and your family. Every week we send out an email providing helpful links to the week's content, guides for kids and students so they can follow along at home, as well as updated news and information that are important to Blog Spectrum Church as a whole and specific to our campuses across San Diego County.</p>
            </div>
            <div className="flex justify-center">
                <form onSubmit={handleNewLetter} className="space-y-4" >
                   <input name="name" placeholder="Name" className="border block border-gray-400 w-80 text-lg  p-4 rounded-3xl" type="text" />
                    
                    <input  placeholder="Email Address" className="border block border-gray-400 w-80 text-lg  p-4 rounded-3xl" type="email" name="email" id="" required/>

                    <input className="border block border-gray-400 bg-[#11192BA8] w-80 text-lg  p-4 rounded-3xl text-white" type="submit" value="Subscribe" required/>

                </form>
            </div>
            </div>
        </div>
    );
};

export default NewsLetter;