import React from 'react';

const BLogCommunity = () => {
    return (
        <div className='flex md:flex-row flex-col mt-8 lg:p-0  p-3 mb-5 gap-8 max-w-[1400px] m-auto'>
             <div className='md:w-3/4'>
             <div className="collapse collapse-plus bg-base-200 mb-2">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
  Information Sharing
  </div>
  <div className="collapse-content "> 
    <p>Blogs are a powerful platform for sharing information, knowledge, and ideas on a wide range of topics. They can serve as valuable educational resources, helping people learn about new subjects, stay updated on current events, or gain insights into niche interests.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200 mb-2">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Engagement and Community Building
  </div>
  <div className="collapse-content"> 
    <p>Blogs facilitate two-way communication with readers through comments and social media. They create opportunities for engagement and discussion, allowing bloggers to connect with their audience and build a community around shared interests.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Personal Development
  </div>
  <div className="collapse-content"> 
    <p>Blogging can be a form of self-expression and personal growth. It encourages writers to clarify their thoughts, develop their writing skills, and explore their creativity. Over time, it can also boost confidence and self-esteem.</p>
  </div>
</div>
             </div>
             <div className='md:w-2/3'>
                  <h1 className='text-2xl font-semibold mb-2'>People Need To Join Blog Community</h1>
                  <p>Joining a blog community is important for bloggers for several compelling reasons. First and foremost, it provides a platform for networking with fellow bloggers who share similar interests or niches. This networking can lead to valuable collaborations, guest posting opportunities, and knowledge sharing. Blogging communities also offer support and mentorship, allowing bloggers to seek guidance and advice from more experienced peers, which can be instrumental for newcomers navigating the world of blogging.</p>
                  <div className='flex md:justify-start justify-center lg:mt-0 mt-3'>
                  <button className='p-5 lg:mt-5  rounded-3xl  border-[2px] border-black'>Have A Conversation</button>
                  </div>
             </div>
        </div>
    );
};

export default BLogCommunity;