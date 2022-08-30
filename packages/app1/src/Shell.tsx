import { AppShell, Navbar, Header, Center, Stack, Card, Image, Group, Text, Button, Badge, Title } from '@mantine/core';

type Props = {
  children?: React.ReactNode
}

const Shell: React.FC = ({ children }: Props) => {

  const ExampleCard = () => {
    return (
      <Card shadow="sm" p="md" radius="md" withBorder>
        <Card.Section>
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="pink" variant="light">
            On Sale
          </Badge>
        </Group>

        <Text size="sm" color="dimmed">
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
          Book classic tour now
        </Button>
      </Card>
    )
  }

  return (
    <>
      <Header
        height="auto"
        p="xs"
        styles={(theme) => ({
          main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] }
        })}
      >
        <Center>
          <Title variant='gradient'gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
            App1
          </Title>
        </Center>
      </Header>
      <Stack
        align='center'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          height: "100vh",
          width: "100%"
        })}
      >
        {children}
        <ExampleCard />
        <ExampleCard />
      </Stack>
    </>
  );
}

export default Shell