
import { ServerStyleSheet } from 'styled-components';
import Document, {DocumentContext} from 'next/document';

/*export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}*/

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext){
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try{
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp:(App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })
    

    const initialProps = await Document.getInitialProps(ctx)

    return{
      ...initialProps,
      styles: [
        initialProps.styles,
        sheet.getStyleElement()
      ],
    }
  }finally{
    sheet.seal()
  }
  }
}
