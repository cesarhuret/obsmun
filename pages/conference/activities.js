import { Box, Button, Container, Flex, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";

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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Conference Activities</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Stack
                    direction={{ base: "column", md: "row" }}
                    alignItems="center"
                    spacing={12}
                >
                    <Box
                        textAlign={'right'}
                        maxW={'40%'}
                    >
                        <Text fontSize={'xl'}><strong><i>Committee Debate Times</i></strong></Text>
                        As expected, the main focus and time spent during the conference will be the allocated Committee Debate time, 
                        where delegates will have the possibility to embody countries in a reenactment of a selection of the United Nations 
                        current committees. The committees are where most of the development in terms of skill gaining and growth happen, 
                        since delegates are strongly incentivised to participate and express their Countries&apos; views. This is the highlight 
                        of OBSMUN, as by the end, to compliment of all the debate, in the form of clauses, a resolution, is compiled and voted on.
                    </Box>
                    <VStack maxW={'40%'}>
                        <Box>
                            <Text fontSize={'xl'}><strong><i>Seminars & Workshops</i></strong></Text>
                            At OBSMUN 2023, all delegates will have the opportunity to assist three different seminars from expert speakers with intriguing stories to tell.
                            There will also be a Clause and Procedure worksop organised to  make sure all delegates are aware of the procedure they should follow and have
                            great clauses to present!
                        </Box>

                        <Box>
                            <Text fontSize={'xl'}><strong><i>Social Event & Coffee Breaks</i></strong></Text>
                            OBSMUN 2023 will allow delegates to make global connections between themselves, and during the Social event randomised delegate “tables” will be created,
                            so that delegates are able to meet new people. Also, between all committee sessions, there will be coffee breaks, allowing delegates to have a chat and 
                            catch up with others!
                        </Box>
                    </VStack>
                </Stack>

            </Container>
        </>
    )
}