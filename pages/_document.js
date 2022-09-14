import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body className="min-h-screen">
          <div className="IE-notsupported">
            <img src="data:image/svg+xml,%3Csvg id='Layer_1' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 79.44 78.02'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M98.42,60.51A35.6,35.6,0,0,0,94,43.21c12.13-27.47-13-23.44-14.41-23.16a64,64,0,0,0-14.8,4.83c-.67,0-1.34-.05-2-.05a35.72,35.72,0,0,0-34.8,27.69c8.94-10,15.2-14.08,18.95-15.7-.6.54-1.19,1.08-1.76,1.62l-.57.55-1.13,1.1-.65.66-1,1-.67.72c-.3.32-.6.64-.89,1l-.67.75-.82.93-.67.78c-.26.3-.51.61-.76.91l-.66.8-.69.87c-.22.28-.45.56-.66.84l-.61.79L34,51l-.47.64q-2.12,2.9-3.86,5.63h0c-.31.48-.6,1-.89,1.41l-.05.08-.84,1.38,0,.05c-.74,1.23-1.42,2.41-2,3.52A80.25,80.25,0,0,0,21,73.87c-10.15,36.3,21.54,21,26,18.68a35.68,35.68,0,0,0,15.79,3.82,36.16,36.16,0,0,0,33.65-23.6H77.61a16.83,16.83,0,0,1-14.26,7.7c-9,0-16.29-7.06-16.29-15.38H98.13A33.73,33.73,0,0,0,98.42,60.51Zm-72,32c-2.51-2.57-3-8.83,2.58-20.22a35.83,35.83,0,0,0,15.54,19C41,93.23,31.47,97.66,26.42,92.48ZM47,55.5c.28-8.31,7.39-14.71,16.13-14.71S79,47.19,79.25,55.5ZM75.62,27.23c3.31-1.59,11.49-5,16.13-1.83,3.07,2.07,5.54,5.33,1.31,16.3A35.91,35.91,0,0,0,75.62,27.23Z' transform='translate(-18.98 -19.69)'/%3E%3C/svg%3E" />
            <div>
              <h4>Namizna aplikacija Internet Explorer odhaja v pokoj</h4>
              <p>Zagotovite si nemoten vstop v svet aktualnih novic in jo nadomestite z najnovejšo verzijo <b>Chromea, Firefoxa, Safarija ali Microsoft Edgea.</b></p>
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
