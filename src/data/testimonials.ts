export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "We called with an emergency order as we were driving into the valley from Orange County. We didn't have a file to send, just the text, material request, and we knew we needed it fast. We called sign stores all over and no one could help us. When we reached Advanced Sign and Banner he was ready to jump in and get the job done. We had all the specs in at 12:15 and he had a proof to us by 12:30. At his shy of 1:00 pm the sign was done and was better than we expected! We thought we would be getting a rush job paper banner. The sign we were replacing was more expensive and made of lightweight paper. This is a vinyl sign that is about $30 less and done 6 days and 23 hours faster! Great service, thanks for saving us from our disaster and getting us a better product than we had before.",
    name: "Julianna S.",
    title: "Customer",
    company: "Laguna Beach, CA",
    projectType: "Commercial",
  },
  {
    id: 2,
    quote:
      "Great printing great pricing. Got exactly what I expected, everything was exactly right. Needed to have shirts pretty much 24 hours later and they were able to deliver. Would definitely use again.",
    name: "Carlos R.",
    title: "Customer",
    company: "Chicago, IL",
    projectType: "Commercial",
  },
  {
    id: 3,
    quote:
      "Short notice, and long order? This placed rescued me, from myself. You know there are times, when you/I just keep dragging something until the very last minute? Well, these guys make it work for you, without gauging you over the price. Honest, respectable and fast service.",
    name: "Alireza H.",
    title: "Customer",
    company: "West Hills, CA",
    projectType: "Commercial",
  },
  {
    id: 4,
    quote:
      "These guys have a really nice shop and look like they do quality work for all needs and sizes. I am really impressed by the way they treated me and my little job as the big deal it was for me. They were patient and very nice about my changes and my job came out perfect. This is where my printing business will go.",
    name: "Scott R.",
    title: "Developer",
    company: "",
    projectType: "Commercial",
  },
  {
    id: 5,
    quote:
      "The Little Gym of Calabasas Sends all our work directly to this wonderful printing company!! Fast, great work and very friendly!! Think of Advanced Sign & Banner when you need a printer.",
    name: "Vickie S.",
    title: "Owner",
    company: "The Little Gym of Calabasas",
    projectType: "Commercial",
  },
  {
    id: 6,
    quote:
      "My husband and I have been working with Advanced Signs for years...the work is great, the price is fair and dealing with a family owned business you know that they really care about doing a great job. We have used them for Real Estate Signs, big and small, car magnets, posters, banners....even printing off 5,000 flyers for an initiative at our son's school, they turned it around fast and the price was right. Yushea and Marcela are awesome, honest and good people.",
    name: "Wynne T.",
    title: "Customer",
    company: "Los Angeles, CA",
    projectType: "Commercial",
  },
  {
    id: 7,
    quote:
      "Honestly, we picked this place solely due to it's great yelp reviews, and they did not disappoint! I went in to print a banner for my boyfriends mma fight with his sponsors logos and everything came out crystal clear. The great thing is you can design it yourself. Reasonably priced and will be going back!",
    name: "Amanda T.",
    title: "Customer",
    company: "Los Angeles, CA",
    projectType: "Commercial",
  },
  {
    id: 8,
    quote:
      "They really came through for us in a crunch time! And with excellent quality too!!! They know their stuff and can offer great recommendations on what will be best for your particular situation and needs. Can't wait to use them again!",
    name: "Susan A.",
    title: "Customer",
    company: "West Hills, CA",
    projectType: "Commercial",
  },
  {
    id: 9,
    quote:
      "Love this place! Yusha made everything so easy for me. I needed a 4' x 8' sign for an electrical light box in front of my business. He sent someone out to measure right away and gave me a very reasonable quote on the phone. My sign is amazing and the colors are beautiful. Yusha is very knowledgeable about this type of thing and gives excellent advice. My A-frame sign is very well done also and everything matches perfectly. I felt like I was working with a friend and all the details I was worried about came out great. I really appreciate working with professional businesses that are down to earth and honest. I'm having him do more letters for a window and trust his expertise. The prices are very affordable. Thanks Yusha!",
    name: "Bonnie B.",
    title: "Business Owner",
    company: "North Hollywood, CA",
    projectType: "Commercial",
  },
  {
    id: 10,
    quote:
      "These people are simply awesome! I needed a banner printed the same day and was turned down by my usual shop, but the manager at AS&B very kindly understood my predicament and agreed to print it for me. He directed me to their website, where I could design and submit the banner, and asked me to call him back after I uploaded it so they could do the job right away. The online tool was very easy to use, and the pre-loaded templates made designing my banner a breeze. My banner was printed on time as promised and I was delighted by the high quality of the final product -- vivid colors, sturdy canvas, strong rivets and very reasonable pricing! Many thanks to the great crew at AS&B for saving the day; this is my go-to store from now on, highly recommend them!!!!",
    name: "Nessa E.",
    title: "Customer",
    company: "Woodland Hills, CA",
    projectType: "Commercial",
  },
  {
    id: 11,
    quote:
      "We been doing business with Advanced Sign and Banner for the last seven years, and thought it about time that we provide some public kudos. Their work (materials and printing), their competitive pricing, their design sensibilities and creativity, and their great customer service deserve our mention. We truly hope you try them out and find that they have treated you as well as they have treated us.",
    name: "Shelley's Stereo",
    title: "Long-term Client",
    company: "Shelley's Stereo Video",
    projectType: "Commercial",
  },
  {
    id: 12,
    quote:
      "I am absolutely blown away by the quality and speed of completion and professionalism of Advanced Sign & Banner Founder, Yushea Surti. As an Author, Speaker and Brand Marketing Strategist, I have been looking for a local printer in Southern California who can print stand-up banners, postcards, books and other business branding materials for myself and my clients and my standards for quality is rather high. When Yushea was recommended to me by my own mentor, I didn't hesitate to place an order and I was so pleasantly surprised at the quality of the banners and postcards he printed for me! They were beautiful and are of the best quality! The best part? His pricing is 1/2 less than most printers I have done business with in the past! If you need any kind of printing, I highly suggest you contact Yushea of Advanced Sign and Banner first... You will be glad you did!",
    name: "Emma T.",
    title: "Author & Brand Strategist",
    company: "Huntington Beach, CA",
    projectType: "Commercial",
  },
  {
    id: 13,
    quote:
      "If you need a sign or banner made, this is the place to go. I checked 5 places, and this was the best for a few reasons: 1. Cheaper than anywhere else by A LOT. Kinkos was the second cheapest, but it was still over double the price of here. 2. You can ask them to design your sign for you, rather than having to send them the exact design via email or uploading it for them at their shop. At Advanced Sign and Banner, I just drew a quick idea of what I wanted and gave him creative freedom to choose the font, border, etc. He emailed me a draft of what he would use for the banner, and I approved it, and it was ready the next day. Basically, I had a great experience- the man who made my sign was reliable and very nice, the price was exceptional, it required less effort on my part because I didnt have to fuss with the design, and it was made in a timely manner.",
    name: "Michelle B.",
    title: "Customer",
    company: "Los Angeles, CA",
    projectType: "Commercial",
  },
];

export default testimonials;
