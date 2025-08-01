import Hero from "@/components/Hero"
import MyGrid from "@/components/myGrid"
import RecentProjects from "@/components/recentProjects"
import Testimonial from "@/components/testimonial"
import { Experience } from "@/components/experience"

import { FloatingNav } from "@/components/ui/floatingNavbar"
import Proccess from "@/components/proccess"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className=" relative bg-black-100  text-white flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 px-5">
      <div className=" w-full ">
        <FloatingNav
          navItems={[
            {
              name: "Home",
              link: "#home",
            },
            {
              name: "About",
              link: "#about",
            },
            {
              name: "Projects",
              link: "#projects",
            },
            {
              name: "Testimonials",
              link: "#testimonials",
            },
            {
              name: "Contact",
              link: "#contact",
            },
          ]}
        />
        <Hero />
        <MyGrid />
        <RecentProjects />
        <Testimonial />
        <Experience />
        <Proccess />
        <Footer />
      </div>
    </main>
  )
}
