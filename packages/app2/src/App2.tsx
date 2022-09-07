import {
  Button,
  Card,
  Center,
  Header,
  Stack,
  Title,
  Image,
  Text,
  Group,
  Badge,
} from '@mantine/core'

import ExampleCard from "./components/ExampleCard"

type Props = {
  standalone?: boolean
}

const App2: React.FC<Props> = ({ standalone }: Props) => {
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
              gradient={{ from: 'red', to: 'yellow', deg: 45 }}
            >
              App2
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
      </Stack>
    </div>
  )
}

export default App2
