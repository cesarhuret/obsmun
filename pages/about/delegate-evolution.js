import { Box, Button, Container, Flex, HStack, Image, Text } from "@chakra-ui/react";
import Head from 'next/head'

export default function Footer () {
    return (
        <>
            <Head>
                <title>OBSMUN | Delegate Evolution</title>
            </Head>
            <Box
                backgroundColor={'blue.800'}
                py={{base: 16, md: 24}}
            >
                <Flex
                    justify={'center'}
                    alignContent={'center'}
                    alignItems={'center'}
                >
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Delegate Evolution</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'lg'} py={2}>
                    During OBSMUN, we are proud to time after time, see an astounding increase in the self-confidence and participation of our Delegates. 
                    Looking at statistics from our most recent MUN, OBSMUN 2022, it is possible to see an exponential increase in the Delegates participation,
                    which goes to prove how OBSMUN is a learning experience for all.
                </Text>

                <Text fontSize={'lg'} py={2}>
                    At OBSMUN, we are used to receiving delegates with no previous MUN experience, which are allocated designated committees where they can develop 
                    their skills, and, successfully, by the end of our conferences, they are more than experienced at MUN!
                </Text>

                <Image py={6} src='/delegate-evolution.png' maxW={'100%'}/>

                <Text fontSize={'lg'} py={2}>
                    Furthermore, at OBSMUN 2023, there will be a Clause and Procedure workshop organised by the committee chairs on the first day for all delegates to 
                    work on their skills and seek help may they need it. This will ensure all delegates are equally prepared and ready for debate!
                </Text>

                <Text fontSize={'lg'} py={2}>
                    Additionally, all delegates should know that all of the Chairs at OBSMUN are more than happy to assist their delegates to ensure they are following 
                    all correct procedure. After all, OBSMUN is a learning experience.
                </Text>

            </Container>
        </>
    )
}