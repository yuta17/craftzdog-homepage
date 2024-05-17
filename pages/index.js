import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoDocumentOutline,
  IoLogoGithub,
} from 'react-icons/io5'
import thumbKlow from '../public/images/works/klow.webp'

const Home = () => (
  <Layout>
    <Container>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Hassan
          </Heading>
          <p>Freelance Rails developer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/hassan.png"
            alt="Profile image"
          />
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          About
        </Heading>
        <Paragraph>
          Ruby on Rails が好きなフリーランスのエンジニア、個人開発者。プロダクトの開発が好きで、日々何を作ろうか考えたり、作ったりしている。最近は、暗号通貨やNFTに関心がある。
        </Paragraph>
        <Box align="center" my={8}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              My portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          My History
        </Heading>
        <BioSection>
          <BioYear>1995</BioYear>
          愛知県・岡崎市生まれ
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          大学卒業
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          BEENOS inc.
        </BioSection>
        <BioSection>
          <BioYear>2018</BioYear>
          CAMPFIRE inc.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          Freelance
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I Like ♥
        </Heading>
        <Paragraph>
          個人開発、囲碁(五段)、
          <Link href="https://www.youtube.com/watch?v=7-InFoUHtO8" target="_blank">
            ピアノ
          </Link>
          、ポーカー、格闘技の観戦 (RIZIN)、自然
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Links
        </Heading>
        <List>
          <ListItem>
            <Link href="https://twitter.com/hassasa3" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoLogoTwitter} />}
              >
                Twitter
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/yuta17" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                GitHub
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://note.com/usabdelah" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoDocumentOutline} />}
              >
                note
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://zenn.dev/hassan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoDocumentOutline} />}
              >
                zenn
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://qiita.com/Hassan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoDocumentOutline} />}
              >
                Qiita
              </Button>
            </Link>
          </ListItem>
                    <ListItem>
            <Link href="https://sizu.me/hassan" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<Icon as={IoDocumentOutline} />}
              >
                しずかなインターネット
              </Button>
            </Link>
          </ListItem>
        </List>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="https://klow.app"
            title="Klow"
            thumbnail={thumbKlow}
          >
            フリーランス・副業のための勤怠管理サービス
          </GridItem>
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
