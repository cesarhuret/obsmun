import { Box, Image, Text } from "@chakra-ui/react";
import { Stack } from "react-bootstrap";

export default function Home() {

  return (
    <>
      <Box
        position={'relative'}
      >
        <Image height={'100vh'} width={'auto'} objectFit={'cover'} src='/1.JPG' />
        <Box
          position={'absolute'}
          left={'50%'}
          top={'50%'}
          transform={'translate(-50%, -50%)'}
        >
          <Stack
            direction={{ base: "column", md: "row" }}
          >
            <Image src='/logo.png' />
          </Stack>
          
        </Box>
      </Box>
    </>
  )
}
