import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Benefit highlights",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Incubation your projects",
      desc: "Ability to nurture your projects from the early stages.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Faster product acquisition",
      desc: "Higher chances of selling your ideas to potential investors.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Exponential growth with mentorship",
      desc: "Grow in every step of your journey with our mentors.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "More benefits...",
  desc: "You can use this platform to pivot your startup ideas quicker to potential investors.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Become a mentor",
      desc: "Guide other people in the community after gaining experience.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Earn on the platform",
      desc: "Get paid for writing inciteful articles on this platform.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Iterate on new ideas and get patents quicker",
      desc: "Zero to hero real quick with our patenting of ideas.",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
