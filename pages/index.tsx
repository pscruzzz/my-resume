import { Divider, Flex, Heading, Stack, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import { Resume } from '../components/Resume'


export default function Index() {
  return (
    <Flex align="center" justify="center">
      <Head>
        <title>Pedro Cruz CV</title>
        <meta name="description" content="Pedro Cruz CV" />
      </Head>

      <Stack align="center" justify="center" w="100%" minH="100vh" maxWidth="794px" className='cvContainer' py={8}>
        <Resume />
      </Stack>
    </Flex >
  )
}
