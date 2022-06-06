import Image from 'next/image'
import styles from './component.module.css'
import Link from 'next/link'
import { Button, Flex, HStack } from '@chakra-ui/react'

export default function Footer () {
    return (
        <Flex
            w='full'
            justifyContent={'center'}
            alignItems={'center'}
            py={4}
        >
            <HStack
                maxW={'100%'}
                // spacing={{base: 4, md: 8}}
            >
                <Button colorScheme='facebook'>USEFUL CONTACTS</Button>
                <Button colorScheme='facebook'>CONTACT FORM</Button>
                <Button colorScheme='facebook'>PRIVACY POLICY</Button>
            </HStack>
        </Flex>
    )
}