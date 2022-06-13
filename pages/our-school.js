import { Box, Button, Container, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import Head from 'next/head'

export default function Footer () {
    return (
        <>
            <Head>
                <title>OBSMUN | Our School</title>
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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Our School</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.md'}
                py={{base: 4, md: 8}}
            >

                <Text fontSize={'3xl'} pt={4}><strong>OPORTO BRITISH SCHOOL</strong></Text>
                <Text fontSize={'xl'} pb={4}><i><Link href='https://www.instagram.com/oportobritishschool/'>@oportobritishschool</Link></i></Text>

                <Text fontSize={'lg'}>
                    The Oporto British School is the oldest British school in continental Europe. It dates back to 1894, 
                    and since then OBS has devoted itself to help students excel.
                </Text>
                <Text fontSize={'lg'}>
                    Known for its warm welcome, small class-sizes and very friendly environment, the OBS takes pride in being a unified community,
                    a family. The OBS also takes its culture of respect, manners and academic rigour to the utmost of importance in order for every
                    student to lead a successful academic career in a safe environment.
                </Text>
                <Text fontSize={'lg'}>
                    The OBS motto is &quot;Knowledge. Vision. Humanity.&quot;; every student, parent and staff member embodies this 
                    motto in order to enhance the sense of community the school has.
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>Vision</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    Oporto British School aims to be an inspirational institution of thinking and learning, promoting excellence from all our pupils,
                    and developing the compassionate, responsible leaders of the future.
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>Mission</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    To do everything possible to motivate each and every child here, and work to ensure they do the best they possibly can in their 
                    academic work and other areas of their lives. In doing this, we combine tradition with forward-thinking educational practice, providing a dynamic, 
                    high-quality and internationally-minded experience to develop creative, compassionate and inquiring life-long learners and leaders.
                </Text>

                <Text fontSize={'lg'}>Find more info at <Link href='http://www.obs.edu.pt/'>OBS</Link></Text>

            </Container>
        </>
    )
}