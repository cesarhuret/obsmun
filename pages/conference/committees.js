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
                    <Text fontSize={{base: '2xl', md: '5xl'}} color={'white'}>Our Committees</Text>
                </Flex>
            </Box>
            <Container
                maxW={'container.lg'}
                py={{base: 4, md: 8}}
            >
                <Text fontSize={'xl'} pt={4}><strong>ECOSOC</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    The Economic and Social Council is responsible for <strong>promoting higher standards of living, employment for all,
                    and economic and social progress.</strong> ECOSOC is also responsible for identifying solutions to international economic,
                    social and health problems; facilitating international cultural and educational cooperation; encouraging universal 
                    respect for human rights and fundamental freedoms. The Economic and Social Council at OBSMUN unites a plethora of nations 
                    from around the globe to <strong>address issues of noteworthy impact and immediate urgency for resolution.</strong>
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>HUMAN RIGHTS</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    The Human Rights Committee was established in 2006 and is described as <strong>&quot;the body of independent experts that monitors the implementation 
                    of the International Covenant on Civil and Political Rights by its State parties.&quot;</strong> 
                    It is responsible for monitoring civil and political rights. It has carried this out by encouraging universal peace and equality with innumerable 
                    — not only innovative but also traditional — ways. 
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>GENERAL ASSEMBLY</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    The General Assembly is one of the main six organs of the United Nations. It was first founded in 1945, in New York City, in New York, USA.
                    It is the only organ in which all member States have equal representation and voting rights. All 193 Member States of the United Nations are
                    represented in this forum to discuss and work together on a wide array of international issues. 
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>SECURITY COUNCIL</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    The United Nations Security Council is responsible for the maintenance of international peace and security. The Security Council determines the
                    existence of a threat to peace or international security, or potentially aggressive disputes between nations. The Council unites 15 member states
                    to find solutions to these threats and disputes, usually by peaceful means, however, the council may also impose sanctions to parties in order to
                    maintain international security and peace. In extreme cases, the Council may resort to the authorisation of force in order to restore international security.
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>DISARMAMENT AND INTERNATIONAL SECURITY</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    The United Nations Disarmament and International Security Committee was established in 1993, it is the first and one of the main committees of the General Assembly.
                    The role of DISEC is defined in Chapter IV, Article 11 of the United Nations Charter which states, &quot;The General Assembly may consider the general principles of
                    co-operation in the maintenance of international peace and security, including the principles governing disarmament and the regulation of armaments and may make
                    recommendations with regard to such principles to the Members or to the Security Council or to both&quot;. According to this article, the decree of DISEC is emphasised
                    as, <strong>&quot;to promote the establishment and maintenance of international peace and security with the least diversion for armaments of the world&apos;s human and economic
                    resources&quot;.</strong>
                </Text>

                <Text fontSize={'xl'} pt={4}><strong>WORLD HEALTH ORGANIZATION</strong></Text>
                <Text fontSize={'lg'} pb={2}>
                    The World Health Organization became installed in 1948 and consists of 193 Member States. Headquartered in Geneva, Switzerland, the organization&apos;s 
                    position is to function as the “authority for fitness in the United Nations system,” and to provide “management on worldwide fitness matters.” Current 
                    goals of the WHO are specified in a Six-Point Agenda geared toward responding to the demanding situations of an increasing number of complicated and swiftly 
                    converting landscape” of worldwide public fitness. 
                </Text>

                <Text fontSize={'lg'} py={2}>The factors at the time table are:</Text>
                <Text fontSize={'lg'}><strong>(1) selling development;</strong></Text>
                <Text fontSize={'lg'}><strong>(2) fostering fitness security;</strong></Text>
                <Text fontSize={'lg'}><strong>(3) strengthening fitness systems;</strong></Text>
                <Text fontSize={'lg'}><strong>(4) harnessing research, records and evidence;</strong></Text>
                <Text fontSize={'lg'}><strong>(5) improving partnerships;</strong></Text>
                <Text fontSize={'lg'}><strong>(6) enhancing performance.</strong></Text>

            </Container>
        </>
    )
}