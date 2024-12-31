import { AnimatedTestimonials } from "../Components/ui/animated-testimonials";

// This component demonstrates the usage of the AnimatedTestimonials component
export function AnimatedTestimonialsDemo() {
  // Sample testimonials data to be displayed in the AnimatedTestimonials component
  const testimonials = [
    {
      quote:
        "Search for solutions from closed cases Sales Force data ,Collected and analysed TR Chat , New producte update and Regualtions of service countries .",
      name: "TR Search Engine", // Name of the person giving the testimonial
      designation: "context Based", // Their job title and organization
      src: "https://media.licdn.com/dms/image/D5612AQHyazpvjJcFaQ/article-cover_image-shrink_720_1280/0/1694493183661?e=2147483647&v=beta&t=fUyB3rK5LLsERyAK3c7ZbURIt9EY74q0VQcIiZVdhPw", // Image URL
    },
    {
      quote:
        "Chat with senior team members to get real-time expert advice.If you think resolution is satisfactory and clear save as propte for future ai traning and suggestion ",
      name: "TR Chat Panel",
      designation: "Chat and save answer as a propmt if satisfactory ",
      src: "https://spikesite-17132.kxcdn.com/wp-content/uploads/Chat-Etiquette-Essentials-for-Teams-16_9-1024x576.png",
    },
    {
      quote:
        " Save and rate solutions to build a growing knowledge base, improving accuracy over time.",
      name: "TR Rating ",
      designation:
        "Rate to appriciate friend and also to traine  the AI  model for future suggestion",
      src: "https://img.pikbest.com/wp/202405/depicting-the-rating-system-depicted-in-3d-rendering-with-five-stars_9839956.jpg!w700wp",
    },
    {
      quote:
        "Use AI-powered suggestions to provide the most effective and relevant answers to common issues.",
      name: "TR Buddy",
      designation: "AI buddy with packed resolution and  fast intraction  ",
      src: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fu288yd0kh3t6mg85m8tn.jpg",
    },
  ];

  // Render the AnimatedTestimonials component and pass the testimonials data as a prop
  return <AnimatedTestimonials testimonials={testimonials} />;
}
