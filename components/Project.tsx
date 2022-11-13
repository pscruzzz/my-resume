import { Divider, Flex, Heading, Stack, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'

interface RoleProps {
  projectRole?: string
  project: string
  startDate: string
  endDate?: string
  location: string
  description?: string
  skills?: string[]
  roleDescriptions?: string[]
}

const hashCode = (s: string) => s.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0)

export const Project: React.FC<RoleProps> = ({ project, description, endDate, projectRole, location, startDate, skills, roleDescriptions }) => {

  const skillsText = skills?.join(", ")

  return (
    <Stack spacing={1}>
      {
        !!projectRole &&
        <Heading as="h3" size={"sm"} id="projectRole">
          {projectRole}
        </Heading>
      }
      <Stack direction="row" spacing={0}>
        <Heading as="h4" size={!projectRole ? "sm" : "xs"}>
          @
        </Heading>
        <Heading id="project" as="h3" size={!projectRole ? "sm" : "xs"}>
          {project}
        </Heading>
      </Stack>
      {
        !!description &&
        <Text fontSize={"xs"} >
          {description}
        </Text>
      }
      <Stack direction="row" spacing={2}>
        <Heading as="h4" fontWeight={"medium"} size={"xs"} color={"gray.500"} id="location">
          {location}
        </Heading>
        <Divider h="auto" w="1px" bg={"gray.300"} orientation='vertical' />
        <Stack direction="row" spacing={1}>
          <Heading as="h4" fontWeight={"medium"} size={"xs"} color={"gray.500"} id="start-date">
            {startDate}
          </Heading>
          <Heading as="h4" fontWeight={"medium"} size={"xs"} color={"gray.500"} id="period">
            -
          </Heading>
          <Heading as="h4" fontWeight={"medium"} size={"xs"} color={"gray.500"} id="end-date">
            {!!endDate ? endDate : "Now"}
          </Heading>
        </Stack>
      </Stack>
      {
        !!roleDescriptions?.length &&
        <UnorderedList id="role-description" pl={4} fontSize={'xs'}>
          {roleDescriptions?.map(roleDescription => {
            return (
              <ListItem key={hashCode(roleDescription)} >
                {roleDescription}
              </ListItem>
            )
          })}
        </UnorderedList>
      }
      {
        !!skills &&
        <Text fontSize={"xs"} color={"gray.500"} >
          Skills: {skillsText}
        </Text>
      }
    </Stack>
  )
}