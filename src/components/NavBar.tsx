import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"

const NavBar = () => {
  return (
    <HStack>
        <Image src={logo} boxSize={10 }/>
    </HStack>
  )
}

export default NavBar
