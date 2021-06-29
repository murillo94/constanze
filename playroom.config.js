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
    <Box>box</Box>
    <Button>button</Button>
    <Text>text</Text>
    <Paragraph>paragraph</Paragraph>
    <H1>heading 1</H1>
    <H2>heading 2</H2>
    <H3>heading 3</H3>
    <H4>heading 4</H4>
    <H5>heading 5</H5>
    <Label htmlFor="firstName">label</Label>
    <Input type="text" id="firstName" css={{ marginBottom: 5 }} />
    <InputIcon css={{ marginBottom: 5 }} />
    <InputPassword css={{ marginBottom: 5 }} />
    <Checkbox />
    <RadioGroup>
      <Radio />
      <Radio />
      <Radio />
    </RadioGroup>
    <Switch />
    <Badge>badge</Badge>
    <Anchor href="https://www.google.com/">anchor</Anchor>
    <Image src="https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" width="60px" height="60px" />
    <ImageDescription src="https://media-exp3.licdn.com/dms/image/C560BAQHMnA03XDdf3w/company-logo_200_200/0/1519855918965?e=2159024400&v=beta&t=CrP5Le1mWICRcaxIGNBuajHcHGFPuyNA5C8DI339lSk" width="60px" height="60px" description="image description" />
    <Icon />
    <Header>header</Header>
    <Footer>footer</Footer>
    <Alert>alert</Alert>
  `,
};
