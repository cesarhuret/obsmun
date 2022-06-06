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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Latest Conference: OBSMUN 2022</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'lg'} py={2}>
                    The 3rd to 5th February OBSMUN 2022 conference was a widely successful on-line conference with delegates joining from all around the world.
                    With a large selection of different nationalities shown from delegates it was most definitely an international conference, connecting many 
                    different nationalities and alternative views in a controlled environment. Many participants were able to improve on various skills such 
                    as Public Speaking, Debate skills, and research skills, whilst having a fun time. Alternative activities for delegates to get to know each 
                    other ensued during this “out of the ordinary” conference, stilxl allowing delegates to connect within themselves.
                </Text>

                <Text fontSize={'lg'} py={2}>
                    The event was hosted from the Natixis in Porto Office with support in planning and organisation from the Natixis in Porto Team and 
                    the Oporto British School Administrative Team, Students and Staff.
                </Text>

                <Text fontSize={'lg'} py={2}>
                    It was with great pleasure that the Secretary General of OBSMUN 2022 declared on the 5th of February at 4:56 PM, the closing of the OBSMUN 2022 
                    and invited all participants to join all future conferences.
                </Text>


            </Container>
        </>
    )
}