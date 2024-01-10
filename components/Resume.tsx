import { Divider, Flex, Heading, Stack, Text, Link, UnorderedList, ListItem } from '@chakra-ui/react'
import Head from 'next/head'
import { Education } from './Education'
import { Internships } from './Internships'
import { Language } from './Language'
import { Project } from './Project'
import { Role } from './Role'
import { QuickRole } from './QuickRole'

interface ResumeProps {
  isPDF?: boolean
}

export const Resume: React.FC<ResumeProps> = ({ isPDF = false }) => {
  return (
    <Stack spacing={2} direction={"column"} align="center" justify="center" w="100%" className='cvWrapper'>
      <Stack align="center" justify="center" spacing={2} className={"cvHeader"}>
        <Heading as="h1" size={"md"}>
          Pedro dos Santos Cruz
        </Heading>
        <Stack align="center" justify={"center"} direction={isPDF ? "row" : { base: "column", lg: "row" }} spacing={isPDF ? 2 : { base: 0, lg: 2 }} className={"cvLinks"}>
          <Link href="https://github.com/pscruzzz" target="_blank">
            <Text id="github" fontSize={"sm"}>
              github.com/pscruzzz
            </Text>
          </Link>
          <Divider display={isPDF ? "flex" : { base: "none", lg: "flex" }} h="25px" w="1px" bg={"gray.300"} orientation='vertical' />
          <Link href="https://linkedin.com/in/pedrosantoscruz" target="_blank">
            <Text id="linkedin" fontSize={"sm"}>
              linkedin.com/in/pedrosantoscruz
            </Text>
          </Link>
          <Divider display={isPDF ? "flex" : { base: "none", lg: "flex" }} h="25px" w="1px" bg={"gray.300"} orientation='vertical' />
          <Text id="email" fontSize={"sm"}>
            pedro.scruz@icloud.com
          </Text>
          <Divider display={isPDF ? "flex" : { base: "none", lg: "flex" }} h="25px" w="1px" bg={"gray.300"} orientation='vertical' />
          <Text id="phone" fontSize={"sm"}>
            +55 21 99566-6449
          </Text>
        </Stack>
      </Stack>
      <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
      <Stack align="center" spacing={2}>
        <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
          Summary
        </Heading>
        <Text id="summary" fontSize={"xs"}>
          I&apos;m enthusiastic about coding and new technologies. My early trajectory brought a lot of business related knowledge, that complements my passion for problem solving, specially when it comes to programatic solutions. I often work with Golang, Node (with Typescript) or .NET Core in the backend, while in the frontend I commonly use ReactJS (also with Typescript) and NextJS!
        </Text>
      </Stack>
      <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
      <Stack spacing={isPDF ? 0 : { base: 4, lg: 0 }} direction={isPDF ? "row" : { base: "column", lg: "row" }} w="100%" justify={"space-between"} className={"cvContent"}>
        <Stack justify="flex-start" spacing={4} pr={isPDF ? 1 : { base: 0, lg: 1 }} w={isPDF ? "48%" : { base: "100%", lg: "48%" }}>
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Professional Experience
            </Heading>
            <Role
              company='VTEX'
              jobTitle='Backend - Software Engineer - OMS'
              location='Rio de Janeiro'
              startDate='01/2023'
              description={[
                "Develop and maintain 9 backend services that composes the Order Management Systems.",
                "Projects: PII Compliant Subscriptions, Order Workflow Resilience, Disaster Recovery Plans",
              ]}
              skills={["AWS", ".Net Core", "C#", "Docker", "Jenkins"]}
            />
            <Role
              company='VTEX'
              jobTitle='Backend - Software Engineer - Connections'
              location='Rio de Janeiro'
              startDate='06/2022'
              endDate='01/2023'
              description={[
                "Develop and maintain key external marketplace connections, from catalog integration to order-placement.",
              ]}
              skills={["AWS", ".Net Core", ".Net Framework", "C#", "Docker", "Jenkins"]}
            />
            <Role
              company='VTEX'
              jobTitle='FullStack - Software Engineer'
              location='Rio de Janeiro'
              startDate='06/2021'
              endDate='05/2022'
              description={[
                "Develop end-to-end applications that composes VTEX ecosystem (App Store) or product;",
                "Architect, develop and present sponsored applications for major VTEX clients (such as Samsung and Carrefour)."
              ]}
              skills={["AWS", "Typescript", "Node", "ReactJS", "GraphQL"]}
            />
            <QuickRole
              company='VTEX'
              jobTitle='Partner Solutions Engineer'
              location='Rio de Janeiro'
              startDate='07/2020'
              endDate='05/2021'
            />
            <QuickRole
              company='Spot Educação'
              jobTitle='Financial Planning Assistant'
              location='Rio de Janeiro'
              startDate='05/2020'
              endDate='06/2020'
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
              startDate='09/2019'
              endDate='04/2020'
            />
            <Internships
              company='Coca-Cola Brazil'
              internship="Commercial Finances Intern"
              location='Rio de Janeiro'
              startDate='01/2019'
              endDate='08/2019'
            />
            <Internships
              company='G4 Global Partners'
              internship="Business Intelligence & Finances Intern"
              location='Rio de Janeiro'
              startDate='05/2018'
              endDate='12/2018'
            />
          </Stack>
        </Stack>
        <Divider display={isPDF ? "flex" : { base: "none", lg: "flex" }} h={"auto"} w={"0.5px"} bg={"gray.300"} orientation='vertical' />
        <Divider display={isPDF ? "none" : { base: "flex", lg: "none" }} h={"0.5px"} w={"100%"} bg={"gray.300"} orientation='horizontal' />
        <Stack justify="flex-start" spacing={4} pl={isPDF ? 1 : { base: 0, lg: 1 }} w={isPDF ? "48%" : { base: "100%", lg: "48%" }}>
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Side Projects
            </Heading>
            <Project
              project="Shared Stream"
              location='Rio de Janeiro'
              startDate='07/2022'
              description={"Content management platform for streamers. This project is still under development."}
              roleDescriptions={["Develop and architect the entire product, as well as business designing."]}
              skills={["Golang", "ReactJS", "Docker", "Pulumi", "ECS", "Elasticache", "ECR", "SES"]}
            />
            <Project
              project="Trizi E-commerce"
              location='Rio de Janeiro'
              startDate='01/2022'
              description={"E-commerce for handmade products"}
              roleDescriptions={["Develop and architect the entire product."]}
              skills={["ReactJS", "Stripe", "NextJS", "Chakra UI", "Lambda"]}
            />
          </Stack>
          <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
          <Stack justify="flex-start" spacing={4}>
            <Heading as="h3" size={"sm"} fontWeight={"normal"} color={"gray.500"}>
              Education
            </Heading>
            <Education
              institution='Amazon'
              degree="Advanced Developing on AWS"
              location='Rio de Janeiro'
              startDate='07/2021'
              endDate='07/2021'
              skills={["SQS", "Lambda", "IAM", "ECS", "ECR", "Dynamo", "VPC", 'Elasticache']}
            />
            <Education
              institution='Full Cycle'
              degree="Full Cycle Developer Bootcamp"
              location='Rio de Janeiro'
              startDate='06/2021'
              endDate='12/2021'
              skills={["Golang", "Docker", "Kafka", "AWS"]}
            />

            <Education
              institution='Rocketseat'
              degree="FullStack Developer Bootcamp"
              location='Rio de Janeiro'
              startDate='01/2020'
              endDate='07/2020'
              skills={["Typescript", "Node", "ReactJS", "NextJS", "Docker"]}
            />
            <Education
              institution='Pontifical Catholic University of Rio de Janeiro'
              degree="Business Administration Bachelor's Degree"
              location='Rio de Janeiro'
              startDate='06/2016'
              endDate='06/2020'
            />
          </Stack>
          <Divider h="0.5px" w="100%" bg={"gray.300"} orientation='horizontal' />
          <Stack justify="flex-start" spacing={2}>
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
