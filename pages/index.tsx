import type { NextPage } from 'next'
import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Image,
  HStack,
  Container,
} from '@chakra-ui/react';


const Home: NextPage = () => {
  return (
    <>
      <Flex
        w={'full'}
        h={'94vh'}
        backgroundImage={
          'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <Stack
          w={'full'}
          justify={'center'}
          align={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgColor={'whiteAlpha.500'}
          spacing={6}
          direction={{ base: "column", md: "row" }}
        >
          <Image
              maxH={'300px'}
              maxW={'300px'}
              src='/herologo.png'
              alt='OBSMUN 2023'
            />
          <Stack maxW={'2xl'} align={'flex-stretch'} spacing={2}>
            <Text
              color={'blue.900'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              OBSMUN 2023
            </Text>
            <Stack direction={'row'}>
              <Text
                color={'blue.900'}
                fontWeight={400}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}>
                3rd to 5th February 2023
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
      <VStack
        w={'full'}
        pt={'10'}
        fontSize={'xl'}
        fontWeight={300}
      >
        <HStack 
          w='full'
          ml={useBreakpointValue({ base: 4, md: 16 })}
        >
        <VStack
          w={'full'}
          py={useBreakpointValue({ base: 4, md: 8 })}
          ml={useBreakpointValue({ base: 4, md: 16 })}
          align={'left'}
          justify={'left'}
          maxW={useBreakpointValue({ base: '100%', md: '40%', lg: '40%' })}
          spacing={6}
        >
          <Text
            lineHeight={1.7}
          >
            “OBSMUN 2023 is a <b>portal into the world of diplomacy and foreign relations</b>, 
            allowing its participants to develop their knowledge on the United Nations Organisation and excel at Organised Debate.
          </Text>
          <Text
            lineHeight={1.7}
          >
            I strongly encourage anyone interested in these areas to participate in OBSMUN. 
            Where, with our wide selection of Committees, anyone and everyone is more than welcome to participate!”
          </Text>
          <Text
            lineHeight={1.4}
          >
            <b>
            Pedro Pinho 
            <br/>
            Secretary General at OBSMUN
            </b>
          </Text>
        </VStack>
        </HStack>
        <Flex
          w='full'
          align={'right'}
          justify={'right'}
          mr={useBreakpointValue({ base: 4, md: 16 })}
        >
          <VStack
            w={'full'}
            py={useBreakpointValue({ base: 4, md: 8, lg: 8 })}
            mr={useBreakpointValue({ base: 4, md: 16, lg: 16 })}
            align={'right'}
            justify={'right'}
            maxW={useBreakpointValue({ base: '100%', md: '40%', lg: '40%' })}
            spacing={6}
          >
          <Text
            lineHeight={1.7}
          >
            During the Oporto British School Model United Nations conference, 
            delegates have the distinct opportunity to <b> develop their knowledge and also, skills alongside enthusiastic delegates from around the globe! </b>
          </Text>
          <Text
            lineHeight={1.7}
          >
            The Oporto British School Model United Nations is a yearly international conference organised by Students attending Oporto British School.
            Year after year, it has proven to be <b>a success</b>, and in 2022, in an effort to push through complicated times, OBSMUN came back again, in a different, but On-line format, 
            still proving to be widely successful and getting back to be on track as one of <b>Portugals most successful</b> international 
            High-school Model United Nations Conferences.
          </Text>
          </VStack>
        </Flex>
      </VStack>
    </>
  )
}

export default Home