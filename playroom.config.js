const path = require('path');

module.exports = {
  components: './src/core/index.ts',
  frameComponent: './src/playroom/frame.ts',
  outputPath: './dist',
  webpackConfig: () => ({
    module: {
      rules: [
        {
          test: /\.(js|ts|tsx)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cwd: path.join(__dirname, '../..'),
              configFile: path.resolve(
                __dirname,
                './node_modules/playroom/.babelrc',
              ),
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.web.js', '.mjs', '.js', '.json', '.ts', '.tsx'],
      modules: [path.resolve(__dirname, './node_modules'), 'node_modules'],
    },
  }),
  exampleCode: `
    <Alert>alert</Alert>
    <Anchor href="https://www.google.com/">anchor</Anchor>
    <Badge>badge</Badge>
    <Badge appearance="minimal">badge</Badge>
    <Box>box</Box>
    <Button>button</Button>
    <Button outlined="true">button</Button>
    <Button appearance="minimal">button</Button>
    <Button appearance="minimal" outlined>
      button
    </Button>
    <Checkbox />
    <Container>container</Container>
    <DialogGroup title="dialog">
      <DialogContent>
        dialog content
        <DialogClose>close</DialogClose>
      </DialogContent>
    </DialogGroup>
    <DisclosureGroup title="disclosure">
      disclosure content
    </DisclosureGroup>
    <Footer>footer</Footer>
    <Footer position="end">footer</Footer>
    <Header>header</Header>
    <Icon />
    <Image src="https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" width="60px" height="60px" />
    <ImageDescription src="https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" width="60px" height="60px" description="image description" />
    <Label htmlFor="firstName">label</Label>
    <Input type="text" id="firstName" css={{ marginBottom: 5 }} />
    <InputIcon icon="help-circle" iconLabe="Help circle" css={{ marginBottom: 5 }} />
    <InputPassword css={{ marginBottom: 5 }} />
    <MenuGroup title="menu">
      <MenuContent>
        <MenuItem>menu item 1</MenuItem>
        <MenuItem>menu item 2</MenuItem>
      </MenuContent>
    </MenuGroup>
    <RadioGroup>
      <RadioItem />
      <RadioItem />
      <RadioItem />
    </RadioGroup>
    <Separator />
    <Switch />
    <H1>heading 1</H1>
    <H1 appearance="muted">heading 1</H1>
    <H1 appearance="primary">heading 1</H1>
    <H1 appearance="positive">heading 1</H1>
    <H1 appearance="negative">heading 1</H1>
    <H2>heading 2</H2>
    <H2 appearance="muted">heading 1</H2>
    <H2 appearance="primary">heading 1</H2>
    <H2 appearance="positive">heading 1</H2>
    <H2 appearance="negative">heading 1</H2>
    <H3>heading 3</H3>
    <H3 appearance="muted">heading 1</H3>
    <H3 appearance="primary">heading 1</H3>
    <H3 appearance="positive">heading 1</H3>
    <H3 appearance="negative">heading 1</H3>
    <H4>heading 4</H4>
    <H4 appearance="muted">heading 1</H4>
    <H4 appearance="primary">heading 1</H4>
    <H4 appearance="positive">heading 1</H4>
    <H4 appearance="negative">heading 1</H4>
    <H5>heading 5</H5>
    <H5 appearance="muted">heading 1</H5>
    <H5 appearance="primary">heading 1</H5>
    <H5 appearance="positive">heading 1</H5>
    <H5 appearance="negative">heading 1</H5>
    <Paragraph>paragraph</Paragraph>
    <Paragraph appearance="muted">paragraph</Paragraph>
    <Paragraph appearance="primary">paragraph</Paragraph>
    <Paragraph appearance="positive">paragraph</Paragraph>
    <Paragraph appearance="negative">paragraph</Paragraph>
    <Text>text</Text>
    <Text appearance="muted">text</Text>
    <Text appearance="primary">text</Text>
    <Text appearance="positive">text</Text>
    <Text appearance="negative">text</Text>    
  `,
};
