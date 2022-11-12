import { Divider, Flex, Heading, Stack, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import { Education } from './Education'
import { Internships } from './Internships'
import { Language } from './Language'
import { Project } from './Project'
import { Role } from './Role'

export function Resume() {
  return (
    <Stack spacing={4} direction={"column"} align="center" justify="center" w="100%" className='cvWrapper'>
      <Stack align="center" justify="center" spacing={2} className={"cvHeader"}>
        <Heading as="h1" size={"md"}>
          Pedro dos Santos Cruz
        </Heading>
        <Stack align="center" justify={"center"} direction={{ base: "column", lg: "row" }} spacing={{ base: 0, lg: 2 }} className={"cvLinks"}>
          <Link href="https://github.com/pscruzzz" target="_blank">
            <Text id="github" fontSize={"sm"}>
              github.com/pscruzzz
            </Text>
          </Link>
          <Divider display={{ base: "none", lg: "flex" }} h="25px" w="1px" bg={"gray.300"} orientation='vertical' />
          <Text id="email" fontSize={"sm"}>
            pedro.scruz@icloud.com
          </Text>
          <Divider display={{ base: "none", lg: "flex" }} h="25px" w="1px" bg={"gray.300"} orientation='vertical' />
          <Link href="https://linkedin.com/in/pedrosantoscruz" target="_blank">
            <Text id="linkedin" fontSize={"sm"}>
              linkedin.com/in/pedrosantoscruz
            </Text>
          </Link>
        </Stack>
      </Stack>
      <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
      <Stack direction={{ base: "column", lg: "row" }} w="100%" justify={"space-between"} className={"cvContent"}>
        <Stack justify="flex-start" spacing={4} pr={1} w={{ base: "100%", lg: "48%" }}>
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Professional Experience
            </Heading>
            <Role
              company='VTEX'
              jobTitle='Backend - Software Engineer'
              location='Rio de Janeiro'
              startDate='April/2022'
              description={[
                "Developing and maintaining key external marketplace connections, from catalog integration to order-placement with VTEX.",
              ]}
              skills={["AWS", ".Net Core", ".Net Framework", "C#", "Docker", "Jenkins"]}
            />
            <Role
              company='VTEX'
              jobTitle='FullStack - Software Engineer'
              location='Rio de Janeiro'
              startDate='June/2021'
              endDate='May/2022'
              description={[
                "Developing end-to-end applications that composes VTEX ecosystem (App Store) or product;",
                "Architect, develop and present sponsored applications for major VTEX clients (such as Samsung, Carrefour and etc.)."
              ]}
              skills={["AWS", "Typescript", "Node", "ReactJS", "GraphQL"]}
            />
            <Role
              company='VTEX'
              jobTitle='Partner Solutions Engineer'
              location='Rio de Janeiro'
              startDate='July/2020'
              endDate='May/2021'
            />
            <Role
              company='Spot Educação'
              jobTitle='Financial Planning Assistant'
              location='Rio de Janeiro'
              startDate='May/2020'
              endDate='June/2020'
            />
          </Stack>
          <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Internships
            </Heading>
            <Internships
              company='Spot Educação'
              internship="Financial Planning Intern"
              location='Rio de Janeiro'
              startDate='September/2019'
              endDate='April/2020'
            />
            <Internships
              company='Coca-Cola'
              internship="Commercial Finances Intern"
              location='Rio de Janeiro'
              startDate='January/2019'
              endDate='August/2019'
            />
            <Internships
              company='G4 Global'
              internship="Finances Intern"
              location='Rio de Janeiro'
              startDate='October/2018'
              endDate='December/2018'
            />
            <Internships
              company='G4 Global'
              internship="Business Intelligence Intern"
              location='Rio de Janeiro'
              startDate='May/2018'
              endDate='September/2018'
            />
          </Stack>
        </Stack>
        <Divider display={{ base: "none", lg: "flex" }} h="auto" w="0.5px" bg={"gray.300"} orientation='vertical' />
        <Stack justify="flex-start" spacing={4} pl={1} w={{ base: "100%", lg: "48%" }}>
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Personal Projects
            </Heading>
            <Project
              project="Shared Stream"
              projectRole="Founder"
              location='Rio de Janeiro'
              startDate='July/2022'
              description={"Content management platform for streamers"}
              skills={["Golang", "AWS", "Docker", "ReactJS"]}
            />
            <Project
              project="Trizi E-commerce"
              projectRole="Software Engineer"
              location='Rio de Janeiro'
              startDate='January/2022'
              skills={["ReactJS", "Stripe", "NextJS"]}
            />
          </Stack>
          <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Education
            </Heading>
            <Education
              institution='Pontifical Catholic University of Rio de Janeiro'
              degree="Business Administration Bachelor's Degree"
              location='Rio de Janeiro'
              startDate='June/2016'
              endDate='June/2020'
            />
            <Education
              institution='Amazon'
              degree="Advanced Developing on AWS"
              location='Rio de Janeiro'
              startDate='July/2021'
              endDate='July/2021'
              skills={["SQS", "Lambda", "IAM", "ECS", "ECR", "Dynamo", "VPC", 'Elasticache']}
            />
            <Education
              institution='Rocketseat'
              degree="FullStack Developer Bootcamp"
              location='Rio de Janeiro'
              startDate='January/2020'
              endDate='June/2020'
              skills={["Typescript", "Node", "ReactJS", "NextJS", "Docker"]}
            />
            <Education
              institution='Full Cycle'
              degree="Full Cycle Developer Bootcamp"
              location='Rio de Janeiro'
              startDate='January/2020'
              endDate='June/2020'
              skills={["Golang", "Docker", "Kafka"]}
            />
          </Stack>
          <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Languages
            </Heading>
            <Language
              language='English'
              level='Fluent'
            />
            <Language
              language='Portuguese'
              level='Native'
            />
          </Stack>
        </Stack>
      </Stack>
    </Stack >
  )
}
