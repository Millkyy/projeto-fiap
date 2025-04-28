import { useEffect, useState } from "react";
import styled from "styled-components";

const ProgressBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 4px;
  background: #FF005C;
  width: ${(props) => props.scroll}%;
  z-index: 1001;
`;

function Timeline() {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScroll(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <ProgressBar scroll={scroll} />;
}

export default Timeline;
