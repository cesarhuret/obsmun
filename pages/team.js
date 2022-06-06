import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";

export default function Footer () {
    return (
        <>
            <Box
                backgroundColor={'blue.800'}
                py={{base: 16, md: 24}}
            >
                <Flex
                    justify={'center'}
                    alignContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Team</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'lg'} py={2}>
                    At OBSMUN, a panel of experienced Students take lead of the organisational and logistical aspect of the conference. 
                    In order to assure its smooth running, and as per common procedure in MUN’s as per the United Nations Secretariat and leadership structure itself. 
                    These Students are the key people responsible in bringing OBSMUN to life.
                </Text>

            </Container>
        </>
    )
}