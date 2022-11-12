import { Divider, Flex, Heading, Stack, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'

interface RoleProps {
  language: string
  level: string
}


export const Language: React.FC<RoleProps> = ({ language, level }) => {


  return (
    <Stack spacing={1}>
      <Heading as="h3" size={"sm"} id="projectRole">
        {language}
      </Heading>
      <Heading as="h4" fontWeight={"medium"} size={"xs"} color={"gray.500"} id="location">
        {level}
      </Heading>
    </Stack>
  )
}