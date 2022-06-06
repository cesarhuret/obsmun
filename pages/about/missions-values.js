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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Mission & Values</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'lg'} py={2}>
                    At OBSMUN, we aim to provide the best Model United Nations experience possible for our delegates. 
                    Year after year, we strive to organise the best conference possible, including a touch of innovation 
                    and modernisation into the mix to assure that we evolve, along competitive times. With the benefit 
                    of being located in a superb and historical city, OBSMUN, is much more than a Model United Nations conference, it is an experience.
                </Text>

                <Text fontSize={'lg'} py={2}>
                    We are proud to have already hosted hundreds of delegates at our conferences, and we hope, to host many more in the near future. 
                    Especially at our most approaching conference, OBSMUN 2023. 
                </Text>

                <Text fontSize={'lg'} py={2}>
                    We strive to give back to our community, and be charitable, with just last year, having donated a large sum from our proceeds to a Portuguese Charity 
                    linked with aiding the Family and Friends of those with Cancer, Acreditar.
                </Text>


            </Container>
        </>
    )
}