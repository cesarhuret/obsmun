import { Box, Button, Container, Flex, HStack, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import Head from 'next/head'

const members = [
    {
        name: 'Pedro Pinho',
        image: '/pedro.jpg',
        title: 'Secretary General & Head of Operations'
    },
    {
        name: 'Matheus Drehmer',
        image: '/matheus.jpg',
        title: 'Deputy Secretary General & Head of Hosting'
    },
    {
        name: 'Maria Cerqueira',
        image: '/maria.jpg',
        title: 'Chief of Staff & Head of Logisitics'
    },
    {
        name: 'Cesar Huret',
        image: '/cesar.jpg',
        title: 'Head of IT Services & Website Developer'
    }
]

export default function Team () {
    return (
        <>
            <Head>
                <title>OBSMUN | Team</title>
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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Team</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'lg'} py={2}>
                    At OBSMUN, a panel of experienced Students take lead of the organisational and logistical aspect of the conference. 
                    In order to assure its smooth running, and as per common procedure in MUN&apos;s as per the United Nations Secretariat and leadership structure itself. 
                    These Students are the key people responsible in bringing OBSMUN to life.
                </Text>

                <Stack
                    py={{base: 6, md: 12}}
                    direction={{ base: "column", md: "row" }}
                    alignItems="center"
                >
                    {
                        members.map((member, index) => (
                            <Flex key={index} w="full" alignItems="center" justifyContent="center">
                                <Box
                                    bg={'white'}
                                    maxW="sm"
                                    borderWidth="1px"
                                    rounded="lg"
                                    shadow="lg"
                                    position="relative"
                                >

                                    <Image
                                    src={member.image}
                                    alt={`Picture of ${member.name}`}
                                    roundedTop="lg"
                                    />
                                    <Box p="6">
                                        <Flex mt="1" justifyContent="space-between" alignContent="center">
                                            <Box
                                                fontSize="xl"
                                                fontWeight="semibold"
                                                as="h4"
                                                lineHeight="tight"
                                                isTruncated
                                            >
                                            {member.name}
                                            </Box>
                                        </Flex>
                                        <Text fontWeight={300}>{member.title}</Text>
                                    </Box>
                                </Box>
                            </Flex>
                        ))
                    }
                </Stack>
            </Container>
        </>
    )
}