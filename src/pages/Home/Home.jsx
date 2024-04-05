import { Welcome } from "./Sections/Welcome/Welcome";
import { Cloud } from "./Sections/Cloud/Cloud";
import { WhatIsIt } from "./Sections/WhatIsIt/WhatIsIt";
import { Testimonial } from "./Sections/Testimonial/Testimonial";
import { News } from "./Sections/News/News";
import { Features } from "./Sections/Features/Features";

export const Home = () => {
  return (
    <>
      <Welcome />
      <main className="container">
        <Cloud />
        <WhatIsIt />
        <Features />
        <Testimonial />
        <News />
      </main>
    </>
  );
};
