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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Our City: Porto</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'lg'} py={2}>
                    OBSMUN 2023 will take place in the charismatic city of Porto, Portugal, allowing its 
                    delegates to not only partake in our conference, but also, have the opportunity to discover it! 
                </Text>

                <Text fontSize={'lg'} py={2}>
                    Porto is a truly unique and spectacular city. Located in the Northwest of Portugal, at the mouth of the Douro River. 
                    Porto is a internationally recognised hub for tourism. Also, the city of Porto is widely known for the port wine industry 
                    and its historic centre, attracting thousands of  tourists every year. The citys old town, a UNESCO world heritage site,
                     is characterised by its impressive monuments. Further, ranging from Bolsa Palace and Clérigos Tower to São Francisco Church and the Casa da Música.
                </Text>

                <Text fontSize={'lg'} py={2}>
                    On the first day of OBSMUN 2023, all delegates will be taken on a guided tour of our historical city centre and visit our most exclusive monuments.
                </Text>

                <iframe src='https://www.youtube.com/watch?v=85_YuBEUCJE'></iframe>

            </Container>
        </>
    )
}