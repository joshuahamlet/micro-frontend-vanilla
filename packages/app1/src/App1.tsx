import { Center, Header, Stack, Title } from '@mantine/core'
import { useEffect } from 'react'
import { useQuery } from 'react-query'

import ExampleCard from './components/ExampleCard'
import { contentfulClient } from './contentful'

type Props = {
  standalone?: boolean
}

const App1: React.FC<Props> = ({ standalone }: Props) => {
  const fetchContentful = async () => {
    const res = await contentfulClient.getEntries({ content_type: 'product' })
    return res
  }

  const { data, isLoading, isError } = useQuery(
    'contentful-data',
    fetchContentful
  )

  useEffect(() => {
    console.log(data)
  }, [data])

  return (
    <div>
      {standalone && (
        <Header
          height="auto"
          p="xs"
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
        >
          <Center>
            <Title
              variant="gradient"
              gradient={{ from: 'red', to: 'cyan', deg: 45 }}
            >
              App1
            </Title>
          </Center>
        </Header>
      )}
      <Stack
        align="center"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
          height: standalone ? '100vh' : '100%',
          width: '100%',
        })}
      >
        <ExampleCard />
        <ExampleCard />
        {isLoading && <div>Loading...</div>}
        {!isLoading &&
          data?.items.map((item) => (
            <div key={item.sys.id}>{item.fields.name}</div>
          ))}
      </Stack>
    </div>
  )
}

export default App1
