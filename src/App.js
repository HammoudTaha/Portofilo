import "./App.css";
import Me from "./assets/images/me.png";
// import CV from "../public/files/HammoudTahaResume.pdf";
import { useState } from "react";
import { Button, Flex, Text, Box, Image, Link } from "@chakra-ui/react";
import { MdDownload } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function App() {
  return (
    <div className="App" id="home">
      <TopButtons />
      <Box h={100} />
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        bet
      >
        <BasicInfo />
        <Image
          height={500}
          width={400}
          fit={"fill"}
          rounded={"full"}
          src={Me}
        />
      </Flex>
      <Box h={100} />
      <Flex
        direction={"row"}
        justifyContent={"end"}
        gap={5}
        alignItems={"center"}
      >
        <Text fontWeight={"semibold"}>Find Me On</Text>
        <Link
          href="https://github.com/HammoudTaha"
          target="_blank"
          borderColor={"#000011"}
          _focus={{ outline: "none" }}
        >
          <FaGithub color="#1A3CF5" size={"30px"} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/hammoud-taha-66a836331/"
          target="_blank"
          borderColor={"#000011"}
          _focus={{ outline: "none" }}
        >
          <FaLinkedin color="#1A3CF5" size={"30px"} />
        </Link>
      </Flex>
      <Box h={300} />
      <AboutMe />
      <Box h={200} />
    </div>
  );
}

function TopButtons() {
  const [activeIndex, setActiveIndex] = useState(0);
  const buttons = ["Home", "About", "Projects", "Tools"];
  return (
    <Box position={"sticky"} top="5%">
      <Flex justifyContent={"end"} alignItems={"center"}>
        {buttons.map((text, index) => (
          <Button
            key={index}
            variant="plain"
            fontWeight={"semibold"}
            size={"2xl"}
            color={activeIndex !== index ? "white" : "#3750F7"}
            onClick={() => {
              setActiveIndex(index);

              if (index === 1) {
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }
              if (index === 0) {
                document
                  .getElementById("home")
                  .scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {text}
          </Button>
        ))}
        <Button
          color={"#3750F7"}
          height={"14"}
          paddingX={5}
          borderColor={"#3750F7"}
          borderWidth={3}
          variant={"plain"}
          rounded="l3"
          fontWeight={"semibold"}
          size={"2xl"}
        >
          Connect me
        </Button>
      </Flex>
    </Box>
  );
}

function AboutMe() {
  return (
    <Box
      id="about"
      borderLeftWidth="2px"
      borderRightWidth="2px"
      borderLeftColor="white"
      borderRightColor="white"
      padding={10}
      rounded={"2xl"}
    >
      <Text fontWeight={"semibold"} fontSize={"3xl"}>
        About Me
      </Text>
      <Box h={5} />
      <Text fontSize={"2xl"}>
        Results-driven Software Engineer with expertise across the full
        development stack — mobile, backend, and frontend. Skilled in designing
        and building scalable, user-focused applications with clean architecture
        and efficient performance. Adept at collaborating across teams to
        deliver innovative digital solutions, integrating modern frameworks, and
        optimizing systems for reliability and speed. Passionate about
        continuous learning, emerging technologies, and writing high-quality,
        maintainable code that drives real business impact.
      </Text>
    </Box>
  );
}

function BasicInfo() {
  return (
    <Flex flexDirection={"column"} alignItems={"start"}>
      <Text textStyle={"3xl"} fontWeight={"semibold"} textAlign={"start"}>
        Hello guys
      </Text>
      <Box h={5} />
      <Flex gap={5}>
        <Text textStyle={"5xl"} fontWeight={"semibold"} textAlign={"start"}>
          I am
        </Text>
        <Text
          textStyle={"5xl"}
          color={"#3750F7"}
          fontWeight={"semibold"}
          textAlign={"start"}
        >
          Hammoud Taha
        </Text>
      </Flex>
      <Box h={2} />
      <Text
        textStyle={"xl"}
        color={"#858798"}
        fontWeight={"semibold"}
        textAlign={"start"}
      >
        Software Engineer | Mobile Developer | Backend Developer | Frontend
        Developer
      </Text>
      <Box h={10} />

      <Button
        backgroundColor={"#3750F7"}
        size={"lg"}
        variant="solid"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/files/hammoudtaharesume.pdf";
          link.download = "MyDocument.pdf";
          link.click();
        }}
      >
        <MdDownload /> Download CV
      </Button>
    </Flex>
  );
}

export default App;
