import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Klow">
    <Container my={4}>
      <Title>
        Klow <Badge>2020-</Badge>
      </Title>
      <P>
        フリーランス・副業のための勤怠管理サービス。
      </P>
      <List ml={4} my={8}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://klow.app">
            https://klow.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Google Chrome / Safari</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Rails6 / Nuxt.js / TypeScript / Heroku</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="https://note.com/klow/n/n9adef6c43264">
            業務委託エンジニアの作業報告書を紹介します
          </Link>
        </ListItem>
      </List>

      <WorkImage src="/images/works/klow.webp" alt="klow" />
    </Container>
  </Layout>
)

export default Work
