import { Scroll } from "scrollex";
// import Container from "scrollex/dist/components/Container";
import "./index.css";
import Hero from './components/hero';


const keyframes = {
  heading : ({ section, container }) => ({
    [section.topAt("container-bottom")] : {
      translateX:-container.width,
    },    
    [section.topAt("container-top") - container.height / 4] : {
      translateX:0,
    },    
    [section.topAt("container-top") + container.height / 4] : {
      translateX:0,
    },    
    [section.bottomAt("container-top")] : {
      translateX:container.width,
    },
  }),
};



export default function App() {
  return (
    <Scroll.Container scrollAxis="y" className="h-screen">
      <Scroll.Section className="h-screen center bg-1">
        <Scroll.Item keyframes={keyframes.heading}>
          <Hero />         
          {/* <h1 className="text-6xl">Page One</h1> */}
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-2">
      <Scroll.Item keyframes={keyframes.heading}>
          <h1 className="text-6xl">Main Section</h1>
        </Scroll.Item>
      </Scroll.Section>
      <Scroll.Section className="h-screen center bg-1">
      <Scroll.Item keyframes={keyframes.heading}>
          <h1 className="text-6xl">Footer</h1>
        </Scroll.Item>
      </Scroll.Section>
    </Scroll.Container>
  );
}
